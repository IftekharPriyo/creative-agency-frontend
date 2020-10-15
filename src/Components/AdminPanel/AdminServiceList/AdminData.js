import { useEffect, useState } from 'react';

export const AdminData = () => {
const [services,setServices] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/adminServices')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
    })
},[])
return services
};
