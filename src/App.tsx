import "./App.css";
import {useState} from "react";
import {UiCounter} from "./components/UiCounter";
import {SetUiCounter} from "./components/SetUiCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incAC, resAC, setValueAC} from "./bll/counter-reducer";
import {setCorrectAC, setIncorrectAC, setZeroAC} from "./bll/message-reducer";
import {setMaxAC, setMinAC} from "./bll/start-max-reducer";

export const App = () => {
    // let [maxValue, setMaxValue] = useState<number>(10);
    // let [startValue, setStartValue] = useState<number>(0);
    // let [viewValue, setViewValue] = useState<number>(0);
    // let [message, setMessage] = useState<string>("enter value and press set");

    // useEffect(() => {
    //     const storedValue = localStorage.getItem("view value");
    //     if (storedValue !== null) {
    //         let resultLS = JSON.parse(storedValue)
    //         setMessage('')
    //         setViewValue(resultLS);
    //     }
    // },[])

    const dispatch=useDispatch();
    const viewValue=useSelector<AppStateType,number>((state) => state.counter.value)
    const message=useSelector<AppStateType,string>((state)=>state.message.message)
    const maxValue=useSelector<AppStateType,number>((state)=>state.minMaxVal.maxVal)
    const startValue=useSelector<AppStateType,number>((state)=>state.minMaxVal.minVal)



    const FooInc = (value: string) => {
        if (value === "inc" && viewValue >= 0 && maxValue > viewValue)
            dispatch(incAC())
        if (value === "reset")
            dispatch(resAC(startValue))
    }

    const ValueFoo = (num: number, value: string) => {
        if (value === 'max value') {
            dispatch(setMaxAC(num))
        }
        if (value === 'min value') {
            dispatch(setMinAC(num))
        }
        startValue >= 0 && maxValue > startValue ? dispatch(setCorrectAC("enter value and press set")): dispatch(setIncorrectAC("incorrect value"))
    }


    const SetFoo = () => {
        if (startValue >= 0 && maxValue > startValue) {
            dispatch(setValueAC(startValue))
            dispatch(setZeroAC(''))
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


