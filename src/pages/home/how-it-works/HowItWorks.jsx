import bookingIcon from "../../../assets/bookingIcon.png";
import ZapShiftCard from "../../shared/card/Card";

const howItWorks = [
    {
        icon: bookingIcon,
        title: "Booking Pick & Drop",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        icon: bookingIcon,
        title: "Cash On Delivery",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        icon: bookingIcon,
        title: "Delivery Hub",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        icon: bookingIcon,
        title: "Booking SME & Corporate",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-25">
            <div className="container mx-auto">
                <div className="how-it-works-inner">
                    <h3 className="text-[32px] font-extrabold text-primary-nine mb-10">
                        How it Works
                    </h3>
                    <div className="grid grid-cols-4 gap-8">
                        {howItWorks.map((item) => (
                            <ZapShiftCard key={item.title} details={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
