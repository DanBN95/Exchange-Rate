import { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { changeBase, selectCurrency } from "../features/currency/currencySlice";
import { getExchangeRates } from "../features/currency-api/currencyApiSlices";
import { selectDate } from "../features/date/dateSlice";

const FormInput = (props) => {

    const currency = useSelector(selectCurrency);
    const date = useSelector(selectDate);
    const dispatch = useDispatch();    

    const handleSelectOnChange = (event) => {
        const retVal = event.target.value;
        console.log(retVal);
        dispatch(changeBase(retVal));
    }

    const handleRetrieveDataPressed = () => {
        console.log("btn pressed")
        console.log(date);
        dispatch(getExchangeRates({date, currency}))
    }

    return (
        <div>
        <form className="form-container">
            <div className="form-control">
                <label>
                    {props.fromLabel}
                </label>
                    <select onChange={handleSelectOnChange}>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
            </div>
            <div className="form-control">
                <label>
                    {props.toLabel}
                </label>
                    <input className="form-concurrency" value={currency.output} readOnly style={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 0.5}}/>
            </div>
        </form>
        <div className="retrieve-data-btn">
                <Button color="blue" text="Retrieve Data" onClick={handleRetrieveDataPressed} />    
        </div>
        </div>
    )
}

export default FormInput;
