import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onClickHandlerTrue = () => {
        setOn(true)
        props.onChange(true)
    }
    const onClickHandlerFalse = () => {
        setOn(false)
        props.onChange(false)
    }
    const onStyle = {
        width: '100px',
        height: '80px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '100px',
        height: '80px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandlerTrue}>On</div>
            <div style={offStyle} onClick={onClickHandlerFalse}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;

