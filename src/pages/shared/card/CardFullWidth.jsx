export default function ZapShiftCardFullWidth({ details }) {
    const { icon, title, description } = details;
    return (
        <div className="px-14 py-12 bg-white rounded-xl hover:bg-primary flex gap-10 items-center">
            <img
                className="border-r border-dashed border-r-primary-nine pr-10 max-w-50"
                src={icon}
                alt={title}
            />
            <div>
                <h4 className="text-2xl font-bold text-primary-nine mt-6 mb-2">
                    {title}
                </h4>
                <p className="font-light text-base text-text-six">
                    {description}
                </p>
            </div>
        </div>
    );
}
