import {Button} from "./Button";
import {Input} from "./Input";


type SetUiCounterPropsType = {
    ValueFoo: (num: number, value: string) => void;
    SetFoo: () => void;
    message:string
}


export const SetUiCounter = ({message, ValueFoo, SetFoo}: SetUiCounterPropsType) => {

    const onChangeHandler = (e: string, val: string) => ValueFoo(+e, val)
    const OnSetHandler = () => SetFoo()
    const Message=message==="incorrect value"

    return (
        <div className="BaseContainer">
            <div className="ViewValueContainer set">


                <Input name={'max value'} Message={Message} onChangeHandler={onChangeHandler}/>
                <Input name={'min value'} Message={Message} onChangeHandler={onChangeHandler}/>
            </div>

            <div className="DubleButtonContainer">
                <Button onClick={OnSetHandler} name="Set" disabled={message.length===0}/>
            </div>

        </div>
    )
}