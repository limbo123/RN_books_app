import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { styles } from "./styles";
import { width } from 'src/constants/scaler';

interface BannerCarouselProps {
  data: any[];
  renderItem: (item: any) => ReactNode;
}

export const IMAGE_WIDTH = width - 32; // 16 px horizontal padding
export const IMAGE_HEIGHT = IMAGE_WIDTH * 0.45;

const BannerCarousel: FC<BannerCarouselProps> = ({ data, renderItem }) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        data={data}
        autoPlay
        autoPlayInterval={3000}
        height={IMAGE_HEIGHT}
        onProgressChange={progress}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={width}
        style={styles.carousel}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 0,
        }}
        renderItem={(item) => (
          <View style={styles.carouselItem}>
            <View style={styles.imageContainer}>{renderItem(item)}</View>
          </View>
        )}
      />
      <View style={styles.paginationContainer}>
        <Pagination.Basic
          progress={progress}
          data={data}
          size={7}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={styles.pagination}
        />
      </View>
    </View>
  );
};

export default BannerCarousel;