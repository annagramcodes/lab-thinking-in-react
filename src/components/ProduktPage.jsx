import { Heading } from '@chakra-ui/react';
import { useState } from 'react';
import jsonData from '../data.json';
import ProduktTable from './ProduktTable';
import SearchBar from './SearchBar';

function ProduktPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsData, setProductsData] = useState(jsonData);

  const filterProducts = (search, isChecked) => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    if (isChecked) {
      const availableProducts = filteredProducts.filter((product) => {
        return product.inStock === true;
      });
      setProductsData(availableProducts);
    } else {
      setProductsData(filteredProducts);
    }
  };

  return (
    <div>
      <Heading color="white" bg="pink.500" fontSize="6xl" pt={6} pb={6} mb={14}>
        Ironstore
      </Heading>
      <SearchBar filterProducts={filterProducts} />
      <ProduktTable products={productsData} />
    </div>
  );
}

export default ProduktPage;
