import { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { changeBase, selectCurrency } from "../features/currency/currencySlice";
import { getExchangeRates } from "../features/currency-api/currencyApiSlices";
import { selectDate } from "../features/date/dateSlice";
import { Link } from "react-router-dom"

const FormInput = (props) => {

    const currency = useSelector(selectCurrency);
    const date = useSelector(selectDate);
    const dispatch = useDispatch();    

    const handleSelectOnChange = (event) => {
        const retVal = event.target.value;
        dispatch(changeBase(retVal));
        
    }

    const handleRetrieveDataPressed = () => {
        dispatch(getExchangeRates({date, currency}))
    }

    return (
            <section className="form-section">
                <div className="form-title">
                        <h2>Currency</h2>
                    </div>
                <div className="container">
                        <form className="form">
                            <div className="select-div">
                                <label>
                                    {props.fromLabel}
                                </label>
                                <select onChange={handleSelectOnChange}>
                                    <option value="EUR">EUR</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>
                            <div className="text-div">
                                <label>
                                    {props.toLabel}
                                </label>
                                <input className="form-concurrency" value={currency.output} readOnly style={{ backgroundColor: 'white', borderRadius: 5, borderWidth: 0.5}}/>
                            </div>
                        </form>
                </div>
            <div className="submit-div">
                <Link to={currency.input}>
                    <Button className="retrieve-data-btn" color="#007AF3" text="Retrieve Data" onClick={handleRetrieveDataPressed} />    
                </Link>
            </div>
            </section>
    )
}

export default FormInput;
