import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function FormScreen({navigation}) {
  const [text, onChangeText] = useState(null);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Image
        style={styles.background}
        source={require('../assets/hello.jpg')}/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="What is your first name?"
        textAlign="center"
        >
        </TextInput>
        <TouchableOpacity style={styles.submitButton} onPress={() => {
          console.log(text)
          navigation.navigate('Result', { name: text})}}>
            <View>
              <Text style={styles.text}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 360,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#000'
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10
  },
  submitButton: {
    width: '30%',
    height: 30,
    borderRadius: 10,
    backgroundColor: "#841584",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  }
});