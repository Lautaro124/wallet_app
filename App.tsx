import { NavigationContainer } from '@react-navigation/native'
import Login from './src/views/login/login'
import { StatusBar } from 'expo-status-bar'
import RootStack from './src/constants/rootStack'
import { COLORS } from './src/constants/colors'
import TEXT_UTILS_STYLES from './src/constants/texts'

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <RootStack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {
            height: 93,
            backgroundColor: COLORS.PRIMARY
          },
          headerTitleAlign: 'center',
          headerTintColor: COLORS.TEXT,
          headerShadowVisible: false,
          headerTitleStyle: TEXT_UTILS_STYLES.header
        }}
      >
        <RootStack.Screen
          name='Login'
          component={Login}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
