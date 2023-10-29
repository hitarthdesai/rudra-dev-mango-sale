import { useCartContext } from "@/context/CartContext";
import { Button } from "flowbite-react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const photo =
  "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

const CheckoutPage = () => {
  const { items, addItem, removeItem } = useCartContext();
  const productKeys = Object.keys(items);
  const amountPayable = 0;

  return (
    <div className="grid grid-cols-1 font-mono lg:grid-cols-2">
      <div className="flow-root">
        <ul
          role="list"
          className="grid grid-cols-1 place-items-center divide-y divide-gray-200"
        >
          {productKeys.map((product) => (
            <li key={product} className="h-full w-full">
              <div className="grid h-full w-full grid-cols-3 bg-red-400">
                <Image
                  width={500}
                  height={500}
                  src={photo}
                  alt={`Photo of ${product}`}
                  className="m-4 rounded-lg border border-gray-200"
                />
                <div className="flex flex-col items-center justify-center text-base font-medium text-gray-900">
                  {/* <h3>{product.name}</h3> */}
                  <h3>Mango {product}</h3>
                  <p>₹ {parseInt(product) * 100}</p>

                  <p className="mt-1 text-sm text-gray-500">Medium</p>
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <p className="text-gray-500">
                    Qty {items[parseInt(product)]}
                  </p>
                  <Button.Group className="flex flex-row items-center justify-center gap-1">
                    <Button
                      size="xs"
                      color=""
                      className="rounded-full"
                      onClick={() => removeItem(parseInt(product))}
                    >
                      <MinusIcon />
                    </Button>
                    <Button
                      size="xs"
                      color=""
                      className="rounded-full"
                      onClick={() => addItem(parseInt(product))}
                    >
                      <PlusIcon />
                    </Button>
                  </Button.Group>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{amountPayable.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Including shipping and taxes.
        </p>
        <Button
          fullSized
          className="mt-4 grid place-items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </Button>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link
              href="/"
              className="pl-1 font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
