import React, { Component } from "react";
import { View, Text } from "react-native";

const styles = {
    textStyle: {
        fontSize: 20,
        justifyContent: "flex-end"
    },
    viewStyle: {
        backgroundColor: "#F8F8F8",
        height: "9%",

        // add shadow at the bottom of the header
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        elevation: 2,
        position: "relative",

        // making words vertically end
        justifyContent: "flex-end",
        // making words horizontally center
        alignItems: "center"
    }
};

export default class Header extends Component {
    render() {
        const { textStyle, viewStyle } = styles;
        const { headerText } = this.props;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{headerText}</Text>
            </View>
        );
    }
}
