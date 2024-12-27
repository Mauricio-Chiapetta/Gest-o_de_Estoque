import { createContext, useState } from "react";
import PropTypes from "prop-types";

StockContextProvider.propTypes = {
  children: PropTypes.node,
};

export const StockContext = createContext({});
export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("react-stock");
    if (!storedItems) {
      return [];
    }
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  //item -> {name, description, quantity, price, category, createdAt, updatedAt}
  const addItem = (item) => {
    setItems((state) => {
      const updatedItems = [...state, item];
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === +itemId);
  };

  const updateItem = (itemId, newAttribute) => {
    setItems((state) => {
      const itemIndex = state.findIndex((i) => i.id === +itemId);
      const updatedItems = [...state];
      Object.assign(updatedItems[itemIndex], newAttribute, {
        updatedAt: new Date(),
      });
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItem = (itemId) => {
    setItems((state) => {
      const updatedItems = state.filter((i) => i.id !== itemId);
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
