import React, { useState, useEffect } from 'react';
import MainContainer from "../components/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import {setUsers} from "../redux/actions/users";

const Storage = ({users}) => {

    const dispatch = useDispatch();

    // redux заработал, осталось разобраться как выполнять fetch запрос при загрузке сайта
    useEffect(() => {
        dispatch(setUsers(users));
    }, []);

    return (
        <MainContainer keywords={"Redux page"} title={'Redux'}>
            <h1>Redux</h1>

            {Object.keys(users).map((elem, i) => (
                <p key={i}>{users[elem].name}</p>
            ))}
        </MainContainer>
    );
};

export default Storage;


export async function getServerSideProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users},
    }
}
