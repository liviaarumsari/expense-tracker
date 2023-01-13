import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const amountPerMonth = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxAmount = Math.max(...amountPerMonth)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
