import React from "react";

const LocationPage = ({ city, schedule }) => {
    return (
        <>
            <div> {city} </div>
            <div>
                <ol>
                    {schedule.map(s => <li> {s.title} </li>)}
                </ol>
            </div>
        </>
    )
}

export default LocationPage;
