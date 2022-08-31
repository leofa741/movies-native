import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    titleflatlist: {
        fontSize: 10,
        marginBottom: 10
    },
    titleflatlist2: {
        fontSize: 14,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20
    },
    image:{
      flex:1,
      borderRadius:25,      
      
    }, 
    shadow:{
        flex:1,
       
    },
    cardimage:{

        width:250,
        height:370  ,
        backgroundColor: 'red',
        borderRadius: 25,
        shadowColor: "#FC0A0A",
        shadowOffset: { width: 1,  height: 2,  },
        shadowOpacity: 0.5,
        shadowRadius: 25,
        elevation: 25, 
   
    },
    cardimage2:{

        width:340,
        height:470  ,
        backgroundColor: 'red',
        borderRadius: 25,
        shadowColor: "#FC0A0A",
        shadowOffset: { width: 1,  height: 2,  },
        shadowOpacity: 0.5,
        shadowRadius: 25,
        elevation: 25, 
       
 
          
    },
    cardimageflatlist:{

        width:170,
        height:230  ,
   
        borderRadius: 25,
        shadowColor: "#FC00FF" ,
        shadowOffset: { width: 2,  height: 2,  },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        elevation: 9, 
    
        padding:4
          
    },
    viewcarrusel:{
        height:380,        
    },
    flatlist:{
      
        height:280
    },
    containerdetail :{
    
        alignContent:'center',
        margin:10
    }

});