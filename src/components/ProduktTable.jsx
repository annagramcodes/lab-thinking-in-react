import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import ProductRow from './ProductRow';

function ProduktTable(props) {
  const { products } = props;

  return (
    <TableContainer mx="auto" width="lg">
      <Table variant="simple" colorScheme="pink">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((item) => {
            return <ProductRow product={item} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ProduktTable;
