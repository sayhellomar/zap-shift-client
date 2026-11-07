import Logo from "#components/logo/Logo";
import { Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "#components/ui/navigation-menu";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mb-10">
            <div className="container mx-auto">
                <div className="bg-text-thriteen text-white py-20 px-8 rounded-xl text-center">
                    <Logo />
                    <p className="font-light max-w-2xl mx-auto mt-4">
                        Enjoy fast, reliable parcel delivery with real-time
                        tracking and zero hassle. From personal packages to
                        business shipments — we deliver on time, every time.
                    </p>
                    <div className="flex justify-center border-t border-b border-dashed border-t-primary-nine border-b-primary-nine py-2 my-8">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        render={<Link to="/services" />}
                                        className="text-md text-text-five font-light font-urbanist hover:bg-image-none"
                                    >
                                        Services
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        render={<Link to="/coverage" />}
                                        className="text-md text-text-five font-light font-urbanist hover:bg-image-none"
                                    >
                                        Coverage
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        render={<Link to="/about-us" />}
                                        className="text-md text-text-five font-light font-urbanist hover:bg-image-none"
                                    >
                                        About Us
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        render={<Link to="/pricing" />}
                                        className="text-md text-text-five font-light font-urbanist hover:bg-image-none"
                                    >
                                        Pricing
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        render={<Link to="/blog" />}
                                        className="text-md text-text-five font-light font-urbanist hover:bg-image-none"
                                    >
                                        Blog
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        render={<Link to="/contact" />}
                                        className="text-md text-text-five font-light font-urbanist hover:bg-image-none"
                                    >
                                        Contact
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="social-links">
                        <ul className="flex gap-4 justify-center">
                            <li className="border rounded-full p-2">
                                <Link to="#">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li className="border rounded-full p-2">
                                <Link to="#">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li className="border rounded-full p-2">
                                <Link to="#">
                                    <FaGithub />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
