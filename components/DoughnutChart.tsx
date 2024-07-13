"use client" // client side component

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Documentation Link: https://www.chartjs.org/docs/latest/getting-started/ 
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets : [
      {
        label: 'Banks',
        data: [1250, 2500, 3700],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Bank1', 'Bank2', 'bank3']
  }
  return <Doughnut
    data = {data}
    options = {{
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}

  />
}

export default DoughnutChart