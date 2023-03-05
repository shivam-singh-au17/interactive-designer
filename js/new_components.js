function newComponents(editor) {
  editor.BlockManager.add("btn1", {
    category: "Buttons",
    label: '<h1><i class="fa fa-play fa-lg"></i></h1> Basic',
    content:
      '<div class="btn-group" role="group" aria-label="Basic example"> <button type="button" class="btn btn-primary">Left</button> <button type="button" class="btn btn-primary">Middle</button> <button type="button" class="btn btn-primary">Right</button> </div>',
  });

  editor.BlockManager.add("btn2", {
    category: "Buttons",
    label: '<h1><i class="fa fa-play fa-lg"></i></h1> Mixed',
    content:
      '<div class="btn-group" role="group" aria-label="Basic mixed styles example"> <button type="button" class="btn btn-danger">Left</button> <button type="button" class="btn btn-warning">Middle</button> <button type="button" class="btn btn-success">Right</button> </div>',
  });

  editor.BlockManager.add("btn3", {
    category: "Buttons",
    label: '<h1><i class="fa fa-play fa-lg"></i></h1> Outlined',
    content:
      '<div class="btn-group" role="group" aria-label="Basic outlined example"> <button type="button" class="btn btn-outline-primary">Left</button> <button type="button" class="btn btn-outline-primary">Middle</button> <button type="button" class="btn btn-outline-primary">Right</button> </div>',
  });

  editor.BlockManager.add("btn4", {
    category: "Buttons",
    label: '<h1><i class="fa fa-play fa-lg"></i></h1> Bootstrap Buttons',
    content:
      '<button type="button" class="btn btn-primary">Primary</button> <button type="button" class="btn btn-secondary">Secondary</button> <button type="button" class="btn btn-success">Success</button> <button type="button" class="btn btn-danger">Danger</button> <button type="button" class="btn btn-warning">Warning</button> <button type="button" class="btn btn-info">Info</button> <button type="button" class="btn btn-light">Light</button> <button type="button" class="btn btn-dark">Dark</button>',
  });

  editor.BlockManager.add("list1", {
    category: "List group",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Basic',
    content:
      '<ul class="list-group"> <li class="list-group-item">An item</li> <li class="list-group-item">A second item</li> <li class="list-group-item">A third item</li> <li class="list-group-item">A fourth item</li> <li class="list-group-item">And a fifth one</li></ul>',
  });

  editor.BlockManager.add("list2", {
    category: "List group",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Active',
    content:
      '<ul class="list-group"> <li class="list-group-item active" aria-current="true">An active item</li> <li class="list-group-item">A second item</li> <li class="list-group-item">A third item</li> <li class="list-group-item">A fourth item</li> <li class="list-group-item">And a fifth one</li> </ul>',
  });

  editor.BlockManager.add("list3", {
    category: "List group",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Disabled',
    content:
      '<ul class="list-group"> <li class="list-group-item disabled" aria-disabled="true">A disabled item</li> <li class="list-group-item">A second item</li> <li class="list-group-item">A third item</li> <li class="list-group-item">A fourth item</li> <li class="list-group-item">And a fifth one</li> </ul>',
  });

  editor.BlockManager.add("list4", {
    category: "List group",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Variants',
    content:
      '<ul class="list-group"> <li class="list-group-item">A simple default list group item</li> <li class="list-group-item list-group-item-primary">A simple primary list group item</li> <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li> <li class="list-group-item list-group-item-success">A simple success list group item</li> <li class="list-group-item list-group-item-danger">A simple danger list group item</li> <li class="list-group-item list-group-item-warning">A simple warning list group item</li> <li class="list-group-item list-group-item-info">A simple info list group item</li> <li class="list-group-item list-group-item-light">A simple light list group item</li> <li class="list-group-item list-group-item-dark">A simple dark list group item</li> </ul>',
  });

  editor.BlockManager.add("alphabeticalOL", {
    category: "Basic",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Alphabetical OL',
    content: '<ol type="A"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>',
  });
  editor.BlockManager.add("numericalOL", {
    category: "Basic",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Numerical OL',
    content:
      '<ol type="1" start="1"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>',
  });
  editor.BlockManager.add("DLDTDD", {
    category: "Basic",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> DL Tag',
    content:
      '<dl class="dl-horizontal"><dt>Description 1</dt><dd>Item 1</dd><dt>Description 2</dt> <dd>Item 2</dd></dl>',
  });
  editor.BlockManager.add("Embed", {
    category: "Basic",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Embed',
    content:
      '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/9xwazD5SyVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  });
  editor.BlockManager.add("frameset", {
    category: "Basic",
    label: '<h1><i class="fa fa-list fa-lg"></i></h1> Frameset',
    content: `<div class="row"  style="width:100%;padding: 10px 0px;margin-left:0px">
      <div class="col-md-4">
        <div class="frame">Frame 1</div>
      </div>
      <div class="col-md-4">
        <div class="frame">Frame 2</div>
      </div>
      <div class="col-md-4">
        <div class="frame">Frame 3</div>
      </div>
    </div>`,
  });

  editor.BlockManager.add("tag1", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> I Frame',
    content:
      '<iframe class="embed-responsive-item" src="" title="Your Title"></iframe>',
  });

  editor.BlockManager.add("tag2", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Span',
    content: "<span>Span Text</span>",
  });

  editor.BlockManager.add("tag3", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Caption',
    content: "<table> <caption>Caption Text</caption> </table>",
  });

  editor.BlockManager.add("tag4", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Thead',
    content: "<table> <thead> <tr> <th>Thead Text</th> </tr> </thead> </table>",
  });

  editor.BlockManager.add("tag5", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Tfoot',
    content: "<table> <tfoot> <tr> <td>Tfoot Text</td> </tr> </tfoot> </table>",
  });

  editor.BlockManager.add("tag6", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Em',
    content: "<em>Em Text</em>",
  });

  editor.BlockManager.add("tag7", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Source Audio',
    content: `<audio style="padding: 10px;" controls> <source src="https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg" type="audio/mpeg"> </audio>`,
  });

  editor.BlockManager.add("tag8", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Source Video',
    content: `<video controls> <source src="video.mp4" type="video/mp4"> <source src="video.ogg" type="video/ogg"> </video>`,
  });

  editor.BlockManager.add("tag9", {
    category: "Tags",
    label: '<h1><i class="fa fa-code fa-lg"></i></h1> Figure',
    content: `<div> <figure> <img src="https://via.placeholder.com/150/FFFF00/" alt="Trulli"> <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> </figure> </div>`,
  });

  editor.BlockManager.add("range1", {
    category: "Range",
    label: '<h1><i class="fa fa-sliders fa-lg"></i></h1> Basic',
    content: `<label for="customRange1" class="form-label w-100">Basic range</label> <input class="w-100" type="range" class="form-range" id="customRange1">`,
  });

  editor.BlockManager.add("range2", {
    category: "Range",
    label: '<h1><i class="fa fa-sliders fa-lg"></i></h1> Disabled',
    content: `<label for="disabledRange" class="form-label w-100">Disabled range</label> <input type="range" class="form-range w-100" id="disabledRange" disabled>`,
  });

  editor.BlockManager.add("range3", {
    category: "Range",
    label: '<h1><i class="fa fa-sliders fa-lg"></i></h1> Min&Max',
    content: `<label for="disabledRange" class="form-label w-100">Min and max range</label> <input type="range" class="form-range w-100" min="0" max="5" id="customRange2">`,
  });

  editor.BlockManager.add("range4", {
    category: "Range",
    label: '<h1><i class="fa fa-sliders fa-lg"></i></h1> Steps',
    content: `<label for="disabledRange" class="form-label w-100">Steps range</label> <input type="range" class="form-range w-100" min="0" max="5" step="0.5" id="customRange3">`,
  });

  // editor.BlockManager.add('custom-carousel', {
  //   label: 'Custom Carousel',
  //   content: carousel.getEl().outerHTML,
  //   category: 'Custom',
  //   attributes: {class:'fa fa-sliders'}
  // });

  // editor.BlockManager.add('slide2', {
  //   category : 'Custom Carousel',
  //   label: '<h1><i class="far fa-play-circle fa-lg"></i></h1> Slides With controls',
  //   content: `
  //   <div class="carousel-slider" style="padding:19px">
  //     <div class="carousel-slide">Slide 1</div>
  //     <div class="carousel-slide">Slide 2</div>
  //     <div class="carousel-slide">Slide 3</div>
  //     <div class="carousel-slide">Slide 4</div>
  //     <div class="carousel-slide">Slide 5</div>
  //   </div>
  // `,
  // });

  //   editor.BlockManager.add('highcharts-block', {
  //     label: 'Highcharts',
  //     category: 'Extra',
  //     attributes: {
  //         class: 'fa fa-bar-chart'
  //     },
  //     content: '<div id="chart-container"></div>',
  //     activate: function() {
  //       console.log('chart activated');
  //       var chartContainer = this.el.querySelector('#chart-container');
  //       var chart = Highcharts.chart(chartContainer, {
  //           chart: {
  //               type: 'bar'
  //           },
  //           title: {
  //               text: 'Fruit Consumption'
  //           },
  //           xAxis: {
  //               categories: ['Apples', 'Bananas', 'Oranges']
  //           },
  //           yAxis: {
  //               title: {
  //                   text: 'Fruit eaten'
  //               }
  //           },
  //           series: [{
  //               name: 'Jane',
  //               data: [1, 0, 4]
  //           }, {
  //               name: 'John',
  //               data: [5, 7, 3]
  //           }]
  //       });
  //     },
  // });
}
