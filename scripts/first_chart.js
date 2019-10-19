Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pineapples','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Joe and George\'s house'
      }
    },
    series: [{
      name: 'Joe',
      data: [6, 1, 0, 4]
    }, {
      name: 'George',
      data: [6, 5, 7, 3]
    }]
  });
