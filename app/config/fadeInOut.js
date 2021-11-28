import React, {useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const FadeIn = () => {
  const startValue = new Animated.Value(0);
  const endValue = 1;
  const duration = 2000;

  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [duration, endValue, startValue]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, {opacity: startValue}]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  square: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
  },
});

export default FadeIn;