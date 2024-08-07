class Util{
    getID(id){
        return document.getElementById(id)
    }
    setIdText(id,text){
        return document.getElementById(id).textContent = text
    }
    setIdHtml(id,html){
        return document.getElementById(id).innerHTML = html
    }
    getDataset(id,atributo){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.dataset[atributo];
        } else {
            console.error(`Elemento con ID "${id}" no encontrado.`);
            return null;
        }
    }
    setDataset(id,atributo,valor){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.dataset[atributo] = valor;
        } else {
            console.error(`Elemento con ID "${id}" no encontrado.`);
            return null;
        }
    }
    getClass(id){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.classList
        } else {
            console.error(`Elemento con ID "${id}" no encontrado.`);
            return null;
        }
    }
    setClass(id,valor){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.classList.add(valor)
        } else {
            console.error(`Elemento con ID "${id}" no encontrado.`);
            return null;
        }
    }
    appendClass(id,valor){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.classList.add(valor)
        } else {
            console.error(`Elemento con ID "${id}" no encontrado.`);
            return null;
        }
    }
    removeClass(id,valor){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.classList.remove(valor)
        } else {
            console.error(`Elemento con ID "${elementoId}" no encontrado.`);
            return null;
        }
    }
}
