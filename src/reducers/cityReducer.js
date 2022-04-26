const City = {
    name:'',
    units:''
}

const cityReducer = (City,action)=>{
    switch(action.type) {
        case "UPDATE_CITY":
            City.name = action.data.name;
            return City;
        case "UPDATE_UNITS":
            City.units = action.data.units;
            return City;
    }
}

export default cityReducer;