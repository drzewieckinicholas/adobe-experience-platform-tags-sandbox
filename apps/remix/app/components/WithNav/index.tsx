import { Nav } from '..';

export default function WithNav() {
  const items = [
    { href: '/', text: 'Home' },
    { href: '/products', text: 'Products' },
    { href: '/cart', text: 'Cart' },
  ];

  return (
    <>
      <Nav items={items} />
    </>
  );
}
