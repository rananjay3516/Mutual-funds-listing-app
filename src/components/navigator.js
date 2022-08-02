import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import ListingPage from "../screens/listing";
import LoginPage from "../screens/login";
import UserPage from "../screens/user";
import Fund1DetailsPage from "../screens/fund1Details";
import Fund2DetailsPage from "../screens/fund2Details";
import Fund3DetailsPage from "../screens/fund3Details";
import Fund4DetailsPage from "../screens/fund4Details";
import Fund5DetailsPage from "../screens/fund5Details";

// import styles
import { GlobalStyles } from "../constants/styles";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary1 },
          headerTintColor: GlobalStyles.colors.secondary2,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Login/Sign Up" }}
        />
        <Stack.Screen
          name="User"
          component={UserPage}
          options={{ title: "User" }}
        />
        <Stack.Screen
          name="Listing"
          component={ListingPage}
          options={{ title: "Listing" }}
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
