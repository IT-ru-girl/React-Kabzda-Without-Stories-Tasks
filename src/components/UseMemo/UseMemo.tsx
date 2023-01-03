import React, {useMemo, useState} from 'react';


const UseMemo = () => {


    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
        }
        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>result a: {resultA}</div>
            <div>result b: {resultB}</div>
        </div>
    );
};


export default UseMemo;