import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CardComponent = ({id,title,image,villains,pages,publisher}) => {
    const navigation = useNavigation()

   const gotoDetail = () => {
    navigation.navigate('Detail',{
        id,
        title,
        publisher,
        pages,
        villains,
        image
    })
   }
 
  return (
    <TouchableOpacity onPress={gotoDetail} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  )
}

export default CardComponent

const styles = StyleSheet.create({
  container: {
    width: 160,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf:'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'stretch'
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingBottom:8,
  },
});