import { Container } from "@/components/shared";
import { ChoosePizzaForm } from "@/components/shared/choose-pizza-form";
import { PizzaImage } from "@/components/shared/pizza-image";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
    console.log(id);
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            {/* <PizzaImage imageUrl={product.imageUrl} size={20} /> */}
            <ChoosePizzaForm
                name={product.name}
                imageUrl={product.imageUrl}
                ingredients={[]}
                items={[]}
                // onSubmit={(itemId, ingredients) => console.log(itemId, ingredients)}
            />
        </Container>
    );
}
