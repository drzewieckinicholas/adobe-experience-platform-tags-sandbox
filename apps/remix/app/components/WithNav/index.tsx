import { Nav } from '../';

export default function WithNav() {
  const items = [
    { href: '/', text: 'Home' },
    { href: '/products', text: 'Products' },
  ];

  return (
    <>
      <Nav items={items} />
    </>
  );
}
