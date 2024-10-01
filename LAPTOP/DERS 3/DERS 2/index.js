// Массив с информацией о ноутбуках
var Laptops = [
    { model: "Dell XPS 13", price: 999, memory: "16GB", stock: 10 },
    { model: "Apple MacBook Air", price: 1099, memory: "8GB", stock: 5 },
    { model: "HP Spectre x360", price: 1299, memory: "16GB", stock: 7 },
    { model: "Lenovo ThinkPad X1", price: 1399, memory: "16GB", stock: 2 },
];

// Функция для создания таблицы
function generateTable() {
    var tableHTML = "<table>";
    tableHTML += "<tr><th>Модель</th><th>Цена ($)</th><th>Объем памяти</th><th>Количество на складе</th></tr>";

    // Проходим по массиву ноутбуков и добавляем строки в таблицу
    for (var i = 0; i < Laptops.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + Laptops[i].model + "</td>";
        tableHTML += "<td>" + Laptops[i].price + "</td>";
        tableHTML += "<td>" + Laptops[i].memory + "</td>";
        tableHTML += "<td>" + Laptops[i].stock + "</td>";
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";

    // Записываем HTML в элемент с id "laptop-table"
    document.getElementById("laptop-table").innerHTML = tableHTML;
}

// Генерируем таблицу при загрузке страницы
generateTable();
