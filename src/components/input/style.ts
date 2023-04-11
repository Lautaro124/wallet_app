import { StyleSheet } from 'react-native'
import TEXT_UTILS_STYLES from '../../constants/texts'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    height: 40,
    fontSize: 20,
    color: COLORS.TEXT,
    borderBottomWidth: 1,
    padding: 5
  },
  error: {
    ...TEXT_UTILS_STYLES.label,
    color: '#C5626E',
    opacity: 1
  }
})

export default styles
