import { StyleSheet } from 'react-native'
import TEXT_UTILS_STYLES from '../../constants/texts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
    ...TEXT_UTILS_STYLES.header,
    marginBottom: 200
  }
})

export default styles
