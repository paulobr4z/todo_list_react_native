import { Image, Text, TouchableOpacity, View } from 'react-native'
import { CheckBox } from '@ui-kitten/components'
import { styles } from './styles'
import { ITask } from '../../types'

interface ITaskProps {
  task: ITask
  setDone: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

export function Task({ task, setDone, deleteTask }: ITaskProps) {
  return (
    <View style={styles.container}>
      <CheckBox checked={task.done} onChange={() => setDone(task.id)} />
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, task.done ? styles.strikethrough : null]}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {task.content}
        </Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Image source={require('../../assets/trash.png')} alt="remove" />
      </TouchableOpacity>
    </View>
  )
}
