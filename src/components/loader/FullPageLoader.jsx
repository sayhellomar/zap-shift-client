import { Spinner } from "#components/ui/spinner";

export default function FullPageLoader() {
    return (
        <div className="mt-2 mb-10">
            <div className="container mx-auto">
                <div className="bg-white rounded-xl h-[calc(100vh-122px-428px)] flex items-center justify-center">
                    <Spinner className="size-8" />
                </div>
            </div>
        </div>
    );
}
