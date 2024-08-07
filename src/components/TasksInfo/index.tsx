import { View, Text } from 'react-native'
import { styles } from './styles'

interface ITasksInfo {
  created: number
  done: number
}

export function TasksInfo({ created = 0, done = 0 }: ITasksInfo) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{created}</Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.doneText}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{done}</Text>
        </View>
      </View>
    </View>
  )
}
