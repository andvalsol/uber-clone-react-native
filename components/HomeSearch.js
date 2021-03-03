import React from "react";
import {Text, View, StyleSheet} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";



const HomeSearch = (props) => {
    return (
        <View>
            {/*Input*/}
            <View style={styles.inputContainer}>
                <Text>
                    Where to?
                </Text>
                <View style={styles.timeContainer}>
                    <AntDesign
                        name="clockcircle"
                        size={16}/>
                    <Text>Now</Text>
                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={16}/>
                </View>
            </View>
            {/*Previous destination*/}
            <View style={styles.previousDestination}>
                <View style={[styles.iconContainer, {backgroundColor: "#6e6e6e"}]}>
                    <AntDesign
                        name="clockcircle"
                        size={16}
                        color="#FFFFFF"/>
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>
            {/*Home destination*/}
            <View style={styles.previousDestination}>
                <View style={[styles.iconContainer, {backgroundColor: "#0f5af6",}]}>
                    <Entypo
                        name="home"
                        size={16}
                        color="#FFFFFF"/>
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#cbc9c9",
        margin: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#6e6e6e"
    },
    timeContainer: {
        flexDirection: "row",
        width: 100,
        backgroundColor: "#ffffff",
        padding: 8,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "space-between"
    },
    previousDestination: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#6e6e6e"
    },
    iconContainer: {
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: "600",
        fontSize: 15
    }
})

export default HomeSearch;
