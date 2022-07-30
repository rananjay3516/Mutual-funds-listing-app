import { StatusBar } from "expo-status-bar";

//navigation setup
import Navigator from "./src/screens/Navigator";

export default function App() {
  return (
    <>
    <Navigator />
    <StatusBar style="auto" />
    </>
  );
}
