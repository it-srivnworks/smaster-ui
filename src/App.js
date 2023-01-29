import { Route, Routes } from "react-router-dom";
import "./App.css";
import LibraryHome from "./components/library/LibraryHome";
import Login from "./components/welcome/Login";
import NotFound from "./components/welcome/NotFound";
import Welcome from "./components/welcome/Welcome";

function App() {
  console.log("-App");
  return (
    <div>
        <Welcome></Welcome>
    </div>
  );
}

export default App;
