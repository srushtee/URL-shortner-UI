import React from 'react'
import {urlService} from "../Controllers/urlControllers"

const Main = () => {

    const [url, setUrl] = React.useState("");
    const [shortUrl, setShortUrl] = React.useState("");
   
    const handleChange = (e) => {
        setUrl(e.target.value);
    }

    const handleClick = () => {

        const payload = {
            url: url,
        }
        console.dir(payload)

        urlService(payload).then((res) => {
            setShortUrl(res.data.redirect_url)
        }).catch((err) => err.message)

    }

    return (
        <div>
            <label>Enter URL here</label>
            <input type = "text" onChange = {handleChange}></input>
            <button onClick = {handleClick}>Submit</button>
            {
                shortUrl && <div id = "shortUrl">Your shortened URL 
                <a href={shortUrl} target="_blank" rel="noopener noreferrer">Click Here</a>
                </div> 

            }

        </div>
    )
}

export default Main;
