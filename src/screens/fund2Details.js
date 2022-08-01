import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  Dimensions
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

// import styles
import { GlobalStyles } from "../constants/styles";


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
    <View style={styles.container}>
      <Text style={styles.entry}>6 month NAV - 2014</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  // data: [24.87, 24.01, 24.75, 27.02, 27.18, 30.6],
                  data: [
                    fundData2[126].nav,
                    fundData2[103].nav,
                    fundData2[84].nav,
                    fundData2[64].nav,
                    fundData2[46].nav,
                    fundData2[25].nav,
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
        <Text style={styles.entry}>{fundMeta2.scheme_name}</Text>
        <Text></Text>
        <Text style={styles.label}>Fund House: </Text>
        <Text style={styles.entry}>{fundMeta2.fund_house}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Type: </Text>
        <Text style={styles.entry}>{fundMeta2.scheme_type}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Category: </Text>
        <Text style={styles.entry}>{fundMeta2.scheme_category}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Code: </Text>
        <Text style={styles.entry}>{fundMeta2.scheme_code}</Text>
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
