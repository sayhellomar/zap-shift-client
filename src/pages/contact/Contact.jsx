import { Button } from "#components/ui/button";
import { Field } from "#components/ui/field";
import { Input } from "#components/ui/input";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "#components/ui/card";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef, useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { searchByDistrict } from "../../utilities/searchByDistrict";

export default function Contact() {
    const mapCenter = [23.8103, 90.4125];
    const warehouses = useLoaderData();
    const mapRef = useRef(null);
    const cardRef = useRef(null);
    const [allWarehouses, setAllWarehouses] = useState(warehouses);
    const [searchText, setSearchText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        const { location } = e.target;

        searchByDistrict(warehouses, location.value, mapRef);
    }

    function handleSearch(e) {
        cardRef.current.classList.remove("hidden");
        const searchDistrict = warehouses.filter((warehouse) =>
            warehouse.district
                .toLowerCase()
                .includes(e.target.value.toLowerCase()),
        );

        setAllWarehouses(searchDistrict);
        setSearchText(e.target.value);
        if (e.target.value === "") {
            mapRef.current.flyTo(mapCenter, 8);
            cardRef.current.classList.add("hidden");
        }
    }

    function handleListSearch(e) {
        setSearchText(e.target.textContent);
        searchByDistrict(warehouses, e.target.textContent, mapRef);
    }

    return (
        <>
            <title>Contact - Zap Shift</title>
            <section className="contact-area mb-20 mt-2">
                <div className="container mx-auto">
                    <div className="contact-inner bg-white rounded-xl px-24 py-20">
                        <h3 className="text-[56px] font-extrabold text-primary-ten">
                            We are available in 64 districts
                        </h3>

                        <form className="max-w-lg" onSubmit={handleSubmit}>
                            <Field
                                orientation="horizontal"
                                className="relative"
                            >
                                <Input
                                    className="py-6 rounded-full px-5"
                                    type="search"
                                    name="location"
                                    placeholder="Search..."
                                    onChange={handleSearch}
                                    value={searchText}
                                    onFocus={() =>
                                        cardRef.current.classList.remove(
                                            "hidden",
                                        )
                                    }
                                    onBlur={() =>
                                        setTimeout(() => {
                                            cardRef.current.classList.add(
                                                "hidden",
                                            );
                                        }, 300)
                                    }
                                />
                                <Button
                                    type="submit"
                                    className="absolute right-0 top-0 text-text-thriteen text-xl font-bold cursor-pointer px-6 py-6 rounded-full"
                                >
                                    Search
                                </Button>
                            </Field>

                            <Card
                                ref={cardRef}
                                className="w-full max-w-lg mt-2 max-h-125 overflow-y-scroll absolute z-9999 bg-white hidden"
                            >
                                <CardHeader>
                                    <CardTitle>All districts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="grid gap-2 py-2 text-sm">
                                        {allWarehouses.map((warehouse) => (
                                            <li
                                                key={`${warehouse.latitude}-${warehouse.longitude}`}
                                                onClick={handleListSearch}
                                                className="flex gap-2 border-b border-b-gray-200 pb-3 pt-1 cursor-pointer last:broder-b-0 last:border-b-transparent"
                                            >
                                                <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                                                <span>
                                                    {warehouse.district}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </form>

                        <div className="map w-full h-150 mt-20">
                            <MapContainer
                                center={mapCenter}
                                zoom={8}
                                scrollWheelZoom={false}
                                className="h-150 rounded-xl"
                                ref={mapRef}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {warehouses.map((warehouse, index) => (
                                    <Marker
                                        key={index}
                                        position={[
                                            warehouse.latitude,
                                            warehouse.longitude,
                                        ]}
                                    >
                                        <Popup>
                                            <strong className="text-base">
                                                {warehouse.district}
                                            </strong>{" "}
                                            <br />
                                            <strong>Services Area: </strong>
                                            {warehouse.covered_area.join(", ")}
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
