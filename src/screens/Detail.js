import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

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
const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
  },
  head_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6F3C',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 280,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  villainList: {
    marginTop: 8,
  },
  villainItem: {
    fontSize: 14,
    color: '#444',
    marginLeft: 8,
    marginBottom: 2,
  },
});
