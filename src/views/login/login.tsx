import { Text, View } from 'react-native'
import styles from './styles'
import Form from './components/form/form'
import TEXT_UTILS_STYLES from '../../constants/texts'

const Login = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.header}>Login</Text>
      <Form />
    </View>
  )
}

export default Login
