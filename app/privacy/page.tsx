import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Supersonic Supply',
  description: 'Privacy Policy for Supersonic Supply (Supersonic Brick LLC).',
}

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <section className="max-w-2xl mx-auto px-6 py-32">

        {/* Overline */}
        <p
          className="uppercase font-medium mb-6"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          Legal
        </p>

        {/* Title */}
        <h1
          className="font-bold mb-6"
          style={{
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: '#FFFFFF',
          }}
        >
          Privacy Policy
        </h1>

        {/* Status notice */}
        <div
          className="rounded-xl px-6 py-5 mb-10"
          style={{
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.18)',
          }}
        >
          <p
            className="font-medium mb-1"
            style={{ fontSize: 'var(--text-body-sm)', color: '#93C5FD' }}
          >
            This page is being prepared.
          </p>
          <p
            style={{ fontSize: 'var(--text-body-sm)', color: '#94A3B8', lineHeight: 'var(--leading-body)' }}
          >
            Our Privacy Policy is currently under legal review and will be published prior to launch.
            For any privacy-related inquiries in the meantime, please contact us directly.
          </p>
        </div>

        {/* Contact */}
        <p style={{ fontSize: 'var(--text-body-sm)', color: '#CBD5E1', lineHeight: 'var(--leading-body)' }}>
          Questions? Reach us at{' '}
          <a
            href="mailto:ai@supersonicbrick.com"
            style={{ color: '#60A5FA' }}
          >
            ai@supersonicbrick.com
          </a>
        </p>

        {/* Back */}
        <div className="mt-12">
          <Link
            href="/"
            style={{ fontSize: 'var(--text-body-sm)', color: '#94A3B8' }}
          >
            ← Back to home
          </Link>
        </div>

      </section>
    </main>
  )
}
