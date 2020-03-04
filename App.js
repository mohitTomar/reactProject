import 'react-native-gesture-handler';

import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CTEs">
        <Stack.Screen name="CTEs" component={CTEScreen} />
        <Stack.Screen name="Alex" component={DetailsScreen} />
        <Stack.Screen name="Jason" component={DetailsScreen} />
        <Stack.Screen name="Mohit" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const DATA = [
  {
    id: '1',
    title: 'Alex',
  },
  {
    id: '2',
    title: 'Jason',
  },
  {
    id: '3',
    title: 'Mohit',
  },
];

function CTEScreen({ navigation }) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
    //navigation.push('Alex')
  );

  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}


function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#ae3b6e' : '#a9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});