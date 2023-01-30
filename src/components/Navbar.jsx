import './Navbar.css'
// import logoUrl from '../assets/airbnb1-logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="nav--logo"
        src="../public//assets/airbnb1-logo.png"
        alt="airbnb logo"
      />
    </nav>
  );
}