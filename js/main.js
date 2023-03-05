const editor = InteractiveDesigner.init({
  height: "100%",
  container: "#editor",
  fromElement: 1,
  allowScripts: 1,
  showOffsets: true,
  fromElement: true,
  noticeOnUnload: false,
  storageManager: false,
  selectorManager: {
    componentFirst: true,
  },
  plugins: [
    // "InteractiveDesigner-plugin-carousel",
    "code-editor-component",
    "postcss-parser-component",
    "webpage-component",
    paiChart,
    lineChart,
    barChart,
    areaChart,
    "basic-block-component",
    "navbar-component",
    "countdown-component",
    "forms-component",
    "table-component",
    // "grapesjs-table",
    newComponents,
    "image-editor-component",
    "zip-export-component",
    "custom-code-component",
    "toolbox-component",
    "tooltip-component",
    "typed-component",
    "style-bg-component",
    "tabs-component",
    // 'grapesjs-lory-slider',
  ],
  pluginsOpts: {
    "grapesjs-plugin-toolbox": {
      panels: true,
    },
  },
  canvas: {
    styles: [
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
      "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
      "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css",
    ],
    scripts: [
      "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js",
      "./js/highchart/highcharts.js",
      // "./js/highchart/exporting.js",
      // "./js/highchart/export-data.js",
      // "./js/highchart/accessibility.js",
    ],
  },
}); 
 

const pn = editor.Panels;

const panelViews = pn.addPanel({
  id: "views",
});

panelViews.get("buttons").add([
  {
    attributes: {
      title: "Open Code",
    },
    className: "fa fa-file-code-o",
    command: "open-code",
    togglable: false,
    id: "open-code",
  },
]);

editor.Panels.addPanel({ id: "devices-c" })
  .get("buttons")
  .add([
    {
      id: "exportPDF",
      attributes: { title: "Export PDF", id: "exportPDF" },
      className: "exportPDF fa fa-file-pdf-o",
    },
    // {
    //   id: "savePage",
    //   attributes: { title: "Save", id: "savePage" },
    //   className: "fa fa-save",
    // },
    // {
    //   id: "viewAllPage",
    //   attributes: { title: "View All Page", id: "viewAllPage" },
    //   className: "fa fa-list",
    // },
    // {
    //   id: "show-json",
    //   className: "btn-show-json",
    //   label: "JSON",
    //   context: "show-json",
    //   command(editor) {
    //     editor.Modal.setTitle("Components JSON")
    //       .setContent(
    //         `<textarea style="width:100%; height: 250px;">
    //         ${JSON.stringify(editor.getComponents())}
    //       </textarea>`
    //       )
    //       .open();
    //   },
    // },
  ]);

var el = document.getElementById("exportPDF");
el.addEventListener("click", generatePDF, true);
var save = document.getElementById("savePage");
save.addEventListener("click", savePage, true);
var viewAllPages = document.getElementById("viewAllPage");
viewAllPages.addEventListener("click", viewAllPage, true);

function generatePDF() {
  var htmlContent = editor.getHtml();
  var cssContent = editor.getCss();
  htmlContent =
    "<html><head><style>" +
    cssContent +
    "</style></head>" +
    htmlContent +
    "</html>";
  var htmlContent = htmlContent.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  var opt = {
    filename: "interactive-designer.pdf",
    html2canvas: {
      scale: 10,
    },
  };
  html2pdf().from(htmlContent).set(opt).save();
}

// var singlePageData = JSON.parse(localStorage.getItem("single-page"));
// editor.setComponents(singlePageData.data);

// function savePage() {
//   var htmlContent = editor.getHtml();
//   var cssContent = editor.getCss();
//   htmlContent =
//     "<html><head><style>" +
//     cssContent +
//     "</style></head>" +
//     htmlContent +
//     "</html>";
//   var getallpage = localStorage.getItem("all-page");
//   var allpage = JSON.parse(getallpage);
//   for (var i = 0; i < allpage.length; i++) {
//     if (allpage[i].name === singlePageData.name) {
//       allpage.splice(
//         allpage.findIndex((a) => a.name === singlePageData.name),
//         1
//       );
//       allpage.push({
//         name: singlePageData.name,
//         data: htmlContent,
//       });
//       localStorage.setItem("all-page", JSON.stringify(allpage));
//       alert(singlePageData.name + " " + "page save successfully");
//       window.location.replace("page.html");
//     }
//   }
// }

// function viewAllPage() {
//   console.log("view");
//   var htmlContent = editor.getHtml();
//   var cssContent = editor.getCss();
//   htmlContent =
//     "<html><head><style>" +
//     cssContent +
//     "</style></head>" +
//     htmlContent +
//     "</html>";
//   var getallpage = localStorage.getItem("all-page");
//   var allpage = JSON.parse(getallpage);
//   for (var i = 0; i < allpage.length; i++) {
//     if (allpage[i].name === singlePageData.name) {
//       allpage.splice(
//         allpage.findIndex((a) => a.name === singlePageData.name),
//         1
//       );
//       allpage.push({
//         name: singlePageData.name,
//         data: htmlContent,
//       });
//       localStorage.setItem("all-page", JSON.stringify(allpage));
//       window.location.replace("page.html");
//     }
//   }
// }

// const prop = editor.StyleManager.getProperty('typography', 'font-family');
// prop.set("options", [
//   { value: "Oswald, sans-serif", name: "Oswald" },
//   { value: "Verdana, Arial, Helvetica, sans-serif", name: "Verdana" },
//   { value: "fantasy", name: "Fantasy" },
// ]);

const styleManager = editor.StyleManager;
styleManager.addSector(
  "globalfonts",
  {
    name: "Global Fonts",
    open: false,
    properties: [
      {
        label: "Fonts",
        property: "font-family",
        type: "select",
        // default: "100px",
        options: [
          { value: "Oswald, sans-serif", name: "Oswald" },
          { value: "Verdana, Arial, Helvetica, sans-serif", name: "Verdana" },
          { value: "fantasy", name: "Fantasy" },
        ],
      },
    ],
  },
  { at: 0 }
);
