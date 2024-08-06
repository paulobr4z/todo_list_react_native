import { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { CheckBox } from '@ui-kitten/components'
import { styles } from './styles'

export function Task() {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Image source={require('../../assets/trash.png')} alt="remove" />
      </TouchableOpacity>
    </View>
  )
}
