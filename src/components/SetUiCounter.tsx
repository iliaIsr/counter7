type SetUiCounterPropsType = {
    ValueFoo:(num:number,value:string)=>void;
    SetFoo:()=>void;
}


export const SetUiCounter = ({ValueFoo,SetFoo}:SetUiCounterPropsType) => {

    const onChangeHandler = (e: string, val: string) => {
        ValueFoo(+e, val)
    }
    const OnSetHandler=()=>{
        SetFoo()
    }
    return (
        <div className="BaseContainer">
            <div className="ViewValueContainer set">
                <div className="InputBase">
                    <span>max value :</span>
                    <input type='number' className="ShortInput" onChange={(e) => {
                        onChangeHandler(e.target.value, "max")
                    }}/>
                </div>
                <div className="InputBase">
                    <span>start value:</span>
                    <input type='number' className="ShortInput" onChange={(e) => {
                        onChangeHandler(e.target.value, "start")
                    }}/>
                </div>

            </div>
            <div className="DubleButtonContainer">
                <button className="ButtonBase" onClick={OnSetHandler}>set</button>

            </div>

        </div>
    )
}