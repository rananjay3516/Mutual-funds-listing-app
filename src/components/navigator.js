import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import ListingPage from "../screens/listing";
import LoginPage from "../screens/login";
import SignUpPage from "../screens/signUp";
import UserProfilePage from "../screens/userProfile";
import Fund1DetailsPage from "../screens/fund1Details";
import Fund2DetailsPage from "../screens/fund2Details";
import Fund3DetailsPage from "../screens/fund3Details";
import Fund4DetailsPage from "../screens/fund4Details";
import Fund5DetailsPage from "../screens/fund5Details";


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
          name="Fund 1 Details"
          component={Fund1DetailsPage}
          options={{ title: "Fund 1 Details" }}
        />
        <Stack.Screen
          name="Fund 2 Details"
          component={Fund2DetailsPage}
          options={{ title: "Fund 2 Details" }}
        />
        <Stack.Screen
          name="Fund 3 Details"
          component={Fund3DetailsPage}
          options={{ title: "Fund 3 Details" }}
        />
        <Stack.Screen
          name="Fund 4 Details"
          component={Fund4DetailsPage}
          options={{ title: "Fund 4 Details" }}
        />
        <Stack.Screen
          name="Fund 5 Details"
          component={Fund5DetailsPage}
          options={{ title: "Fund 5 Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
