import { api } from "@/utils/api";
import { MangoCard } from "./MangoCard";

export const Mangoes = () => {
  const { data: mangoes } = api.mango.listAll.useQuery();

  return (
    <div className="md:grid-col-2  grid grid-cols-1 gap-4 p-4 lg:grid-cols-4">
      {mangoes?.map((mango) => <MangoCard key={mango.id} mango={mango} />)}
    </div>
  );
};
