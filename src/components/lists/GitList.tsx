import React from 'react';
import {GitContainer} from './lists.styles';
import {FlatList} from 'react-native';
import useGithub from '../../hooks/use.github';
import GitListItem from './GitListItem';

const GitList = () => {
  const {repositories, fetchMoreData} = useGithub();

  return (
    <GitContainer>
      {repositories.data.length > 0 ? (
        <FlatList
          /* eslint-disable-next-line react-native/no-inline-styles */
          contentContainerStyle={{flexGrow: 1}}
          data={repositories.data}
          renderItem={({item}) => <GitListItem item={item} />}
          onEndReachedThreshold={0}
          onEndReached={fetchMoreData}
        />
      ) : (
        <></>
      )}
    </GitContainer>
  );
};

export default GitList;
