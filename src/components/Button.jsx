import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'outline-cream',
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = `
    inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase
    px-7 py-3.5 transition-all duration-300 cursor-pointer
    ${fullWidth ? 'w-full text-center' : ''}
    ${className}
  `;

  const variants = {
    'outline-cream': 'border border-brandCream text-brandCream hover:bg-brandCream hover:text-brandOlive',
    'outline-olive': 'border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream',
    'filled-olive': 'bg-brandOlive text-brandCream hover:bg-brandOlive/80',
    'outline-brass': 'border border-brandBrass text-brandBrass hover:bg-brandBrass hover:text-charcoal',
    'filled-cream': 'bg-brandCream text-brandOlive hover:bg-brandCream/90',
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  const inner = (
    <motion.span
      className={classes}
      whileHover={{ letterSpacing: '0.25em' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href}>{inner}</a>;
  return <button onClick={onClick}>{inner}</button>;
};

export default Button;
