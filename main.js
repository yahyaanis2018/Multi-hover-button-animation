
let length;

length = 9;

let i = 0;
while (i < length){console.log("how are u");}

  

let numbers = [4 , 52 , 845 , 61]
console.log(numbers.length);


//Pie chart

const DATA_COUNT = 6;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'dark'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [20, 45, 93, 100, 48, 71],
      backgroundColor: [
        "rgb(250, 104, 80)",
        "#0dca72",
        "rgb(255, 205, 86)",
        "rgb(255, 99, 0)",
        "rgb(255, 205, 36)",
        "rgb(255, 109, 132)",
      ]
        
           
    }
  ]
};

const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'Buttom',
        },
        title: {
          display: false,
          text: 'Pie Chart'
          
        }
      }
    },
  };




//Line chart

const DATA_COUNT1 = 7;
const NUMBER_CFG1 = {count: DATA_COUNT, min: 0, max: 100};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
 
];
;
const data1 = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 30, 50, 20, 25, 44, -10],
      borderColor:[
        "#0dca72",
      ],
      backgroundColor: [
        "#0dca72",
        "#1395ff",
      ],
    },
    {
      label: 'Dataset 2',
      data: [100, 33, 22, 19, 11, 49, 30],
      borderColor: [
        "#1395ff",
      ],
      backgroundColor: [
        "#1395ff",
      ],
    }
  ]
};

const config1 = {
    type: 'line',
    data: data1,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Min and Max Settings'
        }
      },
      scales: {
        y: {
          min: 10,
          max: 50,
        }
      }
    },
  }; 


  //ColumnChart

  const DATA_COUNT3 = 7;
  const NUMBER_CFG3 = {count: DATA_COUNT, min: 0, max: 100};
  
  const labels3 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',];
  const data3 = {
    labels: labels3,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 40, 40, 90, 80, 80, 120],
        borderColor: [
          "#0dca72",
        ],
        backgroundColor: [
          "#1395ff",
        ],
        stack: 'combined',
        type: 'bar'
      },
      {
        label: 'Dataset 2',
        data: [60, 20, 40, 60, 80, 80, 10],
        borderColor: [
          "#0dca72",
        ],
        backgroundColor: [
          "#0dca72",
        ],
        stack: 'combined'
      }
    ]
  };

  const config3 = {
    type: 'line',
    data: data3,
    options: {
      plugins: {
        title: {
          display: false,
          text: 'Chart.js Stacked Line/Bar Chart'
        }
      },
      scales: {
        y: {
          stacked: true
        }
      }
    },
  };



  //view
  
 document.addEventListener("DOMContentLoaded",function () {

    
  const canvaColumn=document.getElementById(
    "column"
  ).getContext("2d")

    const chart3= new Chart(
      canvaColumn,config3
    )

  const canvaLine=document.getElementById(
        "line"
      ).getContext("2d")
    
        const chart2= new Chart(
            canvaLine,config1
        )

  
  const canvaPie=document.getElementById(
    "pie"
  ).getContext("2d")

    const chart1= new Chart(
        canvaPie,config
    )
})