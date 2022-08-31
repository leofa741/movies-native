import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Movie } from '../interfaces/movieinterfaces';
import {styles} from '../theme/appTheme'

interface Props{
    movie:Movie
 
}

export const MoviePoster = (  {movie, }:Props  ) => {
    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation =useNavigation()
   
  return (
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={()=> navigation.navigate('DetailScreen',movie)}

       style={styles.cardimage}>   

          <View style={styles.shadow}>

          <Image
              source={{
                  uri
              }}
              style={styles.image}

          />
      </View>

      </TouchableOpacity>
  )

}
