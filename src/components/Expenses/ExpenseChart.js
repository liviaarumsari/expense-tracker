import Chart from "../Chart/Chart"

const ExpenseChart = (props) => {
    const chartData = [
        {label: 'Jan', value: 0,},
        {label: 'Feb', value: 0,},
        {label: 'Mar', value: 0,},
        {label: 'Apr', value: 0,},
        {label: 'May', value: 0,},
        {label: 'Jun', value: 0,},
        {label: 'Jul', value: 0,},
        {label: 'Aug', value: 0,},
        {label: 'Sep', value: 0,},
        {label: 'Oct', value: 0,},
        {label: 'Nov', value: 0,},
        {label: 'Dec', value: 0,}
    ]

    for (const expense of props.expenses) {
        const monthExpense = expense.date.getMonth()
        chartData[monthExpense].value += expense.amount
    }
    console.log("this is chart data")
    console.log(chartData)

    return (
        <Chart dataPoints={chartData}/>
    )
}

export default ExpenseChart