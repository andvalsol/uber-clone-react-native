import React from "react";
import {View, Text, StyleSheet} from "react-native";

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>When you arrive at a certain location you will need to take a COVID test and wait
                for the results to come up</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6e90fb",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    text: {
        color: "#dce2fa",
        fontSize: 15,
        marginBottom: 10
    },
    learnMore: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default CovidMessage
