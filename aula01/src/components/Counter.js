import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}> 
      <Text>You clicked {counter} times</Text>
      <Button onPress={() => setCounter(counter + 1)} title="Click me" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 100
  },
});

export default Counter