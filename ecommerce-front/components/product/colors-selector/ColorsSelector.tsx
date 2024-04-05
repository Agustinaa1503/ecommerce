import { Colors } from "@/interfaces"
import clsx from "clsx";

interface Props {
    selectedColor: Colors;
    availableColor: Colors[];
}



export const ColorsSelector = ({ selectedColor, availableColor }: Props) => {
    const colorCodes = {
        "blanco": "white",
        "negro": "black",
        "rojo": "red",
        "azul": "blue",
        "amarillo": "yellow",
        "verde": "green",
        "morado": "purple",
        "gris": "gray",
        // Agrega más colores según sea necesario
    };

  return (
    <div className="my-5">
        <h3 className="font-bold mb-4">Colores</h3>

        <div className="flex">
                {availableColor.map((color) => (
                    <button
                        key={color}
                        className={clsx("mx-1 rounded-full", {
                            "border-3": color === selectedColor,
                            "w-8 h-8": true,
                            "bg-gray-200": !availableColor.includes(color),
                            "bg-white": availableColor.includes(color),
                            "shadow-md": color === selectedColor,
                        })}
                        style={{ backgroundColor: colorCodes[color] }} 
                    ></button>
                ))
            }
        </div>

    </div>
  )
}
