import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import { Food } from "./components/Food";
import Catagory from "./components/Catagory";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food/>
      <Catagory/>
    </>
  );
}

export default App;
