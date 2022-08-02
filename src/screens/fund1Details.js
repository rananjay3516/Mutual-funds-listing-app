import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

//chart
import { LineChart } from "react-native-chart-kit";

// import styles
import { GlobalStyles } from "../constants/styles";

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
    <View style={styles.container}>
      <Text style={styles.entry}>6 month NAV - 2018</Text>
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
        <Text style={styles.entry}>{fundMeta1.scheme_name}</Text>
        <Text></Text>
        <Text style={styles.label}>Fund House: </Text>
        <Text style={styles.entry}>{fundMeta1.fund_house}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Type: </Text>
        <Text style={styles.entry}>{fundMeta1.scheme_type}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Category: </Text>
        <Text style={styles.entry}>{fundMeta1.scheme_category}</Text>
        <Text></Text>
        <Text style={styles.label}>Scheme Code: </Text>
        <Text style={styles.entry}>{fundMeta1.scheme_code}</Text>
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
