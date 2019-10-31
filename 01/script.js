var ctx = document.getElementById('Day').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['02h00', '04h00', '06h00', '08h00', '10h00', '12h00', '14h00', '16h00', '18h00', '20h00', '22h00', '24h00'],
        datasets: [{
            label: '$ day',
            backgroundColor: 'rgba(58, 54, 79, 0.7)',
            borderColor: 'rgb(162, 115, 255)',
            data: [1010, 1400, 1501, 1680, 1358, 1700, 1520, 1698, 1578, 1269, 1489, 1590]
        }]
    },
    options: {}
});
var ctx = document.getElementById('Week').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: '$ week',
            backgroundColor: 'rgba(58, 54, 79, 0.7)',
            borderColor: 'rgb(162, 115, 255)',
            data: [1210, 1300, 1501, 1680, 1358, 1700, 1520]
        }]
    },
    options: {}
});
var ctx = document.getElementById('Month').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November ', 'December'],
        datasets: [{
            label: '$ month',
            backgroundColor: 'rgba(58, 54, 79, 0.7)',
            borderColor: 'rgb(162, 115, 255)',
            data: [1450, 1500, 1508, 1680, 1358, 1700, 1520, 1470, 1400, 1808, 1280, 1598, 1500]
        }]
    },
    options: {}
});