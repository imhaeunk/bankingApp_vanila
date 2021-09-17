/*drag_btn toggle*/
document.querySelector('.drag_btn').addEventListener('click', function() {
    document.querySelector('.bank_use_history').classList.toggle('wide');
  });
/*chartbtn toggle*/
  document.querySelector('.chart').addEventListener('click', function() {
    document.querySelector('.out_mgt').classList.toggle('open');
  });
/*closebtn toggle*/  
document.querySelector('.close_btn').addEventListener('click', function() {
    document.querySelector('.out_mgt').classList.toggle('open');
  });

  /*saving box 가로 드래그*/

  const slider = document.querySelector('.saving');
  let isMouseDown = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  });

/*json */


// let useHD = document.querySelector('.use_history_detail');
// var requestURL = 'https://syoon0624.github.io/json/test.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload =



  
/*bar_chart*/
var context = document
.getElementById('bar_graph')
.getContext('2d');
var myChart = new Chart(context, {
type: 'bar', // 차트의 형태
data: { // 차트에 들어갈 데이터
    labels: [
        //x 축
        '02','03','04','05','06','07','08','09','10'
    ],
    datasets: [
        { //데이터
            label: '', //차트 제목
            fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
            data: [
                21,19,25,20,23,26,25,30,35 //x축 label에 대응되는 데이터 값
            ],
            barThickness: 5,
            borderRadius: 10,
            backgroundColor: [
                'orange' 
                //색상
        ],
            borderColor: [
                //경계선 색상
                'red'
            ],
            borderWidth: 1 //경계선 굵기
        }/* ,
        {
            label: 'test2',
            fill: false,
            data: [
                8, 34, 12, 24
            ],
            backgroundColor: 'rgb(157, 109, 12)',
            borderColor: 'rgb(157, 109, 12)'
        }*/
    ]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
}
});

/*doughnut_chart*/
var context = document
                .getElementById('donut_graph')
                .getContext('2d');
            var myChart = new Chart(context, {
                type: 'doughnut', // 차트의 형태
                data: { // 차트에 들어갈 데이터
                    labels: [
                        //x 축
                        
                    ],
                    datasets: [
                        { //데이터
                            label: 'test1', //차트 제목
                            fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                            data: [
                                21,19,25,20,23 //x축 label에 대응되는 데이터 값
                            ],
                            backgroundColor: [
                                //색상
                                '#9BC53D',
                                '#235789',
                                '#FF4B3E',
                                '#F58F29',
                                '#DB3069',
                            ],
                            borderColor: [
                                //경계선 색상
                                'transparent'
                            ],
                            borderWidth: 1 //경계선 굵기
                        }
                    ]
                },
                options: {
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                      },
                    plugins:{
                    },
                    scales: {
                        yAxes: [{ticks: {beginAtZero: true}}]
                    }
                }
            });