export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-grid" style={{ background: 'var(--background)' }}>
      {/* Hero */}
      <section id="hero" className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--text-secondary)]">Technology — Hero</p>
        </div>
      </section>

      {/* Tech Metrics */}
      <section id="metrics">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[var(--text-secondary)]">Tech Metrics Bar</p>
        </div>
      </section>

      {/* AI Agent Cards */}
      <section id="agents">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-[var(--text-secondary)]">AI Agent Cards — 2×2 Grid</p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-[var(--text-secondary)]">CTA Section</p>
        </div>
      </section>
    </main>
  )
}
