import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Draw from '../components/Draw';

function PlayField() {
  return (
    <View style={{flex: 1, margin: 10, backgroundColor: 'white'}}>
      <Draw />
    </View>
  );
}

export default PlayField;
