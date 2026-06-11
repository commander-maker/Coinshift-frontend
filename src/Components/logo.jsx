import './logo.css'

function Logo({ size = 56, showText = true, className = '' }) {
  return (
    <div className={`coinshift-logo ${className}`.trim()}>
      <svg
        className="coinshift-logo__mark"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="32" cy="32" r="27" fill="#0F62FE" />
        <circle cx="32" cy="32" r="18.5" fill="none" stroke="#ffffff" strokeWidth="7" />
        <path
          d="M28 20h8c6.6 0 12 5.4 12 12s-5.4 12-12 12h-9.2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 18l10.5 2.8-4.5 9.6"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText ? <span className="coinshift-logo__text">CoinShift</span> : null}
    </div>
  )
}

export default Logo