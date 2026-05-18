'use client'

export default function ContactPage() {
  return (
    <main style={{ background: 'var(--background)' }}>

      {/* ── Header ─────────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <p
          className="uppercase font-medium mb-4"
          style={{
            fontSize: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            color: '#94A3B8',
          }}
        >
          Get in Touch
        </p>
        <h1
          className="font-bold mb-6"
          style={{
            fontSize: 'var(--text-h1)',
            color: '#FFFFFF',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
          }}
        >
          Let&apos;s Build Your<br />Distribution Strategy.
        </h1>
        <p style={{ fontSize: 'var(--text-body)', color: '#CBD5E1', maxWidth: '440px', lineHeight: 'var(--leading-body)' }}>
          Have a question or ready to get started? Reach us directly at{' '}
          <a
            href="mailto:ai@supersonicbrick.com"
            style={{ color: '#60A5FA', textDecoration: 'underline' }}
          >
            ai@supersonicbrick.com
          </a>
          {' '}or fill out the form below.
        </p>
      </section>

      {/* ── Form ───────────────────────────────────────────────── */}
      <section
        id="form"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <div className="max-w-2xl mx-auto px-6 py-20">

          <p
            className="uppercase font-medium mb-3"
            style={{
              fontSize: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              color: '#94A3B8',
            }}
          >
            Request a Demo
          </p>
          <h2
            className="font-bold mb-10"
            style={{
              fontSize: 'var(--text-h2)',
              color: '#FFFFFF',
              lineHeight: 'var(--leading-h2)',
              letterSpacing: 'var(--tracking-h2)',
            }}
          >
            Tell us about your needs.
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            {/* Name + Company row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#3B82F6' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)' }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#3B82F6' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)' }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="jane@acmecorp.com"
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#3B82F6' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)' }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label style={labelStyle}>How can we help?</label>
              <textarea
                rows={5}
                placeholder="Tell us about your brand, product categories, and what you're looking to achieve..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#3B82F6' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{
                fontSize: 'var(--text-body-sm)',
                padding: '0.875rem 2.25rem',
                borderRadius: '0.875rem',
                background: 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Submit Request
            </button>
          </form>

        </div>
      </section>

    </main>
  )
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  fontSize: 'var(--text-label)',
  color: '#CBD5E1',
  fontWeight: 500,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.625rem',
  border: '1px solid rgba(255,255,255,0.10)',
  background: 'rgba(255,255,255,0.04)',
  color: '#FFFFFF',
  fontSize: 'var(--text-body)',
  outline: 'none',
  transition: 'border-color 0.15s ease',
}
