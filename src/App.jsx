import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter.jsx';
import { ItemList } from './components/ItemList/ItemList.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const isFetchingRef = useRef(false);

  const fetchData = useCallback(async () => {
    if (isFetchingRef.current || !hasMoreData) return;

    isFetchingRef.current = true;
    try {
      const response = (await fetch(`http://localhost:5000/items?_page=${page}&_per_page=10`));
      let data = await response.json();

      if (page === data.last || !data.data.length) setHasMoreData(false);
      data = data.data;

      setItems(prevItems => [
        ...prevItems,
        ...data.filter(item => !prevItems.some(prevItem => prevItem.id === item.id))
      ]);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isFetchingRef.current = false;
    }
  }, [page, hasMoreData]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5 && !isFetchingRef.current) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Filter />
      <ItemList items={items} />
    </>
  );
}

export default App;
