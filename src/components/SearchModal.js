import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import Search from '../data/Search';

export default function SearchModal({isOpen, onClose}) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = (from, keyword) => {
    const tokens = keyword.toLowerCase().split(/\s+/);
    return Object.values(Search).flatMap(data => {
      return data.data.map(entry => {
        let score = 0;
        tokens.forEach(token => {
          if (entry.title.toLowerCase().includes(token)) score += 3;
          if (entry?.tags && entry.tags.join(",").includes(token)) score += 2;
          if (entry.description.toLowerCase().includes(token)) score += 1;
        });
        return {...entry, score, url: data.url};
      }).filter(entry => entry.score > 0);
    }).sort((a, b) => b.score - a.score);
  };

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {

      setResults(search(Search, value));
    } else {
      setResults([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal">
      <div className="search-modal-backdrop" onClick={onClose}/>

      <div className="search-modal-content">
        <button className={"icon-btn text-black absolute right-0 top-0 z-10"} onClick={onClose}>
          <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </svg>
        </button>
        <input
          autoFocus
          type="text"
          placeholder="Search docs..."
          value={query}
          onChange={handleChange}
        />
        <ul>
          {results.map((row, i) => (
            <li key={"search-item-" + i}>
              <Link to={row.url + "#" + row.title.toLowerCase()} onClick={onClose}>{row.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
