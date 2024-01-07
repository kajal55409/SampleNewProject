import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate("Sign_up")}> login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
