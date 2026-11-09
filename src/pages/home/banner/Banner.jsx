// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "#components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "#components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router";
import bannerOneImg from "../../../assets/big-deliveryman.png";
import bannerOneTinyImg from "../../../assets/tiny-deliveryman.png";
import bannerTwoTinyImg from "../../../assets/safe-delivery.png";
import bannerThreeTinyImg from "../../../assets/location-merchant.png";
import { Button } from "#components/ui/button";
import { ArrowUpIcon } from "lucide-react";

export default function Banner() {
    return (
        <section className="carousel-area mt-2 mb-4">
            <div className="container mx-auto">
                <div className="carousel-inner bg-white px-24 py-20 rounded-xl">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <div className="grid grid-cols-2 justify-between items-center gap-10">
                                    <div>
                                        <img
                                            src={bannerOneTinyImg}
                                            className="h-20"
                                            alt="Slider One Tiny Image"
                                        />
                                        <h2 className="text-6xl font-extrabold mt-4">
                                            We Make Sure Your{" "}
                                            <span className="text-primary">
                                                Parcel Arrives
                                            </span>{" "}
                                            On Time – No Fuss.
                                        </h2>
                                        <p className="font-light mt-6 opacity-80">
                                            Enjoy fast, reliable parcel delivery
                                            with real-time tracking and zero
                                            hassle. From personal packages to
                                            business shipments — we deliver on
                                            time, every time.
                                        </p>

                                        <div className="flex gap-2 items-center mt-10">
                                            <Link
                                                to="/track-parcel"
                                                className="flex flex-wrap items-center md:flex-row cursor-pointer"
                                            >
                                                <Button className="px-6 py-6 text-xl text-text-twelve cursor-pointer">
                                                    Tracek Your Parcel
                                                </Button>
                                                <ArrowUpIcon
                                                    size={20}
                                                    className="bg-text-twelve text-primary rounded-full w-10 h-10 p-1 rotate-45"
                                                />
                                            </Link>
                                            <Link
                                                to="be-a-rider"
                                                className="px-6 py-3 text-xl text-text-six cursor-pointer border-2 rounded-xl font-medium hover:bg-gray-100 hover:text-text-thriteen"
                                                variant="outline"
                                            >
                                                Be A Rider
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        className="ml-auto"
                                        src={bannerOneImg}
                                        alt="Slider One"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="grid grid-cols-2 justify-between items-center gap-10">
                                    <div>
                                        <img
                                            src={bannerTwoTinyImg}
                                            className="h-20"
                                            alt="Slider One Tiny Image"
                                        />
                                        <h2 className="text-6xl font-extrabold mt-4">
                                            Fastest{" "}
                                            <span className="text-primary">
                                                Delivery
                                            </span>{" "}
                                            & Easy{" "}
                                            <span className="text-primary">
                                                Pickup
                                            </span>
                                        </h2>
                                        <p className="font-light mt-6 opacity-80">
                                            Enjoy fast, reliable parcel delivery
                                            with real-time tracking and zero
                                            hassle. From personal packages to
                                            business shipments — we deliver on
                                            time, every time.
                                        </p>

                                        <div className="flex gap-2 items-center mt-10">
                                            <Link
                                                to="/track-parcel"
                                                className="flex flex-wrap items-center md:flex-row cursor-pointer"
                                            >
                                                <Button className="px-6 py-6 text-xl text-text-twelve cursor-pointer">
                                                    Tracek Your Parcel
                                                </Button>
                                                <ArrowUpIcon
                                                    size={20}
                                                    className="bg-text-twelve text-primary rounded-full w-10 h-10 p-1 rotate-45"
                                                />
                                            </Link>
                                            <Link
                                                to="be-a-rider"
                                                className="px-6 py-3 text-xl text-text-six cursor-pointer border-2 rounded-xl font-medium hover:bg-gray-100 hover:text-text-thriteen"
                                                variant="outline"
                                            >
                                                Be A Rider
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        className="ml-auto"
                                        src={bannerOneImg}
                                        alt="Slider One"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="grid grid-cols-2 justify-between items-center gap-10">
                                    <div>
                                        <img
                                            src={bannerThreeTinyImg}
                                            className="h-20"
                                            alt="Slider One Tiny Image"
                                        />
                                        <h2 className="text-6xl font-extrabold mt-4">
                                            Delivery in{" "}
                                            <span className="text-primary">
                                                30 Minutes
                                            </span>{" "}
                                            at your doorstep
                                        </h2>
                                        <p className="font-light mt-6 opacity-80">
                                            Enjoy fast, reliable parcel delivery
                                            with real-time tracking and zero
                                            hassle. From personal packages to
                                            business shipments — we deliver on
                                            time, every time.
                                        </p>

                                        <div className="flex gap-2 items-center mt-10">
                                            <Link
                                                to="/track-parcel"
                                                className="flex flex-wrap items-center md:flex-row cursor-pointer"
                                            >
                                                <Button className="px-6 py-6 text-xl text-text-twelve cursor-pointer">
                                                    Tracek Your Parcel
                                                </Button>
                                                <ArrowUpIcon
                                                    size={20}
                                                    className="bg-text-twelve text-primary rounded-full w-10 h-10 p-1 rotate-45"
                                                />
                                            </Link>
                                            <Link
                                                to="be-a-rider"
                                                className="px-6 py-3 text-xl text-text-six cursor-pointer border-2 rounded-xl font-medium hover:bg-gray-100 hover:text-text-thriteen"
                                                variant="outline"
                                            >
                                                Be A Rider
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        className="ml-auto"
                                        src={bannerOneImg}
                                        alt="Slider One"
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
