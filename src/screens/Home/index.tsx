import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { TasksInfo } from '../../components/TasksInfo'
import { EmptyTaskList } from '../../components/EmptyTaskList'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TasksInfo />
      <EmptyTaskList />
    </View>
  )
}
