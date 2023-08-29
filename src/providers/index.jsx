import { createContext, useState } from "react"

export const FruitContext = createContext({})

export const TodoProvider = ({ children }) => {


    const removeFruit = (fruitId) => {
        const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId);
        setFruitList(newFruitList);
    }

    const addFruit = (fruit) => {
        const newFruit = { ...fruit, id: crypto.randomUUID() };
        setFruitList([...fruitList, newFruit]);
    };

    const [fruitList, setFruitList] = useState([]);


    return (
        <FruitContext.Provider value={{ addFruit, removeFruit, fruitList }}>
            {children}
        </FruitContext.Provider >
    )
}
