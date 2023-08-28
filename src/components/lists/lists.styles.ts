import styled from 'styled-components/native';

export const GitContainer = styled.SafeAreaView`
  flex: 1;
`;
export const GitItemsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: calc(100% - 32px);
  padding: 16px 16px;
`;
export const GitItemDivider = styled.View`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  border-radius: 2px;
  background: #ebebeb;
`;
export const GitItemAvatarColumn = styled.View`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 52px;
`;
export const GitItemInfoColumn = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 52px;
  padding: 0 16px;
  margin: 8px 0;
`;
export const GitItemInfoRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const GitItemAvatarWrapper = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 100px;
  border-color: #d9d9d9;
  border-width: 3px;
`;
export const GitItemAvatar = styled.Image`
  width: 45.5px;
  height: 45.5px;
  border-radius: 100px;
`;
export const GitItemName = styled.Text`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.38px;
`;
export const GitItemOwner = styled.Text`
  color: #48484a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;
export const GitItemRate = styled.Text`
  color: #48484a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.078px;
`;
