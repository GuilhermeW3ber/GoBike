import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sem Registros</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6900fd"
  },
  text: {
    color: "#000000",
    fontSize: 30
  }
});
