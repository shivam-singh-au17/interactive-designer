function barChart(editor) {
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
    name: "Bar Chart",
    chartTitle: "Test Bar Chart",
    xAxis: "Country Names",
    yAxis: "Population (millions)",
    categories: "Africa,America,Asia,Europe,Oceania",
    labels: "Year 1990,Year 2000,Year 2010,Year 2018",
    value:
      "631,727,3202,721,26&814,841,3714,726,31&1044,944,4170,735,40&1276,1007,4561,746,42",
  };

  const name_Trait = {
    changeProp: 1,
    type: "text",
    name: "name",
    label: "name",
    placeholder: "Bar Chart Name",
  };

  const chartTitle_Trait = {
    changeProp: 1,
    type: "text",
    name: "chartTitle",
    label: "C_Title",
    placeholder: "Bar Chart Title",
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

  const chart_Categories_Trait = ["categories"].map((name) => ({
    changeProp: 1,
    type: "text",
    placeholder: "Categories",
    name,
  }));

  const all_Traits = [
    name_Trait,
    chartTitle_Trait,
    xAxis_Trait,
    yAxis_Trait,
    ...chart_Labels_Trait,
    ...chart_Value_Trait,
    ...chart_Categories_Trait,
  ];

  editor.Components.addType("Bar_chart", {
    model: {
      defaults: props_test_chart({
        ...test_chart_Props,
        tagName: "div",
        icon: "<i class='fa fa-rocket'></i>",
        resizable: 1,
        Bar_chartsrc: "./js/highchart/highcharts.js",
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

        let labelData = "{[ labels ]}";

        let dataValue = "{[ value ]}";

        let dataCategories = "{[ categories ]}";

        let labelDataArr = labelData.split(",");
        let dataValueArr = dataValue.split("&");
        let dataCategoriesArr = dataCategories.split(",");

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
            chart: {
            type: "bar",
            },
            title: {
            text: chart_title,
            align: "left",
            },
            xAxis: {
            categories: dataCategoriesArr,
            title: {
                text: xAxis_title,
            },
            },
            yAxis: {
            min: 0,
            title: {
                text: yAxis_title,
            },
            labels: {
                overflow: "justify",
            },
            },
            tooltip: {
            valueSuffix: " millions",
            },
            plotOptions: {
            bar: {
                dataLabels: {
                enabled: true,
                },
            },
            },
            legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "top",
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
            shadow: true,
            },
            credits: {
            enabled: false,
            },
            series: dataArr,
        });
        };

        if (!window.Highcharts) {
        const scr = document.createElement("script");
        scr.src = "{[ Bar_chartsrc ]}";
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

  editor.Blocks.add("Bar_chart", {
    label: "Bar Chart",
    category: "Charts",
    attributes: {
      class: "fa fa-bar-chart",
    },
    content: {
      type: "Bar_chart",
    },
  });
}
