document.getElementById("plot").addEventListener("click", function () {
    let chart_type = document.getElementById("chart-type").value;

    // line chart
    if (chart_type == "line_chart") {
        google.charts.load('current', {
            packages: ['line']
        });

        document.getElementById("chart-display").style.paddingTop = "300px";
        document.getElementById("chart-display").style.textAlign = "center";
        document.getElementById("chart-display").innerHTML = "Loading ...";

        google.charts.setOnLoadCallback(drawChart);

        let chartTitle = document.getElementById("chart-title").value;

        let row_name = document.getElementById("row_name").value;
        let row_1 = document.getElementById("row_1").value;
        let row_2 = document.getElementById("row_2").value;
        let row_3 = document.getElementById("row_3").value;
        let row_4 = document.getElementById("row_4").value;
        let row_5 = document.getElementById("row_5").value;

        let col_name = document.getElementById("column_name").value;
        let col_1 = document.getElementById("col_1").value;
        let col_2 = document.getElementById("col_2").value;
        let col_3 = document.getElementById("col_3").value;
        let col_4 = document.getElementById("col_4").value;
        let col_5 = document.getElementById("col_5").value;

        function drawChart() {
            document.getElementById("chart-display").style.paddingTop = "10px"

            // Define the chart to be drawn.
            var data = new google.visualization.DataTable();
            data.addColumn('string', col_name);
            data.addColumn('number', row_name);
            data.addRows([
                [col_1, Number(row_1)],
                [col_2, Number(row_2)],
                [col_3, Number(row_3)],
                [col_4, Number(row_4)],
                [col_5, Number(row_5)]
            ]);

            var options = {
                chart: {
                    title: chartTitle
                },
                width: 900,
                height: 600
            };

            // Instantiate and draw the chart.
            var chart = new google.charts.Line(document.getElementById('chart-display'));
            chart.draw(data, google.charts.Line.convertOptions(options));
        }
    }

    // Pie chart
    if (chart_type == "pie_chart") {
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        let chartTitle = document.getElementById("chart-title").value;

        let row_name = document.getElementById("row_name").value;
        let row_1 = document.getElementById("row_1").value;
        let row_2 = document.getElementById("row_2").value;
        let row_3 = document.getElementById("row_3").value;
        let row_4 = document.getElementById("row_4").value;
        let row_5 = document.getElementById("row_5").value;

        let col_name = document.getElementById("column_name").value;
        let col_1 = document.getElementById("col_1").value;
        let col_2 = document.getElementById("col_2").value;
        let col_3 = document.getElementById("col_3").value;
        let col_4 = document.getElementById("col_4").value;
        let col_5 = document.getElementById("col_5").value;

        function drawChart() {
            // Define the chart to be drawn.
            var data = new google.visualization.DataTable();
            data.addColumn('string', col_name);
            data.addColumn('number', row_name);
            data.addRows([
                [col_1, Number(row_1)],
                [col_2, Number(row_2)],
                [col_3, Number(row_3)],
                [col_4, Number(row_4)],
                [col_5, Number(row_5)]
            ]);

            var options = {
                chart: {
                    title: chartTitle
                },
                width: 900,
                height: 600
            };

            // Instantiate and draw the chart.
            var chart = new google.visualization.PieChart(document.getElementById('chart-display'));
            chart.draw(data, options);
        }
    }

    if (chart_type == "") {
        document.getElementById("chart-display").style.paddingTop = "300px";
        document.getElementById("chart-display").style.textAlign = "center";
        document.getElementById("chart-display").innerHTML = "Please Select a Chart type!";
    }
})