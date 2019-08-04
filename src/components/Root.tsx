import * as React from 'react'
import { Text, View } from 'react-native'
import styles from './Root.style'

const Root = () => (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
  </View>
)

export default React.memo(Root)
