import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';

export function createError(title: string, description: string): void {
  Toast.show({
    type: 'error',
    text1: title,
    text2: description,
  });
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}