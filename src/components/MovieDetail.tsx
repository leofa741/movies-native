import React from 'react'
import {  ScrollView } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { styles } from '../theme/appTheme';

import { Movie } from '../interfaces/movieinterfaces';


interface Props{
    movie:Movie 
}


export const MovieDetail = ({movie, }:Props ) => {
  
    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
    console.log(movie)
  return (
    <ScrollView>
    <Card style={styles.containerdetail}>
 
    
    <Card.Cover style={styles.cardimage2} source={{ uri }} />
    <Card.Content>
        <Title  style={styles.titleflatlist2} >{movie.title} </Title>
    </Card.Content>
   <Card.Content>
    <Paragraph>{movie.overview}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Add To Favourites</Button>
    </Card.Actions>
  </Card>
  </ScrollView>
    
  )
}
