import React, {ChangeEvent, useState} from 'react';
import s from './Select.module.css'


type SelectType = {
    items: ItemType[]


}

type ItemType = {
    title: string
    value: string
}
const Select = (props: SelectType) => {
    const [value, setValue] = useState<string>('')
    let [active, setActive] = useState<boolean>(true)

    const filteredItem = props.items.find(i => i.value === value)

    const onClickHandler = () => {
        setActive(!active)
    }

    return (
        <div className={s.select}>

            <h1 onClick={onClickHandler}
                className={s.main}>{filteredItem && filteredItem.title}</h1>
            <div className={s.active}
                // className={s.items + ' '+ (active ? s.active : '')}
            >
                {active && props.items.map(i => <div onClick={() => {
                    setValue(i.value);
                    onClickHandler()
                }} key={i.value}>{i.title}</div>)}
            </div>

        </div>

    )


    // const [parentValue, setParentValue]= useState<string | undefined>(undefined)
    // const onChangeHandler= (event: ChangeEvent<HTMLSelectElement>)=>{
    //     // setParentValue(parentValue)
    //     const actualValue= event.currentTarget.value
    //     setParentValue(actualValue)
    //
    // }
    // return (
    //     <div>
    //         <select value="parentValue" onChange={onChangeHandler}>
    //
    //             <option >none</option>
    //             <option value="1"></option>
    //             <option value="2"></option>
    //             <option value="3"></option>
    //         </select>
    //     </div>
    // );
};

export default Select;