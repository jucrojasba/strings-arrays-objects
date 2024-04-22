//Section 1 - Reto 4
let eventList = [];
let eventId = 1;

function createEvent() {
    const name = prompt("Ingrese el nombre del evento:").trim().toLowerCase();
    const date = prompt("Ingrese la fecha del evento (YYYY-MM-DD):").trim();
    const description = prompt("Ingrese la descripción del evento:").trim();

    const event = {
        id: eventId++,
        name,
        date, 
        description,
    };

    eventList.push(event);
    console.log("Evento creado con éxito.");
}

function viewEvents() {
    console.log("Lista de eventos:");
    eventList.forEach(event => {
        console.log(`ID: ${event.id}, Nombre: ${event.name}, Fecha: ${event.date}, Descripción: ${event.description}`);
    });
}

function searchEvents() {
    const searchTerm = prompt("Ingrese el nombre del evento a buscar:").trim().toLowerCase();
    const results = eventList.filter(event => event.name.includes(searchTerm));

    if (results.length > 0) {
        console.log("Resultados de la búsqueda:");
        results.forEach(event => {
            console.log(`ID: ${event.id}, Nombre: ${event.name}, Fecha: ${event.date}, Descripción: ${event.description}`);
        });
    } else {
        console.log("No se encontraron eventos con ese nombre.");
    }
}

function updateEvent() {
    const idToUpdate = parseInt(prompt("Ingrese el ID del evento a actualizar:"));
    const eventToUpdate = eventList.find(event => event.id === idToUpdate);

    if (eventToUpdate) {
        const newName = prompt(`Nombre actual: ${eventToUpdate.name}. Ingrese el nuevo nombre (dejar en blanco para mantener el actual):`).trim().toLowerCase();
        const newDate = prompt(`Fecha actual: ${eventToUpdate.date}. Ingrese la nueva fecha (dejar en blanco para mantener la actual):`).trim();
        const newDescription = prompt(`Descripción actual: ${eventToUpdate.description}. Ingrese la nueva descripción (dejar en blanco para mantener la actual):`).trim();

        if (newName) eventToUpdate.name = newName;
        if (newDate) eventToUpdate.date = newDate;
        if (newDescription) eventToUpdate.description = newDescription;

        console.log("Evento actualizado con éxito.");
    } else {
        console.log("No se encontró un evento con ese ID.");
    }
}

function deleteEvent() {
    const idToDelete = parseInt(prompt("Ingrese el ID del evento a eliminar:"));
    const eventIndex = eventList.findIndex(event => event.id === idToDelete);

    if (eventIndex !== -1) {
        eventList.splice(eventIndex, 1);
        console.log("Evento eliminado con éxito.");
    } else {
        console.log("No se encontró un evento con ese ID.");
    }
}

function main() {
    let option;

    do {
        option = prompt(`
            Seleccione una opción:
            1. Crear evento
            2. Ver eventos
            3. Buscar eventos
            4. Actualizar evento
            5. Eliminar evento
            6. Salir
        `).trim();

        switch (option) {
            case '1':
                createEvent();
                break;
            case '2':
                viewEvents();
                break;
            case '3':
                searchEvents();
                break;
            case '4':
                updateEvent();
                break;
            case '5':
                deleteEvent();
                break;
            case '6':
                console.log("Saliendo del sistema de gestión de eventos.");
                break;
            default:
                console.log("Opción no válida. Por favor, intente nuevamente.");
        }
    } while (option !== '6');
}

main();
