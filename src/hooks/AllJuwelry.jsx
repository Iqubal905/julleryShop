import { useEffect, useState } from "react";


const AllJuwelry = () => {
  
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jullery-server-side.vercel.app/allItems')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false)
                });
    }, [])

    return [items, loading]
};

export default AllJuwelry;