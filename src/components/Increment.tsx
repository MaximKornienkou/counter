import React from "react";
import {Button} from "./Button";

export type IncrementPropsType = {
    increaseValue: () => void;
    resetValue: () => void;
    incrementValue: number;
    maxValue: number;
    disabledIncResetButton: boolean;
}

export function Increment(props: IncrementPropsType) {

    const incrementValue = () => {
        props.increaseValue();
    }
    const resetValue = () => {
        props.resetValue();
    }

    return (
        <div className="inputsBlock">
            <div className="resultInterface">
                {props.incrementValue >= 0 ?
                <div className="incrementValue">{props.incrementValue}</div> :
                <div className="incrementValueMessage">{props.incrementValue}</div>}
            </div>
            <div className="buttonSection">
                <Button buttonTitle={"inc"}
                        callback={incrementValue}
                        disabled={props.disabledIncResetButton || props.incrementValue === props.maxValue}/>
                <Button buttonTitle={"Reset"}
                        callback={resetValue}
                        disabled={props.disabledIncResetButton}/>
            </div>
        </div>
    )
}