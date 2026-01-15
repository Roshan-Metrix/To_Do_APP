import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'

const TodosScreen = () => {

 const { toggleDarkMode } = useTheme();

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:4}}>
      <Text>TodosScreen</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={{fontSize:34}}>Toggle The Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodosScreen