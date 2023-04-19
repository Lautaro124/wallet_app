import { View } from 'react-native'
import React from 'react'
import Input from '../../../../components/input/input'
import CustomButton from '../../../../components/button/button'
import styles from './style'

const Form = () => {
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
          <CustomButton title='Login' />
          <CustomButton title='Register' />
        </View>
    </View>
  )
}

export default Form
