export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <p className="text-[var(--text-secondary)]">Homepage — Hero</p>
        </div>
      </section>

      {/* Metrics Bar */}
      <section id="metrics">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[var(--text-secondary)]">Metrics Bar</p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="pillars">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-[var(--text-secondary)]">What Makes Us Different</p>
        </div>
      </section>

      {/* Partner Ticker */}
      <section id="partners">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[var(--text-secondary)]">Partner Ticker</p>
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
