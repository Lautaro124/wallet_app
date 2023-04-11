import { StyleSheet, View } from 'react-native'
import Login from './src/views/login/login'
import { COLORS } from './src/constants/colors'
import { StatusBar } from 'expo-status-bar'

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
