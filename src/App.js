import SlideNav from "./components/SlideNav";
import appStore from "./components/utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <SlideNav />
      </Provider>
    </div>
  );
}

export default App;
