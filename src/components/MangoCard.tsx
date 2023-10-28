import { useCartContext } from "@/context/CartContext";
import { Mango } from "@prisma/client";
import { Button, Card } from "flowbite-react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

const photo =
  "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

export const MangoCard = ({ mango: { name, price, id } }: { mango: Mango }) => {
  /**
   * Un-comment this
   * const description = "lorem ipsum dolor sit amet";
   * const stock = mango.stock;
   * const discount = mango.discount;
   */

  const { items, addItem, removeItem } = useCartContext();
  const quantity = items[id] ? items[id] : 0;

  return (
    <Card
      renderImage={() => (
        <Image
          width={500}
          height={500}
          src={photo}
          alt={`Photo of ${name}`}
          className="rounded-lg"
        />
      )}
      className="relative"
    >
      <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-lg font-bold text-gray-700 dark:text-gray-400">{`₹ ${price}`}</p>
      <p className="text-sm font-thin text-gray-700 dark:text-gray-400">
        Same day pickup • Delivery time varies
      </p>
      {quantity === 0 ? (
        <Button onClick={() => addItem(id)}>Add to Cart</Button>
      ) : (
        <Button.Group className="mx-8 flex flex-row items-center justify-center gap-8">
          <Button className="rounded-full" onClick={() => removeItem(id)}>
            <Minus />
          </Button>
          <p className="text-xl">{quantity}</p>
          <Button className="rounded-full" onClick={() => addItem(id)}>
            <Plus />
          </Button>
        </Button.Group>
      )}
    </Card>
  );
};
