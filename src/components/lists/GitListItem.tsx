import React from 'react';
import {GitListItemProps} from '../../@types/github.types';
import {
  GitItemAvatar,
  GitItemAvatarColumn,
  GitItemAvatarWrapper,
  GitItemDivider,
  GitItemInfoColumn,
  GitItemInfoRow,
  GitItemName,
  GitItemOwner,
  GitItemRate,
  GitItemsWrapper,
} from './lists.styles';

const GitListItem = (props: GitListItemProps) => {
  const {item} = props;
  return (
    <GitItemsWrapper>
      <GitItemAvatarColumn>
        <GitItemAvatarWrapper>
          <GitItemAvatar
            resizeMode={'cover'}
            source={{uri: item.owner.avatar_url}}
          />
        </GitItemAvatarWrapper>
      </GitItemAvatarColumn>
      <GitItemInfoColumn>
        <GitItemInfoRow>
          <GitItemName>{item.name}</GitItemName>
          <GitItemRate>{item.rate} stars</GitItemRate>
        </GitItemInfoRow>
        <GitItemOwner>{item.owner.login}</GitItemOwner>
        <GitItemDivider />
      </GitItemInfoColumn>
    </GitItemsWrapper>
  );
};
export default GitListItem;
