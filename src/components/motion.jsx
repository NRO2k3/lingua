import { useEffect, useRef, useState } from 'react';
import { animate, motion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

// Danh sách xuất hiện lần lượt
const container = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } }
};

export function Stagger({ children, className, style, as = 'div' }) {
  const M = motion[as];
  return <M className={className} style={style} variants={container} initial="hidden" animate="show">{children}</M>;
}
export function Item({ children, className, style, as = 'div' }) {
  const M = motion[as];
  return <M className={className} style={style} variants={item}>{children}</M>;
}

// Hiện dần + trượt nhẹ (dùng cho khối đơn lẻ)
export function FadeIn({ children, delay = 0, y = 12, className, style }) {
  return (
    <motion.div className={className} style={style} initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

// Số chạy từ giá trị cũ tới giá trị mới
export function CountUp({ value, duration = 0.8, format = v => v }) {
  const [shown, setShown] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    const from = prev.current;
    prev.current = value;
    if (from === value) return;
    const c = animate(from, value, { duration, ease: EASE, onUpdate: v => setShown(Math.round(v)) });
    return () => c.stop();
  }, [value]);
  return <>{format(shown)}</>;
}

// Số chạy từ 0 khi xuất hiện
export function CountFromZero({ value, duration = 1, delay = 0.2, format = v => v }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const c = animate(0, value, { duration, delay, ease: EASE, onUpdate: v => setShown(Math.round(v)) });
    return () => c.stop();
  }, [value]);
  return <>{format(shown)}</>;
}
