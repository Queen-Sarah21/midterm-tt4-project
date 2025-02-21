import './list-products.scss';

// images
import pexel1 from "./assets/images/pexels-photo-3270223.jpeg";
import pexel2 from "./assets/images/pexels-photo-4041392.jpeg";
import pexel3 from "./assets/images/pexels-photo-236010.jpeg";
import pexel4 from "./assets/images/pexels-photo-258244.jpeg";
import pexel5 from "./assets/images/pexels-photo-2533266.jpeg";
import pexel6 from "./assets/images/pexels-photo-1667088.jpeg";
import pexel7 from "./assets/images/pexels-photo-90946.jpeg";
import pexel8 from "./assets/images/pexels-photo-335257.jpeg";
import pexel9 from "./assets/images/pexels-photo-2536965.jpeg";
import pexel10 from "./assets/images/pexels-photo-1797103.jpeg";
import pexel11 from "./assets/images/pexels-photo-2280551.jpeg";
import pexel12 from "./assets/images/pexels-photo-3621234.jpeg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        { name: 'Pine Forest', description: 'High-quality scent.', price: '$899', image: pexel1 },
        { name: 'Spray', description: 'Professional Spray.', price: '$59', image: pexel2 },
        { name: 'Milk Glass', description: 'Great milk quality.', price: '$99', image: pexel3 },
        { name: 'Perfume', description: 'Full-perfume fragrance.', price: '$1,499', image: pexel4 },
        { name: 'Lipstick', description: 'Best lipstick for photo shoots.', price: '$49', image: pexel5 },
        { name: 'Panasonic Lumix', description: '4K video recording support.', price: '$849', image: pexel6 },
        { name: 'Leica Camera', description: 'Premium build and quality.', price: '$3,499', image: pexel7 },
        { name: 'Olympus OM-D', description: 'Best for travel photography.', price: '$1,199', image: pexel8 },
        { name: 'Pentax DSLR', description: 'Great for outdoor shoots.', price: '$749', image: pexel9 },
        { name: 'Leica Camera', description: 'Premium build and quality.', price: '$3,499', image: pexel10 },
        { name: 'Herb OM-D', description: 'Best for healthy body.', price: '$19', image: pexel11 },
        { name: 'Pentax DSLR', description: 'Great for outdoor shoots.', price: '$749', image: pexel12 }
    ];

    productsContainer.classList.add('row'); // Bootstrap grid system

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'mb-4'); 

        const card = document.createElement('div');
        card.classList.add('card', 'text-start'); 

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('card-text', 'fw-bold');
        price.textContent = `Price: ${product.price}`;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-success', 'w-100'); 
        addToCart.textContent = "Add to cart";

        // Append elements
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        productsContainer.appendChild(cardDiv);
    });
});
