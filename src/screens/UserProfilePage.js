import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function UserProfilePage({ navigation }) {
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
          <Button title="Save" onPress={() => navigation.navigate("Listing")} />
        </View>
        
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