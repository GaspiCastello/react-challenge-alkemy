import React, { useReducer } from "react";

export const MenuContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  apiKey: "",
});

const defaultMenuState = {
  items: [],
  totalAmount: 0,
};

const menuReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingMenuItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingMenuItem = state.items[existingMenuItemIndex];
    let updatedItems;

    if (existingMenuItem) {
      const updatedItem = {
        ...existingMenuItem,
        amount: existingMenuItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingMenuItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingMenuItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingMenuItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingMenuItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultMenuState;
  }

  return defaultMenuState;
};

function MenuProvider(props) {
  const [menuState, dispatchMenuAction] = useReducer(
    menuReducer,
    defaultMenuState
  );

  const addItemToMenuHandler = (item) => {
    dispatchMenuAction({ type: "ADD", item: item });
  };

  const removeItemFromMenuHandler = (id) => {
    dispatchMenuAction({ type: "REMOVE", id: id });
  };
  const clearMenuHandler = () => {
    dispatchMenuAction({ type: "CLEAR" });
  };

  const menuContext = {
    apiKey: "08431604f5ee4f9e80c2d592bfb26980",
    items: menuState.items,
    totalAmount: menuState.totalAmount,
    addItem: addItemToMenuHandler,
    removeItem: removeItemFromMenuHandler,
    clearMenu: clearMenuHandler,
  };

  return (
    <MenuContext.Provider value={menuContext}>
      {props.children}
    </MenuContext.Provider>
  );
}
export default MenuProvider;
