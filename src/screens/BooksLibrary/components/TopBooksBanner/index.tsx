import React, {FC, useCallback} from 'react';
import {View, Pressable} from 'react-native';
import BannerCarousel from 'src/components/carousels/BannerCarousel';
import {TopBannerSlide} from 'src/services/BooksService';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProps} from 'src/navigation/types';
import {SCREENS} from 'src/navigation/screens';
import Image from 'src/components/CustomImage';
import {styles} from './styles';

interface TopBooksBannerProps {
  topBannerSlides: TopBannerSlide[];
}

const TopBooksBanner: FC<TopBooksBannerProps> = ({topBannerSlides}) => {
  const navigation = useNavigation<MainStackNavigationProps>();

  const renderItem = useCallback(
    (item: {item: TopBannerSlide}) => (
      <Pressable
        onPress={() =>
          navigation.navigate(SCREENS.BOOK_DETAILS_SCREEN, {
            bookId: item.item.book_id,
          })
        }>
        <Image
          style={styles.image}
          source={{uri: item.item.cover}}
          resizeMode="cover"
        />
      </Pressable>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <BannerCarousel data={topBannerSlides} renderItem={renderItem} />
    </View>
  );
};

export default TopBooksBanner;
