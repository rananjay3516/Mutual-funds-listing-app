import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function FundDetailsPage() {
  const [isLoading, setLoading] = useState(true);

  //get fund 5
  const [fundData5, setFundData5] = useState([]);
  const [fundMeta5, setFundMeta5] = useState([]);
  const getFund5 = async () => {
    try {
      const response = await fetch("https://api.mfapi.in/mf/100262");
      const json = await response.json();
      setFundData5(json.data);
      setFundMeta5(json.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFund5();
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <Text>{fundMeta5.scheme_name}</Text>
        <Text>{fundMeta5.fund_house}</Text>
        <Text>{fundMeta5.scheme_type}</Text>
        <Text>{fundMeta5.scheme_category}</Text>
        <Text>{fundMeta5.scheme_code}</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            // set to variable fund
            data={fundData5}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>
                {item.date}, {item.nav}
              </Text>
            )}
          />
        )}
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
  userList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
