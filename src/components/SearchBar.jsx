import {
  Checkbox,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  CheckboxGroup,
} from '@chakra-ui/react';
import { useState } from 'react';

function SearchBar(props) {
  const { filterProducts } = props;

  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleFilter = (e) => {
    setSearch(e.target.value);
    filterProducts(e.target.value, isChecked);
  };

  const handleCheck = (e) => {
    const { checked } = e.target;

    setIsChecked(checked);
    filterProducts(search, checked);
  };

  return (
    <div>
      <Stack mx="auto" mb={6} width="lg" spacing={6}>
        <InputGroup>
          <InputLeftAddon children="Search" />
          <Input
            name="search"
            value={search}
            type="text"
            onChange={handleFilter}
          />
        </InputGroup>

        <Checkbox value={isChecked} onChange={handleCheck}>
          Show only available items
        </Checkbox>
      </Stack>
    </div>
  );
}

export default SearchBar;
