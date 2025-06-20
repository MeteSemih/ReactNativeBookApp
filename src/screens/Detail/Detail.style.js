import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
})