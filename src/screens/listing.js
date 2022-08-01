import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React, { useEffect, useState } from "react";

// import styles
import { GlobalStyles } from "../constants/styles";

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
      id: "Fund 1 Details",
      fundName: fundMeta1.scheme_name,
      fundHouse: fundMeta1.fund_house,
    },
    {
      id: "Fund 2 Details",
      fundName: fundMeta2.scheme_name,
      fundHouse: fundMeta2.fund_house,
    },
    {
      id: "Fund 3 Details",
      fundName: fundMeta3.scheme_name,
      fundHouse: fundMeta3.fund_house,
    },
    {
      id: "Fund 4 Details",
      fundName: fundMeta4.scheme_name,
      fundHouse: fundMeta4.fund_house,
    },
    {
      id: "Fund 5 Details",
      fundName: fundMeta5.scheme_name,
      fundHouse: fundMeta5.fund_house,
    },
  ];

  function FundItem({ fundName, fundHouse, id }) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(id);
        }}
      >
        <View styles={styles.fundItem}>
          <Text
            style={{
              color: GlobalStyles.colors.secondary1,
              fontSize: 17,
              fontFamily: "serif",
            }}
          >
            Fund Name:
          </Text>
          <Text style={{ color: GlobalStyles.colors.primary1, fontSize: 18, fontFamily: "serif" }}>
            {fundName}
          </Text>
          <Text
            style={{
              color: GlobalStyles.colors.secondary1,
              fontSize: 17,
              fontFamily: "serif",
            }}
          >
            Fund House:
          </Text>
          <Text style={{ color: GlobalStyles.colors.primary1, fontSize: 18, fontFamily: "serif" }}>
            {fundHouse}
          </Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </Pressable>
    );
  }

  function renderFund(itemData) {
    return <FundItem {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Button
          title="My profile"
          onPress={() => navigation.navigate("User")}
          color={GlobalStyles.colors.secondary1}
        />
      </View>

      <View style={styles.searchBox}>
        <TextInput style={styles.searchText} placeholder="Search" />
      </View>

      <FlatList
        data={displayData}
        renderItem={renderFund}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary3,
  },
  searchBox: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary2,
    borderRadius: 6,
    alignItems: "center",
    margin: 15,
    marginBottom: 50,
  },
  searchText: {
    fontSize: 16,
    // fontWeight: "bold",
    color: GlobalStyles.colors.black,
  },
  profile: {
    fontSize: 16,
    // fontWeight: "bold",
    color: GlobalStyles.colors.secondary2,
    flexDirection: "row-reverse",
    padding: 14,
    borderRadius: 14,
  },
  list: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary3,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
  },
  fundItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "yellow",
    flexDirection: "row",
    borderRadius: 6,
    justifyContent: "space-between",
    elevation: 3,
    // marginHorizontal: 16,
    // alignItems: "center",
    // backgroundColor: '#f5f520',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  // fundData: {
  //   paddingVertical: 24,
  //   backgroundColor: "white",
  //   fontSize: 32,
  // },
});

{
  /* <Text>{displayData[0].name}</Text>
        <Text>{displayData[0].fundHouse}</Text>
        
        
      </View>

      <View style={styles.container}>
      <Text>{displayData[1].name}</Text>
        <Text>{displayData[1].fundHouse}</Text>
        
        <Button
          title="Funds 2 details"
          onPress={() => navigation.navigate("Fund 2 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{displayData[2].name}</Text>
        <Text>{displayData[2].fundHouse}</Text>
        
     
        <Button
          title="Funds 3 details"
          onPress={() => navigation.navigate("Fund 3 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{displayData[3].name}</Text>
        <Text>{displayData[3].fundHouse}</Text>
        
       
        <Button
          title="Funds 4 details"
          onPress={() => navigation.navigate("Fund 4 Details")}
        />
      </View>

      <View style={styles.container}>
      <Text>{displayData[4].name}</Text>
        <Text>{displayData[4].fundHouse}</Text>
        
     
        <Button
          title="Funds 5 details"
          onPress={() => navigation.navigate("Fund 5 Details")}
        />
      </View> */
}
