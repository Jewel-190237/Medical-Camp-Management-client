import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // const popular = data.filter(item => item.category === 'popular');
                setMenu(data);
                console.log(data);
                setLoading(false);
            })
    }, [])
    return [menu, loading];
}

export default useMenu;