/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigator from './src/pages/Routes/Navigator';



function App(): React.JSX.Element {


  return (
    <View style={styles.ScressnBack}>
     <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  ScressnBack: {
    fontFamily:'Manrope',
    backgroundColor: '#171717',
    width:'100%',
    height:'100%'
  }
})


export default App;
