import { Toaster } from '@/components/ui/toaster';

import Navbar from './Navbar';
import Footer from './Footer';

const Main = ({ children, home = false }: any) => {
  return (
    <div className="bg-[#fff]">
      <Navbar />
      <main className={!home ? `mt-20` : ''}>{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
