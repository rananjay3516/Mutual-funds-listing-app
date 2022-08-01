import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

//chart
import { LineChart } from "react-native-chart-kit";

// import styles
import { GlobalStyles } from "../constants/styles";

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
    <View style={styles.container}>
      <Text style={styles.entry}>6 month NAV - 2022</Text>
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
                  strokeWidth: 2, 
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
              decimalPlaces: 2,
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
        <Text style={styles.entry}>{fundMeta3.scheme_name}</Text>
        <Text></Text>
        <Text style={styles.label}>Fund House: </Text>
        <Text style={styles.entry}>{fundMeta3.fund_house}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Type: </Text>
        <Text style={styles.entry}>{fundMeta3.scheme_type}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Category: </Text>
        <Text style={styles.entry}>{fundMeta3.scheme_category}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Code: </Text>
        <Text style={styles.entry}>{fundMeta3.scheme_code}</Text>
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
    fontFamily: "serif",
    fontSize: 18,
    color: GlobalStyles.colors.secondary1,
  },
  entry: {
    fontFamily: "serif",
    fontSize: 18,
    color: GlobalStyles.colors.primary1,
  },
  userList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
