import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function available_scholarships() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/find/vivek.joshi2@sjsu.edu`
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);

    return(
        <div>
            List of Scholarships Available <br/>

            <Button className="available_scholarships"> Click Here </Button>
        </div>

    )
}

export default available_scholarships;