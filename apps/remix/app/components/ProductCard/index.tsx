import { Link } from '@remix-run/react';

import type { Product } from '../../types';

type ProductCardProps = {
  attributes?: Array<keyof Product>;
  product: Product;
  titleAs?: 'link' | 'text';
};

export default function ProductCard({
  attributes = [],
  product,
  titleAs = 'text',
}: ProductCardProps) {
  const { id, title } = product;

  const titleElement =
    titleAs === 'link' ? (
      <Link prefetch='intent' to={`/products/${id}`} unstable_viewTransition>
        {title}
      </Link>
    ) : (
      <>{title}</>
    );

  return (
    <article>
      <h2>{titleElement}</h2>
      {attributes.length > 0 && (
        <dl>
          {attributes.map((attribute) => (
            <div key={attribute}>
              <dt>{attribute}</dt>
              <dd>{product[attribute]}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
