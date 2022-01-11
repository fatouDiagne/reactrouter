import React, {useState} from 'react';
import { Data } from './Data.js'
import "../styles/style.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const MovieList = () => {
     const[title, setTitle]=useState("");
    const[description, setDescription]= useState("");
    const [postUrl, setPostUrl] = useState("");
    const [rating, setRating] = useState("");
    const [listData, setListData] = useState({
        list:
        {
        title: "", description: "", postUrl: "", rating: ""
        }
    }
    )
    const [searchkey, setSearchKey] = useState("");
    const searchChange = (e) => {
        setSearchKey(e.target.value)
    }
    const titleChange=(e)=>{
        setTitle(e.target.value)
    }
    const descriptionChange=(e)=>{
        setDescription(e.target.value)
    }
    const postUrlChange=(e)=>{
        setPostUrl(e.target.value)
    }
    const ratingChange=(e)=>{
        setRating(e.target.value)
    }
    const handleChange = async (e) => {
        e.preventDefault();
        if (title,description,postUrl,rating) {
            setListData({
                ...listData,
                    list: {
                    title: title,
                    description: description,
                    postUrl: postUrl,
                    rating:rating
                }
            })
            console.log(listData)
        }
    }
    const filteredList=()=>{
        return Data.filter((films) => {
            if (searchkey == "") {
                return films
            }
            else if (films.title.toLowerCase().includes(searchkey.toLowerCase())) {
                return films
            }
                
            })
    }
   
    return (
        <div className="container">
        <div >
             <input type="search" placeholder="Rechercher...." autoComplete="off" name={searchkey} onChange={searchChange}/>
                {
                    filteredList().map(index => 
                        <div key={index.id}>
                            <div className="text-title">
                                <h2>{index.title}</h2>
                            </div> 
                            <div className="contenant">
                            <Link to={`/description/${index.id}`}>
                                    <img className="mycontainer" src={index.postUrl} alt="images" />
                             </Link>    
                                <div className="texte_center">
                                    <p>{index.description}</p>
                                    <div className="text-rating">
                                        <h4>{index.rating }</h4>
                                    </div>
                                </div>
                            </div>
                            
                               
                        </div>

                        )
                }
            </div>
                 <form>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch', marginTop:'50px', padding:'6px' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                <div>
                    <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    name={title}
                                defaultValue="Cendrillon"
                                 type="text"
                    onChange={titleChange}
                    />
                    </div>
                    <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    defaultValue="description"
                                name={description}
                                 type="text"
                    multiline
                    rows= {4}
                    onChange={descriptionChange}
                    />
                    </div>
                    <div>
                     <TextField
                    required
                    id="outlined-required"
                                label="PosteURl"
                                type="text"
                    name={postUrl}
                    defaultValue="posteUrl"
                    onChange={postUrlChange}
                    />
                    </div>
                    <div>
                     <TextField
                    required
                    id="outlined-required"
                                label="Rating"
                                 type="text"
                    name={rating}        
                    defaultValue="rating"
                    onChange={ratingChange}
                    />
                    </div>
                    <div>
                             <Button variant="contained" type="submit" onClick={handleChange}>
                                    Contained
                            </Button>
                        </div>
                        </div>
                        </Box>
                    
                </form>
            </div>
    );
};
export default MovieList;