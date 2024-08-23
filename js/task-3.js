

function getElementWidth(content, padding, border) {
    let numcontent = Number.parseFloat(content);
    let numpaddind = Number.parseFloat(padding);
    let numborder = Number.parseFloat(border);
    getElementWidth = numborder + numcontent + numpaddind;
console.log(getElementWidth);




}

getElementWidth("78px", "78ol", "78.9px");








