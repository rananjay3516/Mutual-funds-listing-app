import { StatusBar } from "expo-status-bar";

//navigation setup
import Navigator from "./src/components/navigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <Navigator />
    </>
  );
}
