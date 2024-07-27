import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./Page/Home";
import store from "./redux/configureStore";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
