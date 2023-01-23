import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

// recoil
import { RecoilRoot } from 'recoil'

// amplify 
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

//rutas indice 
import Router from './src/router'


export default function App() {
  return (

    <SafeAreaProvider>
      <PaperProvider>
        <RecoilRoot>
          <Router />
          <StatusBar style="auto" />
        </RecoilRoot>
      </PaperProvider>
    </SafeAreaProvider>

  );
}


