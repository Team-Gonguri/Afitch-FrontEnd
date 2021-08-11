function useLocalStorage() {
  const getLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  };

  const setLocalStorage = (key: string, data: object | string) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}

export default useLocalStorage;
