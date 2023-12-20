import { Button } from "flowbite-react";
import Link from "next/link";

type SubtotalProps = {
  total: number;
  discountApplied: number;
};

export const Subtotal = ({ total, discountApplied }: SubtotalProps) => {
  return (
    <div className="border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Total before discounts</p>
        <p>{total.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>After discounts</p>
        <p>{(total - discountApplied).toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>{total.toFixed(2)}</p>
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
  );
};
