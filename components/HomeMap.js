import React from "react";
import {View, Text, StyleSheet} from "react-native";

const HomeMap = (props) => {
    return (
      <View style={styles.container}>
        <Text>I'm a map</Text>
      </View>
    );
};

const styles = StyleSheet.create({
   container: {
       height: 300,
       backgroundColor: "#BDBDBD",
       alignItems: "center",
       justifyContent: "center"
   }
});

export default HomeMap;
