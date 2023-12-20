import { useCartContext } from "@/context/CartContext";
import { Button, Navbar } from "flowbite-react";
import { ShoppingBasketIcon, StoreIcon } from "lucide-react";
import Link from "next/link";

const navItems: { label: string; href: string }[] = [
  {
    label: "Products",
    href: "/",
  },
];

export const Header = () => {
  const { items } = useCartContext();
  const numberOfItems = Object.keys(items).length ?? 0;

  return (
    <Navbar fluid rounded className="font-mono">
      <Link href="/" className="flex flex-row">
        <StoreIcon className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mango Sale
        </span>
      </Link>
      <div className="flex gap-2 md:order-2">
        <Link href="/checkout">
          <Button className="flex flex-row items-center justify-center">
            <ShoppingBasketIcon className="mr-2" />
            <p>{numberOfItems}</p>
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navItems.map(({ label, href }, index) => (
          <Navbar.Link key={index} href={href} active>
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
