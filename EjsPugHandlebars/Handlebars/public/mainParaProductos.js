async function main(){
    const response = await fetch('productosLista.handlebars');
    const texto = await response.text();
    const template = Handlebars.compile(texto);
    const html = template({productos});
    document.getElementById('elemento-uno').innerHTML = html;
}
main();
