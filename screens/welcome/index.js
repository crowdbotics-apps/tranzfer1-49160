import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button } from "react-native";

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  return <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Enter your mobile number" keyboardType="phone-pad" value={mobileNumber} onChangeText={setMobileNumber} />
        <Button title="Login" onPress={() => alert("Login pressed")} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8FC"
  },
  innerContainer: {
    width: "80%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});
export default LoginScreen;