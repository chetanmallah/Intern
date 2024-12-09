import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function FirstPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Shree Hari Halal Visa Oswal Samaj</Text>
      </View>

      {/* Subtitle Section */}
      <View style={styles.subContainer}>
        <Text style={styles.subText}>
          Your journey to seamless visa assistance starts here. Connect with experts and 
          ensure all your needs are fulfilled with ease and confidence.
        </Text>
      </View>

      {/* Visual Branding Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/452/visa.png",
          }}
          style={styles.imageStyle}
        />
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/screens/SecondPage/SecondPage")}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: "#004080",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  subText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
