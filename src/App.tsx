import React, {useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings";
import {Increment} from "./components/Increment";
import {storage} from "./storage/storage";

export function App() {

    const initMaxValue = storage.getItem("maxValue") ? storage.getItem("maxValue") : 10;
    const initStartValue = storage.getItem("startValue") ? storage.getItem("startValue") : 0;


    const [maxValue, setMaxValue] = useState(initMaxValue);
    const [startValue, setStartValue] = useState(initStartValue);
    const [incrementValue, setIncrementValue] = useState(startValue);
    const [disabledSetButton, setDisabledSetButton] = useState(true);
    const [disabledIncResetButton, setDisabledIncResetButton] = useState(false);
    const [error, setError] = useState("Incorrect value!")


    const increaseValue = () => {
        setIncrementValue(incrementValue + 1)
    }
    const resetValue = () => {
        setIncrementValue(startValue);
    }

    const onChangeStartValue = (value: number) => {
        setStartValue(value);
        if (value < 0 || value >= maxValue) {
            setIncrementValue(error);
            setDisabledSetButton(true);
        } else {
            setDisabledSetButton(false);
            setDisabledIncResetButton(true);
            setIncrementValue("enter values and press 'set'")

        }
    }
    const onChangeMaxValue = (value: number) => {
        setMaxValue(value);
        setDisabledIncResetButton(true);
        if (value <= startValue || startValue < 0) {
            setIncrementValue(error);
            setDisabledSetButton(true);
        } else {
            setDisabledSetButton(false);
            setIncrementValue("enter values and press 'set'");
        }
    }

    const startIncrementValue = () => {
        setIncrementValue(startValue);
        setDisabledSetButton(true);
        setDisabledIncResetButton(false);
        storage.setItem("maxValue", maxValue);
        storage.setItem("startValue", startValue);
    }

    return (
        <div className="container">
            <Settings onChangeStartValue={onChangeStartValue}
                      onChangeMaxValue={onChangeMaxValue}
                      startIncrementValue={startIncrementValue}
                      disabledSetButton={disabledSetButton}
                      startValue={startValue}
                      maxValue={maxValue}
            />
            <Increment increaseValue={increaseValue}
                       incrementValue={incrementValue}
                       maxValue={maxValue}
                       resetValue={resetValue}
                       disabledIncResetButton={disabledIncResetButton}
            />
        </div>
    );
}
