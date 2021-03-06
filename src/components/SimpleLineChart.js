import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SimpleLineChart = (props) => {

  const [ min, setMin ] = useState(99999);
  const [ max, setMax ] = useState(0);

  const findRange = () => {
    props.data.forEach(el => {
      min = el < min ? el : min;
      max = el > max ? el : max;
    });

    setMin(min);
    setMax(max);
  }

  useEffect(() => {
    findRange();
  },[])

      return (
        <div className="simple-line-chart">
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis type='number' domain={[min,max]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

          </LineChart>
        </ResponsiveContainer>
        </div>
      );
}

export default SimpleLineChart;