
const buttonVariants = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
  primarySuble: "bg-primary-50 hover:bg-primary-100 text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
  secondary: "bg-secondary-500 hover:bg-secondary-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500",
  danger: "bg-danger-700 hover:bg-danger-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-danger-500",
  default: "bg-gray-300 hover:bg-gray-400 text-black",
  dark: "bg-neutral-700 hover:bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500",
};

export default function Button({ children, variant = 'primary', className, ...props }) {
  const variantClasses = buttonVariants[variant] || buttonVariants.primary;
  return (
    <button
      {...props}
      className={`${variantClasses} ${className} rounded-full px-4 py-2 `}
    >
      {children}
    </button>
  );
}
