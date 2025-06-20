import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CardComponent.style';

const CardComponent = ({ id, title, image, villains, pages, publisher }) => {
  const navigation = useNavigation();

  const gotoDetail = () => {
    navigation.navigate('Detail', {
      id,
      title,
      publisher,
      pages,
      villains,
      image,
    });
  };

  return (
    <TouchableOpacity onPress={gotoDetail} style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;

