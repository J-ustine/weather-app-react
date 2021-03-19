import "./App.css";
import Container from "./Container";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container defaultCity="Marseille" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
