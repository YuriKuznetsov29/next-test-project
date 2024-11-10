"use client";

import { Container } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filter } from "lucide-react";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px] shrink-0">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 2,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 3,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 4,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 5,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 6,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 7,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 8,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                items={[
                                    {
                                        id: 1,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 2,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 3,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 4,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 5,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 6,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 7,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                    {
                                        id: 8,
                                        name: "Маргарита",
                                        price: 390,
                                        count: 1,
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
