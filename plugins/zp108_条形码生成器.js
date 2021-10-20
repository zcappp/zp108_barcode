function onInit({ exc, props, container }) {
    exc('load("https://cdn.jsdelivr.net/npm/jsbarcode@latest/dist/JsBarcode.all.min.js")', {}, () => {
        container.appendChild(document.createElement("svg"))
        new JsBarcode(container.firstElementChild, props.value {})
    })
}

$plugin({
    id: "zp108",
    props: [{
        prop: "value",
        type: "text",
        label: "内容"
    }, {
        prop: "width",
        type: "number",
        label: "宽度(px)",
        ph: "默认是128"
    }],
    onInit
})