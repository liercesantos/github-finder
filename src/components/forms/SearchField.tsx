import React, {useState} from 'react';
import {Field, FieldWrapper, IconWrapper} from './fields.styles';
import SearchIcon from '../../assets/svg/SearchIcon';
import {SearchFieldProps} from '../../@types/fields.types';

const SearchField = (props: SearchFieldProps) => {
  const {onSearch} = props;
  const [searchText, setSearchText] = useState<string | undefined>(undefined);

  return (
    <FieldWrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <Field
        placeholder={'Busca por repositórios'}
        placeholderTextColor="#3c3c4399"
        onChangeText={setSearchText}
        onBlur={() => {
          onSearch(searchText);
        }}
        value={searchText}
      />
    </FieldWrapper>
  );
};
export default SearchField;
