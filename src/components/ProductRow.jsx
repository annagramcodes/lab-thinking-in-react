import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

function ProductRow(props) {
  const { product } = props;
  return (
    <Tr>
      {product.inStock && <Td>{product.name}</Td>}
      {!product.inStock && <Td color="red">{product.name}</Td>}

      <Td>{product.price}</Td>
    </Tr>
  );
}

export default ProductRow;
