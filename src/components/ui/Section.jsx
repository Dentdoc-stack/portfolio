const Section = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`section-container ${className}`}>
      {children}
    </section>
  );
};

export default Section;
