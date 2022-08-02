import { StyleSheet, View, Button } from "react-native";

import UserForm from "../components/userForm";

// import styles
import { GlobalStyles } from "../constants/styles";

export default function SignUpPage({ navigation }) {
  return (
    <View style={styles.container}>
      <UserForm />
      <View style={styles.button}>
        <Button
          title="SAVE"
          onPress={() => navigation.navigate("Listing")}
          color={GlobalStyles.colors.secondary1}
        />
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
  button: {
    padding: 10,
    borderRadius: 14,
  },
});
