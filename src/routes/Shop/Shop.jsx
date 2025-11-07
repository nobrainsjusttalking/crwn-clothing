import { Routes, Route } from 'react-router';

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category.jsx';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;