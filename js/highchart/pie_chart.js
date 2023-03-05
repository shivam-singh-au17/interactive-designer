function paiChart(editor) {
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
    name: "Pai Chart",
    chartTitle: "Test Pai Chart",
    labels: "Item01,Item02,Item03,Item04,Item05,Item06",
    value: "10,15,25,13,12,25",
    sliced: "true",
    selected: "true",
  };

  const name_Trait = {
    changeProp: 1,
    type: "text",
    name: "name",
    label: "name",
    placeholder: "Pai Chart Name",
  };

  const chartTitle_Trait = {
    changeProp: 1,
    type: "text",
    name: "chartTitle",
    label: "C_Title",
    placeholder: "Pai Chart Title",
  };

  //   const btn_Trait = {
  //     type: "button",
  //     text: "Add Item",
  //     full: false, // Full width button
  //     command: (editor) => {
  //       alert("Hello");
  //     },
  //   };

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

  const chart_Sliced_Trait = ["sliced"].map((name) => ({
    changeProp: 1,
    type: "text",
    placeholder: "Sliced",
    name,
  }));

  const chart_Selected_Trait = ["selected"].map((name) => ({
    changeProp: 1,
    type: "text",
    placeholder: "Selected",
    name,
  }));

  const all_Traits = [
    name_Trait,
    chartTitle_Trait,
    ...chart_Labels_Trait,
    ...chart_Value_Trait,
    ...chart_Sliced_Trait,
    ...chart_Selected_Trait,
  ];

  editor.Components.addType("pai_chart", {
    model: {
      defaults: props_test_chart({
        ...test_chart_Props,
        tagName: "div",
        icon: "<i class='fa fa-rocket'></i>",
        resizable: 1,
        pai_chartsrc: "./js/highchart/highcharts.js",
        droppable: 0,
        stylable: 1,
        traits: [id_Trait, title_Trait, ...all_Traits],
        style: {
          padding: "0px",
        },
        script: `const init = () => {
        const ctx = this.id;

        const dataArr = [];
        const chartObj = {};

        let chart_title = "{[ chartTitle ]}";

        let labelData = "{[ labels ]}";

        let dataValue = "{[ value ]}";

        let slicedData = "{[ sliced ]}";

        let selectedData = "{[ selected ]}";

        let labelDataArr = labelData.split(",");
        let dataValueArr = dataValue.split(",");
        let slicedDataArr = slicedData.split(",");
        let selectedDataArr = selectedData.split(",");


        for (let i = 0; i < labelDataArr.length; i++) {

          const label = labelDataArr[i];
          const value = dataValueArr[i];
          const sliced = slicedDataArr[i];
          const selected = selectedDataArr[i];

            let obj = {};

            obj.name = label;
            obj.y = Number(value);
            obj.sliced = Boolean(sliced);
            obj.selected = Boolean(selected);

            dataArr.push(obj);
        }

        const test_chartInstance = new Highcharts.chart(ctx, {
          chart: {
            height: "300px !important",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
          },
          title: {
            text: chart_title,
            align: "left",
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
          },
          accessibility: {
            point: {
              valueSuffix: "%",
            },
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [
            {
              name: "{[ name ]}",
              colorByPoint: true,
              data: dataArr,
            },
          ],
        });

      };

      if (!window.Highcharts) {
        const scr = document.createElement("script");
        scr.src = "{[ pai_chartsrc ]}";
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

  editor.Blocks.add("pai_chart", {
    label: "Pai Chart",
    category: "Charts",
    attributes: {
      class: "fa fa-pie-chart",
    },
    content: {
      type: "pai_chart",
    },
  });
}
