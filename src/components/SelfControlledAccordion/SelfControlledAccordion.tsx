import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string


}


function SelfControlledAccordion(props: AccordionPropsType) {
    //console.log('SelfControlledAccordion rendered')

    //let collapsed = true
    let [collapsed, setCollapsed]= useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)} }/>
            {/*<button onClick={()=>{(!collapsed)}}>TOGGle</button>*/}
            {!collapsed && <AccordionBody/>}

        </div>
    );
}

type AccordionTitleType = {
    title: string
    onClick: ()=> void
    // collapsed: boolean
}
function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendered')
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>
                {props.title}
            </h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}






export default SelfControlledAccordion;