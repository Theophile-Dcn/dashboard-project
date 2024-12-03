import Sidebar from '@/src/components/Sidebar';
import Topbar from '@/src/components/Topbar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Dashboard location',
  description: 'Dashboard location'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} h-screen bg-gray-100`}>
        <div className="flex h-full">
          {/* Sidebar */}
          <aside className="w-1/5 bg-green-300 shadow-lg">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Topbar */}
            <header className="h-16 bg-gray-200 shadow flex items-center w-full">
              <Topbar />
            </header>

            {/* Page Content */}
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
