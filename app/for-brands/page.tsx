export default function ForBrandsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero */}
      <section id="hero" className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--text-secondary)]">For Brands — Hero</p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-[var(--text-secondary)]">Services Grid — 6 Cards</p>
        </div>
      </section>

      {/* Brand Protection Stats */}
      <section id="brand-protection">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[var(--text-secondary)]">Brand Protection Stats</p>
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
