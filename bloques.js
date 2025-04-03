import { bloque } from "./itemBloque.js";
export function cargarBloques() {

    let bloqueMain = document.createElement('section');
    bloqueMain.className = "bloque_Main";

    bloqueMain.appendChild(bloque());    
    return bloqueMain;
}