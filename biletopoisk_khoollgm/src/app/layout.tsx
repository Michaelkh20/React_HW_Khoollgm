import Header from '@/components/Header/Header';
import './globals.css';
import styles from './layout.module.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import StoreProvider from '@/redux/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <StoreProvider>
          <div className={styles.layout}>
            <Header />
            <main className={styles.content}>{children}</main>
            <Footer />
          </div>
        </StoreProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
