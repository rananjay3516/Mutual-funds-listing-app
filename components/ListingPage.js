import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ListingPage({ navigation }) {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search" />
        <Button title="My profile" onPress={() => navigation.navigate("User")} />
        {/* FlatList of funds */}
        <Button
          title="Funds list"
          onPress={() => navigation.navigate("Fund Details")}
        />
        <StatusBar style="auto" />
      </View>
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