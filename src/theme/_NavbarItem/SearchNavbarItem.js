import React, {useState, useEffect, useMemo} from 'react';
import SearchModal from '../../components/SearchModal';
import SearchShortcutKeys from '../../components/SearchShortcutKeys';

export default function SearchNavbarItem() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleKeyDown = (e) => {

      const isG = e.key.toLowerCase() === 'g';
      if ((e.metaKey && isG) || (e.ctrlKey && isG)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <button className={"search-icon-btn"} onClick={() => setOpen(true)} title="Search">
        <SearchShortcutKeys/>
        <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"
             stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <circle cx="14" cy="14" r="12"/>
          <path d="M23 23 L30 30"/>
        </svg>
      </button>
      <SearchModal isOpen={open} onClose={() => setOpen(false)}/>
    </>
  );
}
