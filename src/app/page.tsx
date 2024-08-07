import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {id: "desc"}
  })

  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <Image
          src={products[0].imageUrl}
          alt={products[0].name}
        />
      </div>
    </div>
  );
}
