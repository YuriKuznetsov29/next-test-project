import { Container } from "@/components/shared";
import { ChoosePizzaForm } from "@/components/shared/choose-pizza-form";
import { PizzaImage } from "@/components/shared/pizza-image";
import { ProductForm } from "@/components/shared/product-form";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";


export default async function ProductPage({ params: { id } }: { params: { id: string } }) {

    const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
        ingredients: true,
        items: true,
    },
  });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <ProductForm product={product} />
        </Container>
    );
}
