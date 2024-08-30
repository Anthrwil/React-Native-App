import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

export default class gridbase extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.container}>
          <View style={styles.box}><Text style={styles.text}>You're gonna knock it out the park today</Text></View>
          <View style={styles.box}><Text style={styles.text}>You've Got This! Keep Pushing</Text></View>
          <View style={styles.box}><Text style={styles.text}>Look at this machine, go smash it today</Text></View>
          <View style={styles.box}><Text style={styles.text}>Everyday has to start somewhere, you've got this</Text></View>
          <View style={styles.box}><Text style={styles.text}>You're amazing at what you do, go fight for it</Text></View>
          <View style={styles.box}><Text style={styles.text}>There's always another day, don't worry</Text></View>
          <View style={styles.box}><Text style={styles.text}>Never give up!</Text></View>
          <View style={styles.box}><Text style={styles.text}>Push forward, the struggle doesn't last forever</Text></View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  box: {
    margin: 2,
    width: Dimensions.get('window').width / 2 -6,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008b'
  },
  text: {
    margin: 2,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
