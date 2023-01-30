import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  console.log(data);
  const cards = data.map((obj) => {
    return (
      <Card
        img={obj.coverImg}
        rating={obj.stats.rating}
        reviewCount={obj.stats.reviewCount}
        location={obj.location}
        title={obj.title}
        price={obj.price}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="cards-list">{cards}</div>
    </div>
  );
}

export default App;
