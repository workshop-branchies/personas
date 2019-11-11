let persons = [
    {
        "name": "Juan Perez",
        "dni": 31809989
    },
    {
        "name": "Manuel Ortiz",
        "dni": 30898389
    }
];

module.exports = {
    get: () => persons,
    getByDNI: (dni) => persons.filter(p => p.dni == dni),
    save: (person) => persons.push(person)
}