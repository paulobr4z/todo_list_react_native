import { View, Text } from 'react-native'
import { styles } from './styles'

export function TasksInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>0</Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.doneText}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>2</Text>
        </View>
      </View>
    </View>
  )
}
