import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import {useState,useEffect} from "react";



const Header = ()=>{

    const [city,setCity]=useState('');

    const handleCityChange = (event)=> {
        setCity(event.target.value);
    }

    const dispatch = useDispatch();
    const currentCity = useSelector(city=>city);

    const setNewCity = (data)=>{
        dispatch({type: "UPDATE_CITY",currentCity:{"name":data,"units":city.units}})
        console.log(currentCity);
    }
    const setUnits = (data)=>{
        dispatch({type:"UPDATE_UNITS", currentCity:{"name":city.name,"units":data}})
        console.log(currentCity);
    }

    

    return (
        <div className="header">
            <div className="title">
                Simple Weather
            </div>
            <div className="search">
                <label>Please Enter City:  </label>
                <input type="text" />
                <Button variant="outlined" size="small" id="search" onChange={handleCityChange} onClick={setNewCity(city)}>Search</Button>
                <FormControl className="units">
                    <FormLabel id="units">Units:</FormLabel>
                    <RadioGroup row>
                        <FormControlLabel value="C" control={<Radio size="small"/>} label="C" onClick={setUnits("C")}/>
                        <FormControlLabel value="F" control={<Radio size="small"/>} label="F" onClick={setUnits("F")}/>
                    </RadioGroup>

                </FormControl>
            </div>
        </div>
    )
}

export default Header;