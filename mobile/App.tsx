import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";

import { worker } from "./src/services/worker";

interface IRequest {
  my_replenisher: number;
}

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function fetchValue() {
      const { data } = await worker.get<IRequest>("/get");

      setValue(data.my_replenisher);
    }

    fetchValue();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'#FFF'}
      />
      <View style={styles.container}>
        <Text>CURRENT VALUE {value}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
