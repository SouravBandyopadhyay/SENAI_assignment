import { Box, Button, HStack, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Chart.js options
export const options = {
  aspectRatio: 4,
  scales: {
    y: {
      suggestedMin: 25,
      display: false,
      suggestedMax: 30,
      color: "#191825",
    },
    x: {
      // display: false,
      border: {
        display: false,
        // width: 10,
        color: "#191825",
      },
      grid: {
        display: true,
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#191825",
        // display: false,
        font: {
          family: '"Fira Sans", sans-serif',
          weight: 600,
          size: 15,
        },
      },
    },
  },
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: {
        // family: '"Fira Sans", sans-serif',
        size: 15,
      },
      bodyFont: {
        family: '"Fira Sans", sans-serif',
        size: 15,
      },
      padding: 5,
      caretSize: 10,
      displayColors: false,
    },
    legend: {
      display: true,
      position: "bottom",
      title: {
        display: false,
        text: "Yes",
        color: "#191825",
      },
      strokeStyle: "#191825",
      labels: {
        color: "#191825",
        padding: 10,
        font: {
          // family: '"Fira Sans", sans-serif',
          weight: 600,
          size: 25,
        },
        pointStyle: "line",
        usePointStyle: true,
        pointStyleWidth: 0.001,
      },
    },
    title: {
      display: false,
      text: "Weather Chart",
    },
  },
};

// Chart.js labels
const labels = [
  "Now",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const TempChart = () => {
  const newArray = [27, 26, 28, 29, 27, 29, 28, 29];

  const newData = {
    labels,
    datasets: [
      {
        fill: true,
        tension: 0.2,
        label: "Temperature (°C) ",
        data: newArray,
        borderColor: "rgba(73, 133, 224, 1)",
        backgroundColor: "rgba(73, 133, 224, 0.5)",
        borderWidth: 2,
        // stepped: true,
        radius: 3,
        hoverRadius: 10,
        pointStyle: "circle",
        color: "#fff",
      },
    ],
  };

  return (
    <Box
      border="transparent"
      bgColor="white"
      borderRadius="lg"
      boxShadow="md"
      margin="auto"
      justifyContent="center"
      p="3"
    >
      <HStack margin="auto" justifyContent="space-between" padding="2">
        <Text fontWeight="bold">Upcoming Hours</Text>
        <Button size="sm">Next Days &gt; </Button>
      </HStack>
      <Line options={options} data={newData} />
    </Box>
  );
};

export default TempChart;
