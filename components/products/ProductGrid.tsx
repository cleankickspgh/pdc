import { productFamilies } from "@/data/site";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {productFamilies.map((product, i) => (
        <ProductCard key={product.title} product={product} index={i} />
      ))}
    </div>
  );
}
