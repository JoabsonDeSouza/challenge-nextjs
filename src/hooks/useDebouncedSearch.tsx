import { useEffect, useState } from 'react';

export function useDebouncedSearch<T>(
  items: T[],
  searchKey: keyof T,
  range?: number[],
  rangeKey?: keyof T,
  delay = 400,
) {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [filtered, setFiltered] = useState<T[]>(items);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);

    return () => clearTimeout(handler);
  }, [search, delay]);

  useEffect(() => {
    let filteredItems = items;

    if (debouncedSearch) {
      filteredItems = filteredItems.filter((item) =>
        String(item[searchKey])
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()),
      );
    }

    if (range && rangeKey) {
      filteredItems = filteredItems.filter((item) => {
        const value = Number(item[rangeKey]);
        return value >= range[0] && value <= range[1];
      });
    }

    if (
      filteredItems.length !== filtered.length ||
      !filteredItems.every((item, idx) => item === filtered[idx])
    ) {
      setFiltered(filteredItems);
    }
  }, [debouncedSearch, items, searchKey, range, rangeKey]);

  return { search, setSearch, filtered };
}
