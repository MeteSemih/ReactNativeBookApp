import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  input:{
    height:40,
    borderWidth:1,
    borderRadius:20,
    padding:12,
    elevation:2,
    marginBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF6F3C',
    paddingTop:20,
  },
  listContent: {
    paddingBottom: 20,
  },
});