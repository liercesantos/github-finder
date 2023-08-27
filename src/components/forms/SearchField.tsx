import React from 'react';
import {Field, FieldWrapper, IconWrapper} from './fields.styles';
import SearchIcon from '../../assets/svg/SearchIcon';
import {FieldProps} from '../../@types/fields.types';

const SearchField = (props: FieldProps) => {
  return (
    <FieldWrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <Field
        placeholder={'Busca por repositórios'}
        placeholderTextColor="#3c3c4399"
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </FieldWrapper>
  );
};
export default SearchField;
