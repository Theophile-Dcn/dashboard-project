import { sidebarLinks } from '@/src/constant/sidebarLink';
import { Bagel_Fat_One } from 'next/font/google';
import Link from 'next/link';

const bagelFatOne = Bagel_Fat_One({
  weight: ['400'],
  subsets: ['latin']
});

export default function Sidebar() {
  return (
    <div className="p-4">
      <h1
        className={`text-2xl font-bold mb-4 text-white ${bagelFatOne.className} uppercase tracking-widest h-16`}
      >
        VanVenture
      </h1>
      <ul>
        {sidebarLinks.map((link) => (
          <li key={link.href} className="mb-6">
            <Link
              href={link.href}
              className="flex items-center hover:text-gray-400 gap-4"
            >
              <link.icon className="mr-2 text-white size-6" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
