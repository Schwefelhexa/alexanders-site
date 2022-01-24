import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return <div className="lg:mx-16 lg:my-12 mx-6 my-4">{children}</div>;
}
