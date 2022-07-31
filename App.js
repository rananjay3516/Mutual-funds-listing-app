import { StatusBar } from "expo-status-bar";

//navigation setup
import Navigator from "./src/components/navigator";

// redux store
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}
