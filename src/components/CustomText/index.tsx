import React, {FC, ReactNode} from 'react';
import {Text, StyleProp, TextProps, TextStyle} from 'react-native';

type CustomTextProps = {
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
  color?: string;
  size?: number;
  weigth?: TextStyle['fontWeight'];
} & TextProps;

const CustomText: FC<CustomTextProps> = ({
  styles,
  color,
  size,
  weigth,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          color,
          fontSize: size,
          fontFamily: 'NunitoSans-Regular',
          fontWeight: weigth,
        },
        styles,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
