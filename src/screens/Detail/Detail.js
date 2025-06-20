import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { styles } from './Detail.style';
const Detail = () => {
  const route = useRoute();
  const { id, title, publisher, pages, villains, image } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.head_text}>📚 Kitap Detayı</Text>

      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>📌 Yayıncı:</Text>
        <Text style={styles.value}>{publisher}</Text>

        <Text style={styles.label}>📄 Sayfa Sayısı:</Text>
        <Text style={styles.value}>{pages}</Text>

        {Array.isArray(villains) && villains.length > 0 && (
          <>
            <Text style={styles.label}>👿 Kötü Karakterler:</Text>
            <View style={styles.villainList}>
              {villains.map((v, index) => (
                <Text key={index} style={styles.villainItem}>• {v.name}</Text>
              ))}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Detail;

