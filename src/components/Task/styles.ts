import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 12,
    borderColor: colors.gray_400,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.gray_500,
    padding: 12,
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    color: colors.gray_100,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: colors.gray_300,
  },
})
