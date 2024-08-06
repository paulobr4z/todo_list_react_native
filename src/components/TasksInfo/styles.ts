import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 55,
  },
  containerInfo: {
    flexDirection: 'row',
    gap: 8,
  },
  createdText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  doneText: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  counter: {
    backgroundColor: colors.gray_400,
    borderRadius: 200,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counterText: {
    fontSize: 12,
    color: colors.gray_200,
    fontWeight: 'bold',
  },
})
