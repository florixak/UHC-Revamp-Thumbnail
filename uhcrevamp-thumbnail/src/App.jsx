import About from "./components/About";
import Commands from "./components/Commands";
import Config from "./components/Config";
import Contact from "./components/Contact";
import DialogBasicOne from "./components/DialogBasicOne";
import Features from "./components/Features";
import Header from "./components/Header";
import Permissions from "./components/Permissions";
import Placeholders from "./components/Placeholders";
import Requirements from "./components/Requirements";
import Supports from "./components/Supports";

const App = () => {
  return (
    <div className="h-screen flex flex-col mx-[400px] gap-28">
      <DialogBasicOne />
      <Header />
      <About />
      <Features />
      <Supports />
      <Commands />
      <Permissions />
      <Placeholders />
      <Requirements />
      <Config />
      <Contact />
    </div>
  );
};

export default App;
