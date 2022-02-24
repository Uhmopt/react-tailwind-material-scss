import { Provider } from "react-redux";
import Root from "routes";
import store from "store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
