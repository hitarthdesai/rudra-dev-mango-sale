import { useCartContext } from "@/context/CartContext";
import { Button, Navbar } from "flowbite-react";
import { ShoppingBasketIcon, StoreIcon } from "lucide-react";

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
      <Navbar.Brand href="https://flowbite-react.com">
        <StoreIcon className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mango Sale
        </span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <Button className="flex flex-row items-center justify-center">
          <p>Checkout</p>
          <ShoppingBasketIcon className="mx-2" />
          <p>{numberOfItems}</p>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navItems.map(({ label, href }) => (
          <Navbar.Link href={href} active>
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
