import { StyleSheet } from 'react-native'
import TEXT_UTILS_STYLES from '../../constants/texts'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  header: {
    ...TEXT_UTILS_STYLES.header,
    marginBottom: 200
  }
})

export default styles
