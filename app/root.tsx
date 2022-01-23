import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';

import tailwind from './styles/tailwind.generated.css';

export const meta: MetaFunction = () => {
  return { title: 'Alexander Baron' };
};

export const links: LinksFunction = () => {
  return [
    { href: tailwind, rel: 'stylesheet' },
    // Fonts
    { href: 'https://rsms.me/inter/inter.css', rel: 'stylesheet' },
    {
      href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
      rel: 'stylesheet',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
