import { useContext } from "react";
import { FruitCard } from "./FruitCard";
import { FruitContext } from "../../providers";

export const FruitList = () => {
    const { fruitList, removeFruit } = useContext(FruitContext)


    return (
        <ul>
            {fruitList.map(fruit => (
                <FruitCard key={fruit.id} fruit={fruit} removeFruit={removeFruit} />
            ))}
        </ul>
    )
}