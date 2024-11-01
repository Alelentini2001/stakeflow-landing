import { cn } from '../../utils/cn.js';

export function Badge({ children, className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm',
        className
      )}
    >
      {children}
    </span>
  );
}
