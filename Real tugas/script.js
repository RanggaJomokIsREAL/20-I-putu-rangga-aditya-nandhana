function toggleTable() {
    const table = document.getElementById('dataTable');
    if (table.style.display === 'none') {
        table.style.display = 'table'; // Show the table
    } else {
        table.style.display = 'none'; // Hide the table
    }
}