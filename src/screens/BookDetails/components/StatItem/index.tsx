import {FC} from 'react';
import {View} from 'react-native';
import Text from 'src/components/CustomText';
import {styles} from './styles';

interface StatItemProps {
  label: string;
  value?: string;
}

const StatItem: FC<StatItemProps> = ({label, value}) => (
  <View style={styles.stat}>
    <Text size={18} weigth="700" color="#0B080F">
      {value}
    </Text>
    <Text size={12} color="D9D5D6">
      {label}
    </Text>
  </View>
);

export default StatItem;
