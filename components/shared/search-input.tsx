"use client"

import { Search } from "lucide-react"
import React, { useRef } from "react"
import { useClickAway, useDebounce } from "react-use"
import { Product } from "@prisma/client"
import Link from "next/link"
import { Api } from "@/services/api-client"

export const SearchInput = () => {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [focused, setFocused] = React.useState(false)
    const [products, setProducts] = React.useState<Product[]>([])
    const ref = React.useRef(null)

    useClickAway(ref, () => {
        setFocused(false)
    })

    useDebounce(
        async () => {
            try {
                const response = await Api.products.search(searchQuery)
                setProducts(response)
            } catch (error) {
                console.log(error)
            }
        },
        250,
        [searchQuery]
    )

    const onClickItem = () => {
        setFocused(false)
        setSearchQuery("")
        setProducts([])
    }

    return (
        <>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

            <div className="flex rounded-2xl flex-1 justify-between relative h-11">
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
                <input
                    className="rounded-2xl outline-none w-full bg-gray-50 pl-11 z-30"
                    type="text"
                    placeholder="Найти пиццу..."
                    onFocus={() => setFocused(true)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    ref={ref}
                />
            </div>

            {products.length > 0 && (
                <div
                    className={cn(
                        "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
                        focused && "visible opacity-100 top-12"
                    )}
                >
                    {products.map((product) => (
                        <Link
                            onClick={onClickItem}
                            key={product.id}
                            className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                            href={`/product/${product.id}`}
                        >
                            <img
                                className="rounded-sm h-8 w-8"
                                src={product.imageUrl}
                                alt={product.name}
                            />
                            <span>{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}
