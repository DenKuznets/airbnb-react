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
        key={obj.id}
        {...obj}
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
