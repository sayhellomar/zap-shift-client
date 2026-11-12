import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "#components/ui/navigation-menu";
import { Skeleton } from "#components/ui/skeleton";
import { Button } from "#components/ui/button";
import Logo from "#components/logo/Logo";
import { ArrowUpIcon } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import ProfileAvatar from "../../../components/profile-avatar/ProfileAvatar";

export default function Header() {
    const { user, logOut, loading } = useAuth();

    function handleLogOut() {
        logOut();
    }

    return (
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
                        {user && (
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    render={<Link to="/be-a-rider" />}
                                    className="text-md font-light font-urbanist"
                                >
                                    Be a rider
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
                {loading ? (
                    <div className="nav-right gap-2 flex">
                        <Skeleton className="h-12 w-28" />
                        <Skeleton className="h-12 w-28" />
                    </div>
                ) : !user ? (
                    <div className="nav-right gap-2 flex">
                        <Link
                            to="/auth/login"
                            className="flex flex-wrap items-center md:flex-row cursor-pointer"
                        >
                            <Button
                                className="px-6 py-6 text-xl text-text-six cursor-pointer"
                                variant="outline"
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link
                            to="/auth/register"
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
                ) : (
                    <div className="nav-right gap-4 flex items-center">
                        <ProfileAvatar />
                        <Button
                            onClick={handleLogOut}
                            className="px-6 py-6 text-xl text-text-twelve cursor-pointer"
                        >
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
