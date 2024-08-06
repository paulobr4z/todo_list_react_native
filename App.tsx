import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/Home'

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home />
      <StatusBar style="light" />
    </ApplicationProvider>
  )
}
