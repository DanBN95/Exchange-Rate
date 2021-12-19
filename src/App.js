import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import EuroUsdScreen from "./screens/EuroUsdScreen";
import UsdGbpScreen from "./screens/UsdGbpScreen";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "./features/date/dateSlice";
import background from './assets/exchange_bg.jpg'



function App() {

  const dispatch = useDispatch(); 

  const dateFormat = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getUTCDate();
  
    const fullDate = `${year}-${month}-${day}`;
    const lastWeek = `${year}-${month}-${day - 7}`;
    
    const newDate = { today: fullDate, lastWeek: lastWeek}
    dispatch(setTime(newDate));
  }

  useEffect(() => {
    dateFormat()
  }, [])

  return (
    <Router>
    <div className="App">
      <Header title={"Weekly Average Exchange Rates"} />
        <FormInput fromLabel="From" toLabel="To" />
        <Routes>
            <Route path='/EUR' element={<EuroUsdScreen />} />
            <Route path='/USD' element={<UsdGbpScreen />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
