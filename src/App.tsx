import "./App.css";
import {useState} from "react";
import {UiCounter} from "./components/UiCounter";
import {SetUiCounter} from "./components/SetUiCounter";

export const App = () => {
    const [maxValue, setMaxValue] = useState<number>(10);
    const [startValue, setStartValue] = useState<number>(0);
    const [viewValue, setViewValue] = useState<number>(0);

    const FooInc = (value: string) => {
        if (value === 'inc') viewValue<maxValue?setViewValue(prevState => prevState + 1):setViewValue(maxValue);
        if (value === 'reset') setViewValue(startValue)
    }

     const ValueFoo=(num:number,value:string)=>{
        if(value==='max')setMaxValue(num)
         if(value==='start')setStartValue(num)
    }

    const SetFoo=()=>{
        setViewValue(startValue)
        setStartValue(startValue)
        setMaxValue(maxValue)
    }

    return (
        <div className="AppContainer">
            <SetUiCounter ValueFoo={ValueFoo} SetFoo={SetFoo}/>
            <UiCounter viewValue={viewValue} FooInc={FooInc} disabled={viewValue===maxValue}/>
        </div>
    )
}


