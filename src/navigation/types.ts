import { SCREENS } from 'src/navigation/screens';
import { RouteProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  [SCREENS.LOADING_SCREEN]: undefined;
  [SCREENS.BOOK_LIBRARY_SCREEN]: undefined;
  [SCREENS.BOOK_DETAILS_SCREEN]: { bookId: number };
};

export type MainStackNavigationProps = NativeStackNavigationProp<MainStackParamList>;

export type MainStackRouteParams<T extends keyof MainStackParamList> = RouteProp<{
  params: MainStackParamList[T];
}>;
