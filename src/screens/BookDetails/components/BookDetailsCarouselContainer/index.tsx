import React, {FC, Ref, useCallback} from 'react';
import {View} from 'react-native';
import {useBookStore} from 'src/store/useBookStore';
import SnapCarousel from 'src/components/carousels/SnapCarousel';
import {Book, fetchBookById} from 'src/services/BooksService';
import Text from 'src/components/CustomText';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import Image from 'src/components/CustomImage';
import {styles} from './styles';

interface BookDetailsCarouselContainerProps {
  currentSlideBook: Book | undefined;
  setCurrentSlideBook: (book: Book) => void;
  carouselBooks: Book[];
  initialBookId: number;
  carouselRef: Ref<ICarouselInstance>;
}

const BookDetailsCarouselContainer: FC<BookDetailsCarouselContainerProps> = ({
  currentSlideBook,
  setCurrentSlideBook,
  carouselBooks,
  initialBookId,
  carouselRef,
}) => {
  const {fetchYouWillLikeSection} = useBookStore();

  const renderItem = useCallback((item: {item: Book}) => {
    return (
      <Image
        style={styles.bookItem}
        source={{uri: item.item.cover_url}}
        resizeMode="cover"
      />
    );
  }, []);

  const onSlideChange = useCallback(
    async (index: number) => {
      fetchYouWillLikeSection();
      const bookDetails = await fetchBookById(
        index === 0 ? initialBookId : carouselBooks[index].id,
      );
      if (bookDetails) {
        setCurrentSlideBook(bookDetails);
      }
    },
    [initialBookId, carouselBooks, fetchYouWillLikeSection],
  );
  return (
    <View>
      <SnapCarousel
        data={carouselBooks}
        renderItem={renderItem}
        onSlideChange={onSlideChange}
        ref={carouselRef}
      />
      <View style={styles.currentBookInfo}>
        <Text color="#fff" size={20} weigth="700" styles={styles.textCenter}>
          {currentSlideBook?.name}
        </Text>
        <Text
          color="#FFFFFFCC"
          size={14}
          weigth="700"
          styles={styles.textCenter}>
          {currentSlideBook?.author}
        </Text>
      </View>
    </View>
  );
};

export default BookDetailsCarouselContainer;
