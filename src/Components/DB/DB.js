import { useEffect, useState } from 'react';

const DB = () => {
const [services,setServices] = useState([])
useEffect(()=>{
    fetch('https://mighty-savannah-46549.herokuapp.com/allServices')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
    })
},[])
return services

};
export default DB;
