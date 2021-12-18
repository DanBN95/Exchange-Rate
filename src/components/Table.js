import { useSelector } from "react-redux";
import { selectCurrency } from "../features/currency/currencySlice";
const Table = (props) => {

    const currency = useSelector(selectCurrency);
    
    const renderTableData = (item, index) => {
        return (
            <tr key={index}>
                <td>{item.date}</td>
                <td>{item.value}</td>
            </tr>
    )}

    return (
        <div className="exchange-table-div">
            <table className="exchange-table">
                <thead>
                    <tr>
                        <th className="border-b">
                            <strong className="date">Date</strong>
                        </th>
                        <th>
                            <strong className="exchange-rate">1 {currency.input} =</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                 {props.data.map(renderTableData)}
                </tbody>
            </table>
        </div>
    )
}

export default Table
