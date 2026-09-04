function SidebarSection({ title, badge, children, className = '' }) {
  return (
    <section className={`sidebar-section ${className}`}>
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        {badge && <span className="section-badge">{badge}</span>}
      </div>
      <div className="section-body">
        {children}
      </div>
    </section>
  );
}

export default SidebarSection;
