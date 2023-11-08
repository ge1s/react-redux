import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">{!isLoggedIn ? <Auth /> : <div>o pune</div>}</div>
  );
}

export default App;
