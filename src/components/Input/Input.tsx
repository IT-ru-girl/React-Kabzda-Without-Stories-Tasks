import React, {ChangeEvent, useState} from 'react';

const Input = () => {


     const [parentValue, setParentValue]= useState('')
const onChangeHandler= (event: ChangeEvent<HTMLInputElement>)=>{
         // setParentValue(parentValue)
    const actualValue= event.currentTarget.value
    setParentValue(actualValue)

}


    return (
        <div>
            <input value={parentValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;