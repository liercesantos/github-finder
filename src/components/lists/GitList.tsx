import React from 'react';
import {GitContainer} from './lists.styles';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {GitListProps} from '../../@types/github.types';

const GitList = (props: GitListProps) => {
  return (
    <GitContainer>
      {props.repositories.loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={props.repositories.data}
          renderItem={({item}) => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
      )}
    </GitContainer>
  );
};

export default GitList;
