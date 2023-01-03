import React, {useState} from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import SelfControlledAccordion from './components/SelfControlledAccordion/SelfControlledAccordion';
import {UncontrolledRating} from './components/UncontrollesRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledInput from './components/UncontrolledInput/UncontrolledInput';
import Input from './components/Input/Input';

import Select from './components/Input/Select';
import ReactMemo from './components/ReactMemo/ReactMemo';
import AccordionMemo from './components/Accordion/Accordion';
import UseMemo from './components/UseMemo/UseMemo';
import UseMemo2 from './components/UseMemo/UseMemo2';
import HelpsReactMemo from './components/UseMemo/UseMemo2';

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)



    let [switchOn, setSwitchOn] = useState(false)
    // const onClickButtonHandler =()=>{
    //     setAccordionCollapsed(accordionCollapsed)
    // }


    const onClickHandler = () => {
        console.log('item clicked')
    }
    return (
        <div className={'App'}>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <SelfControlledAccordion titleValue={'Menu'}/>
            <PageTitle title={'my friends'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <AccordionMemo items={[
                {title: 'dim', value: 1},
                {title: 'sash', value: 2},
                {title: 'mash', value: 3},
                {title: 'alex', value: 4}]}
                       titleValue={'Users'}
                       onClick={onClickHandler}
            />
            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <UncontrolledInput/>
            <Input/>
            <Select items={[
                {title: 'dim', value: '1'},
                {title: 'sash', value: '2'},
                {title: 'mash', value: '3'},
                {title: 'alex', value: '4'}]}
            />
            <ReactMemo/>
            <UseMemo/>
            <HelpsReactMemo/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
