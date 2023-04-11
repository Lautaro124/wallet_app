import { Text, View } from 'react-native'
import TEXT_UTILS_STYLES from '../../constants/texts'
import styles from './styles'
import Form from './components/form'

const Login = () => {
  return (
    <View style={styles.container} >
      <Text style={TEXT_UTILS_STYLES.header}>Login</Text>
      <Form />
    </View>
  )
}

export default Login
