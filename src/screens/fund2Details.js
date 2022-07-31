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


  //get fund 2
  const [fundData2, setFundData2] = useState([]);
  const [fundMeta2, setFundMeta2] = useState([]);
  const getFund2 = async () => {
    try {
      const response = await fetch("https://api.mfapi.in/mf/100350");
      const json = await response.json();
      setFundData2(json.data);
      setFundMeta2(json.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFund2();
  }, []);

  
  return (
    <View>
      <View style={styles.container}>
        <Text>{fundMeta2.scheme_name}</Text>
        <Text>{fundMeta2.fund_house}</Text>
        <Text>{fundMeta2.scheme_type}</Text>
        <Text>{fundMeta2.scheme_category}</Text>
        <Text>{fundMeta2.scheme_code}</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            // set to variable fund
            data={fundData2}
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
