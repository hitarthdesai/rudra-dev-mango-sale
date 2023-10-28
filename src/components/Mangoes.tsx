import { api } from "@/utils/api";
import { MangoCard } from "./MangoCard";
import { CartContextProvider } from "@/context/CartContext";

export const Mangoes = () => {
  const { data: mangoes } = api.mango.listAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  return (
    <CartContextProvider>
      <div className="md:grid-col-2  grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 xl:grid-cols-4">
        {mangoes?.map((mango) => <MangoCard key={mango.id} mango={mango} />)}
      </div>
    </CartContextProvider>
  );
};
