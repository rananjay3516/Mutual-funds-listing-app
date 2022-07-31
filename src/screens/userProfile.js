
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";

import UserForm from "../components/userForm";

export default function UserProfilePage({ navigation }) {
    return (
      <View style={styles.container}>
        <UserForm />
        <View>
          <Button title="Save" onPress={() => navigation.navigate("Listing")} />
        </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    // },
    // input: {
    //   height: 40,
    //   margin: 12,
    //   borderWidth: 1,
    //   padding: 10,
    // },
  });