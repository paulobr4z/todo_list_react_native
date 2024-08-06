import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 24,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
  },
  clipboard: {
    marginTop: 48,
  },
  title: {
    color: colors.gray_300,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  text: {
    color: colors.gray_300,
    fontSize: 14,
  },
})
