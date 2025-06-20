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
      { name: 'CHICKEN UDON', description: 'Thich wheat noodles and vegetables with chicken in a hot, fish-based broth', price: '$11.5' },
      { name: 'KAKE SOBA', description: 'Your choice of thin buckwheat noodles (soba) and vegetables in a hot, fish-based broth', price: '$9.95' },
      { name: 'KAKE UDON', description: 'Your choice of thick wheat noodles (udon) and vegetables in a hot, fish-baed broth', price: '$9.95' },
      { name: 'NABE YAKI UDON', description: 'Thich wheat noodles and vegetables in a hot, fish-based broth with egg and shrimp tempura served in an iron pot', price: '$13.5' },
      { name: 'TEMPURA SOBA', description: 'Your choice of thin buckwheat noodles (soba) and vegetables with shrimp tempura served in a hot, fish-based broth', price: '$12.5' },
      { name: 'TEMPURA UDON', description: 'Your choice of thick wheat noodles (udon) and vegetables with shrimp tempura in a hot, fish-based broth', price: '$12.5' },
      { name: 'YAKI SOBA', description: 'Pan fried noodles (soba) with your choice of meat', price: '$14.95' },
      { name: 'YAKI UDON', description: 'Pan fried noodles (udon) with your choice of meat', price: '$14.95' }
    ]
  },
  {
    title: 'Raw Nigiri Sushi', 
    items: [
      { name: 'BLUEFIN TUNA SUSHI', description: '', price: '$3.75' },
      { name: 'FATTY YELLOWTAIL SUSHI', description: 'Fatty hamachi', price: '$3.25' },
      { name: 'FLYING FISH ROE SUSHI', description: 'Tobiko', price: '$2.95' },
      { name: 'MACKEREL SUSHI', description: 'Saba', price: '$2.5' },
      { name: 'RED SNAPPER SUSHI', description: 'Tai', price: '$2.5' },
      { name: 'SALMON SUSHI', description: 'Sake', price: '$2.75' },
      { name: 'SALMON ROE SUSHI', description: 'Ikura', price: '$3.5' },
      { name: 'SCALLOP SUSHI', description: 'Hot agai', price: '$2.5' },
      { name: 'SMELT ROW SUSHI', description: 'Masago', price: '$2.95' },
      { name: 'SQUID SUSHI', description: 'Ika', price: '$2.5' },
      { name: 'SURF CLAM', description: 'Hokigai', price: '$2.5' },
      { name: 'SWEET SHRIMP SUSHI', description: 'Amaebi', price: '$3.95' },
      { name: 'TUNA SUSHI', description: 'Maguro', price: '$2.95' },
      { name: 'WASABI SMELT ROE SUSHI', description: '', price: '$2.95' },
      { name: 'WHITE TUNA SUSHI', description: 'Shiro magato', price: '$2.75' },
      { name: 'YELLOWTAIL SUSHI', description: 'Hamachi', price: '$2.75' }
      
    ]
  },
  {
    title: 'Cooked Nigiri Sushi', 
    items: [
      { name: 'CRAB STICK SUSHI', description: 'Kani', price: '$1.95' },
      { name: 'FRESH WATER EEL SUSHI', description: 'Unagi', price: '$3.25' },
      { name: 'FRIED TOFU SUSHI', description: 'Inari', price: '$1.95' },
      { name: 'OCTOPUS SUSHI', description: 'Tako', price: '$2.5' },
      { name: 'SHRIMP SUSHI', description: 'Ebi', price: '$2.75' },
      { name: 'SMOKED SALMON SUSHI', description: '', price: '$2.95' }
      
    ]
  },
  {
    title: 'A. Regular Rolls', 
    items: [
      { name: 'ALASKAN ROLL', description: 'Salmon, avocado, cucumber', price: '$7.75' },
      { name: 'BLUEFIN TUNA ROLL', description: '', price: '$8.75' },
      { name: 'CALIFORNIA ROLL', description: 'Crab stick, avocado, cucumber', price: '$6.25' },
      { name: 'CRUNCHY CALIFORNIA ROLL', description: 'Crab stick, avocado, cucumber with masago & crunch', price: '$7.75' },
      { name: 'EEL CRUCNH ROLL', description: 'BBQ eel, avocado, cucumber with masago & crunch', price: '$7.95' },
      { name: 'GREEN RIVER ROLL', description: 'BBQ eel, avocado, cucumber with seaweed flakes & eel sauce', price: '$7.95' },
      { name: 'JULIAN DRUM ROLL', description: 'Cooked shrimp, cucumber, carrot with sesame seeds', price: '$7.95' },
      { name: 'PHILIDELPHIA ROLL', description: 'Smoked salmon, crab stick, avocado, cucumber, and cream cheese', price: '$7.95' },
      { name: 'SALMON ROLL', description: 'Fresh salmon', price: '$6.75' },
      { name: 'SHRIMP CALIFORNIA ROLL', description: 'Cooked shrimp, crab stick, avocado, and cucumber', price: '$7.75' },
      { name: 'SHRIMP TEMPURA ROLL', description: 'Deep fried shrimp with crunch & teriyaki sauce', price: '$7.75' },
      { name: 'SMOKED SALMON ROLL', description: 'Smoked salmon, avocado, and cucumber', price: '$7.75' },
      { name: 'SPICY CALIFORNIA ROLL', description: 'Spicy crab salad, avocado, and cucumber', price: '$7.75' },
      { name: 'SPICY PISTON ROLL', description: 'Spicy crab salad, avocado, cucumber, and cream cheese', price: '$7.95' },
      { name: 'SPICY SALMON ROLL', description: 'Spicy salmon, avocado, and cucumber', price: '$7.75' },
      { name: 'SPICY SCALLOP', description: 'Spicy scallop, avocado, and cucumber', price: '$7.75' },
      { name: 'SPICY TUNA ROLL', description: 'Spicy tuna, avocado, and cucumber', price: '$7.75' },
      { name: 'SPICY YELLOWTAIL ROLL', description: 'Spicy yellowtail, avocado, and cucumber', price: '$7.75' },
      { name: 'TUNA ROLL', description: 'Fresh tuna', price: '$6.75' }
    ]
  },
  {
    title: 'B. Vegetable Rolls', 
    items: [
      { name: 'A.A.C ROLL', description: 'Avocado, asparagus, and cucumber', price: '$7' },
      { name: 'ASPARAGUS ROLL', description: 'Asparagus', price: '$5.5' },
      { name: 'AVOCADO ROLL', description: 'Avocado', price: '$5.5' },
      { name: 'AVOCADO CUCUMBER ROLL', description: 'Avacado and cucumber', price: '$5.75' },
      { name: 'BLACK MUSHROOM ROLL', description: 'Black mushroom', price: '$5.5' },
      { name: 'CUCUMBER ROLL', description: 'Cucumber kappa', price: '$5.5' },
      { name: 'PICKLE RADISH ROLL', description: 'Pickle radish oshinko', price: '$5.5' },
      { name: 'UMI ISLAND', description: 'Asparagus, avocado, cucumber, red beet, and carrot', price: '$9.95' }
    ]
  },
  {
    title: 'C. Tempura Rolls', 
    items: [
      { name: 'CHICKEN TERIYAKI', description: 'Grilled chicken, cucumber with teriyaki sauce', price: '$9.95' },
      { name: 'CRAZY ROLL', description: 'BBQ eel, salmon skin, avocado, cucumber, cream cheese with eel sauce, spicy mayo & hot sauce', price: '$10.95' },
      { name: 'EEL ROLL', description: 'BBQ eel, avocado, cucumber, and cream cheese with eel sauce', price: '$10.95' },
      { name: 'FIESTA ROLL', description: 'Spicy tuna, crab salad, avocado, cucumber, cream cheese with crunch, spicy mayo & teriyaki sauce', price: '$15.95' },
      { name: 'LOBSTER ROLL', description: 'Lobster, avocado, cucumber, cream cheese with lobster sweet sauce', price: '$10.95' },
      { name: "ROCK N' ROLL", description: 'BBQ eel, avocado, cucumber, egg on one side with tuna salmon, cream cheese on the other side3 with 5 different sauces', price: '$17.95' },
      { name: 'SAMURAI ROLL', description: 'White tuna, salmon, snapper, cream cheese, green onion with hot sauce & spicy mayo sauce', price: '$11.95' },
      { name: 'SPICY CALIFORNIA ROLL', description: 'Spicy crab salad, avocado, cucumber, cream cheese with spicy mayo sauce', price: '$10.75' },
      { name: 'SPICY HURRICANE ROLL', description: 'BBQ eel, avocado, crab stick, cucumber, cream cheese with eel sauce & spicy mayo sauce', price: '$11.95' },
      { name: 'SPICY SHRIMP ROLL', description: 'Cooked shrimp, avocado, cucumber, cream cheese with spicy mayo sauce', price: '$10.75' },
      { name: 'SPICY TUNA ROLL', description: 'Spicy tuna, avocado, cucumber, cream cheese with spicy mayo sauce', price: '$10.95' },
      { name: 'TWISTER ROLL', description: 'Cooked shrimp, avocado, cucumber, cream cheese with teriyaki sauce & spicy mayo sauce', price: '$11.95' },
      { name: 'VEGGIE TEMPURA ROLL', description: 'Asparagus, avocado, cucumber, egg, cream cheese with sweet sauce (broiled)', price: '$10.25' },
      { name: 'YUM YUM ROLL', description: 'Tuna, salmon, avocado, cucumber, cream cheese with teriyaki sauce & spicy mayo sauce', price: '$11.25' }
    ]
  },
  {
    title: 'D. Specialty Rolls', 
    items: [
      { name: 'BLACK PEARL ROLL', description: 'Crab salad, avocado, cucumber topped with cooked shrimp, BBQ eel sauce, crunch, black caviar, and eel sauce', price: '$15.95' },
      { name: 'BUTTERFLY ROLL', description: 'Spicy tuna, avocado, cucumber topped with crab stick, avocado, crunch, hot pepper sauce & spicy mayo sauce', price: '$14.95' },
      { name: 'CATERPILLAR ROLL', description: 'Spicy tuna, cucumber topped with avocado & masago', price: '$14.25' },
      { name: 'COOKED SALMON PIZZA ROLL', description: 'Crunch california roll topped with salmon & spicy mayo sauce (broiled)', price: '$13.75' },
      { name: 'COOKED SPICY TUNA ROLL', description: 'California roll topped with spicy tuna, spicy mayo sauce, and hot sauce (broiled)', price: '$15.25' },
      { name: 'DRAGON ROLL', description: 'Deep fried shrimp, avocado, cucumber, topped with BBQ eel, avocado & eel sauce', price: '$14.95' },
      { name: 'DYNAMITE ROLL', description: 'California roll topped with 5 different chopped pieces of fish, spicy mayo & hot sauce (blended)', price: '$13.95' },
      { name: 'FIRECRACKER ROLL', description: 'Deep fried shrimp, avocado, cucumber, cream cheese topped with caviar, crunch, teriyaki sauce, spicy mayo sauce, and hot sauce', price: '$13.95' },
      { name: 'FUTOMAKI ROLL', description: 'Crab stick, egg, black mushroom, yellow radish, avocado, cucumber, and masago', price: '$13.25' },
      { name: 'GODZILLA ROLL', description: '', price: '$18.95' },
      { name: 'HAVANA NIGHT ROLL', description: 'Tuna, salmon, red snapper, crab stick, cooked shrimp, wrapped in cucumber with spicy mayo sauce & sweet sauce', price: '$14.25' },
      { name: '*HAWAIIAN ROLL', description: '', price: '$15.95' },
      { name: 'JAZZ ROLL', description: 'California roll, cream cheese topped with smoked salmon, masago, crunch, and spicy mayo sauce (broiled)', price: '$14.25' },
      { name: 'LOBSTER DELIGHT ROLL', description: '', price: '$14.95' },
      { name: 'NINJA ROLL', description: 'Spicy tuna, cucumber topped with squid and hot sauce', price: '$13.25' },
      { name: 'MICHIGAN ROLL', description: 'Smoked salmon, avocado, cucumber, cream cheese with masago and crunch', price: '$12.25' },
      { name: '*MOONLIGHT ROLL', description: '', price: '$15.95' },
      { name: 'RAINBOW ROLL', description: 'California roll topped with tuna, salmon snapper, white tuna, and white fish', price: '$14.95' },
      { name: 'RED DRAGON ROLL', description: 'California roll topped with spicy tuna & spicy mayo sauce', price: '$13.95' },
      { name: 'RED ROBIN ROLL', description: '', price: '$14.95' },
      { name: '*SALMON ON THE BEACH ROLL', description: '', price: '$15.95' },
      { name: 'SHELBY TOWNSHIP ROLL', description: 'Deep fried shrimp, avocado, cucumber topped with salmon, avocado & crunch', price: '$14.95' },
      { name: 'SPICY MEXICAN ROLL', description: '', price: '$13.95' },
      { name: '*SPIDER ROLL', description: '', price: '$15.95' },
      { name: '*STARFISH ROLL', description: '', price: '$15.95' },
      { name: 'SUNDAY MORNING ROLL', description: 'Deep fried shrimp, lettuce, cucumber, cream cheese topped with avocado, and teriyaki sauce', price: '$14.25' },
      { name: 'SUPER BOWL ROLL', description: '', price: '$13.95' },
      { name: '*SUPER THUNDER ROLL', description: '', price: '$15.25' },
      { name: 'TOKYO TRIO ROLL', description: 'Deep fried shrimp, avocado, cucumber topped with tuna, salmon, red snapper, avocado, green onion, and spicy mayo sauce', price: '$13.95' },
      { name: 'UMI SUSHI ROLL', description: 'Deep fried shrimp, avocado, cucumber, crunch topped with crab salad & spicy mayo sauce', price: '$13.95' },
      { name: 'UNDER THE SEA ROLL', description: 'Spicy crab salad, cucumber, avacado topped with seaweed salad, masago, crunch, and spicy mayo sauce', price: '$13.95' },
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
