import About from "./components/About";
import Commands from "./components/Commands";
import Config from "./components/Config";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Permissions from "./components/Permissions";
import Placeholders from "./components/Placeholders";
import Requirements from "./components/Requirements";
import Supports from "./components/Supports";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden gap-56 mb-52">
      <Header />
      <div className="flex flex-col gap-36">
        <About />
        <Features />
        <Supports />
        {/* <Commands />
        <Permissions />
        <Placeholders /> */}
        <Requirements />
        {/* <Config /> */}
        <Contact />
      </div>
    </div>
  );
};

export default App;
