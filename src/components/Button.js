import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
// import { white } from "../../assets/colors";
// import { bold, regular } from "../../assets/fonts";

export const Button = ({
  onPress,
  color,
  text,
  textColor,
  image,
  style,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }, style]}
    >
      {loading ? (
        <ActivityIndicator color={color=="white"?"black" :"white"} size="small" />
      ) : (
        <>
          {image && <Image style={styles.image} source={image} />}
          <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    height: hp("6.25%"),
    marginTop: hp("2.5%"),
    borderRadius: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontFamily: bold,
    fontSize: hp("2.15%"),
  },
  image: {
    height: hp("3%"),
    width: "7%",
    marginRight: hp("2%"),
    resizeMode: "contain",
  },
});
