import { useContext, useState } from "react";
import { FruitForm } from "../../components/FruitForm";
import { FruitList } from "../../components/FruitList";
import { FruitContext } from "../../providers";

export const HomePage = () => {
   const { fruitList, setFruitList, addFruit } = useContext(FruitContext)


   return (
      <main>
         <FruitForm addFruit={addFruit} />
         <FruitList fruitList={fruitList} setFruitList={setFruitList} />
      </main>
   );
};
