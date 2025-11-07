import { Outlet } from 'react-router';
import Directory from '../../components/Directory/Directory.jsx';

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;