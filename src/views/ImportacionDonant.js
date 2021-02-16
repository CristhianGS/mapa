import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import cliente from "../data/cliente.json";



export default function ImportacionDonant() {


    const url = 'http://192.168.100.212:8000/api/test'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        //console.log(response.status)
        const responseJson = await response.json()
        setTodos(responseJson)
        //console.log(responseJson)
    }

    useEffect(() => {

        fetchApi()
    }, [])



    function mapt(name, coorde1, coorde2) {

        localStorage.setItem('name', name);
        localStorage.setItem('latitude', coorde1);
        localStorage.setItem('longitude', coorde2);
    }

    return (
        <div>
            {!todos ? 'cargando, espera un momento...' :
                todos.map((todo, index) => {

                    //console.log( );
                    return (
                        <tbody >

                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    {todo.name}
                                </td>

                                <Link to="/map" onClick={mapt(todos[index].name, todos[index].latitude, todos[index].longitude)} className="no-underline hover:underline underline w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    {todo.latitude} {todo.longitude}
                                </Link>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                    <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6">Editar</a>
                                    <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6">Eliminar</a>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
        </div>
    )



}


