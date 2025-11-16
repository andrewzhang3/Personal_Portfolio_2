export const SHAPE_CONFIG = {
  types: ['circle', 'square', 'triangle'] as const,
  colors: [
    'rgba(217, 119, 54, 0.1)', // accent
    'rgba(44, 55, 78, 0.05)',  // primary
    'rgba(217, 119, 54, 0.08)', // accent lighter
    'rgba(44, 55, 78, 0.04)',   // primary lighter
    'rgba(217, 119, 54, 0.06)', // accent even lighter
    'rgba(44, 55, 78, 0.03)',   // primary even lighter
  ],
  sizes: [100, 120, 150, 160, 180, 200],
};

export interface ShapeData {
  id: number;
  type: 'circle' | 'square' | 'triangle';
  size: number;
  color: string;
  x: string;
  y: string;
  duration: number;
  delay: number;
}

export const generateShapes = (count: number = 6): ShapeData[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: SHAPE_CONFIG.types[i % SHAPE_CONFIG.types.length],
    size: SHAPE_CONFIG.sizes[i % SHAPE_CONFIG.sizes.length],
    color: SHAPE_CONFIG.colors[i % SHAPE_CONFIG.colors.length],
    x: `${Math.random() * 80 + 10}%`,
    y: `${Math.random() * 80 + 10}%`,
    duration: 15 + Math.random() * 15,
    delay: i * 0.5,
  }));
};