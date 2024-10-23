"use client";

import React from "react";
import { ScrollShadow } from "@nextui-org/react";  
import { items } from "./sidebar-items"; 
import Sidebar from "./sidebar-type";
 
export default function Component() {
    return (
        <div className="h-dvh">
            <div className="h-full w-72 border-r-small border-divider p-6">
                 
                <ScrollShadow className="h-full max-h-full py-[10vh]">
                    <Sidebar defaultSelectedKey="home" items={items} />
                </ScrollShadow>
            </div>
        </div>
    );
}
