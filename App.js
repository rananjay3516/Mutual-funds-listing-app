import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import custom components
import FundDetailsPage from "./components/FundDetailsPage";
import ListingPage from "./components/ListingPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import UserProfilePage from "./components/UserProfilePage";

const Stack = createNativeStackNavigator();

// navigation setup
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Login/Sign Up" }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpPage}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Listing"
          component={ListingPage}
          options={{ title: "Listing" }}
        />
        <Stack.Screen
          name="User"
          component={UserProfilePage}
          options={{ title: "User details" }}
        />
        <Stack.Screen
          name="Fund Details"
          component={FundDetailsPage}
          options={{ title: "Fund Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
