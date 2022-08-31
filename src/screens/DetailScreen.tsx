import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Movie } from '../interfaces/movieinterfaces'
import { MovieDetail } from '../components/MovieDetail';
import { View } from 'react-native';
import {styles} from '../theme/appTheme'

interface Props extends StackScreenProps<any,any>{};

export const DetailScreen = ({route}:Props) => {

  const movie= route.params as Movie
 

  
  // console.log(movie)

  return (
    <View style={{marginTop:10 }} >
    <MovieDetail movie={movie}/>
    </View>
  )
}


