import React, { useReducer } from "react";

export const MenuContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  apiKey: "",
});

const retrieveStoredIds = () => {
  const storedIds = localStorage.getItem("ids");
  if (storedIds) {
    const retrieveIds = storedIds.split(",");
    return retrieveIds;
  }
  return [];
};

const menuReducer = (state, action) => {
  if (action.type === "ADD") {
    if (state.length > 0) {
      const updatedState = [...state];
      const updatedIdsString = updatedState.join() + "," + action.item.id;
      localStorage.setItem("ids", updatedIdsString);
      const updatedIds = updatedIdsString.split(",");
      console.log("on adding at reducer", updatedIds, updatedIdsString);
      return updatedIds;
    } else {
      const updatedIds=[]
      updatedIds.push(action.item.id);
      localStorage.setItem("ids", `${action.item.id}`);
      console.log("on adding first id at reducer", updatedIds);
      return updatedIds;
    }
  }
  if (action.type === "REMOVE") {
    const updatedState = [...state];
    const updatedIds = updatedState.filter((id) => id != action.id);
    const updatedIdsString = updatedIds.join();
    localStorage.setItem("ids", updatedIdsString);
    return updatedIds;
  }
  if (action.type === "CLEAR") {
    localStorage.removeItem("ids");
    return [];
  }

  return;
};

export default function MenuProvider(props) {
  const initialIds = retrieveStoredIds();
  const [menuState, dispatchMenuAction] = useReducer(menuReducer, initialIds);

  console.log("state array del menu ctx:", menuState);

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
    items: menuState,
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
