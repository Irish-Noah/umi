import React from 'react';
import './Menu.css';

const menuSections = [
  {
    title: 'Appetizers',
    items: [
      { name: 'AGEDASHI TOFU', description: 'Tempura-style Tofu Served with Tempura Sauce', price: '$6.5' },
      { name: 'CALAMARI TEMPURA', description: 'Deep fried calamari rings served with spicy mayo', price: '$8.5' },
      { name: 'CHICKEN KATSU', description: 'Breaded chicken, deep fried and served with katsu sauce', price: '$7.5' },
      { name: 'CRABSTICK TEMPURA', description: 'Lightly deep fried crabsticks served with teriyaki sauce or spice mayo', price: '$6.5' },
      { name: 'CRISPY CHICKEN', description: 'Deep fried chicken drizzled in sweet and spicy sauce', price: '$8.95' },
      { name: 'CRISPY SHRIMP', description: 'Deep fried shrimp dizzled in sweet and spice sauce', price: '$10.95' },
      { name: 'EBI SHUMAI', description: 'Japanese style steamed shrimp dumplings served with tempura sauce', price: '$6.5' },
      { name: 'EDAMAME', description: 'Steamed and salted soybeans', price: '$5.5' },
      { name: 'GYOZA', description: 'Lighty fried beef dumplings served with tempura sauce', price: '$6.5' },
      { name: 'JALAPENO POPPERS', description: 'Deep fried jalapenos stuffed with spicy tuna and spicy mayo', price: '$8.95' },
      { name: 'SASHIMI APPETIZER', description: '8 Pieces of sashimi (chefs choice)', price: '$14.95' },
      { name: 'SHRIMP TEMPURA', description: 'Lightly deep fried shrimp served with tempura sauce', price: '$8.9' },
      { name: 'SOFTSHELL CRAB', description: 'Lightly deep fried soft shell crab served with ponzu sauce', price: '$10.95' },
      { name: 'SPRING ROLLS', description: 'Deep fried vegetable spring rolls', price: '$5.95' },
      { name: 'SUSHI APPETIZER', description: '5 Pieces of sushi (chefs choice)', price: '$14.95' },
      { name: 'TEMPURA COMBO', description: 'Lightly deep fried shrimp and vegetables served with tempura sauce', price: '$9.5' },
      { name: 'TERIYAKI APPETIZERS', description: 'Your choice of grilled meat and vegetabl;es with teriyaki sauce', price: '$8.9' },
      { name: 'TUNA TATAKI', description: 'Broiled rare prime tuna served cold', price: '$14.95' },
      { name: 'VEGETABLE TEMPURA', description: 'Lightly deep fried vegetables served with tempura sauce', price: '$7.5' }
    ]
  },
  {
    title: 'Soups & Salads',
    items: [
      { name: 'AVACADO SALAD', description: 'House salad and avocado served with ginger dressing', price: '$5.95' },
      { name: 'COMBINATION SALAD', description: 'Combination of seaweed, spicy crab, and ika salad with cucumber', price: '$10.95' },
      { name: 'CUCUMBER SALAD', description: 'Cucumber served with vinaigrette and crabstick', price: '$5.50' },
      { name: 'GYOZA SOUP', description: 'Thin broth with vegetable dumplings and eggs', price: '$5.95' },
      { name: 'HOUSE SALAD', description: 'Lettuce served with ginger dressing', price: '$4.5' },
      { name: 'IKA SALAD', description: 'Squid with cucumbers', price: '$6.95' },
      { name: 'MISO SOUP', description: 'Soybean broth with tofu, scallions, and seaweed', price: '$4.5' },
      { name: 'NOODLE SOUP', description: 'Thick wheat noodles in hot broth with thinly sliced vegetables', price: '$5.95' },
      { name: 'SEAWEED SALAD', description: 'Seaweed salad with cucumbers', price: '$5.95' },
      { name: 'SEAWEED & IKA SALAD', description: 'Seaweed and squid salad with cucumber', price: '$8.5' },
      { name: 'SPICY CRAB SALAD', description: 'Spicy crab served with cucumber, avocado, and spicy mayo', price: '$7.95' },
      { name: 'SPICY TUNA SALAD', description: 'Spicy tuna served with cucumber, avocado, and spicy mayo', price: '$10.95' }
    ]
  },
  {
    title: 'Udon & Soba', 
    items: [
      { name: 'California Roll', description: 'Crab, avocado, and cucumber', price: '$10' },
      { name: 'Spicy Tuna Roll', description: 'Tuna and spicy mayo', price: '$11' },
    ]
  },
  {
    title: 'Udon & Soba', 
    items: [
      { name: 'California Roll', description: 'Crab, avocado, and cucumber', price: '$10' },
      { name: 'Spicy Tuna Roll', description: 'Tuna and spicy mayo', price: '$11' },
    ]
  }
]

export default function Menu() {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuSections.map((section, idx) => (
          <div className="menu-section" key={idx}>
            <h2>{section.title}</h2>
            {section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div className="menu-item-header">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </div>
                <p className="item-description">{item.description}</p>
                <hr />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
