import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const WelcomeScreen = ({navigation}) => {
  return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/people.jpg")}>
          <Text style={styles.title}>Who Are You?</Text>
          <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Form')}>
            <View>
              <Text style={styles.text}>Click to find out</Text>
            </View>
          </TouchableOpacity>
      </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    width: 415,
    height: 900,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  continueButton: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#000',
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 120
  },
  text: {
    color: "white",
    fontSize: 20
  },
  title: {
    fontSize: 60,
    position: "absolute",
    top: 160,
    color: "black"
  },
})
