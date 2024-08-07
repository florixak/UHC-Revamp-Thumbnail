import About from "./components/About";
import Config from "./components/Config";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Requirements from "./components/Requirements";
import Supports from "./components/Supports";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden gap-32">
      <Header />
      <div className="flex flex-col gap-36">
        <About />
        <Features />
        <Supports />
        <Requirements />
        <Config />
        <Contact />
      </div>
    </div>
  );
};

export default App;
