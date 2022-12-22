import React, {ChangeEvent, useRef, useState} from 'react';




const UncontrolledInput = () => {
    const[value,setValue]= useState('')

   const  onChangeHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        debugger
        const actualValue= event.currentTarget.value
       setValue(actualValue)
   }

   const onClickHandler =()=>{
       // const el = document.getElementById('inputId') as HTMLInputElement
       const el=inputRef.current as HTMLInputElement
       setValue(el.value)
   }
const inputRef= useRef<HTMLInputElement>(null)


    return (
        <div>
            <input ref={inputRef}
                   // id={'inputId'}
                   onChange={onChangeHandler} />
            {value}
            <button onClick={onClickHandler}  >save</button>

        </div>
    );
};

export default UncontrolledInput;