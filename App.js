import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={{fontSize:'2rem'}}>UFAL </Text>
        <StatusBar style="auto" />

          <Text style={styles.text}>SISTEMAS DE INFORMAÇÃO</Text>
          <Text style={styles.text}>DISPOSITIVOS MÓVEIS</Text>
          <Text style={styles.text}>7° PERÍODO</Text>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    
  },
  div: {
    borderWidth: '0.1rem',
    padding: '1rem',
    borderRadius: '2rem',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row'
  },

  text: {
    color: '#1C1C1C',
    fontSize: '1.2rem',
    padding: '0.5rem'
  }
});
