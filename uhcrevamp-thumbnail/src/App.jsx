import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Requirements from "./components/Requirements";
import Supports from "./components/Supports";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex flex-col">
        <About />
        <Features />
        <Supports />
        <Requirements />
      </div>
    </div>
  );
};

export default App;
