import { View, Text } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {

    const { user } = route.params

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen