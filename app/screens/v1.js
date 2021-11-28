import React, {useState} from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native'
import axios from 'axios';
import FadeIn from '../config/fadeInOut';

const ResultScreen = ({ navigation, route }) => {
  const name = route.params.name;
  const [arr, setArr] = useState([
    {"name":"michael","age":69,"count":233482},
    {"name":"peter","gender":"male","probability":0.99,"count":165452},
    {"name":"michael","country":[{"country_id":"US","probability":0.08986482266532715},{"country_id":"AU","probability":0.05976757527083082},{"country_id":"NZ","probability":0.04666974820852911}]}
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const animatedValues = []

//   axios.all([
//     axios.get(`https://api.agify.io?name=${name}`),
//     axios.get(`https://api.genderize.io?name=${name}`),
//     axios.get(`https://api.nationalize.io?name=${name}`)
//   ])
//     .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
//       setIsLoading(false);
// }))
// .catch(error => console.log('heh'));

  // return isLoading ? (
  //   <View style={{flex: 1, justifyContent: 'center'}}>
  //     <ActivityIndicator size="large" />
  //   </View>
  //   ) : (
  //   <SafeAreaView>
  //     <Text>{arr[0].name}</Text>
  //     <Text>{arr[0].age}</Text>
  //     <Text>{arr[0].count}</Text>
  //     <Text>{arr[1].gender}</Text>
  //     <Text>{arr[1].probability}</Text>
  //     <Text>{arr[1].count}</Text>
  //     <Text>{arr[2].country[0].country_id}</Text>
  //     <Text>{arr[2].country[0].probability}</Text>
  //     <Text>{arr[2].country[1].country_id}</Text>
  //     <Text>{arr[2].country[1].probability}</Text>
  //     <Text>{arr[2].country[2].country_id}</Text>
  //     <Text>{arr[2].country[2].probability}</Text>
  //   </SafeAreaView>
  // )

  return (

  )
}

export default ResultScreen

const styles = StyleSheet.create({})
