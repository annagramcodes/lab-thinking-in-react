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
      <Heading py={10}>Ironstore</Heading>
      <SearchBar filterProducts={filterProducts} />
      <ProduktTable products={productsData} />
    </div>
  );
}

export default ProduktPage;
