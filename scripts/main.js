Highcharts.chart('chart1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Crimes by type since 1999'
    },
    subtitle: {
        text: 'Source: FBI Crime Data'
    },
    xAxis: {
        categories: [
            '1999',
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of crimes'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} offenses</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [ {
        name: 'Robbery',
        data: [409371, 408016, 423557, 420806, 414235, 401470, 417438, 449246,447324, 443563, 408742, 369089, 354746, 355051, 345093, 322905, 328109, 332797, 320596, 282061]

    }, {
        name: 'Aggravated assault',
        data: [911740, 911706, 909023, 891407, 859030, 847381, 862220, 874096, 866358, 843683, 812514, 781844, 752423, 762009, 726777, 731089, 764057, 802982, 810319, 807410]
        }, {
        name: 'Motor vehicle theft',
        data: [1153075, 1160002, 1228391, 1246646, 1261226, 1237851, 1235859, 1198245, 1100472, 959059, 795652, 739565, 716508, 723186, 700288, 686803, 713063, 767290, 772943, 748841]

    },
        ]
});
Highcharts.chart('chart2', {
    xAxis: {
       categories:[
       '1999',
       '2000',
       '2001',
       '2002',
       '2003',
       '2004',
       '2005',
       '2006',
       '2007',
       '2008',
       '2009',
       '2010',
       '2011',
       '2012',
       '2013',
       '2014',
       '2015',
       '2016',
       '2017',
       '2018'
       ]

    },
    yAxis: {
        min: 0
    },
    title: {
        text: 'Violent crime rate per 100,000 people since 1999'
    },
       subtitle: {
        text: 'Source: FBI Crime Data'
        },
    series: [ {
        type: 'scatter',
        name: 'Observations',
        data: [523, 506.5, 504.5, 494.4, 475.8, 463.2, 469, 479.3, 471.8, 458.6, 431.9, 404.5, 387.1, 387.8, 369.1, 361.6, 373.7, 386.6, 383.8, 368.9],
        marker: {
            radius: 4
        }
    }]
});
