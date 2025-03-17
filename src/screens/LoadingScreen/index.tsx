import React, {useEffect} from 'react';
import Text from 'src/components/CustomText';
import Screen from 'src/components/Screen';
import {ImageBackground, View} from 'react-native';
import {Bar} from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProps} from 'src/navigation/types';
import {SCREENS} from 'src/navigation/screens';
import Image from 'src/components/CustomImage';
import { width, height } from 'src/constants/scaler';
import { styles } from "./styles";

const LoadingScreenBg = require('src/assets/images/LoadingScreenBg.png');
const HeartsBg = require('src/assets/images/HeartsBg.png');
const Logo = require('src/assets/images/Logo.png');

const LoadingScreen = () => {
  const navigation = useNavigation<MainStackNavigationProps>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: SCREENS.BOOK_LIBRARY_SCREEN}],
      });
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigation]);

  return (
    <Screen isDisabledEdges>
      <ImageBackground source={LoadingScreenBg} style={{width, height}}>
        <Image
          source={HeartsBg}
          style={[{width, height}, styles.heartsBg]}
          resizeMode="contain"
        />
        <View
          style={styles.mainContent}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text size={24} weigth="700" color="#FFFFFFCC">
            Welcome to Book App
          </Text>
          <Bar
            style={styles.loadingBar}
            indeterminate={true}
            width={width - 100}
            useNativeDriver={true}
            unfilledColor={'#FFFFFF33'}
            borderWidth={0}
            color={'#FFFFFF'}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};

export default LoadingScreen;
