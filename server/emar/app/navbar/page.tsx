'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by ensuring the component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log('Logging out...');
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-lg bg-white dark:bg-gray-900">
      <div className="text-xl font-bold dark:text-white">
        eMAR
      </div>
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <img
          src="/logo.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          Logout
        </button>

        {/* Dark/Light Mode Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
}
