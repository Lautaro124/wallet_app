import { View } from 'react-native'
import React from 'react'
import Input from '../../../../components/input/input'
import CustomButton from '../../../../components/button/button'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import { RootName, type RootStackParamList } from '../../../../interface/roots'

type FormStackProps = StackNavigationProp<RootStackParamList, RootName.Login>

const Form = () => {
  const navigation = useNavigation<FormStackProps>()
  return (
      <View style={styles.container}>
        <Input
          label='Email'
          placeholder='Enter your email'
          keyboardType='email-address'
        />
        <Input
          label='Password'
          placeholder='Enter your password'
        />
        <View style={styles.buttonsContainer}>
          <CustomButton
            title='Login'
            onPress={() => { navigation.navigate(RootName.Dashboard) }}
          />
          <CustomButton title='Register' />
        </View>
    </View>
  )
}

export default Form
