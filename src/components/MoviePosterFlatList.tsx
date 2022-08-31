import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Movie } from '../interfaces/movieinterfaces';
import {styles} from '../theme/appTheme'

interface Props{
    movie:Movie
    title:string
 
}

export const MoviePosterFlatList = (  {movie,title }:Props  ) => {
    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation =useNavigation()
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=>navigation.navigate('DetailScreen',movie)}
    
    style={styles.flatlist}>

    <Text style={styles.titleflatlist}>Votos :{title} </Text>
    
      <View style={styles.cardimageflatlist}>   

          <View style={styles.shadow}>

          <Image
              source={{
                  uri
              }}
              style={styles.image}

          />
      </View>

      </View>
      </TouchableOpacity>
  )
}


