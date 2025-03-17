import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import BooksSection from 'src/components/BooksSection';
import Text from 'src/components/CustomText';
import {styles} from './styles';
import StatItem from '../StatItem';
import {Book} from 'src/services/BooksService';
import PinkButton from 'src/components/PinkButton';

interface BookDetailsContainerProps {
  currentSlideBook: Book | undefined;
  youWillLikeSection: Book[];
}

const BookDetailsContainer: FC<BookDetailsContainerProps> = ({
  currentSlideBook,
  youWillLikeSection,
}) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.statsRow}>
        <StatItem label="Readers" value={currentSlideBook?.views} />
        <StatItem label="Likes" value={currentSlideBook?.likes} />
        <StatItem label="Quotes" value={currentSlideBook?.quotes} />
        <StatItem label="Genre" value={currentSlideBook?.genre} />
      </View>
      <View style={styles.divider} />
      <View style={styles.summarySection}>
        <Text size={18} weigth="700" styles={styles.sectionTitle}>
          Summary
        </Text>
        <Text size={14} color="#393637" styles={styles.summaryText}>
          {currentSlideBook?.summary}
        </Text>
      </View>
      <View style={styles.divider} />
      <View>
        <BooksSection
          name="You will also like"
          books={youWillLikeSection}
          labelStyles={{color: '#0B080F'}}
          bookNameStyles={{color: '#393637'}}
        />
      </View>
      <PinkButton text="Read Now" />
    </View>
  );
};

export default BookDetailsContainer;
