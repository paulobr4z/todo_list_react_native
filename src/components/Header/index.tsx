import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { colors } from '../../constants/colors'

export function Header() {
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
          // onChangeText={setParticipantName}
          // value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
