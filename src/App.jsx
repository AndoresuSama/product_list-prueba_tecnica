import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter.jsx';
import { ItemList } from './components/ItemList/ItemList.jsx';
import { DetailedView } from './components/DetailedView/DetailedView.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [detailedItem, setDetailedItem] = useState({});

  const isFetchingRef = useRef(false);
  const isFilteredRef = useRef(false);
  const isDetailRef = useRef(false);

  const handleFilterChange = async (value) => {
    setHasMoreData(true);
    isFilteredRef.current = true;

    if (!value) {
      isFilteredRef.current = false;
      setPage(1);
      setItems([]);
      fetchData();
      return;
    }

    const response = (await fetch(`http://localhost:5000/items?`));
    const allItems = await response.json();
    const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    setItems(allItems.filter(item => normalizeString(item.title).toLowerCase().includes(normalizeString(value).toLowerCase()) || normalizeString(item.category).toLowerCase().includes(normalizeString(value).toLowerCase())));
  };

  const handleOnClick = async (item) => {
    isDetailRef.current = true;
    const response = (await fetch(`http://localhost:5000/items?id=${item.id}`));
    const data = await response.json();
    if(!data.length) {
      isDetailRef.current = false;
    }
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    setDetailedItem(data[0]);
  };

  const handleOnClose = () => {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    setDetailedItem({});
    isDetailRef.current = false;
  }

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
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5 && !isFetchingRef.current && !isFilteredRef.current) {
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
      <Filter onChange={handleFilterChange}/>
      <ItemList items={items} onClick={handleOnClick} />
      {isDetailRef.current && <DetailedView item={detailedItem} onClose={handleOnClose}/>}
    </>
  );
}

export default App;


