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

  return (
    <View>
      <Text>6 month NAV - 2022</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  // data: [35.70, 35.50, 33.16, 35.01, 35.51, 34.47],
                  data: [
                    fundData3[143].nav,
                    fundData3[123].nav,
                    fundData3[103].nav,
                    fundData3[82].nav,
                    fundData3[63].nav,
                    fundData3[42].nav,
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
        <Text>{fundMeta3.scheme_name}</Text>
        <Text>{fundMeta3.fund_house}</Text>
        <Text>{fundMeta3.scheme_type}</Text>
        <Text>{fundMeta3.scheme_category}</Text>
        <Text>{fundMeta3.scheme_code}</Text>
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
