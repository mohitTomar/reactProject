import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class MTList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key: 'Alex'}, {key: 'Jason'}, {key: 'Mark'}, {key: 'Mohit'}]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    color: 'blue',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 64,
    color: 'red',
  },

})
