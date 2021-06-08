import React from 'react';
import {AppRegistry, StyleSheet, View, Alert} from 'react-native';
import {Container, Header, Content, Button, Icon, Text} from 'native-base';

function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Doodle Art</Text>
      <View style={styles.container}>
        <Button
          iconLeft
          primary
          style={styles.button}
          onPress={() => navigation && navigation.navigate('SelectCategory')}>
          <Icon name="game-controller-outline" />
          <Text>Play</Text>
        </Button>
        <Button primary style={styles.button}>
          <Icon name="exit-outline" />
          <Text>Exit</Text>
        </Button>
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    // textAlign: 'center',
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
