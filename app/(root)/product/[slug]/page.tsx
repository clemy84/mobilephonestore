import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product-price';
import { Section } from 'lucide-react';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Colum */}
          <div className="col-span-2">{/* {images component} */}</div>
          {/* details clumn */}
          <div className="col-span-2 p05">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviws
              </p>
              <div className="flex flex-col sm:items-center gap-3">
                <ProductPrice value={Number(product.price)} className='w-24 rounded-full bg-green-100 text-green-700 px-5 py-2'/>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProductDetailsPage;
