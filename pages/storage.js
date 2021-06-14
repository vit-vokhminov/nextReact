import React, { useState, useEffect } from 'react';
// import {searchAPI} from "../api/api";
import MainContainer from "../components/MainContainer";
//import {loadLanguages} from "../redux/actions/languages";

const Storage = ({users}) => {

    // Как этот json покласть в redux, что бы потом, это значение из redux вывести ?
    console.log(users)

    useEffect(() => {
       // Ещё нужно записывать в redux отсюда, да и попросту из любой функции
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
    //await dispatch(loadLanguages())
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
