import { useEffect, useState } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Header } from '../../components/Header'
import { TasksInfo } from '../../components/TasksInfo'
import { EmptyTaskList } from '../../components/EmptyTaskList'
import { Task } from '../../components/Task'
import { uuid } from '../../utils'
import { styles } from './styles'
import { ITask } from '../../types'

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputText, setInputText] = useState('')
  const [qtDone, setQtDone] = useState(0)

  function handleGetInputText(text: string) {
    setInputText(text)
  }

  function handleTaskAdd() {
    const newTask = {
      id: uuid(),
      content: inputText,
      done: false,
    }

    setTasks((prevState) => [...prevState, newTask])
    setInputText('')
  }

  function doneTask(id: string) {
    const taskIndex = tasks.findIndex((task) => task.id === id)

    const updateTaskDone = [...tasks]

    updateTaskDone[taskIndex].done = !updateTaskDone[taskIndex].done

    setTasks(updateTaskDone)
  }

  useEffect(() => {
    function getQtDone() {
      const qtDone = tasks.filter((task) => task.done === true)
      setQtDone(qtDone.length)
    }

    getQtDone()
  }, [tasks])

  function deleteTask(id: string) {
    Alert.alert('Remover', `Remover tarefa?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Header
        onAddTask={handleTaskAdd}
        onChangeText={handleGetInputText}
        clearInputText={() => setInputText('')}
        inputText={inputText}
      />
      <TasksInfo created={tasks.length} done={qtDone} />
      <View style={styles.wrapper}>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Task task={item} setDone={doneTask} deleteTask={deleteTask} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyTaskList />}
        />
      </View>
    </View>
  )
}
