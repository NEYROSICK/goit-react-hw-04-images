const { createContext, useState } = require('react');

export const Context = createContext();

export default function GlobalContext({ children }) {
  const [query, setQuery] = useState('');
  const [imageObj, setImageObj] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('resolved');
  const [totalHits, setTotalHits] = useState(0);
  const [isLoaderShown, setLoaderShown] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        imageObj,
        setImageObj,
        isModalVisible,
        setModalVisible,
        images,
        setImages,
        status,
        setStatus,
        totalHits,
        setTotalHits,
        isLoaderShown,
        setLoaderShown,
        page,
        setPage,
        error,
        setError,
      }}
    >
      {children}
    </Context.Provider>
  );
}
