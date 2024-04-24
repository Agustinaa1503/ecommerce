'use client';

import { UserGroupIcon, HomeIcon, ArchiveBoxArrowDownIcon, BanknotesIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Perfil', href: '/dashboard', icon: HomeIcon },
  { name: 'Clientes', href: '/dashboard/clients', icon: UserGroupIcon},
  { name: 'Ventas', href: '/dashboard/sales', icon: BanknotesIcon },
  { name: 'Productos', href: '/dashboard/products', icon: ArchiveBoxArrowDownIcon},
  { name: 'Configuración', href: '/dashboard/settings', icon: Cog6ToothIcon},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href, 
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-800">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
