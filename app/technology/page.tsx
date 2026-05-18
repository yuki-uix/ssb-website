import TechHero from '@/components/sections/technology/TechHero'
import TechMetricsBar from '@/components/sections/technology/TechMetricsBar'
import AIAgentCards from '@/components/sections/technology/AIAgentCards'
import TechCTA from '@/components/sections/technology/TechCTA'

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
