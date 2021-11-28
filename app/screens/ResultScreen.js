import React, {useState, useEffect} from 'react'
import { Animated, ActivityIndicator, SafeAreaView, StyleSheet, ToucableOpacity, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import axios from 'axios';

const ResultScreen = ({ navigation, route }) => {
  const name = route.params.name;
  const [arr, setArr] = useState([
    {"name":"michael","age":69,"count":233482},
    {"name":"peter","gender":"male","probability":0.99,"count":165452},
    {"name":"michael","country":[{"country_id":"US","probability":0.08986482266532715},{"country_id":"AU","probability":0.05976757527083082},{"country_id":"NZ","probability":0.04666974820852911}]}
  ]);

  const [isLoading, setIsLoading] = useState(true);

  axios.all([
    axios.get(`https://api.agify.io?name=${name}`),
    axios.get(`https://api.genderize.io?name=${name}`),
    axios.get(`https://api.nationalize.io?name=${name}`)
  ])
    .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      setArr([firstResponse.data, firstResponse.data, firstResponse.data])
      setIsLoading(false);
  }))
    .catch(error => {
      console.log('heh')
      setIsLoading(false);
    });

  const Item = ({country_id}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{country_id}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item country_id={item.country_id} />
  );

  const fadeInOpacity = new Animated.Value(0);
  const fadeOutOpacity = new Animated.Value(1);

  const [key, setKey] = useState(0);

  const onLoad = (key) => {
    fadeInOpacity.setValue(0);
    fadeOutOpacity.setValue(1);

    if (key < 4) {
      setTimeout(()=> {
        Animated.timing(fadeInOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }).start(({finished})=> {
          setTimeout(()=> {
            Animated.timing(fadeInOpacity, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true
            }).start(({finished})=> {
              setKey(key+1);
            });
          });
      }, 1000)
      }, 300);
    }

    if (key === 4) {
      setTimeout(()=> {
        Animated.timing(fadeInOpacity, {
          toValue: 1,
          duration: 6000,
          useNativeDriver: true
        }).start(({finished})=> {
          setTimeout(()=> {
            Animated.timing(fadeInOpacity, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true
            }).start(({finished})=> {
              setKey(key+1);
            });
          });
      }, 1000)
      }, 300);
    }

    if (key === 5) {
      Animated.timing(fadeInOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start()
    }
  };

  useEffect(()=> {
    onLoad(key)
  });

  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
    ) : (
    <View style={styles.container}>
      { key === 0 ?
        <Animated.View
          key="0"
          style={[styles.content, {
            opacity: fadeInOpacity,
        }]}>
          <Text style={styles.name}>{arr[0].name}</Text>
        </Animated.View> : null
      }
      { key === 1 ?
        <Animated.View
          key="1"
          style={[styles.content, {
            opacity: fadeInOpacity,
        }]}>
          <Text style={styles.baseText}>YOU ARE MOST LIKELY TO BE...</Text>
        </Animated.View> : null
      }
      { key === 2 ?
        <Animated.View
          key="2"
          style={[styles.content, {
            opacity: fadeInOpacity,
        }]}>
          <Text style={styles.age}>{arr[0].age}{' '}years old{' '}
            <Text style={styles.gender}>{arr[1].gender}</Text>
          </Text>
        </Animated.View> : null
      }
      { key === 3 ?
        <Animated.View
          key="3"
          style={[styles.content, {
            opacity: fadeInOpacity,
        }]}>
          <Text style={styles.baseText}>FROM THESE COUNTRIES...
          </Text>
          <Image style={styles.globe} source={require('../assets/globe.png')}></Image>
        </Animated.View> : null
      }
      { key === 4 ?
        <Animated.View
          key="2"
          style={[styles.content, {
            opacity: fadeInOpacity,
        }]}>
          <FlatList
            data={arr[2].country}
            renderItem={renderItem}
            keyExtractor={ item => item.country_id }
          />
        </Animated.View> : null
      }
      { key === 5 ?
        <Animated.View
          key="2"
          style={[styles.share, {
            opacity: fadeInOpacity,
        }]}>
          <Text style={styles.shareText}>DID YOU ENJOY THIS APP? SHARE YOUR RESULTS WITH YOUR FRIENDS!
          </Text>

          <View style={styles.social}>
            <SocialIcon type='facebook' raised={true}></SocialIcon>
            <SocialIcon type='twitter' raised={true}></SocialIcon>
            <SocialIcon type='instagram' raised={true}></SocialIcon>
            <SocialIcon type='linkedin' raised={true}></SocialIcon>
          </View>

          <TouchableOpacity style={styles.redo} onPress={() => navigation.navigate('Form')}>
            <View>
              <Text style={styles.redoText}>Click here to try another name</Text>
            </View>
          </TouchableOpacity>
        </Animated.View> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  age: {
    fontSize: 50,
    color: 'black',
  },
  baseText: {
    fontSize: 50,
    color: 'pink'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    height: 360,
    width: 360,
    borderRadius: 30,
    // backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  gender: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
  },
  globe: {
    width: '100%',
    height: 500,
    resizeMode: "contain"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 70
  },
  redo: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#000',
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 300
  },
  redoText: {
    fontSize: 20,
    color: 'white',
  },
  share: {
    height: 760,
    width: 360,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  shareText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 100
  },
  social: {
    flexDirection: 'row',
    position: 'absolute',
    top: 300
  },
  title: {
    fontSize: 32,
  },
});

export default ResultScreen