import Info from "./components/Info";
import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Landing from "./pages/Landing";
import Sales from "./pages/Sales";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <Info />
      <Sales />
      <Services />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
