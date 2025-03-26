const menuItems = {
    1: {
        title: "Bruschetta",
        price: "$8",
        description: "Our Bruschetta features toasted artisan bread topped with a mixture of diced fresh tomatoes, fragrant basil, garlic, and extra virgin olive oil. Each piece is drizzled with a balsamic glaze for the perfect balance of flavor.",
        ingredients: [
            "Artisan bread", "Roma tomatoes", "Fresh basil", 
            "Garlic", "Extra virgin olive oil", "Balsamic glaze", "Sea salt"
        ]
    },
    2: {
        title: "Calamari",
        price: "$12",
        description: "Tender calamari rings lightly coated in our seasoned flour blend and fried to golden perfection. Served with our house-made marinara sauce and a lemon wedge for a touch of brightness.",
        ingredients: [
            "Fresh calamari", "Seasoned flour", "Marinara sauce", 
            "Lemon", "Parsley", "Garlic aioli"
        ]
    },
    3: {
        title: "Spinach Artichoke Dip",
        price: "$10",
        description: "A creamy blend of spinach, artichoke hearts, and melted cheeses, baked until bubbly and golden. Served with toasted crostini for dipping.",
        ingredients: [
            "Spinach", "Artichoke hearts", "Cream cheese", 
            "Parmesan", "Mozzarella", "Garlic", "Crostini"
        ]
    },
    4: {
        title: "Filet Mignon",
        price: "$34",
        description: "8oz center-cut filet mignon, grilled to your preference and topped with a rich red wine reduction. Served with garlic mashed potatoes and seasonal roasted vegetables.",
        ingredients: [
            "Premium beef tenderloin", "Red wine reduction", 
            "Garlic mashed potatoes", "Seasonal vegetables", 
            "Butter", "Fresh herbs"
        ]
    },
    5: {
        title: "Grilled Salmon",
        price: "$26",
        description: "Fresh Atlantic salmon fillet, grilled and topped with our lemon-dill butter sauce. Served with wild rice pilaf and asparagus.",
        ingredients: [
            "Atlantic salmon", "Lemon-dill butter sauce", 
            "Wild rice pilaf", "Asparagus", "Herbs", "Garlic"
        ]
    },
    6: {
        title: "Mushroom Risotto",
        price: "$18",
        description: "Creamy arborio rice cooked with a medley of wild mushrooms, white wine, and parmesan cheese. Finished with truffle oil and fresh herbs.",
        ingredients: [
            "Arborio rice", "Assorted wild mushrooms", 
            "Parmesan cheese", "White wine", "Vegetable broth", 
            "Truffle oil", "Fresh herbs"
        ]
    },
    7: {
        title: "Tiramisu",
        price: "$9",
        description: "Traditional Italian dessert made with espresso-soaked ladyfingers layered with a light mascarpone cream and dusted with cocoa powder.",
        ingredients: [
            "Ladyfingers", "Espresso", "Mascarpone cheese", 
            "Eggs", "Sugar", "Cocoa powder", "Marsala wine"
        ]
    },
    8: {
        title: "Chocolate Lava Cake",
        price: "$11",
        description: "Decadent chocolate cake with a molten center, served warm with vanilla bean ice cream and a drizzle of raspberry coulis.",
        ingredients: [
            "Dark chocolate", "Butter", "Eggs", "Flour", 
            "Sugar", "Vanilla bean ice cream", "Raspberry coulis"
        ]
    },
    9: {
        title: "Crème Brûlée",
        price: "$8",
        description: "Classic French dessert featuring rich vanilla custard topped with a layer of caramelized sugar for a delightful crunch.",
        ingredients: [
            "Heavy cream", "Vanilla bean", "Egg yolks", 
            "Sugar", "Salt"
        ]
    },
    10: {
        title: "Classic Mojito",
        price: "$12",
        description: "Refreshing cocktail made with white rum, fresh mint leaves, lime juice, simple syrup, and topped with soda water. Garnished with mint sprigs and a lime wedge.",
        ingredients: [
            "White rum", "Fresh mint leaves", "Lime juice", 
            "Simple syrup", "Soda water", "Ice"
        ]
    },
    11: {
        title: "French Red Wine",
        price: "$14",
        description: "Glass of premium French red wine from our curated selection. Options include Bordeaux, Burgundy, and Rhône Valley varieties.",
        ingredients: [
            "French red wine grapes", "Sustainable viticulture"
        ]
    },
    12: {
        title: "Espresso Martini",
        price: "$13",
        description: "Sophisticated cocktail combining vodka, coffee liqueur, and freshly brewed espresso, shaken to create a frothy finish. Garnished with coffee beans.",
        ingredients: [
            "Vodka", "Coffee liqueur", "Espresso", 
            "Simple syrup", "Coffee beans"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const menuItemCards = document.querySelectorAll('.menu-item');
   
    menuItemCards.forEach(card => {
        card.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            showItemDetails(itemId);
        });
        
        const viewButton = card.querySelector('.view-details');
        viewButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const itemId = this.closest('.menu-item').getAttribute('data-item-id');
            showItemDetails(itemId);
        });
    });
    
    function showItemDetails(itemId) {
        const item = menuItems[itemId];
        
        if (!item) {
            console.error(`Menu item with ID ${itemId} not found`);
            return;
        }

        document.getElementById('itemTitle').textContent = item.title;
        document.getElementById('itemDescription').textContent = item.description;
        document.getElementById('itemPrice').textContent = item.price;
        
        const ingredientsList = document.getElementById('itemIngredients');
        ingredientsList.innerHTML = '';
        item.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        
        const menuModal = new bootstrap.Modal(document.getElementById('menuItemModal'));
        menuModal.show();
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
                
                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    

    const reservationForm = document.querySelector('#contact form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Reservation request submitted! We will contact you shortly to confirm your reservation.');
            this.reset();
        });
    }
});
