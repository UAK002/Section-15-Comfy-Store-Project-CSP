import { Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

// export const loader = () => {
export const loader = async () => {
  const response = await customFetch(url);
  // console.log(response);
  const products = response.data.data;
  // return null;
  // return response.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default Landing;
