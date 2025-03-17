import { StyleSheet } from "react-native";
import { width } from 'src/constants/scaler';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "./";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    carousel: {
      width: width,
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
    paginationContainer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
    pagination: {
      gap: 10,
      marginBottom: 10,
    },
    dotStyle: {
      backgroundColor: "#C1C2CA",
      borderRadius: 50,
    },
    activeDotStyle: {
      backgroundColor: "#D0006E",
      borderRadius: 50,
    },
  });