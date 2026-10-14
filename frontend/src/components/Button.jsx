export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 active:scale-95 focus:outline-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5 shadow-md'
  };

  const variantStyles = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-500/20 disabled:opacity-50',
    secondary: 'bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-100 disabled:opacity-50',
    outline: 'border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50',
    ghost: 'text-slate-600 hover:text-orange-600 hover:bg-orange-50/50'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}
