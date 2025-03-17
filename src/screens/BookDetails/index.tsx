import React, {FC, useEffect, useState} from 'react';
import {View, ImageBackground, Pressable} from 'react-native';
import {useBookStore} from 'src/store/useBookStore';
import {
  Book,
  fetchBookById,
  fetchDetailsCarouselBooks,
} from 'src/services/BooksService';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MainStackRouteParams} from 'src/navigation/types';
import {MainStackNavigationProps} from 'src/navigation/types';
import Screen from 'src/components/Screen';
import {ScrollView} from 'react-native-gesture-handler';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Image from 'src/components/CustomImage';
import {SCREENS} from 'src/navigation/screens';
import {styles} from './styles';
import BookDetailsContainer from './components/BookDetailsContainer';
import BookDetailsCarouselContainer from './components/BookDetailsCarouselContainer';

const ArrowBack = require('src/assets/icons/ArrowBack.png');
const BookDetailsBg = require('src/assets/images/BookDetailsBg.png');

const BookDetails: FC = () => {
  const {youWillLikeSection, fetchYouWillLikeSection} = useBookStore();
  const route = useRoute<MainStackRouteParams<SCREENS.BOOK_DETAILS_SCREEN>>();
  const [carouselBooks, setCarouselBooks] = useState<Book[]>([]);
  const {bookId} = route?.params ?? {};
  const [currentSlideBook, setCurrentSlideBook] = useState<Book>();
  const carouselRef = React.useRef<ICarouselInstance>(null);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<MainStackNavigationProps>();

  // if we consider that in normal conditions each book will have different content
  useEffect(() => {
    (async () => {
      // Scroll to top and to the first item
      scrollViewRef?.current?.scrollTo({y: 0});
      carouselRef?.current?.scrollTo({index: 0, animated: true});

      fetchYouWillLikeSection();
      const carouselBooksResponse = await fetchDetailsCarouselBooks();
      const bookDetails = await fetchBookById(bookId);
      if (carouselBooksResponse && bookDetails) {
        const filteredCarousel = carouselBooksResponse.filter(
          book => book.id !== bookId,
        );
        setCurrentSlideBook(bookDetails);
        setCarouselBooks([bookDetails, ...filteredCarousel]);
      }
    })();
  }, [bookId, fetchYouWillLikeSection]);

  return (
    <Screen isDisabledEdges>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        ref={scrollViewRef}>
        <View>
          <ImageBackground
            source={BookDetailsBg}
            style={styles.bgImage}
            resizeMode="cover">
            <View
              style={[
                styles.header,
                {paddingTop: insets.top === 0 ? 25 : insets.top + 10},
              ]}>
              <Pressable onPress={navigation.goBack}>
                <Image style={styles.backButtonImg} source={ArrowBack} />
              </Pressable>
            </View>
            <BookDetailsCarouselContainer
              initialBookId={bookId}
              setCurrentSlideBook={setCurrentSlideBook}
              currentSlideBook={currentSlideBook}
              carouselBooks={carouselBooks}
              carouselRef={carouselRef}
            />
          </ImageBackground>
        </View>

        <BookDetailsContainer
          currentSlideBook={currentSlideBook}
          youWillLikeSection={youWillLikeSection}
        />
      </ScrollView>
    </Screen>
  );
};

export default BookDetails;
