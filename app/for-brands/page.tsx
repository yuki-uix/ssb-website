import ForBrandsHero from '@/components/sections/ForBrandsHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ForBrandsCTA from '@/components/sections/ForBrandsCTA'

export default function ForBrandsPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <ForBrandsHero />
      <ServicesGrid />
      <ForBrandsCTA />
    </main>
  )
}
