import React, { useState,useEffect } from "react";
import "../css/menu.css"
import axios from "axios";
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow} from "@mui/material"

const baseUrl = "http://localhost:3001/front";
function App(props){
    const [data, setData]=useState([]);

    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setData(response.data);
        })
    }

    useEffect(async()=>{
        await peticionGet();
    },[])

    return(
        <div className="App">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>id</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>pais</TableCell>
                            <TableCell>capital_bursatil</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map(front=>(
                            <TableRow key={front.id}>
                                <TableCell>{front.nombre}</TableCell>
                                <TableCell>{front.pais}</TableCell>
                                <TableCell>{front.capital_bursatil}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
           
}
export default App;