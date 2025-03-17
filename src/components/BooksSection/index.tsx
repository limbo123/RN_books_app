import React, {FC, useCallback} from 'react';
import {View, Pressable, StyleProp} from 'react-native';
import {Book} from 'src/services/BooksService';
import HorizontalList from 'src/components/HorizontalList';
import {useNavigation} from '@react-navigation/native';
import Text from 'src/components/CustomText';
import Image from 'src/components/CustomImage';
import {MainStackNavigationProps} from 'src/navigation/types';
import {SCREENS} from 'src/navigation/screens';
import {styles} from './styles';

interface BooksSectionProps {
  name: string;
  books: Book[];
  labelStyles?: StyleProp<Text>;
  bookNameStyles?: StyleProp<Text>;
}

const BooksSection: FC<BooksSectionProps> = ({
  name,
  books,
  labelStyles,
  bookNameStyles,
}) => {
  const navigation = useNavigation<MainStackNavigationProps>();
  const renderBookItem = useCallback(
    (item: {index: number; item: Book}) => {
      return (
        <Pressable
          style={[
            item.index === 0 && {marginLeft: 16},
            item.index === books.length - 1 && {marginRight: 16},
            styles.bookContainer,
          ]}
          onPress={() =>
            navigation.navigate(SCREENS.BOOK_DETAILS_SCREEN, {
              bookId: item.item.id,
            })
          }>
          <Image
            style={styles.bookImage}
            source={{uri: item.item.cover_url}}
            resizeMode="cover"
          />
          <Text
            color="#FFFFFFB2"
            size={16}
            weigth="600"
            styles={bookNameStyles}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.item.name}
          </Text>
        </Pressable>
      );
    },
    [bookNameStyles, books.length, navigation],
  );

  return (
    <View style={{marginBottom: 24}}>
      <Text
        color="#fff"
        size={20}
        weigth="700"
        styles={[styles.sectionLabel, labelStyles]}>
        {name}
      </Text>
      <HorizontalList data={books} renderItem={renderBookItem} />
    </View>
  );
};

export default BooksSection;
