import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
  },
  year: {
    fontSize: 16,
    marginBottom: 5,
  },
  booksActions: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonEdit: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonDelete: {
    backgroundColor: '#B42400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    backgroundColor: 'black',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
