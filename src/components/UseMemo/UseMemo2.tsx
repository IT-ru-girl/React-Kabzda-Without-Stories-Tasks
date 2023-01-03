import React, {useMemo, useState} from 'react';


const Users2 = (props: { users: string[] }) => {

    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const UsersMemo2 = React.memo(Users2)

const HelpsReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Masha', 'Sveta', 'Nat'])


    const newArr = useMemo(() => {
        const newArr = users.filter(u => u.indexOf('a') > -1)
        return newArr
    }, [])
    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}

            <UsersMemo2 users={newArr}/>
        </div>
    )
}

export default HelpsReactMemo;
