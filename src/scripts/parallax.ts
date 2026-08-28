const roots = document.querySelectorAll<HTMLElement>('[data-parallax-root]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

interface LayerState {
  element: HTMLElement;
  depth: number;
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
}

for (const root of roots) {
  if (reduceMotion.matches) continue;

  const layers: LayerState[] = [...root.querySelectorAll<HTMLElement>('[data-parallax]')].map(
    (element) => ({
      element,
      depth: Number(element.dataset.depth ?? 0),
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
    }),
  );

  let pointerX = 0;
  let pointerY = 0;
  let frame = 0;

  const updateTargets = () => {
    const rect = root.getBoundingClientRect();
    const scale = Math.max(0.7, window.innerWidth / 1440);
    const viewportCenter = window.innerHeight / 2;
    const rootCenter = rect.top + rect.height / 2;
    const scrollInfluence = Math.max(-1, Math.min(1, (viewportCenter - rootCenter) / window.innerHeight));

    for (const layer of layers) {
      const amount = layer.depth * scale;
      layer.targetX = pointerX * amount;
      layer.targetY = pointerY * amount * 0.55 + scrollInfluence * amount * 0.82;
    }

    if (!frame) frame = window.requestAnimationFrame(render);
  };

  const render = () => {
    let moving = false;

    for (const layer of layers) {
      layer.currentX += (layer.targetX - layer.currentX) * 0.075;
      layer.currentY += (layer.targetY - layer.currentY) * 0.075;
      layer.element.style.transform = `translate3d(${layer.currentX.toFixed(2)}px, ${layer.currentY.toFixed(2)}px, 0)`;

      if (
        Math.abs(layer.targetX - layer.currentX) > 0.05 ||
        Math.abs(layer.targetY - layer.currentY) > 0.05
      ) {
        moving = true;
      }
    }

    frame = moving ? window.requestAnimationFrame(render) : 0;
  };

  root.addEventListener('pointermove', (event) => {
    const rect = root.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    updateTargets();
  });

  root.addEventListener('pointerleave', () => {
    pointerX = 0;
    pointerY = 0;
    updateTargets();
  });

  window.addEventListener('scroll', updateTargets, { passive: true });
  window.addEventListener('resize', updateTargets, { passive: true });
  updateTargets();
}

