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
      
      <Text>6 month NAV - 2007</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  // data: [54.63, 55.6, 50.53, 49.7, 54.41, 0],
                  data: [
                    fundData4[320].nav,
                    fundData4[300].nav,
                    fundData4[282].nav,
                    fundData4[262].nav,
                    fundData4[242].nav,
                    fundData4[222].nav,
                  ],
                  strokeWidth: 2, // optional
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel={"Rs."}
            fromZero={true}
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
        )}
      </View>
      
      <View style={styles.container}>
        <Text>{fundMeta4.scheme_name}</Text>
        <Text>{fundMeta4.fund_house}</Text>
        <Text>{fundMeta4.scheme_type}</Text>
        <Text>{fundMeta4.scheme_category}</Text>
        <Text>{fundMeta4.scheme_code}</Text>
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
