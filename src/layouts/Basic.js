import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

export function BasicLayout({ children }) {
  return (
    <>
      <Header
        hasNav={false}
        navIsOpen={false}
        onNavToggle={(isOpen) => console.log('open')}
        title={'title'}
        section={true}
      />
      <main className="mx-auto relative z-20 xl:max-w-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
