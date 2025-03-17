import React, {FC, ReactNode} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

type CustomImage = {
  source: FastImageProps['source'];
} & FastImageProps;

const CustomImage: FC<CustomImage> = ({...props}) => {
  return <FastImage {...props} />;
};

export default CustomImage;
