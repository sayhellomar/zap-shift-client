import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "#components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const brands = [
    amazonVector,
    amazon,
    casio,
    moonstar,
    randstad,
    star,
    startPeople,
];

export default function Brands() {
    return (
        <section className="brands-area py-20">
            <div className="container mx-auto">
                <div className="brands-inner">
                    <h3 className="text-[32px] font-extrabold text-primary-ten mb-10 text-center">
                        We've helped thousands of sales teams
                    </h3>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {brands.map((brand, index) => (
                                <CarouselItem key={index} className="basis-1/5">
                                    <img src={brand} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
