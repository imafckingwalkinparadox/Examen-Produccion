export function cargarMenu(){
    let header = document.createElement('header');
    header.className = "titulo";

    let text = document.createElement('div');
    text.innerText = "Total x = ";
    header.appendChild(text);

    let text2 = document.createElement('div');
    text2.innerText = "Total / = ";
    header.appendChild(text2);

    return header;
}