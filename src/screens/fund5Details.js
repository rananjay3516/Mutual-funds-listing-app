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

//import styles
import { GlobalStyles } from "../constants/styles";

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
    <View style={styles.container}>
      
      <Text style={styles.entry}>6 month NAV - 2013</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  // data: [25.33 ,25.56 ,25.70 ,25.85 ,26.15 , 26.39],
                  data: [
                    fundData5[149].nav,
                    fundData5[127].nav,
                    fundData5[108].nav,
                    fundData5[89].nav,
                    fundData5[71].nav,
                    fundData5[49].nav,
                  ],
                  strokeWidth: 2, // optional
                },
              ],
            }}
            width={350}
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
      
      <View style={styles.data}>
        <Text style={styles.label}>Scheme Name: </Text>
        <Text style={styles.entry}>{fundMeta5.scheme_name}</Text>
        <Text></Text>
        <Text style={styles.label}>Fund House: </Text>
        <Text style={styles.entry}>{fundMeta5.fund_house}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Type: </Text>
        <Text style={styles.entry}>{fundMeta5.scheme_type}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Category: </Text>
        <Text style={styles.entry}>{fundMeta5.scheme_category}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Code: </Text>
        <Text style={styles.entry}>{fundMeta5.scheme_code}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary3,
    flex: 1,
    
  },
  data: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary3,
    flex: 1,
  },
  label: {
    fontFamily: 'serif',
    fontSize: 18,
    color: GlobalStyles.colors.secondary1,
  },
  entry: {
    fontFamily: 'serif',
    fontSize: 18,
    color: GlobalStyles.colors.primary1,
  },
  userList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});