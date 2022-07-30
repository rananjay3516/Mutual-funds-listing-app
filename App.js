import { StatusBar } from "expo-status-bar";

//navigation setup
import Navigator from "./src/screens/Navigator";

// redux store
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}
