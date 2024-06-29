import { Link } from '@remix-run/react';

type NavProps = {
  items: {
    href: string;
    text: string;
  }[];
};

export default function Nav({ items }: NavProps) {
  return (
    <nav>
      <ul>
        {items.map(({ href, text }) => (
          <li key={text}>
            <Link prefetch='intent' to={href} unstable_viewTransition>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
