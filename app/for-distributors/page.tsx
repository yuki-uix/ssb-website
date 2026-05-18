export default function ForDistributorsPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'var(--background)' }}
    >
      <p
        className="uppercase font-medium mb-4"
        style={{
          fontSize: 'var(--text-overline)',
          letterSpacing: 'var(--tracking-overline)',
          color: '#94A3B8',
        }}
      >
        For Distributors
      </p>
      <h1
        className="font-bold mb-4"
        style={{
          fontSize: 'var(--text-h1)',
          color: '#FFFFFF',
          lineHeight: 'var(--leading-h1)',
          letterSpacing: 'var(--tracking-h1)',
        }}
      >
        Expand Your Network.<br />Own the Last Mile.
      </h1>
      <p style={{ fontSize: 'var(--text-body)', color: '#94A3B8', maxWidth: '440px' }}>
        This page is coming soon. In the meantime, reach us at{' '}
        <a
          href="mailto:ai@supersonicbrick.com"
          style={{ color: '#60A5FA', textDecoration: 'underline' }}
        >
          ai@supersonicbrick.com
        </a>
      </p>
    </main>
  )
}
