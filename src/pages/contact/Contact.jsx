import { Button } from "#components/ui/button";
import { Field } from "#components/ui/field";
import { Input } from "#components/ui/input";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

export default function Contact() {
    const warehouses = useLoaderData();
    console.log(warehouses);
    return (
        <section className="contact-area mb-20">
            <div className="container mx-auto">
                <div className="contact-inner bg-white rounded-xl px-24 py-20">
                    <h3 className="text-[56px] font-extrabold text-primary-ten">
                        We are available in 64 districts
                    </h3>

                    <form className="max-w-sm">
                        <Field orientation="horizontal">
                            <Input type="search" placeholder="Search..." />
                            <Button>Search</Button>
                        </Field>
                    </form>

                    <div className="map w-full h-150 mt-20">
                        <MapContainer
                            center={[23.8103, 90.4125]}
                            zoom={8}
                            scrollWheelZoom={false}
                            className="h-150 rounded-xl"
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
    );
}
