import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './Reducer';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    items: ItemType[]
    onClick: (value: any) => void

}

/*// !props.accordionCollapsed  означает что colapsed false*/
function Accordion(props: AccordionPropsType) {
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    debugger
    let [accordionCollapsed, dispatch] = useReducer(reducer, {accordionCollapsed: false})


    return (
        <div>
            <AccordionTitle
                // accordionCollapsed={accordionCollapsed}
                //setAccordionCollapsed= {setAccordionCollapsed} было
                onClick={() => {
                    dispatch({type: TOGGLE_CONSTANT})
                }}
                title={props.titleValue}/>
            <ul>{!accordionCollapsed && props.items.map((i, index) => <li key={index} onClick={() => {
                props.onClick(i.value)
            }}>{i.title}</li>)}</ul>

        </div>
    );
}

type AccordionTitleType = {
    title: string
    // setAccordionCollapsed: (accordionCollapsed: boolean) => void
    // onClick: (accordionCollapsed: boolean) => void было
    //  accordionCollapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendered')
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
                // props.onClick(!props.accordionCollapsed)  было
            }}> {props.title}</h3>

        </div>
    );
}


// type BodyType= {
//     items: ItemType[]
//     onClick: (value: any)=> void
// }
// function AccordionBody(props: BodyType) {
//     return (
//         <div>
//             <ul>
//                 {props.items.map((i, index) => <li key={index} onClick={()=>{props.onClick(i.value)}}>{i.title}</li>)}
//
//             </ul>
//         </div>
//     );
// }
//
export default Accordion;