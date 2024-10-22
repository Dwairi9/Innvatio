import React, { useState } from "react";
import axios from "axios";
import { Input, Select, SelectItem, DatePicker, Button } from "@nextui-org/react";
import CountryDropdown from "../../components/country-dropdown.jsx"; 
import { attachmentTypes, states } from "../../components/Lookups.jsx";

const AttachmentForm = () => {
    const [attachmentType, setAttachmentType] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [englishName, setEnglishName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [employer, setEmployer] = useState("");
    const [employerName, setEmployerName] = useState("");
    const [nationalty, setNationalty] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [error, setError] = useState("");

    const selectProps = {
        labelPlacement: "outside-left",
        classNames: {
            label: "text-small font-medium text-default-700 group-data-[filled=true]:text-default-700",
        },
    };

    const handleAttachmentTypeChange = (e) => {
        setAttachmentType(e.currentKey);
    };

    const handleFileChange = (e) => {
        setAttachment(e.target.files[0]);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!attachment) {
            setError("Attachment is required.");
            return;
        }

        const formData = new FormData();
        formData.append("Attachment", attachment);
        formData.append("AttachmentType", attachmentType);
        formData.append("NameEnglish", englishName);
        formData.append("Nationalty", nationalty);
        formData.append("DateOfBirth", dateOfBirth);
        formData.append("Country", selectedCountry);
        formData.append("Employer", employer);
        formData.append("EmployerName", employerName);

        try {
            const response = await axios.post("https://localhost:7268/Dahboard/UploadAttachment", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(response.data); // Handle the response
        } catch (error) {
            console.error("Error uploading attachment:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>  
                <Select
                    className="col-span-12 md:col-span-6"
                    items={attachmentTypes}
                    label="Attachment Type"
                    id="attachmentType"
                    placeholder="--Select Type--"
                    {...selectProps}
                    variant={"faded"}
                    onSelectionChange={handleAttachmentTypeChange} >
                        {(item) => (
                            <SelectItem key={item.value}>{item.title}</SelectItem>
                        )}  
                </Select> 
            </div>
             
            {attachmentType === "1" && ( 
                <div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 form-group"> 
                        <Input id="englishName" type="text" value={englishName} variant={"faded"} label="Name in english" labelPlacement={"outside-left"} onChange={(e) => setEnglishName(e.target.value)} /> 
                    </div> 

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 form-group"> 
                        <Input id="nationalty" type="text" value={nationalty} variant={"faded"} label="Nationalty" labelPlacement={"outside-left"} onChange={(e) => setNationalty(e.target.value)} /> 
                    </div> 

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 form-group"> 
                        <DatePicker id="dateOfBirth" variant={"faded"} label="Date Of Birth" labelPlacement={"outside-left"} onChange={setDateOfBirth} className="max-w-[284px]" />
                    </div> 
                </div>
            )}

            {attachmentType === "2" && (
                <div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> 
                        <Input id="englishName" type="text" value={englishName} variant={"faded"} label="Name in english" labelPlacement={"outside-left"} onChange={(e) => setEnglishName(e.target.value)} />
                    </div> 

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> 
                        <CountryDropdown />
                    </div> 

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> 
                        <DatePicker id="dateOfBirth" variant={"faded"} label="Date Of Birth" labelPlacement={"outside-left"} onChange={setDateOfBirth} className="max-w-[284px]" />
                    </div> 
                </div>
            )}

            {attachmentType === "3" || attachmentType === "4" && (
                <div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> 
                        <Input id="employer" type="text" value={employer} variant={"faded"} label="Employer" labelPlacement={"outside-left"} onChange={(e) => setEmployer(e.target.value)} />
                    </div>

                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4"> 
                        <Input id="employerName" type="text" value={employerName} variant={"faded"} label="Employer Name" labelPlacement={"outside-left"} onChange={(e) => setEmployerName(e.target.value)} />
                    </div> 
                </div>
            )}

            <div>
                <label htmlFor="attachment">Upload Attachment:</label>
                <input id="attachment" type="file" onChange={handleFileChange}   />
                {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error */}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AttachmentForm;
