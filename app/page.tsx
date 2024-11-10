import { Container } from "@/components/shared"
import { Categories } from "@/components/shared/categories"
import { Filters } from "@/components/shared/filters"
import { SortPopup } from "@/components/shared/sort-popup"
import { Title } from "@/components/shared/title"
import { TopBar } from "@/components/shared/top-bar"
import { Filter } from "lucide-react"

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1"></div>
                </div>
            </Container>
        </>
    )
}
