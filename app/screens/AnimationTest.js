import React, {useState, useEffect} from 'react'
import { Animated, ActivityIndicator, SafeAreaView, StyleSheet, ToucableOpacity, Text, View } from 'react-native'
import axios from 'axios';
import FadeIn from '../config/fadeInOut';

const ResultScreen = ({ navigation, route }) => {
  const name = route.params.name;
  const [arr, setArr] = useState([
    {"name":"michael","age":69,"count":233482},
    {"name":"peter","gender":"male","probability":0.99,"count":165452},
    {"name":"michael","country":[{"country_id":"US","probability":0.08986482266532715},{"country_id":"AU","probability":0.05976757527083082},{"country_id":"NZ","probability":0.04666974820852911}]}
  ]);

  const [animatedValues, setAnimatedValues] = useState([new Animated.Value(0),new Animated.Value(0),new Animated.Value(0)]);

  const a = new Animated.Value(0);

  useEffect(() => {
    const animations = animatedValues.map(value => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }
      )
    });
    Animated.stagger(100, animations).start();
  });

  const animatedViews = animatedValues.map((value, index) => {
    return (
      <Animated.View
        key={index}
        style={[styles.square, {
          opacity: value,
        }]}
      />
    )
  });

  return (

  //     <Text>{arr[0].name}</Text>
  //     <Text>{arr[0].age}</Text>
  //     <Text>{arr[0].count}</Text>

  <View style={styles.container}>
    <Animated.View
      key={index}
      style={[styles.square, {
        opacity: value,
      }]}
    />
    <Animated.View
      key={index}
      style={[styles.circle, {
        opacity: value,
      }]}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  square: {
    height: 10,
    width: 100,
    backgroundColor: 'green',
    position: 'absolute'
  },
  circle: {
    height: 10,
    width: 100,
    backgroundColor: 'red',
    position: 'absolute'
  },
});

export default ResultScreen