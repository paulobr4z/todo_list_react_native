import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { colors } from '../../constants/colors'

interface IHeader {
  onAddTask: () => void
  onChangeText: (inputText: string) => void
  clearInputText: () => void
  inputText: string
}

export function Header({
  onAddTask,
  onChangeText,
  clearInputText,
  inputText,
}: IHeader) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
        alt="logo"
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray_300}
          onChangeText={onChangeText}
          onBlur={clearInputText}
          value={inputText}
          onSubmitEditing={onAddTask}
        />

        <TouchableOpacity style={styles.button} onPress={onAddTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
