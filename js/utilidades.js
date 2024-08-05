class Util{
    getID(id){
        return document.getElementById(id)
    }
    setIdText(id,text){
        return document.getElementById(id).textContent = text
    }
    getDataset(id,atributo){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.dataset[atributo];
        } else {
            console.error(`Elemento con ID "${elementoId}" no encontrado.`);
            return null;
        }
    }
    setDataset(id,atributo,valor){
        let elemento = document.getElementById(id)
        
        if (elemento) {
            return elemento.dataset[atributo] = valor;
        } else {
            console.error(`Elemento con ID "${elementoId}" no encontrado.`);
            return null;
        }
    }
}
