import { Text, TextInput, View } from 'react-native'
import React from 'react'
import TEXT_UTILS_STYLES from '../../constants/texts'
import styles from './style'

interface Props extends React.ComponentProps<typeof TextInput> {
  label: string
  errorMessages?: string[]
}

const Input = ({ label, errorMessages, ...restOfProps }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={TEXT_UTILS_STYLES.label}>
        {label}
      </Text>
      <TextInput
        {...restOfProps}
        style={{
          ...styles.input,
          borderBottomColor: errorMessages != null ? '#C5626E' : '#626262'
        }}
      />
      <Text style={styles.error}>
        {errorMessages?.join(', ')}
      </Text>
    </View>
  )
}

export default Input
