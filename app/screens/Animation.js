import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import images from 'src/images';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

class ImageSwitcher extends React.Component {
  fadeInOpacity = new Animated.Value(0);

  fadeOutOpacity = new Animated.Value(1);

  state = {
    prevSource: null
  };

  componentDidMount() {
    this.onLoad();
  }

  componentDidUpdate() {
    this.onLoad();
  }

  componentWillReceiveProps({ source: newSource }) {
    const { source } = this.props;
    if (newSource !== source) {
      this.setState({ prevSource: source });
    }
  }

  onLoad = () => {
    this.fadeInOpacity.setValue(0);
    this.fadeOutOpacity.setValue(1);

    Animated.timing(this.fadeInOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
    Animated.timing(this.fadeOutOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { prevSource } = this.state;

    return (
      <View
        style={{
          width: 200,
          height: 200
        }}
      >
        <Animated.Image {...this.props} style={[styles.image, { opacity: this.fadeInOpacity }]} resizeMode="cover" />
        {prevSource && (
          <Animated.Image {...this.props} style={[styles.image, { opacity: this.fadeOutOpacity }]} resizeMode="cover" source={prevSource} />
        )}
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
    source: images.first
  };

  handleToggle = () => this.setState(({ source }) => ({ source: source === images.first ? images.second : images.first }));

  render() {
    const { source } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ImageSwitcher source={source} />
        <TouchableOpacity onPress={this.handleToggle}>
          <Text>Toggle Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}