import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
