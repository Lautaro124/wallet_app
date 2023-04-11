import { View } from 'react-native'
import React from 'react'
import Input from '../../../components/input/input'
import CustomButton from '../../../components/button/button'
import styles from '../styles'

const Form = () => {
  return (
      <View style={styles.formContainer}>
        <Input
          label='Email'
          placeholder='Enter your email'
          keyboardType='email-address'
        />
        <Input
          label='Password'
          placeholder='Enter your password'
        />
        <CustomButton title='Login' />
      </View>
  )
}

export default Form
