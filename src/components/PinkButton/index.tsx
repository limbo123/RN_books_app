import React, { FC } from 'react';
import Text from "src/components/CustomText"
import { styles } from "./styles";
import { TouchableOpacity } from 'react-native';

interface PinkButtonProps {
  text: string;
}

const PinkButton: FC<PinkButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.readNowButton}>
      <Text color={'#fff'} size={16} weigth="700">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PinkButton;
