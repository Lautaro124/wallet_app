import { COLORS } from '../../constants/colors'
import RootStack from '../../constants/rootStack'
import TEXT_UTILS_STYLES from '../../constants/texts'
import { RootName } from '../../interface/roots'
import Login from '../../views/login/login'

const StackNavigator = () => {
  return (
    <RootStack.Navigator
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
        name={RootName.Login}
        component={Login}
      />
    </RootStack.Navigator>
  )
}

export default StackNavigator
