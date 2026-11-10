import { Skeleton } from "#components/ui/skeleton";

export default function ContactPageLoader() {
    return (
        <div className="contact-page-loader">
            <div className="container mx-auto">
                <div className="contact-page-loader-inner bg-white rounded-xl px-24 py-20">
                    <Skeleton className="h-10 w-4xl" />
                    <Skeleton className="h-14 w-2xl mt-3" />
                    <Skeleton className="w-full h-150 mt-20 rounded-xl" />
                </div>
            </div>
        </div>
    );
}
