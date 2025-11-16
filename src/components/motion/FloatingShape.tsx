import { motion } from 'motion/react';
import type { ShapeData } from '../../helpers/shapes';

const shapeStyles = {
  circle: 'rounded-full',
  square: 'rounded-lg',
  triangle: 'triangle-shape',
};

export function FloatingShape({ 
  type, 
  size, 
  color, 
  x, 
  y, 
  duration, 
  delay 
}: ShapeData) {
  return (
    <motion.div
      className="absolute"
      style={{
        opacity: 0,
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      animate={{
        opacity: 1,
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: type === 'square' ? [0, 90, 0] : [0, 360, 0],
      }}
      transition={{
        opacity: { duration: 2, delay: delay * 0.3 },
        y: { duration, repeat: Infinity, ease: 'easeInOut', delay },
        x: { duration, repeat: Infinity, ease: 'easeInOut', delay },
        rotate: { duration, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    >
      <div
        className={`w-full h-full ${shapeStyles[type]}`}
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}