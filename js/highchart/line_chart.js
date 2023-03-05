function lineChart(editor) {
  const props_test_chart = (i) => i;

  const id_Trait = {
    name: "id",
    label: "Id",
  };

  const title_Trait = {
    name: "title",
    label: "Title",
  };

  const test_chart_Props = {
    name: "Line Chart",
    chartTitle: "Test Line Chart",
    xAxis: "Available Years",
    yAxis: "Number of Employees",
    yearStart: 2010,
    labels:
      "Installation & Developers,Manufacturing,Sales & Distribution,Operations & Maintenance,Other",
    value:
      "43934,48656,65165,81827,112143,142383,171533,165174,155157,161454,154610&24916,37941,29742,29851,32490,30282,38121,36885,33726,34243,31050&24916,37941,29742,29851,32490,30282,38121,36885,33726,34243,31050&null,null,null,null,null,null,null,null,11164,11218,10077&21908,5548,8105,11248,8989,11816,18274,17300,13053,11906,10073",
  };

  const name_Trait = {
    changeProp: 1,
    type: "text",
    name: "name",
    label: "name",
    placeholder: "Line Chart Name",
  };

  const chartTitle_Trait = {
    changeProp: 1,
    type: "text",
    name: "chartTitle",
    label: "C_Title",
    placeholder: "Line Chart Title",
  };

  const xAxis_Trait = {
    changeProp: 1,
    type: "text",
    name: "xAxis",
    label: "xAxis",
    placeholder: "xAxis Chart Title",
  };

  const yAxis_Trait = {
    changeProp: 1,
    type: "text",
    name: "yAxis",
    label: "yAxis",
    placeholder: "yAxis Chart Title",
  };

  const yearStart_Trait = {
    changeProp: 1,
    type: "number",
    name: "yearStart",
    label: "S_Year",
    placeholder: "Enter Start Year",
  };

  const chart_Labels_Trait = ["labels"].map((name) => ({
    changeProp: 1,
    type: "text",
    placeholder: "Labels",
    name,
  }));

  const chart_Value_Trait = ["value"].map((name) => ({
    changeProp: 1,
    type: "text",
    placeholder: "Value",
    name,
  }));

  const all_Traits = [
    name_Trait,
    chartTitle_Trait,
    xAxis_Trait,
    yAxis_Trait,
    yearStart_Trait,
    ...chart_Labels_Trait,
    ...chart_Value_Trait,
  ];

  editor.Components.addType("line_chart", {
    model: {
      defaults: props_test_chart({
        ...test_chart_Props,
        tagName: "div",
        icon: "<i class='fa fa-rocket'></i>",
        resizable: 1,
        line_chartsrc: "./js/highchart/highcharts.js",
        droppable: 0,
        stylable: 1,
        traits: [id_Trait, title_Trait, ...all_Traits],
        style: {
          padding: "0px",
        },
        script: `const init = () => {
        const ctx = this.id;

        const dataArr = [];

        let chart_title = "{[ chartTitle ]}";
        let xAxis_title = "{[ xAxis ]}";
        let yAxis_title = "{[ yAxis ]}";
        let year_start = "{[ yearStart ]}";

        let labelData = "{[ labels ]}";

        let dataValue = "{[ value ]}";

        let labelDataArr = labelData.split(",");
        let dataValueArr = dataValue.split("&");

        for (let i = 0; i < labelDataArr.length; i++) {
        const label = labelDataArr[i];
        const value = dataValueArr[i];

        let obj = {};

        obj.name = label;
        obj.data = value.split(",").map((item) => {
            if (item === "null") {
            return null;
            } else {
            return Number(item);
            }
        });

        dataArr.push(obj);
        }

        const test_chartInstance = new Highcharts.chart(ctx, {
            title: {
            text: chart_title,
            align: "left",
            },

            yAxis: {
            title: {
                text: yAxis_title,
            },
            },

            xAxis: {
            title: {
                text: xAxis_title,
            },
            },

            credits: {
                enabled: false
            },

            legend: {
            layout: "horizontal",
            horizontalAlign: "middle",
            },

            plotOptions: {
            series: {
                label: {
                connectorAllowed: false,
                },
                pointStart: Number(year_start),
            },
            },

            series: dataArr,

            responsive: {
            rules: [
                {
                condition: {
                    maxWidth: 500,
                },
                chartOptions: {
                    legend: {
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom",
                    },
                },
                },
            ],
            },
        });
        };

        if (!window.Highcharts) {
        const scr = document.createElement("script");
        scr.src = "{[ line_chartsrc ]}";
        scr.onload = init;
        document.head.appendChild(scr);
        } else {
        init();
        }`,
      }),

      init() {
        const events = all_Traits
          .filter((i) => ["strings"].indexOf(i.name) < 0)
          .map((i) => `change:${i.name}`)
          .join(" ");
        this.on(events, () => this.trigger("change:script"));
      },
    },
  });

  editor.Blocks.add("line_chart", {
    label: "Line Chart",
    category: "Charts",
    attributes: {
      class: "fa fa-line-chart",
    },
    content: {
      type: "line_chart",
    },
  });
}
