import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <section>Project1</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
