import { Subtotal } from "@/components/Subtotal";
import { useCartContext } from "@/context/CartContext";
import { api } from "@/utils/api";
import { Button } from "flowbite-react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

const photo =
  "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

const CheckoutPage = () => {
  const { items, addItem, removeItem } = useCartContext();

  const productKeys = Object.keys(items).map((item) => parseInt(item));
  const { data } = api.mango.getPricingDetailsByIds.useQuery(
    { ids: productKeys },
    { refetchOnWindowFocus: false },
  );

  const price = data?.mangoes.reduce(
    (acc, { id, discount, price }) => {
      if (items[id] === undefined) return acc;

      const priceOfMangoes = (items[id] ?? 0) * price;
      const discountOnMangoes = priceOfMangoes * discount;

      acc.total += priceOfMangoes;
      acc.discountApplied += discountOnMangoes;

      return acc;
    },
    { total: 0, discountApplied: 0 },
  ) ?? { total: 0, discountApplied: 0 };

  return (
    <div className="grid grid-cols-1 font-mono lg:grid-cols-2">
      <ul role="list" className="grid grid-cols-1 divide-y divide-gray-200">
        {data?.mangoes.map(({ id, name, price }) => (
          <li key={id} className="grid h-fit max-w-fit grid-cols-3">
            <Image
              width={150}
              height={150}
              src={photo}
              alt={`Photo of ${id}`}
              className="m-4 rounded-lg border border-gray-200"
            />
            <div className="flex flex-col items-center justify-center text-base font-medium text-gray-900">
              <h3>{name}</h3>
              <p>₹ {price}</p>

              <p className="mt-1 text-sm text-gray-500">Medium</p>
            </div>
            <div className="flex flex-col items-center justify-center text-sm">
              <p className="text-gray-500">Qty {items[id]}</p>
              <Button.Group className="flex flex-row items-center justify-center gap-1">
                <Button
                  size="xs"
                  color=""
                  className="rounded-full"
                  onClick={() => removeItem(id)}
                >
                  <MinusIcon />
                </Button>
                <Button
                  size="xs"
                  color=""
                  className="rounded-full"
                  onClick={() => addItem(id)}
                >
                  <PlusIcon />
                </Button>
              </Button.Group>
            </div>
          </li>
        ))}
      </ul>

      <Subtotal {...price} />
    </div>
  );
};

export default CheckoutPage;
