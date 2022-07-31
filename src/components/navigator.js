import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import FundDetailsPage from "../screens/fundDetails";
import ListingPage from "../screens/listing";
import LoginPage from "../screens/login";
import SignUpPage from "../screens/signUp";
import UserProfilePage from "../screens/userProfile";

const Stack = createNativeStackNavigator();

export default function Navigator() {
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
