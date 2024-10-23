import React, { useState } from "react";
import axios from "axios";
import { Input, Select, SelectItem, DatePicker, Button, cn, Autocomplete, AutocompleteItem, Avatar, Spinner  } from "@nextui-org/react"; 
import { attachmentTypes, states } from "../../components/Lookups.jsx";
import { ButtonWithBorderGradient } from "../../components/button-with-border-gradient.jsx";
import countries from "../../components/countries";

const AttachmentForm = React.forwardRef(({ className, ...props }, ref) => {
    const [attachmentType, setAttachmentType] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [englishName, setEnglishName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [employer, setEmployer] = useState("");
    const [employerName, setEmployerName] = useState("");
    const [nationalty, setNationalty] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); 
    const [responseMessage, setResponseMessage] = useState(""); 

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

        setLoading(true);

        try {
            const response = await axios.post("https://localhost:7268/Dahboard/UploadAttachment", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setResponseMessage("Attachment uploaded successfully!");
            console.log(response.data); 
        }
        catch (error) {
            setResponseMessage("Error uploading attachment. Please try again.");
            console.error("Error uploading attachment:", error);
        }
        finally {
            setLoading(false); 
        }
    };

    return (
        <>
            <form ref={ref} {...props} className={cn("flex grid grid-cols-12 flex-col gap-4 py-8", className)} onSubmit={handleSubmit}>
                <label htmlFor="attachmentType" className="col-span-4">Attachment Type:</label>
                <Select
                    className="col-span-12 md:col-span-8"
                    items={attachmentTypes} 
                    id="attachmentType"
                    placeholder="--Select Type--" 
                    variant={"faded"}
                    onSelectionChange={handleAttachmentTypeChange} >
                        {(item) => (
                            <SelectItem key={item.value}>{item.title}</SelectItem>
                        )}  
                </Select> 
             
                {attachmentType === "1" && ( 
                    <>
                        <label htmlFor="englishName" className="col-span-4">Name in english:</label>
                        <Input id="englishName" type="text" value={englishName} variant={"faded"}  onChange={(e) => setEnglishName(e.target.value)} className="col-span-12  md:col-span-8" /> 

                        <label htmlFor="nationalty" className="col-span-4">Nationalty:</label>
                        <Input id="nationalty" type="text" value={nationalty} variant={"faded"} onChange={(e) => setNationalty(e.target.value)} className="col-span-12  md:col-span-8" /> 

                        <label htmlFor="dateOfBirth" className="col-span-4">Date Of Birth:</label>
                        <DatePicker id="dateOfBirth" variant={"faded"} onChange={setDateOfBirth} className="col-span-12  md:col-span-8"  />
                    </>
                )}

                {attachmentType === "2" && (
                    <>
                        <label htmlFor="englishName" className="col-span-4">Name in english:</label>
                        <Input id="englishName" type="text" value={englishName} variant={"faded"} onChange={(e) => setEnglishName(e.target.value)} className="col-span-12  md:col-span-8" />

                        <label htmlFor="country" className="col-span-4">Country:</label>
                        <Autocomplete
                            className="col-span-12"
                            defaultItems={countries}
                            className="col-span-12  md:col-span-8"
                            name="country"
                            placeholder="--Select Country--"
                            showScrollIndicators={false}
                            onSelectionChange={setSelectedCountry }
                        >
                            {(item) => (
                                <AutocompleteItem
                                    key={item.name}
                                    startContent={
                                        <Avatar
                                            alt="Country Flag"
                                            className="h-6 w-6"
                                            src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                                        />
                                    }
                                    value={item.name}
                                >
                                    {item.name}
                                </AutocompleteItem>
                            )}
                        </Autocomplete> 

                        <label htmlFor="dateOfBirth" className="col-span-4">Date Of Birth:</label>
                        <DatePicker id="dateOfBirth" variant={"faded"} onChange={setDateOfBirth} className="col-span-12  md:col-span-8" />
                    </>
                )}

                {attachmentType === "3" && (
                    <>
                        <label htmlFor="employer" className="col-span-4">Employer:</label>
                        <Input id="employer" type="text" value={employer} variant={"faded"} onChange={(e) => setEmployer(e.target.value)} className="col-span-12  md:col-span-8" />

                        <label htmlFor="employerName" className="col-span-4">Employer Name:</label>
                        <Input id="employerName" type="text" value={employerName} variant={"faded"} onChange={(e) => setEmployerName(e.target.value)} className="col-span-12  md:col-span-8" />
                    </>
                )}

                {attachmentType === "4" && (
                    <>
                        <label htmlFor="employer" className="col-span-4">Employer:</label>
                        <Input id="employer" type="text" value={employer} variant={"faded"} onChange={(e) => setEmployer(e.target.value)} className="col-span-12  md:col-span-8" />

                        <label htmlFor="employerName" className="col-span-4">Employer Name:</label>
                        <Input id="employerName" type="text" value={employerName} variant={"faded"} onChange={(e) => setEmployerName(e.target.value)} className="col-span-12  md:col-span-8" />
                    </>
                )}

                <> 
                    <label htmlFor="attachment" className="col-span-5">Upload Attachment:</label>
                    <input id="attachment" type="file" onChange={handleFileChange} className="form-control col-span-7" />
                    {error && <label className="col-span-12" style={{ color: "red", textAlign: "left" }}>{error}</label>} {/* Show error */} 
                </>

                {loading && <div className="col-span-12"><Spinner color="secondary" /></div>}
                {responseMessage && <div className="col-span-12" style={{ color: loading ? "gray" : "green", textAlign: "left" }}>{responseMessage}</div>}

                <ButtonWithBorderGradient className="text-medium font-medium"  type="submit" >
                    Submit
                </ButtonWithBorderGradient> 
                </form>
        </>
    );
});

export default AttachmentForm;
