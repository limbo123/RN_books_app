import React, {FC, JSX, ReactNode} from 'react';
import {View, FlatList} from 'react-native';

interface HorizontalListProps {
  data: any[];
  renderItem: (item: any) => JSX.Element;
}

const HorizontalList: FC<HorizontalListProps> = ({data, renderItem}) => {
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => {
        return <View style={{width: 8}} />;
      }}
    />
  );
};

export default HorizontalList;
