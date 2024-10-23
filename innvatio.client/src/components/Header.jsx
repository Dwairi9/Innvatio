import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Avatar,
    Badge,
    Image
} from "@nextui-org/react";
import { Icon } from "@iconify/react";  

export default function Component() {
    return (
        <Navbar
            classNames={{
                base: "lg:bg-transparent lg:backdrop-filter-none",
                item: "data-[active=true]:text-primary",
                wrapper: "px-4 sm:px-6",
            }}
            height="60px">

            <NavbarBrand>
                <div className="rounded-full bg-foreground text-background">
                    <Image width={100} alt="NextUI hero Image" src="/src/assets/innvatio.jpg" /> 
                </div> 
            </NavbarBrand>
             
            <NavbarContent className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1" justify="end">
                <NavbarItem className="hidden sm:flex">
                    <Button isIconOnly radius="full" variant="light">
                        <Icon className="text-default-500" icon="solar:settings-linear" width={24} />
                    </Button>
                </NavbarItem> 

                <NavbarItem className="px-2">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger className="mr-5 mb-5">
                            <button className="mt-4 h-8 w-8 outline-none transition-transform">
                                <Badge
                                    className="border-transparent"
                                    color="success"
                                    content=""
                                    placement="bottom-right"
                                    shape="circle"
                                    size="sm" 
                                >
                                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29526708c" />
                                </Badge>
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">johndoe@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Profile</DropdownItem> 
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent> 
        </Navbar>
    );
}