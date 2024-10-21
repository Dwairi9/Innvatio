"use client";

import React from "react";
import { ScrollShadow } from "@nextui-org/react";  
import { items } from "./sidebar-items"; 
import Sidebar from "./sidebar-type";
 
export default function Component() {
    return (
        <div className="h-dvh">
            <div className="h-full w-72 border-r-small border-divider p-6">
                <div className="flex items-center gap-2 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <img src="./assets/innvatio.jpg"></img> 
                    </div>
                    <span className="text-small font-bold uppercase">Acme</span>
                </div>
                <ScrollShadow className="h-full max-h-full py-[10vh]">
                    <Sidebar defaultSelectedKey="home" items={items} />
                </ScrollShadow>
            </div>
        </div>
    );
}
