import React, { useEffect } from 'react'
import { useMovies } from '../hooks/useMovies';
import{ FlatList, ActivityIndicator, Dimensions, Text, View, ScrollView} from 'react-native'
import {styles} from '../theme/appTheme'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePosterFlatList } from '../components/MoviePosterFlatList';




const {width:windowWidth}=Dimensions.get('window')

export const HomeScreen = () => {

  const {NowPlaying,Popular,TopRated,Upcoming,loading} =useMovies()
  const {top}=useSafeAreaInsets();


  if(loading){

    return(
      <View style={{flex:1 ,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator  color="blue" size={70}/>
      </View>
    )
  }


  return (
<ScrollView>
    <View style={{marginTop:top }} >

      <Text style={styles.title}> Home - Screen</Text>

    {/* <MoviePoster movie={PeliculasNew[1]}/> */}

     <View style={styles.viewcarrusel}>

     <Carousel  
     data={NowPlaying!}
     renderItem={({item}:any)=>  <MoviePoster movie={item}/> }
     sliderWidth={windowWidth}
     itemWidth={250}
     
     />

</View>




  <FlatList
     data={Popular}
     renderItem={({item}:any)=>  <MoviePosterFlatList movie={item} title={item.vote_count}/> }
     keyExtractor={(item)=>item.id.toString()}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
  />


  <FlatList
     data={TopRated}
     renderItem={({item}:any)=>  <MoviePosterFlatList title={item.vote_count} movie={item} /> }
     keyExtractor={(item)=>item.id.toString()}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
  />

<FlatList
     data={Upcoming}
     renderItem={({item}:any)=>  <MoviePosterFlatList title={item.vote_count} movie={item} /> }
     keyExtractor={(item)=>item.id.toString()}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
  />



       </View>
       </ScrollView>
  )
}
