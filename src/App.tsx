import "./App.css";
import {useState} from "react";
import {UiCounter} from "./components/UiCounter";
import {SetUiCounter} from "./components/SetUiCounter";

export const App = () => {
    let [maxValue, setMaxValue] = useState<number>(10);
    let [startValue, setStartValue] = useState<number>(0);
    let [viewValue, setViewValue] = useState<number>(0);
    const [message, setMessage] = useState<string>("enter value and press set");


    const FooInc = (value:string) => {
        if(value==="inc"&&viewValue >= 0 && maxValue > viewValue) setViewValue(prevState => prevState + 1);
        if(value==="reset") setViewValue(startValue);
    }

    const ValueFoo = (num: number, value: string) => {
        if (value === 'max value') {
            maxValue = num
            setMaxValue(maxValue)
        }
        if (value === 'min value') {
            startValue = num
            setStartValue(startValue)
        }
        startValue >= 0 && maxValue > startValue ? setMessage("enter value and press set") : setMessage("incorrect value")
        console.log(maxValue, startValue)
    }


    const SetFoo = () => {
        if(startValue >= 0 && maxValue > startValue){
            setViewValue(startValue)
            setMessage('')
        }
    };

    return (
        <div className="AppContainer">
            <SetUiCounter ValueFoo={ValueFoo} SetFoo={SetFoo} message={message}/>
            <UiCounter viewValue={viewValue} FooInc={FooInc} startValue={startValue} maxValue={maxValue}
                       message={message}/>
        </div>
    )
}


