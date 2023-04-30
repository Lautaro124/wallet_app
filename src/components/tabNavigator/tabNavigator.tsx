import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../../constants/colors'
import TEXT_UTILS_STYLES from '../../constants/texts'
import Dashboard from '../../views/dashboard/dashboard'
import Cards from '../../views/cards/cards'
import { RootName } from '../../interface/roots'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
          initialRouteName='Home'
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
          <Tab.Screen name={RootName.Dashboard} component={Dashboard}/>
          <Tab.Screen name={RootName.Cards} component={Cards}/>
        </Tab.Navigator>
  )
}

export default TabNavigator
