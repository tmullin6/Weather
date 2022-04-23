import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Header = ()=>{
    return (
        <div className="header">
            <div className="title">
                Simple Weather
            </div>
            <div className="search">
                <label>Please Enter City:  </label>
                <input type="text" />
                <Button variant="outlined" size="small">Search</Button>
                <FormControl className="units">
                    <FormLabel id="units">Units:</FormLabel>
                    <RadioGroup row>
                        <FormControlLabel value="C" control={<Radio size="small"/>} label="C" />
                        <FormControlLabel value="F" control={<Radio size="small"/>} label="F" />
                    </RadioGroup>

                </FormControl>
            </div>
        </div>
    )
}

export default Header;