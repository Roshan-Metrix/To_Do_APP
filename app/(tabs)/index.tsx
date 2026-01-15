import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme, { ColorScheme } from '@/hooks/useTheme'
import { useQuery } from 'convex/react';

export default function Index() {

 const { toggleDarkMode,colors } = useTheme();

const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>TodosScreen</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={{fontSize:34}}>Toggle The Mode</Text>
      </TouchableOpacity>
    </View>
  )
};

const createStyles = (colors:ColorScheme) => {
  const styles = StyleSheets.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      gap: 10,
      backgroundColor: colors.gb
    },
    content:{
      fontSize:22,
    },
  });
  return styles;
}

// 1:18