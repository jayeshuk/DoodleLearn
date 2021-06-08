import React from 'react';
import {AppRegistry, StyleSheet, View, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

const categories = [
  'Animals',
  'Vehicles',
  'Birds',
  'Sports',
  'Fruits',
  'Stationary',
  'Food',
];

function SelectCategory({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Category</Text>
      <View style={styles.container2}>
        {categories.map((item, index) => {
          return (
            <Card
              key={index}
              style={{
                width: 150,
                alignItems: 'center',
              }}>
              <CardItem
                header
                button
                onPress={() => navigation && navigation.navigate('SelectItem')}>
                <Text>{item}</Text>
              </CardItem>
            </Card>
          );
        })}
      </View>
    </View>
  );
}

export default SelectCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    // color: 'rgb(59,108,212)',
    // fontSize: 42,
    // fontWeight: '100',
    textAlign: 'center',
  },
  heading: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    margin: 10,
    padding: 10,
    // textAlign: 'center',
  },
  button: {
    margin: 5,
    alignSelf: 'center',
    padding: 10,
  },
});
