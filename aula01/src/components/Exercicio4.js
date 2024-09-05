import { View, Text } from 'react-native'
import React from 'react'

const Exercicio4 = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  )
}

export default Exercicio4