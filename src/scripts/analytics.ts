type CaptureProperties = Record<string, boolean | number | string>;

interface PostHogClient {
  capture: (event: string, properties?: CaptureProperties) => void;
}

declare global {
  interface Window {
    posthog?: PostHogClient;
  }
}

const capture = (event: string, properties?: CaptureProperties) => {
  window.posthog?.capture(event, properties);
};

const projectCards = document.querySelectorAll<HTMLElement>('[data-analytics-project]');

for (const card of projectCards) {
  const project = card.dataset.analyticsProject ?? 'unknown';
  const properties = {
    project,
    status: card.dataset.status ?? 'unknown',
    size: card.dataset.analyticsProjectSize ?? 'unknown',
  };

  card.addEventListener('click', () => capture('project_clicked', properties));

  let visibleSince: number | null = null;
  let engagementTimer: number | undefined;
  let hasBeenSeen = false;
  let hasEngaged = false;

  const finishVisibleSegment = () => {
    window.clearTimeout(engagementTimer);

    if (visibleSince === null) return;

    const dwellMs = Math.round(performance.now() - visibleSince);
    visibleSince = null;

    if (dwellMs >= 1_000) {
      capture('project_dwell', { ...properties, dwell_ms: dwellMs });
    }
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting && entry.intersectionRatio >= 0.5) {
        if (visibleSince !== null) return;

        visibleSince = performance.now();

        if (!hasBeenSeen) {
          hasBeenSeen = true;
          capture('project_seen', properties);
        }

        if (!hasEngaged) {
          engagementTimer = window.setTimeout(() => {
            if (visibleSince === null) return;
            hasEngaged = true;
            capture('project_engaged', { ...properties, threshold_seconds: 3 });
          }, 3_000);
        }

        return;
      }

      finishVisibleSegment();
    },
    { threshold: [0, 0.5] },
  );

  observer.observe(card);
  window.addEventListener('pagehide', finishVisibleSegment, { once: true });
}

for (const contact of document.querySelectorAll<HTMLElement>('[data-analytics-contact]')) {
  contact.addEventListener('click', () => {
    capture('contact_clicked', {
      destination: contact.dataset.analyticsContact ?? 'unknown',
    });
  });
}

const reachedMilestones = new Set<number>();
let scrollFrame = 0;

const measureScrollDepth = () => {
  scrollFrame = 0;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const depth = scrollableHeight <= 0 ? 100 : (window.scrollY / scrollableHeight) * 100;

  for (const milestone of [25, 50, 75, 100]) {
    if (depth >= milestone && !reachedMilestones.has(milestone)) {
      reachedMilestones.add(milestone);
      capture('scroll_depth_reached', { percent: milestone });
    }
  }
};

window.addEventListener(
  'scroll',
  () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(measureScrollDepth);
  },
  { passive: true },
);

measureScrollDepth();

const footer = document.querySelector<HTMLElement>('.site-footer');

if (footer) {
  const footerObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry?.isIntersecting) return;
      capture('footer_reached');
      observer.disconnect();
    },
    { threshold: 0.25 },
  );

  footerObserver.observe(footer);
}

export {};
