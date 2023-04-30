import { Alert, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../../components/input/input'
import CustomButton from '../../../../components/button/button'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'
import { RootName, type RootStackParamList } from '../../../../interface/roots'
import { supabase } from '../../../../utils/initSupabase'

type FormStackProps = StackNavigationProp<RootStackParamList, RootName.Login>

const Form = () => {
  const navigation = useNavigation<FormStackProps>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error != null) {
      Alert.alert(error.message)
      return
    }
    navigation.navigate(RootName.Dashboard)
  }

  const createAcount = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error != null) {
      Alert.alert(error.message)
      return
    }
    navigation.navigate(RootName.Dashboard)
  }

  return (
      <View style={styles.container}>
        <Input
          label='Email'
          placeholder='Enter your email'
          keyboardType='email-address'
          onChangeText={setEmail}
        />
        <Input
          label='Password'
          placeholder='Enter your password'
          onChangeText={setPassword}
          keyboardType='visible-password'
        />
        <View style={styles.buttonsContainer}>
          <CustomButton
            title='Login'
            onPress={() => { void login() }}
          />
          <CustomButton
            title='Create account'
            onPress={ () => { void createAcount() }}
          />
        </View>
    </View>
  )
}

export default Form
