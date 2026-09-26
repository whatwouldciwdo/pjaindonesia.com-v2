import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SvgSprites from '@/components/svg/SvgSprites';
import GlobalAnimationProvider from '@/components/providers/GlobalAnimationProvider';

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SvgSprites />
      <GlobalAnimationProvider />
      <Header />
      {children}
      <Footer />
    </>
  );
}
