import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {

  return (
    <View className="items-center justify-center h-[85vh]">
      <Link style={{paddingBottom: 25}} href="/home">GO TO HOME PAGE</Link>
      <Text>---</Text>
      <Link style={{paddingTop: 25}} href="/auth">GO TO LOGIN PAGE</Link>
    </View>
  );
}