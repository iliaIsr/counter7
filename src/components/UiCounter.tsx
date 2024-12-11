import {Button} from "./Button";

type UiCounterPropsType = {
    viewValue: number;
    FooInc: (value: string) => void
    startValue: number
    maxValue: number
    message: string

}

export const UiCounter = (props: UiCounterPropsType) => {

    const onClickHandler = (value: string) => props.FooInc(value)
    const Disabled = props.message.length !
    const DisabledInc =Disabled || props.viewValue === props.maxValue;
    const DisabledRes = Disabled || props.viewValue === props.startValue


    return (
        <div className="BaseContainer">
            {Disabled ?
                <div
                    className={props.message === 'incorrect value' ? "ViewValueContainerDisabled text" : "ViewValueContainer text"}>
                    <span>{props.message}</span>
                </div>
                : <div
                    className={props.viewValue === props.maxValue ? "ViewValueContainerDisabled" : "ViewValueContainer"}>
                    <span>{props.viewValue}</span>
                </div>

            }


            <div className="DubleButtonContainer">
                <Button onClick={() => onClickHandler('inc')} name={'inc'} disabled={DisabledInc}/>
                <Button onClick={() => onClickHandler('reset')} name={'reset'} disabled={DisabledRes}/>
            </div>

        </div>
    )
}