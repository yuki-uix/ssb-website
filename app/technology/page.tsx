import TechHero from '@/components/sections/TechHero'
import TechMetricsBar from '@/components/sections/TechMetricsBar'
import AIAgentCards from '@/components/sections/AIAgentCards'

export default function TechnologyPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <TechHero />

      {/* Tech Metrics */}
      <section id="metrics">
        <TechMetricsBar />
      </section>

      {/* AI Agent Cards */}
      <section id="agents">
        <AIAgentCards />
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
