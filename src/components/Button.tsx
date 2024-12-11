type ButtonPropsType = {
    onClick: () => void;
    name: string;
    disabled?: any
}

export const Button=(props:ButtonPropsType)=>{


    return (
        props.disabled ?

            <button className="ButtonBase Disabled" onClick={props.onClick}>{props.name}</button>
            :
            <button className="ButtonBase" onClick={props.onClick}>{props.name}</button>
    )
}