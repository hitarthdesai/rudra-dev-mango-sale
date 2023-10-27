import { MangoCard } from "./MangoCard";

export const Mangoes = () => {
  return (
    <div className="md:grid-col-2  grid grid-cols-1 gap-4 p-4 lg:grid-cols-4">
      <div key={1}>
        <MangoCard mango={{}} />
      </div>
    </div>
  );
};
