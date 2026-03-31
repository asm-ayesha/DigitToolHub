# Project Name: DigiToolsHub

##  Project Overview
**DigiToolsHub** is a modern and responsive web application that showcases a collection of digital tools and services. Users can explore products, view detailed features, and manage a dynamic shopping cart with real-time updates. The project is designed following a Figma layout and focuses on clean UI/UX and smooth user interactions.

### Visit the site : https://digitoolshub.netlify.app

---

##  Description
**DigiToolsHub** allows users to browse different digital products, add them to a cart, and proceed to checkout seamlessly. It includes interactive UI components like product toggling, toast notifications, and dynamic cart updates - all built with React.

---

##  Technologies Used
-  React.js  
-  Tailwind CSS / CSS3  
-  React Toastify  
-  JSON (for product data)  
-  Responsive Web Design  

---

##  Key Features

###  1. Smart Cart System
- Add/remove products dynamically  
- Displays total item count in navbar  
- Shows total price calculation  
- "Proceed to Checkout" clears cart instantly  

###  2. Toggle View System
- Switch between **Products** and **Cart**  
- Default view shows all products  
- Empty cart message when no items are added  

###  3. Dynamic Product Cards
- 3-column responsive layout  
- Displays product details like:
  - Name  
  - Description  
  - Price & billing period  
  - Features list  
  - Tags (Popular, New, Best Seller, Recommended, Trending, Limited)  
- Interactive **Buy Now** button  

---

##  Responsive Design
- Fully responsive across:
  - Mobile 
  - Tablet
  - Desktop
- Built following modern responsive design principles  

---

##  Notifications
- Integrated **React Toastify** for:
  - Add to cart alerts  
  - Remove item alerts  
  - Checkout confirmation  

---

##  Product Data
- Products are generated using JSON  
- Each product includes:
  - id  
  - name  
  - description  
  - price  
  - period (one-time / monthly / yearly)  
  - tag  
  - tagType  
  - features array  
  - icon  

---

##  Project Structure (Example)

```
src/
├── components/
├── assets/
├── App.jsx
└── main.jsx
```

---

##  Getting Started

###  Clone the Repository
```bash
git clone https://github.com/asm-ayesha/DigitToolHub.git
```

###  Install Dependencies
```bash
npm install
```

###  Run the Project
```bash
npm run dev
```

## Author

Developed with ❤️ by Ayesha Siddika

### Support

If you like this project, please ⭐ the repository and share it!