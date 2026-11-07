import serviceIcon from "../../../assets/service.png";
import ZapShiftCard from "../../shared/card/Card";

const services = [
    {
        icon: serviceIcon,
        title: "Express  & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        icon: serviceIcon,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        icon: serviceIcon,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        icon: serviceIcon,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        icon: serviceIcon,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        icon: serviceIcon,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

export default function OurServices() {
    return (
        <section className="our-services">
            <div className="container mx-auto">
                <div className="our-services-inner bg-primary-ten rounded-xl px-20 py-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-[32px] font-extrabold text-white">
                            How it Works
                        </h3>
                        <p className="text-base text-white opacity-70 font-light mt-1">
                            Enjoy fast, reliable parcel delivery with real-time
                            tracking and zero hassle. From personal packages to
                            business shipments — we deliver on time, every time.
                        </p>
                    </div>
                    <div className="single-service grid grid-cols-3 gap-8 mt-10 text-center">
                        {services.map((service) => (
                            <ZapShiftCard
                                key={service.title}
                                details={service}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
