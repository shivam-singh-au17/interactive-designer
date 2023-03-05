function areaChart(editor) {
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
    name: "Area Chart",
    chartTitle: "Test Area Chart",
    xAxis: "Warheads Years",
    yAxis: "Nuclear weapon states",
    labels: "USA,USSR/Russia",
    weapon: 1000,
    yearStart: 1949,
    value:
      "null,null,null,null,null,2,9,13,50,170,299,438,841,1169,1703,2422,3692,5543,7345,12298,18638,22229,25540,28133,29463,31139,31175,31255,29561,27552,26008,25830,26516,27835,28537,27519,25914,25542,24418,24138,24104,23208,22886,23305,23459,23368,23317,23575,23205,22217,21392,19008,13708,11511,10979,10904,11011,10903,10732,10685,10577,10526,10457,10027,8570,8360,7853,5709,5273,5113,5066,4897,4881,4804,4717,4571,4018,3822,3785,3805,3750,3708,3708&null,null,null,null,null,null,null,null,null,1,5,25,50,120,150,200,426,660,863,1048,1627,2492,3346,4259,5242,6144,7091,8400,9490,10671,11736,13279,14600,15878,17286,19235,22165,24281,26169,28258,30665,32146,33486,35130,36825,38582,40159,38107,36538,35078,32980,29154,26734,24403,21339,18179,15942,15442,14368,13188,12188,11152,10114,9076,8038,7000,6643,6286,5929,5527,5215,4858,4750,4650,4600,4500,4490,4300,4350,4330,4310,4495,4477",
  };

  const name_Trait = {
    changeProp: 1,
    type: "text",
    name: "name",
    label: "name",
    placeholder: "Area Chart Name",
  };

  const yearStart_Trait = {
    changeProp: 1,
    type: "number",
    name: "yearStart",
    label: "S_Year",
    placeholder: "Enter Start Year",
  };

  const chartTitle_Trait = {
    changeProp: 1,
    type: "text",
    name: "chartTitle",
    label: "C_Title",
    placeholder: "Area Chart Title",
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

  const weapon_Trait = {
    changeProp: 1,
    type: "number",
    name: "weapon",
    label: "Weapon",
    placeholder: "Weapon Numbers",
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
    weapon_Trait,
    yearStart_Trait,
    ...chart_Labels_Trait,
    ...chart_Value_Trait,
  ];

  editor.Components.addType("Area_chart", {
    model: {
      defaults: props_test_chart({
        ...test_chart_Props,
        tagName: "div",
        icon: "<i class='fa fa-rocket'></i>",
        resizable: 1,
        Area_chartsrc: "./js/highchart/highcharts.js",
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
        let weapon_data = "{[ weapon ]}";
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
            chart: {
            type: "area",
            },
            title: {
            text: chart_title,
            align: "left",
            },
            xAxis: {
            title: {
                text: xAxis_title,
            },
            allowDecimals: false,
            labels: {
                formatter: function () {
                return this.value;
                },
            },
            },
            yAxis: {
            title: {
                text: yAxis_title,
            },
            labels: {
                formatter: function () {
                return this.value / Number(weapon_data) + "k";
                },
            },
            },
            tooltip: {
            pointFormat:
                "{series.name}: <b>{point.y:,.0f}</b><br/> {point.x}",
            },
            plotOptions: {
            area: {
                pointStart: Number(year_start),
                marker: {
                enabled: false,
                symbol: "circle",
                radius: 2,
                states: {
                    hover: {
                    enabled: true,
                    },
                },
                },
            },
            },
            credits: {
            enabled: false,
            },
            series: dataArr,
        });
        };

        if (!window.Highcharts) {
        const scr = document.createElement("script");
        scr.src = "{[ Area_chartsrc ]}";
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

  editor.Blocks.add("Area_chart", {
    label: "Area Chart",
    category: "Charts",
    attributes: {
      class: "fa fa-area-chart",
    },
    content: {
      type: "Area_chart",
    },
  });
}
