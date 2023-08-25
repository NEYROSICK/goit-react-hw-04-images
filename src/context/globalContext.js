const { createContext, useState } = require('react');

export const Context = createContext();

export default function GlobalContext({ children }) {
  const [query, setQuery] = useState('');
  const [imageObj, setImageObj] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        imageObj,
        setImageObj,
        isModalVisible,
        setModalVisible,
      }}
    >
      {children}
    </Context.Provider>
  );
}
