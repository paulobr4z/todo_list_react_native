import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    height: 173,
    backgroundColor: colors.gray_700,
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    marginTop: 70,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 4,
    position: 'absolute',
    bottom: -28,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: colors.gray_500,
    borderRadius: 5,
    color: colors.white,
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
