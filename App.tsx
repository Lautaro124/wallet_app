import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import TabNavigator from './src/components/tabNavigator/tabNavigator'
import StackNavigator from './src/components/stackNavigator/stackNavigator'

export default function App () {
  const isLogin = false
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      {isLogin ? (<TabNavigator />) : (<StackNavigator />)}
    </NavigationContainer>
  )
}
