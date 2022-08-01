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

  return (
    <View>
      <Text>6 month NAV - 2018</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  // data: [151.22, 153.16, 148.46, 147.02, 149.99, 147.07],
                  data: [
                    fundData1[103].nav,
                    fundData1[81].nav,
                    fundData1[62].nav,
                    fundData1[43].nav,
                    fundData1[22].nav,
                    fundData1[0].nav,
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
        <Text>Scheme Name: {fundMeta1.scheme_name}</Text>
        <Text>Fund House: {fundMeta1.fund_house}</Text>
        <Text>Scheme Type: {fundMeta1.scheme_type}</Text>
        <Text>Scheme Category: {fundMeta1.scheme_category}</Text>
        <Text>Scheme Code: {fundMeta1.scheme_code}</Text>
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
