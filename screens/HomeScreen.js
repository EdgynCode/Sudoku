import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import titlePng from "../assets/BG-Title.png";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/BG-HomeScreen.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={titlePng} style={styles.title} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => navigation.navigate("PlayScreen")}
          >
            <Ionicons name="play-circle-outline" size={300} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.line} />
          <View style={styles.bottomButtonsContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate("StatScreen")}
            >
              <Text style={styles.bottomButtonText}>STAT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate("SettingScreen")}
            >
              <Text style={styles.bottomButtonText}>SETTING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    width: 300,
    height: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    marginBottom: 100,
    marginLeft: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor:
      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
    padding: 20,
    marginBottom: 30,
  },
  bottomButtonsContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  bottomButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: "40%",
  },
  bottomButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
