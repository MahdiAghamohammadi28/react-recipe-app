import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
