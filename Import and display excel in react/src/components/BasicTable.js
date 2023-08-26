import React, { useState } from "react";
import "./BasicTable.css";

export default function BasicTable() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }; 

    const tableData = [
        {
            surname: "John",
            firstName: "Ade",
            email: "adejohn@gmail.com",
            phoneNo: "08066566983",
            division: "Audit",
            level: "Staff Assistant",
            employeeType: "Full staff",
            entryFY: "FY 23",
        },
        {
            surname: "Jane",
            firstName: "Doe",
            email: "janedoe@gmail.com",
            phoneNo: "08066566984",
            division: "Marketing",
            level: "Manager",
            employeeType: "Full staff",
            entryFY: "FY 22",
        },
        {
            surname: "Michael",
            firstName: "Smith",
            email: "michaelsmith@gmail.com",
            phoneNo: "08066566985",
            division: "Sales",
            level: "Associate",
            employeeType: "Contract",
            entryFY: "FY 23",
        },
        {
            surname: "Emily",
            firstName: "Johnson",
            email: "emilyjohnson@gmail.com",
            phoneNo: "08066566986",
            division: "HR",
            level: "Assistant",
            employeeType: "Part-time",
            entryFY: "FY 23",
        },
        {
            surname: "Mark",
            firstName: "Williams",
            email: "markwilliams@gmail.com",
            phoneNo: "08066566987",
            division: "Finance",
            level: "Analyst",
            employeeType: "Full staff",
            entryFY: "FY 22",
        },
        {
            surname: "Sarah",
            firstName: "Brown",
            email: "sarahbrown@gmail.com",
            phoneNo: "08066566988",
            division: "IT",
            level: "Engineer",
            employeeType: "Contract",
            entryFY: "FY 23",
        },
    ];

    const filterTableData = () => {
        if (searchTerm === "") {
            return tableData;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return tableData.filter((row) => {
            const surname = row.surname.toLowerCase();
            const firstName = row.firstName.toLowerCase();
            return (
                surname.includes(lowerCaseSearchTerm) ||
                firstName.includes(lowerCaseSearchTerm)
            );
        });
    };

    const filteredData = filterTableData();

    return (
        <>
            <input
                type="text"
                placeholder="Find by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <caption>Details</caption>
                <thead>
                    <tr>
                        <th>Surname</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Division</th>
                        <th>Level</th>
                        <th>Employee Type</th>
                        <th>Entry FY</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.surname}</td>
                            <td>{row.firstName}</td>
                            <td>{row.email}</td>
                            <td>{row.phoneNo}</td>
                            <td>{row.division}</td>
                            <td>{row.level}</td>
                            <td>{row.employeeType}</td>
                            <td>{row.entryFY}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
