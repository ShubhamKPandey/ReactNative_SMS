import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
// Hello all

export default function App()
{
  const [people, setPeople] = useState(
    [
      {name: 'shaun', id : '1'},
      {name: 'yoshi', id : '2'},
      {name: 'mario', id : '3'},
      {name: 'luigi', id : '4'},
      {name: 'peach', id : '5'},
      {name: 'toad', id : '6'},
      {name: 'bowser', id : '7'},
      {name: 'peach', id : '8'},
      {name: 'toad', id : '9'},
      {name: 'bowser', id : '10'},
    ]
  );
  
  return (
    <View style = {styles.container}>
    { 

    <FlatList
      numColumns = {2}
      keyExtractor = {(it) => it.id }
      data = {people}
      renderItem = {({item}) => (
        <Text style = {styles.item}> {item.name}</Text>
      )}
      />
    // <ScrollView> 
    //   {
    //   people.map((item) => {
    //     return (
    //       <View id = {item.id}>
    //         <Text style = {styles.item}> {item.name} </Text>
    //       </View>
    //     )
    //   })}
    //   </ScrollView>
    }
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    paddingTop : 40,
    paddingHorizontal : 20,
    // alignItems: 'center',
    // justifyContent : 'center',
  },
  item: {
    marginTop: 24,
    padding : 30,
    backgroundColor : 'pink',
    fontSize : 24,
    marginHorizontal :10
  }
  // header : {
  //   backgroundColor : "pink",
  //   padding : 20,
  // },
  // input : {
  //   borderWidth : 1,
  //   borderColor : '#777',
  //   padding : 8,
  //   margin : 10,
  //   width : 200,
  // },
  // boldText: {
  //   fontWeight: 'bold'
  // },
  // body : {
  //   backgroundColor : 'yellow'
  // },
  // buttonContainer: {
  //   marginTop : 20
  // },

})