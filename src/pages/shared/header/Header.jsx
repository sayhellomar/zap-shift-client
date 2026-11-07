import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "#components/ui/navigation-menu";
import { Button } from "#components/ui/button";
import Logo from "#components/logo/Logo";
import { ArrowUpIcon } from "lucide-react";

export default function Header() {
    return (
        <header className="py-4">
            <div className="container mx-auto">
                <div className="flex gap-10 justify-between items-center bg-white py-5 px-8 rounded-xl">
                    <Logo />
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/services" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    Services
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/coverage" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    Coverage
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/about-us" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    About Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/pricing" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    Pricing
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/blog" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    Blog
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/contact" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="nav-right gap-2 flex">
                        <Button
                            className="px-6 py-6 text-xl text-text-six cursor-pointer"
                            variant="outline"
                        >
                            Sign In
                        </Button>
                        <Link
                            to="/sign-up"
                            className="flex flex-wrap items-center md:flex-row cursor-pointer"
                        >
                            <Button className="px-6 py-6 text-xl text-text-twelve cursor-pointer">
                                Sign Up
                            </Button>
                            <ArrowUpIcon
                                size={20}
                                className="bg-text-twelve text-primary rounded-full w-10 h-10 p-1 rotate-45"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
