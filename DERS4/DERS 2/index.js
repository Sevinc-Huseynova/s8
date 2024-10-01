<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Məhsul Qiymətləri və Stok</title>
</head>
<body>
    <h2>Məhsulların Qiyməti və Stok Miqdarı</h2>
    <table border="1" id="productTable">
        <thead>
            <tr>
                <th>Məhsul Adı</th>
                <th>Qiymət</th>
                <th>Stokda Var (true/false)</th>
            </tr>
        </thead>
        <tbody>
            <!-- JavaScript ilə məlumatlar buraya əlavə olunacaq -->
        </tbody>
    </table>

    <script>
        // Məhsul məlumatları
        const products = [
            { name: 'Məhsul 1', price: '20 AZN', inStock: true },
            { name: 'Məhsul 2', price: '35 AZN', inStock: false },
            { name: 'Məhsul 3', price: '15 AZN', inStock: true }
        ];

        // Cədvəli dolduran funksiya
        function populateTable() {
            const tableBody = document.querySelector('#productTable tbody');
            
            products.forEach(product => {
                const row = document.createElement('tr');
                
                // Məhsul Adı sütunu
                const nameCell = document.createElement('td');
                nameCell.textContent = product.name;
                row.appendChild(nameCell);
                
                // Qiymət sütunu
                const priceCell = document.createElement('td');
                priceCell.textContent = product.price;
                row.appendChild(priceCell);
                
                // Stokda Var (true/false) sütunu
                const stockCell = document.createElement('td');
                stockCell.textContent = product.inStock;
                row.appendChild(stockCell);
                
                // Sətiri cədvələ əlavə et
                tableBody.appendChild(row);
            });
        }

        // Cədvəli doldur
        populateTable();
    </script>
</body>
</html>
