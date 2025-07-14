import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.scss';

const Directory = ({categories}) => {
  console.log(categories);
  return (
    <div className="directory-container">
      {
        categories.map(({title, id, imageUrl}) => {
          return (
            <CategoryItem key={`category-container-${id}`} title={title} imageUrl={imageUrl} />
          );
        })
      }
    </div>
  );
};

export default Directory;