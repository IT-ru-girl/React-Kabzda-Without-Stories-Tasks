import {findAllByDisplayValue} from '@testing-library/react';
import React, {useState} from 'react';

// export  default {
//     title: 'React.memo demo'
// }

const Filter= (props: any)=>{
    return <div>{props.count}</div>
}

const Users= (props: {users: string[]})=>{
    console.log('bu')
    return <div>
        {props.users.map((u,i)=> <div>{u}</div>)}
    </div>
}

const UsersMemo = React.memo(Users)

export const ReactMemo =()=>{
    const [counter, setCounter]=useState(0)
    const [users, setUsers]= useState(['bu','su', 'du'])
    const addUser =()=>{
        const newUser = 'pu'
        setUsers([...users, newUser])
    }

    return(
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={addUser}>add user</button>
            <Filter count={counter}/>
            <UsersMemo users={users} />
        </div>
    )
}

export default ReactMemo;