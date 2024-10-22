import React, { useState } from "react";
import Select from "react-select";
import flags from "emoji-flags";

const countryOptions = flags.data.map((country) => ({
    value: country.code,
    label: `${country.emoji} ${country.name}`,
}));

const CountryDropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log("Selected country:", selectedOption);
    };

    return (
        <div> 
            <Select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countryOptions}
                placeholder="Select a country"
                isSearchable={true}
                label="Country" labelPlacement={"outside-left"}
                variant={"faded"}
            />
        </div>
    );
};

export default CountryDropdown;
