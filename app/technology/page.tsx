import TechHero from '@/components/sections/TechHero'
import TechMetricsBar from '@/components/sections/TechMetricsBar'
import AIAgentCards from '@/components/sections/AIAgentCards'
import TechCTA from '@/components/sections/TechCTA'

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
        <TechCTA />
      </section>
    </main>
  )
}
