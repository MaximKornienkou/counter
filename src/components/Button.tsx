import React from "react";
import './Button.css'

export type ButtonPropsType = {
    buttonTitle: string;
    callback: () => void;
    disabled: boolean;
}

export function Button(props: ButtonPropsType) {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}
                    className="button"
                    disabled={props.disabled}
                    style={props.disabled ? {opacity: 0.5} : {opacity: 1}}

            >{props.buttonTitle}</button>
        </div>
    )
}