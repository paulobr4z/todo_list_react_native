import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { TasksInfo } from '../../components/TasksInfo'
import { EmptyTaskList } from '../../components/EmptyTaskList'
import { Task } from '../../components/Task'
import { useState } from 'react'

export default function Home() {
  const [hasTask] = useState(true)

  return (
    <View style={styles.container}>
      <Header />
      <TasksInfo />
      {hasTask ? (
        <View style={styles.wrapper}>
          <Task />
          <Task />
          <Task />
        </View>
      ) : (
        <EmptyTaskList />
      )}
    </View>
  )
}
