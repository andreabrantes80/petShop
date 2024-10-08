function saveProduto(produto, storageType) {
    let products = JSON.parse(localStorage.getItem(storageType)) || [];
    products.push(produto);
    localStorage.setItem(storageType, JSON.stringify(products));
}

//Função para receber a entrada de dados

document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productDate = document.getElementById('productDate').value;
    const storageType = document.getElementById('storageType').value;

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        date: productDate
    }

    saveProduto(product, storageType);
    alert(`Produto ${productName} adicionado em ${storageType}`);

    document.getElementById('productForm'.reset());
});

function fetchAnimals() {
    return new Promise(resolve, reject => {
        fetch('https://jsonplaceholder.typicode.com/users');

            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();

            });
            .then(data=> resolve(data))
            .catch(error => reject(error));
        }
    )
};


