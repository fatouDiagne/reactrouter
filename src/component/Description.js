import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Data } from './Data';


const Description = () => {
    const [desc, setDesc] = useState([])
    const { id } = useParams()
    const fetchData=() => {
        const list = Data[id]
        setDesc(list)
    }
    
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            <h2>{desc.description}</h2>
        </div>
    );
};

export default Description;