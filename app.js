// frontend/script.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/celulares')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('celulares-table');
            data.forEach(celular => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${celular.id}</td>
                    <td>${celular.marca}</td>
                    <td>${celular.descripcion}</td>
                `;
                table.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
