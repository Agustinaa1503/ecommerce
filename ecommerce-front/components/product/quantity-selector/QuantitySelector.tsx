'use client'

import { useState } from "react";
import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

interface Props {
  quantity: number;
  // inStock: number;
}

export const QuantitySelector = ({ quantity}: Props) => {

  const [count, setCount] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;
    setCount(count + value);

  }

  return (
    <div className="flex">

      <button onClick={() => onQuantityChange(- 1)}><IoRemoveCircle size={30} /></button>
      <span className="w-10 mx-2 px-2 mb-1 bg-gray-200 text-center text-gray-600 rounded">{count}</span>
      <button onClick={() => onQuantityChange(+ 1)}><IoAddCircle size={30} /></button>

    </div>

  )
}
