import React, {ChangeEvent} from "react";
import {Button} from "./Button";

export type SettingsPropsType = {
    onChangeStartValue: (value: number) => void;
    onChangeMaxValue: (value: number) => void;
    startIncrementValue: () => void;
    disabledSetButton: boolean;
    startValue: number;
    maxValue: number;
}

export function Settings(props: SettingsPropsType) {

    const onChangeClickStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(Number(event.currentTarget.value))
    }
    const onChangeClickMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(Number(event.currentTarget.value))
    }


    const startIncrementValue = () => {
        props.startIncrementValue();
    }

    return (
        <div className="inputsBlock">
            <div className="inputsInterface">
                <div>
                    <label htmlFor="maxValue">max value:</label>
                    <input id="maxValue"
                           type="number"
                           step="1"
                           value={props.maxValue}
                           onChange={onChangeClickMaxValue}
                    />
                </div>
                <div>
                    <label htmlFor="startValue">start value:</label>
                    <input id="startValue"
                           type="number"
                           step="1"
                           value={props.startValue}
                           onChange={onChangeClickStartValue}/>
                </div>
            </div>
            <div className="buttonSection">
                <Button buttonTitle={"set"} callback={startIncrementValue} disabled={props.disabledSetButton}/>
            </div>
        </div>
    )
}