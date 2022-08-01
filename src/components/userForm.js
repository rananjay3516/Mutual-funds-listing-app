import { StyleSheet, Text, View, TextInput } from "react-native";

// import styles
import { GlobalStyles } from "../constants/styles";

function UserForm() {
  return (
    <View>
      
      <View style={styles.field}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} />
      </View>
      
      <View style={styles.field}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput style={styles.input} />
      </View>
      
      <View style={styles.field}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      
      <View style={styles.field}>
        <Text style={styles.text}>Gender</Text>
        <TextInput style={styles.input} />
      </View>
     
      <View style={styles.field}>
        <Text style={styles.text}>Date of Birth</Text>
        <TextInput style={styles.inputDOB} />
      </View>
    
    </View>
  );
}

export default UserForm;

const styles = StyleSheet.create({
  field:{
    padding:10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'serif',
    color: GlobalStyles.colors.primary1,
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
  inputDOB: {
    height: 40,
    borderWidth: 1,
    marginBottom: 30,
  }
});
