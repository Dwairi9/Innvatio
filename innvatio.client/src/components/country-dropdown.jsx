import React, { useState } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import flags from "emoji-flags";

const countryOptions = flags.data.map((country) => ({
    name: country.name,
    value: country.code,
    emoji: country.emoji 
}));

const CountryDropdown = React.forwardRef(({ className, ...props }, ref) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log("Selected country:", selectedOption);
    };

    return (
        <Select
            className="col-span-12 md:col-span-8"
            value={selectedCountry}
            items={countryOptions}
            id="country"
            placeholder="--Select Country--"
            variant={"faded"}
            onSelectionChange={handleCountryChange}
            renderValue={(items) => {
                return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <Avatar
                            alt={item.data.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={item.data.emoji}
                        />
                        <div className="flex flex-col">
                            <span>{item.data.name}</span> 
                        </div>
                    </div>
                ));
            }}
            >
            {(item) => (
                <SelectItem key={item.name} textValue={item.name}>
                    <div className="flex gap-2 items-center">
                        <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.emoji} />
                        <div className="flex flex-col">
                            <span className="text-small">{item.name}</span> 
                        </div>
                    </div>
                </SelectItem>
            )}
        </Select>
    );
});

export default CountryDropdown;
