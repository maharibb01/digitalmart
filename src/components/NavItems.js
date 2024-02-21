"use client"

import { productCategories } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const isAnyOpen = activeIndex !== null;
    // map the array
    return (
        <div className="flex gap-4 h-full">
            {
                productCategories.map((productCategory, index) => {
                    const handleOpen = () => {
                        if (activeIndex === index) {
                            setActiveIndex(null);
                        } else {
                            setActiveIndex(index);
                        }
                    }
                    const isOpen = index === activeIndex;
                    return <NavItem category={productCategory} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} key={index} />
                })
            }
        </div>
    );
};

export default NavItems;