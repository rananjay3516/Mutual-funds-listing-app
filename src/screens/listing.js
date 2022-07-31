import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";


export default function ListingPage({ navigation }) {
  const [isLoading, setLoading] = useState(true);

  // get fund 1
  const [fundData1, setFundData1] = useState([]);
  const [fundMeta1, setFundMeta1] = useState([]);
  const getFund1 = async () => {
    try {
      const response = await fetch("https://api.mfapi.in/mf/100122");
      const json = await response.json();
      setFundData1(json.data);
      setFundMeta1(json.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFund1();
  }, []);

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

  //get fund 3
  const [fundData3, setFundData3] = useState([]);
  const [fundMeta3, setFundMeta3] = useState([]);
  const getFund3 = async () => {
    try {
      const response = await fetch("https://api.mfapi.in/mf/100915");
      const json = await response.json();
      setFundData3(json.data);
      setFundMeta3(json.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFund3();
  }, []);

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

  const displayData = [
    {
      name: fundMeta1.scheme_name,
      fundHouse: fundMeta1.fund_house
    },
    {
      name: fundMeta2.scheme_name,
      fundHouse: fundMeta2.fund_house
    },
    {
      name: fundMeta3.scheme_name,
      fundHouse: fundMeta3.fund_house
    },
    {
      name: fundMeta4.scheme_name,
      fundHouse: fundMeta4.fund_house
    },
    {
      name: fundMeta5.scheme_name,
      fundHouse: fundMeta5.fund_house
    },
  ]

  return (
    <>
      <View>
      <Button
          title="My profile"
          onPress={() => navigation.navigate("User")}
        />
        <TextInput style={styles.input} placeholder="Search" />
        
        <View style={styles.userList}>
          <Text>Fund List</Text>
        </View>
        
      </View>

      <View style={styles.container}>
      <Text>{fundMeta1.scheme_name}</Text>
        <Text>{fundMeta1.fund_house}</Text>
        
    
        <Button
          title="Funds 1 details"
          onPress={() => navigation.navigate("Fund 1 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{fundMeta2.scheme_name}</Text>
        <Text>{fundMeta2.fund_house}</Text>
        
     
        <Button
          title="Funds 2 details"
          onPress={() => navigation.navigate("Fund 2 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{fundMeta3.scheme_name}</Text>
        <Text>{fundMeta3.fund_house}</Text>
        
     
        <Button
          title="Funds 3 details"
          onPress={() => navigation.navigate("Fund 3 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{fundMeta4.scheme_name}</Text>
        <Text>{fundMeta4.fund_house}</Text>
        
       
        <Button
          title="Funds 4 details"
          onPress={() => navigation.navigate("Fund 4 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{fundMeta5.scheme_name}</Text>
        <Text>{fundMeta5.fund_house}</Text>
        
     
        <Button
          title="Funds 5 details"
          onPress={() => navigation.navigate("Fund 5 Details")}
        />
      </View>

     
    </>
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
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    // padding: 10,
  },
  userList: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
