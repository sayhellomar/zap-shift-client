import tracking from "../../../assets/live-tracking.png";
import delivery from "../../../assets/safe-delivery.png";
import ZapShiftCardFullWidth from "../../shared/card/CardFullWidth";

const features = [
    {
        icon: tracking,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
        icon: delivery,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
        icon: tracking,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
];
export default function Features() {
    return (
        <section className="features-area pb-20">
            <div className="container mx-auto">
                <div className="feature-inner flex flex-col gap-6 border-t-2 border-dashed border-t-primary-six/30 pt-20">
                    {features.map((feature) => (
                        <ZapShiftCardFullWidth
                            key={feature.title}
                            details={feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
