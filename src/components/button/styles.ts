
import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
  title: {
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.TEXT
  },
  container: {
    backgroundColor: COLORS.SECONDARY,
    paddingVertical: 15,
    borderRadius: 14
  }
})

export default styles
