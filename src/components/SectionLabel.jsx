const SectionLabel = ({ children, light = false, className = '' }) => (
  <p
    className={`
      font-body text-[10px] font-semibold tracking-[0.3em] uppercase mb-4
      ${light ? 'text-brandBrass' : 'text-brandBrass'}
      ${className}
    `}
  >
    {children}
  </p>
);

export default SectionLabel;
