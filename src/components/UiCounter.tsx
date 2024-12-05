
type UiCounterPropsType = {
    viewValue: number;
    FooInc:(value:string)=>void
    disabled: boolean
}

export const UiCounter = (props: UiCounterPropsType)=>{

    const onClickHandler=(value:string)=> props.FooInc(value)


    return (
        <div className="BaseContainer">
            {props.disabled ?
                <div className="ViewValueContainerDisabled">
                    <span>{props.viewValue}</span>
                </div> :
                <div className="ViewValueContainer">
                    <span>{props.viewValue}</span>
                </div>
            }

            <div className="DubleButtonContainer">
                <button className="ButtonBase" onClick={()=>onClickHandler('inc')} >inc</button>
                <button className="ButtonBase" onClick={()=>onClickHandler('reset')}>reset</button>
            </div>

        </div>
    )
}