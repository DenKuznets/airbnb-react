import './Hero.css'
// import heroImageUrl from '../assets/group.png'

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--img" src='../public/assets/group.png' alt="random pictures" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className='hero--text'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}