import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Username</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Button title="LOGIN" onPress={() => navigation.navigate("Listing")} />
        <Button
          title="SIGN UP"
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function SignupPage({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Gender</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Date of Birth</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Button title="SIGN UP" onPress={() => navigation.navigate("Login")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ListingPage({navigation}) {
  return(
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search" />
      <Button title="My details" onPress={() => navigation.navigate("User")}/>
      {/* FlatList of funds */}
      <Button title="Fund details" onPress={() => navigation.navigate("Fund Details")}/>
      <StatusBar style="auto" />
    </View>
  )
}

function UserDetailsPage({navigation}) {
  return(
    <View style={styles.container}>
      <View>
        <Text>Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Gender</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Date of Birth</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Button title="Save" onPress={() => navigation.navigate("Listing")} />
        <Button title="Logout" onPress={() => navigation.navigate("Login")} />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
function FundDetailsPage() {
  return(
    <View style={styles.container}>
      <Text>DETAILS</Text>
      <StatusBar style="auto" />
    </View>
  )
}


const Stack = createNativeStackNavigator();

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
          component={SignupPage}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Listing"
          component={ListingPage}
          options={{ title: "Listing" }}
        />
        <Stack.Screen
          name="User"
          component={UserDetailsPage}
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
