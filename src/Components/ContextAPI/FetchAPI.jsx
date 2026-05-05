import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Parent from './Parent';

export const JsonApiData = createContext();

const FetchAPI = () => {
    let [apidata, setApidata] = useState([]);
    let fetchPlaceholderApi = async () => {
        try {
            let respObj = await axios.get(`http://localhost:4000/users`);
            setApidata(respObj.data);
        } catch (error) {
            console.error(`Server is not started...`)
        } finally {
            console.log("Done...!")
        }
    }
    useEffect(()=>{
        fetchPlaceholderApi()
    },[])

    // console.log(apidata);
    return (
        <div>
            <h1>Context API</h1>
            {/* npx json-server --watch src/jsondata/placeholder.json --port 4000 -------- To run Json server */}

            <div className="apiContainer">
                {
                    apidata.length === 0 ? 
                    <h4>Loading...!</h4> : 
                    <JsonApiData.Provider value={apidata}>
                        <Parent/>
                    </JsonApiData.Provider>
                }
            </div>
        </div>
    )
}

export default FetchAPI
