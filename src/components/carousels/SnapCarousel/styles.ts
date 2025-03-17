import { StyleSheet } from "react-native";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "./";
import { width } from "src/constants/scaler";

export const styles = StyleSheet.create({
    container: {
      maxHeight: IMAGE_HEIGHT,
      overflow: "hidden",
    },
    carousel: {
      width: width,
      maxHeight: IMAGE_HEIGHT,
      marginVertical: -20,
    },
    carouselItem: {
      width: width,
      height: IMAGE_HEIGHT,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      backgroundColor: "#000",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      borderRadius: 20,
    },
  });