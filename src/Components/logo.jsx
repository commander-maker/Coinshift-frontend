import './logo.css'
import logoIcon from '../assets/logo_icon.png'

function Logo({ size = 56, showText = true, className = '' }) {
  return (
    <div className={`coinshift-logo ${className}`.trim()}>
      <img
        className="coinshift-logo__mark"
        src={logoIcon}
        alt="CoinShift logo"
        width={size}
        height={size}
        aria-hidden="false"
      />

      {showText ? <span className="coinshift-logo__text">CoinShift</span> : null}
    </div>
  )
}

export default Logo