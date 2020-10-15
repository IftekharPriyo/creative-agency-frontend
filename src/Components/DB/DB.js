import { useEffect, useState } from 'react';

const DB = () => {
const [services,setServices] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/allServices')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
    })
},[])
return services

};
export default DB;
