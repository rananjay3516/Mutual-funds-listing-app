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

// import styles
import { GlobalStyles } from "../constants/styles";

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.fieldUser}>
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.input} />
      </View>
      
      <View style={styles.fieldPassword}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      
      <View>
        <Button
          title="SIGN UP"
          onPress={() => navigation.navigate("Sign Up")}
          color= {GlobalStyles.colors.secondary1}
        />
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary3,
    flex: 1,
  },
  fieldUser: {
    padding: 10,
  },
  fieldPassword: {
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'serif',
    color: GlobalStyles.colors.primary1,
  },
  input: {
    borderWidth: 1,
    height: 40,
  },
  
});
