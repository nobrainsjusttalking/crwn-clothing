import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ProductCard from '../../components/ProductCard/ProductCard.jsx';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

import { CategoryContainer, Title } from './Category.js';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {
          products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;