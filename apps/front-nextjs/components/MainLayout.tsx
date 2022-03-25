import { Head } from './Head';
import { ReactElement } from 'react';

export function MainLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head />
      <main>{children}</main>
    </>
  );
}
