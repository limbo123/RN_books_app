import React, {FC, ReactNode, Ref} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {width} from 'src/constants/scaler';
import {styles} from './styles';

interface SnapCarouselProps {
  data: any[];
  ref?: Ref<ICarouselInstance>;
  renderItem: (item: any) => ReactNode;
  onSlideChange?: (item: any) => void;
}

export const IMAGE_WIDTH = width * 0.7;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 1.3;

const SnapCarousel: FC<SnapCarouselProps> = ({
  data,
  ref,
  renderItem,
  onSlideChange,
}) => {
  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        data={data}
        height={IMAGE_HEIGHT}
        loop={false}
        pagingEnabled={true}
        snapEnabled={true}
        width={width}
        style={styles.carousel}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: width * 0.45,
        }}
        onSnapToItem={onSlideChange}
        renderItem={item => (
          <View style={styles.carouselItem}>
            <View style={styles.imageContainer}>{renderItem(item)}</View>
          </View>
        )}
      />
    </View>
  );
};

export default SnapCarousel;
