import { StyleSheet, Text, View, TextInput } from "react-native";

function UserForm() {
  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Gender</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text>Date of Birth</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}

export default UserForm;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  input: {
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    // padding: 10,
  },
});
