// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let css = [
    {
        property: "color";
        value: "red";
    },
    {
        property: "font-size";
        value: "16px";
    },
    {
        property: "text-align";
        value: "left";
    },
    {
        property: "text-decoration";
        value: "underlined";
    },

];
let show = (text, styles) => {
    document.write(`<p style = "${cssStyles}"> ${text}</p>`);
}

show("Hello world!")

// not complited