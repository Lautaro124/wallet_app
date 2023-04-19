import { COLORS } from './colors'
import { StyleSheet } from 'react-native'

const TEXT_UTILS_STYLES = StyleSheet.create({
  header: {
    fontStyle: 'normal',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    color: COLORS.TEXT
  },
  label: {
    fontStyle: 'normal',
    fontSize: 18,
    color: COLORS.TEXT_LABEL,
    opacity: 0.75
  },
  text: {
    fontStyle: 'normal',
    fontSize: 16,
    color: COLORS.TEXT
  }
})

export default TEXT_UTILS_STYLES
