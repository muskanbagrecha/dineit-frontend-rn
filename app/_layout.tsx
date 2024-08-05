import Header from '@/components/custom/Header';
import { Stack } from 'expo-router';

function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        header: () => {
          console.log('Rendering Header');
          return <Header />}
      }} />
    </Stack>
  );
}
export default StackLayout;