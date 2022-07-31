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

  //get fund 4
  const [fundData4, setFundData4] = useState([]);
  const [fundMeta4, setFundMeta4] = useState([]);
  const getFund4 = async () => {
    try {
      const response = await fetch("https://api.mfapi.in/mf/100590");
      const json = await response.json();
      setFundData4(json.data);
      setFundMeta4(json.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFund4();
  }, []);

  
  return (
    <View>
      <View style={styles.container}>
        <Text>{fundMeta4.scheme_name}</Text>
        <Text>{fundMeta4.fund_house}</Text>
        <Text>{fundMeta4.scheme_type}</Text>
        <Text>{fundMeta4.scheme_category}</Text>
        <Text>{fundMeta4.scheme_code}</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            // set to variable fund
            data={fundData4}
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
