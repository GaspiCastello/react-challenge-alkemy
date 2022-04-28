import React, { useReducer } from "react";

export const MenuContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  apiKey: "",
});

const retrieveStoredIds = () => {
  const storedIds = localStorage.getItem("ids");
  const storedVeganQuota = localStorage.getItem("veganQuota");
  if (storedIds && storedIds.length > 0) {
    const retrieveIds = storedIds.split(",");
    return { ids: retrieveIds, veganQuota: +storedVeganQuota };
  }
  return { ids: [], veganQuota: +storedVeganQuota };
};

const menuReducer = (state, action) => {
  const restQuota = state.ids.length - state.veganQuota;
  if (action.type === "ADD" && state.ids.length < 4) {
    if (action.item.vegan && state.veganQuota < 2) {
      const updatedVeganQuota = state.veganQuota + 1;
      localStorage.setItem("veganQuota", updatedVeganQuota);
      const updatedIds = [...state.ids];
      updatedIds.push(action.item.id.toString());
      localStorage.setItem("ids", updatedIds);
      return { ids: updatedIds, veganQuota: updatedVeganQuota };
    } else if (!action.item.vegan && restQuota < 2) {
      const updatedIds = [...state.ids];
      updatedIds.push(action.item.id.toString());
      localStorage.setItem("ids", updatedIds);
      return { ids: updatedIds, veganQuota: state.veganQuota };
    }
  }

  if (action.type === "REMOVE") {
    console.log("ids on remove dispatch", state.ids);
    const updatedIds = [...state.ids];
    const filteredIds = updatedIds.filter(
      (id) => id !== action.item.id.toString()
    );
    localStorage.setItem("ids", filteredIds);
    if (action.item.vegan) {
      const updatedVeganQuota = state.veganQuota - 1;
      localStorage.setItem("veganQuota", updatedVeganQuota);
      return { ids: filteredIds, veganQuota: updatedVeganQuota };
    }
    return { ids: filteredIds, veganQuota: state.veganQuota };
  }
  if (action.type === "CLEAR") {
    localStorage.removeItem("ids");
    localStorage.removeItem("veganQuota");
    return [];
  }
  return { ids: state.ids, veganQuota: state.veganQuota };
};

export default function MenuProvider(props) {
  const initialIds = retrieveStoredIds();
  const [menuState, dispatchMenuAction] = useReducer(menuReducer, initialIds);

  const addItemToMenuHandler = (item) => {
    dispatchMenuAction({ type: "ADD", item });
  };

  const removeItemFromMenuHandler = (item) => {
    dispatchMenuAction({ type: "REMOVE", item });
  };
  const clearMenuHandler = () => {
    dispatchMenuAction({ type: "CLEAR" });
  };

  const menuContext = {
    apiKey: "08431604f5ee4f9e80c2d592bfb26980",
    // apiKey: "a9e0fe98a0554e9ab0eb54dfa00ed190",
    items: menuState.ids,
    addItem: addItemToMenuHandler,
    removeItem: removeItemFromMenuHandler,
    clearMenu: clearMenuHandler,
  };
  console.log("ids of menuState", menuState.ids);
  return (
    <MenuContext.Provider value={menuContext}>
      {props.children}
    </MenuContext.Provider>
  );
}
