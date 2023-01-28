import './Navbar.css'
import logoUrl from '../assets/airbnb1-logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoUrl} alt='airbnb logo' />
    </nav>
  )
}