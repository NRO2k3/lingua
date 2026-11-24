import confetti from 'canvas-confetti';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Pháo giấy khi hoàn thành bài: hai luồng bắn từ hai bên
export function celebrate() {
  if (reduced()) return;
  const colors = ['#1677ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'];
  const end = Date.now() + 900;
  (function frame() {
    confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0, y: 0.75 }, colors, zIndex: 2000 });
    confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1, y: 0.75 }, colors, zIndex: 2000 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Một chùm nhỏ (đạt mục tiêu ngày, nói đúng 100%)
export function sparkle(x = 0.5, y = 0.4) {
  if (reduced()) return;
  confetti({ particleCount: 40, spread: 70, startVelocity: 28, scalar: 0.8, origin: { x, y }, zIndex: 2000 });
}
