import { useEffect, useState } from 'react';

export const AdminData = () => {
const [services,setServices] = useState([])
useEffect(()=>{
    fetch('https://mighty-savannah-46549.herokuapp.com/adminServices')
    .then(res=>res.json())
    .then(data=>{
        setServices(data)
    })
},[])
return services
};
