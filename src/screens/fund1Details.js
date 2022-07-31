import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function FundDetailsPage() {
  

  // get fund 1
  const [isLoading, setLoading] = useState(true);

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


  //chart
  const linedata = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        // data:[fundData1[0].nav, fundData1[10].nav, fundData1[20].nav, fundData1[30].nav, fundData1[40].nav, fundData1[50].nav],
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View>
      
      
      {/* chart */}
      <View>
        <Text>1 year performance</Text>
        <LineChart
          data={linedata}
          width={Dimensions.get("window").width} 
          height={220}
          yAxisLabel={"$"}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <View style={styles.container}>
        <Text>{fundMeta1.scheme_name}</Text>
        <Text>{fundMeta1.fund_house}</Text>
        <Text>{fundMeta1.scheme_type}</Text>
        <Text>{fundMeta1.scheme_category}</Text>
        <Text>{fundMeta1.scheme_code}</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            // set to variable fund
            data={fundData1}
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
