import { Card } from "flowbite-react";
import Image from "next/image";

export const MangoCard = ({ mango }: { mango: any }) => {
  const name = mango.name;
  const photo =
    "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
  const description = "lorem ipsum dolor sit amet";
  // const stock = mango.stock;
  // const price = mango.price;
  // const discount = mango.discount;

  return (
    <Card
      renderImage={() => (
        <Image width={500} height={500} src={photo} alt={`Photo of ${name}`} />
      )}
      className="relative"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};
