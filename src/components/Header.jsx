import React from 'react';
import { LogoTipo } from '../assets/LogoTipo';

export default function Header() {
  return (
    <header className="bg-neutral-200 border-gray-200 dark:bg-neutral-800 p-4">
      <div className="w-full sm:max-w-3xl flex flex-wrap items-center justify-center mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="sr-only">Logo do site</span>
          <LogoTipo className="w-20 h-auto fill-neutral-950 dark:fill-neutral-100" />
        </a>
      </div>
    </header>
  );
}
