import { cn } from '../../utils/cn';

export function Button({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}) {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-md font-medium',
    'transition-colors focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  );

  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-600 hover:bg-gray-800',
    ghost: 'hover:bg-gray-800',
    link: 'text-blue-500 hover:underline',
  };

  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-8 text-lg',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
