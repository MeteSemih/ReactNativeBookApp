import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../store/slice/bookSlice'
import CardComponent from '../component/CardComponent'

const Home = () => {

    const {list,error,loading} = useSelector((state)=> state.books)
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(fetchBooks())
    }, [dispatch])

    if(loading) {
     return(
       <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
       </View>
       )
    }
   
      if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
      </View>
    );
  }
    
    const renderItem = ({ item }) => (
    <CardComponent
      title={item.Title}
      image={`https://covers.openlibrary.org/b/isbn/${item.ISBN}-L.jpg`}
      id={item.id}
      publisher={item.Publisher}
      pages={item.Pages}
    />
  );

  return (
    <View style={styles.container}>
        <Text style={styles.head}>Stephan King Books</Text>
      <FlatList
        data={list}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#eee',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  head:{
    textAlign:"center",
    fontSize:24,
    alignItems:"center",
    marginTop:20,
    color:'#FF6F3C',
  }
  
});