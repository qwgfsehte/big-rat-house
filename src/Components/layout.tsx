import { ReactNode } from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
