function init({ exc, props, container }) {
    exc('load("https://cdn.jsdelivr.net/npm/jsbarcode@latest/dist/JsBarcode.all.min.js")', {}, () => {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        container.appendChild(svg)
        new JsBarcode(svg, props.text)
    })
}

$plugin({
    id: "zp108",
    props: [{
        prop: "text",
        type: "text",
        label: "内容"
    }],
    init
})



/*
Option  Default value   Type
format  "auto" (CODE128)    String
width   2   Number
height  100 Number
displayValue    true    Boolean
text    undefined   String
fontOptions ""  String
font    "monospace" String
textAlign   "center"    String
textPosition    "bottom"    String
textMargin  2   Number
fontSize    20  Number
background  "#ffffff"   String (CSS color)
lineColor   "#000000"   String (CSS color)
margin  10  Number
marginTop   undefined   Number
marginBottom    undefined   Number
marginLeft  undefined   Number
marginRight undefined   Number
valid   function(valid){}   Function

*/