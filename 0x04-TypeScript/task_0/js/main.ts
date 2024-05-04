interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
	{ firstName: "Claris", lastName: "Tariro", age: 21, location: "Lusaka" },
	{ firstName: "Farai", lastName: "Vambe", age: 24, location: "Johannesburg" }
];

// Ensure the DOM is loaded before manipulating
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body; // This can be 'document.querySelector('body')' as well
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    body.appendChild(table);
});
