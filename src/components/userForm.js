import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
// import styles
import { GlobalStyles } from "../constants/styles";

function UserForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  function nameChangeHandler(enteredText) {
    setUserName(enteredText);
  }
  function emailChangeHandler(enteredText) {
    setEmail(enteredText);
  }
  function passwordChangeHandler(enteredText) {
    setPassword(enteredText);
  }
  function dateChangeHandler(enteredText) {
    setDate(enteredText);
  }

  return (
    <View>
      <View style={styles.field}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder=" Enter your name"
          maxLength={30}
          onChangeText={nameChangeHandler}
          value={userName}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder=" Enter your e-mail"
          keyboardType="email-address"
          maxLength={20}
          onChangeText={emailChangeHandler}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder=" Enter your password"
          maxLength={20}
          onChangeText={passwordChangeHandler}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.text}>Date of Birth</Text>
        <TextInput
          style={styles.inputDOB}
          placeholder=" YYYY-MM-DD"
          maxLength={10}
          onChangeText={dateChangeHandler}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

export default UserForm;

const styles = StyleSheet.create({
  field: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "serif",
    color: GlobalStyles.colors.primary1,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    textAlign: "center",
  },
  inputDOB: {
    height: 40,
    borderWidth: 1,
    marginBottom: 30,
    textAlign: "center",
  },
});
