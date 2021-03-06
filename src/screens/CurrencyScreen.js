import SimpleLineChart from "../components/SimpleLineChart"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectApiList } from "../features/currency-api/currencyApiSlices";
import Table from "../components/Table";
import { selectCurrency } from "../features/currency/currencySlice";

const CurrencyScreen = (props) => {

    const currency = useSelector(selectCurrency);
    const apiList = useSelector(selectApiList);

    const map = new Map();

    const [filteredData, setFilteredData] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

  const filterByExchangeRate = () => {

    for (const property in apiList.currencyApi.list) {
        const dataExchange = apiList.currencyApi.list[property];
        for (const cur in dataExchange) {
            if (cur === currency.output) {
                map.set(property, dataExchange[cur]);
                break;
            }
        }
    }

    let arr = Array.from(map, ([key, value]) => ({date: key, value: value}));
    setFilteredData(arr);
    setIsFiltered(true);
  }

  useEffect(() => {
    filterByExchangeRate();
  }, [apiList])

    return (
        <section>
            <div className="screen-title">
                <h2>{props.title}</h2>
            </div>
            {isFiltered ? (
                <div>
                <Table data = {filteredData} />
                <SimpleLineChart data = {filteredData} />
                </div>
            ) : (
                <>
                </>
            )}
            
        </section>
    )
}

export default CurrencyScreen;
