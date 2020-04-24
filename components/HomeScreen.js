import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Welcome!</Text>
        </View>
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => {
            alert('Thank you for clicking me!');
          }}
        >
          <Text>Click Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395375',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  alertBtn: {
    width: '80%',
    backgroundColor: '#DD5C28',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
