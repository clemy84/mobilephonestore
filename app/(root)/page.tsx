import ProductList from '@/components/shared/product/product-list';
import { getLatestProsucts } from '@/lib/actions/product.actions';

export const metadata = {
  title: 'Home',
};

const HomePage = async  () => {
const latestProducts = await getLatestProsucts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" 
      limit={4}
      />
    </>
  );
};

export default HomePage;
