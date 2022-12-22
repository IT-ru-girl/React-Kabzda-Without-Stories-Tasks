import React, {ChangeEvent, useState} from 'react';

const Checkbox = () => {
    const [parentValue, setParentValue]= useState(true)
    const onChangeHandler= (event: ChangeEvent<HTMLInputElement>)=>{
        // setParentValue(parentValue)
        const actualValue= event.currentTarget.checked
        setParentValue(actualValue)

    }
    return (
        <div>
            <input checked={parentValue} onChange={onChangeHandler}/>
        </div>
    );
};

export default Checkbox;