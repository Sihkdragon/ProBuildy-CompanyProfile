import Home from "./components/organisms/Home";
import Services from "./components/organisms/Services";
import Works from "./components/organisms/Works";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <main className="relative bg-light">
      <Home />
      <Works />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
