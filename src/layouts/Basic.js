import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function BasicLayout({ children }) {
  // <Header
  //       hasNav={Boolean(Component.layoutProps?.Layout?.nav)}
  //       navIsOpen={navIsOpen}
  //       onNavToggle={(isOpen) => setNavIsOpen(isOpen)}
  //       title={meta.title}
  //       section={section}
  //     />
  return (
    <>
      <Header
        hasNav={false}
        navIsOpen={false}
        onNavToggle={(isOpen) => console.log('open')}
        title={'title'}
        section={true}
      />
      <main className="max-w-5xl mx-auto relative z-20 xl:max-w-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
