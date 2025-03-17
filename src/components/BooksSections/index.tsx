import React, {FC} from 'react';
import {View} from 'react-native';
import {Book} from 'src/services/BooksService';
import BooksSection from 'src/components/BooksSection';

interface BooksSectionsProps {
  booksSections: {name: string; books: Book[]}[];
}

const BooksSections: FC<BooksSectionsProps> = ({booksSections}) => {
  return (
    <View>
      {booksSections.map(section => {
        return (
          <BooksSection
            key={section.name}
            name={section.name}
            books={section.books}
          />
        );
      })}
    </View>
  );
};

export default BooksSections;
