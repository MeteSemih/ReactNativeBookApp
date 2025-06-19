import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

const Detail = () => {

    const route = useRoute()
    const {id,title,publisher,pages,villains,image} = route.params

    useEffect(() => {
    }, [id])
    
    
  return (
    <View style={styles.container}>
      <Text style={styles.head_text}>Kitap Detay</Text>
      <View style={styles.detailContainer}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri:image }} style={styles.image}/>

      </View>
      <View>
        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:8}}>Yayıncı: {publisher}</Text>
        <Text style={{fontSize:16, marginBottom:4}}>Sayfa Sayısı: {pages}</Text>
  
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:64,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    head_text: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    detailContainer:{
        flex:1,
    },
    title:{
       textAlign:'center',
       fontSize:24,
       fontWeight:'bold',
       marginBottom:12,
    },
    image:{
        width:200,
        height:200,
        alignSelf:'center',
        resizeMode:'stretch',
        borderRadius:12,
    }

})