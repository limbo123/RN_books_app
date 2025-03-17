import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useBookStore} from 'src/store/useBookStore';
import Screen from 'src/components/Screen';
import BooksSections from 'src/components/BooksSections';
import TopBooksBanner from './components/TopBooksBanner';
import Text from 'src/components/CustomText';
import {styles} from './styles';

const BooksLibrary = () => {
  const {
    topBannerSlides,
    fetchTopBannerSlides,
    booksWithCategories,
    fetchBooksWithCategories,
  } = useBookStore();
  const {fetchBooks} = useBookStore();

  useEffect(() => {
    fetchTopBannerSlides();
    fetchBooksWithCategories();
    fetchBooks();
  }, [fetchBooks, fetchBooksWithCategories, fetchTopBannerSlides]);

  return (
    <Screen edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInset={{bottom: 40}}>
        <Text color="#D0006E" size={20} weigth="700" styles={styles.pageTitle}>
          Library
        </Text>
        <TopBooksBanner topBannerSlides={topBannerSlides} />
        <BooksSections booksSections={booksWithCategories} />
      </ScrollView>
    </Screen>
  );
};

export default BooksLibrary;
