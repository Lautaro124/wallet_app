import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './styles'

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  title: string
}

const CustomButton = ({ title }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
