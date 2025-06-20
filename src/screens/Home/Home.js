import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/slice/bookSlice";
import CardComponent from "../../component/CardComponent/CardComponent";
import { styles } from "./Home.style"; // Assuming styles are defined in Home.style.js
const Home = () => {
  const { list, error, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF6F3C" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>Error: {error}</Text>
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
      villains={item.villains}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Stephen King Books</Text>
      <FlatList
        data={list}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
