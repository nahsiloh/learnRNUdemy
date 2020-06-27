import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colours from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            // image loaded locally
            // source={require("../assets/success.png")}
            source={{
              uri:
                "https://static.vecteezy.com/system/resources/previews/000/103/661/original/free-stone-path-mountains-illustration-vector.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed
            <Text style={styles.highlight}> {props.guessRounds} </Text>
            rounds to guess the number
            <Text style={styles.highlight}> {props.userChoice}</Text>
          </BodyText>
        </View>
        <MainButton onClick={props.startNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colours.ACCENT,
    fontFamily: "openSans-bold",
  },
  textContainer: {
    marginVertical: Dimensions.get("window").height / 60,
    width: "80%",
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
