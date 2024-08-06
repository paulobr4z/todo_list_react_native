import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export function EmptyTaskList() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.clipboard}
        source={require('../../assets/clipboard.png')}
        alt="clipboard"
      />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
