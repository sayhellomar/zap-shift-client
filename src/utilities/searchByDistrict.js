export function searchByDistrict(warehouses, location, mapRef) {
    const district = warehouses.find((warehouse) =>
        warehouse.district
            .toLowerCase()
            .includes(location.toLowerCase()),
    );

    if (district) {
        const coords = [district.latitude, district.longitude];
        mapRef.current.flyTo(coords, 12);
    }
}