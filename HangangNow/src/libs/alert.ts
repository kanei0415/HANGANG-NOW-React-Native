import { Alert, Platform, ToastAndroid } from 'react-native';

export function alertMessage(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert('알림', msg);
  }
}
