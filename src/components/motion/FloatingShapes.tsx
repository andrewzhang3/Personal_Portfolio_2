import { generateShapes } from '../../helpers/shapes';
import { FloatingShape } from './FloatingShape';

export function FloatingShapes() {
  const shapes = generateShapes(6);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <FloatingShape key={shape.id} {...shape} />
      ))}
    </div>
  );
}