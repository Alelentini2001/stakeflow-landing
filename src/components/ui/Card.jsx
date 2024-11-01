import { cn } from '../../utils/cn';

export function Card({ children, className = '' }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-700 bg-gray-800/50 p-6',
        className
      )}
    >
      {children}
    </div>
  );
}
