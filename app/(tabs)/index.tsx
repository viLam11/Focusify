import { View, Text, Image, TouchableOpacity } from 'react-native';
import "../../global.css";
import { Link } from 'expo-router';
export default function Index() {
  return (
    <View className='mt-10 bg-[#ff6347]'>
      <View className='h-3/4 items-center justify-center'>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
        />
        <View>
          <Text className='text-4xl font-bold text-white'>Focusify</Text>
        </View>
      </View>

      <View className='h-1/4 items-center '>
        <View>
          <TouchableOpacity>
            <Link href="/main/HomePage">
              <Text className='text-2xl font-semibold text-white'>Get Started</Text>
            </Link>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}
