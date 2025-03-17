import {StyleSheet} from 'react-native';
import {width} from 'src/constants/scaler';

const ITEM_WIDTH = width * 0.32;

export const styles = StyleSheet.create({
  bookContainer: {
    gap: 4,
    width: ITEM_WIDTH,
  },
  bookImage: {
    height: 160,
    backgroundColor: '#000',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH,
  },
  sectionLabel: {
    paddingLeft: 16,
    marginBottom: 16,
  },
});
