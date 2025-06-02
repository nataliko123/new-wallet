import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/onboarding.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>EASY ONLINE PAYMENT</Text>
          <Text style={styles.subtitle}>
            Make your payment experience more better today. No additional admin
            fee
          </Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9EFE5", // background behind image/top
  },
  scrollContent: {
    backgroundColor: "#fff", // base background
  },
  imageContainer: {
    backgroundColor: "#F9EFE5", // top bg under notch
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 295 / 363,
  },
  content: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6.3,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 37.54,
  },
  loginButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 25, // extra space at bottom
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  signUpButtonText: {
    fontSize: 16,
    color: "#000",
  },
});
