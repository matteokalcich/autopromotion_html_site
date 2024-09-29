// Seleziona tutti gli elementi con la classe 'mia-classe'
const elementi = document.querySelectorAll('.riquadroUnivoco');

function test(event) {

    const elemento_cliccato = event.currentTarget;

    let pagina_dove_portare = '';

    switch (elemento_cliccato.id) { //prendo l'id dell'elemento cliccato
        
        case 'flutterTris':

            targetPage = 'https://github.com/matteokalcich/Tris'; // Reindirizza al progetto Flutter
            break;
        
        
        case 'javaTris':

            targetPage = 'https://github.com/matteokalcich/Tria_Android_Java'; // Reindirizza al progetto Java
            break;
        
        
        case 'javaSocket':

            targetPage = 'https://github.com/matteokalcich/Sockets'; // Reindirizza al progetto Java Socket
            break;
        
        
        default:

            targetPage = './'; // Pagina predefinita, se non corrisponde a nessun caso
            alert('Siamo spiacenti ma la pagina non è ancora stata creata');
    }

    window.location.href = targetPage;
    
}

// Aggiungi un event listener a ciascun elemento
elementi.forEach(elemento => {
    elemento.addEventListener('click', test);
});

