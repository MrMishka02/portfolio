import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
