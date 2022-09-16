import React, { useState } from 'react';
import './Search.css'
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

//DATE PICKER COMPONENT
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }; // explanation for this 

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    } // when you select the date set the start date to whatever range is given, same for end date

    return (
        <div className='search'>
            <DateRangePicker ranges=
                {[selectionRange]} onChange=
                {handleSelect} />   {/*data range picker itself || we pass the array with selectionRange
            and on change we pass
            in our handle select function*/}
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input min={0}
                defaultValue={2}
                type="number" />
            <Button onClick={() => history.push('./search')}>Search
            Airbnb
            </Button>
        </div>
    )
}

export default Search
