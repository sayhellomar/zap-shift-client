export default function ZapShiftCard({ details }) {
    const { icon, title, description } = details;
    return (
        <div className="p-8 bg-white rounded-xl hover:bg-primary">
            <img src={icon} alt={title} />
            <h4 className="text-2xl font-bold text-primary-nine mt-6 mb-4">
                {title}
            </h4>
            <p className="font-light text-base text-text-six">{description}</p>
        </div>
    );
}
