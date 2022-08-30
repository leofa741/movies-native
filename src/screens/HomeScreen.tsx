import React, { useEffect } from 'react'
import { useMovies } from '../hooks/useMovies';
import{  ActivityIndicator, Text, View} from 'react-native'
import {styles} from '../theme/appTheme'





export const HomeScreen = () => {

  const {PeliculasNew,loading} =useMovies()


  if(loading){

    return(
      <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator  color="blue" size={70}/>
      </View>
    )
  }




  return (
    <View>

      <Text style={styles.title}> Home - Screen</Text>

      <Text> pelicula:{PeliculasNew[9]?.title}</Text>
     


    </View>
  )
}
