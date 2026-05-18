import ForBrandsHero from '@/components/sections/for-brands/ForBrandsHero'
import ServicesGrid from '@/components/sections/shared/ServicesGrid'
import ForBrandsCTA from '@/components/sections/for-brands/ForBrandsCTA'

export default function ForBrandsPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <ForBrandsHero />
      <ServicesGrid />
      <ForBrandsCTA />
    </main>
  )
}
