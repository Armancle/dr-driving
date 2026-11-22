# Dr. Driving — Vehicle Comparison & Decision Engine

**Dr. Driving** is a modern, fast, and interactive web application designed to eliminate vehicle decision fatigue. Compare cars and bikes side-by-side with real specifications, automated winner highlights, pros & cons, and an intelligent 60-second recommendation quiz.

---

## 🚗 Key Features

- **Side-by-Side Vehicle Duel Matrix**: Compare any two vehicles with direct spec-by-spec analysis (engine capacity, horsepower, torque, fuel efficiency, safety ratings, boot space, pricing).
- **Automated Winner Highlighting**: Instantly identifies the winning vehicle across key metric categories like performance and mileage.
- **Find My Ride (60s Decision Finder Quiz)**: An interactive quiz tailored to lifestyle, budget, and driving habits that matches users with ideal vehicle options.
- **Floating Compare Dock**: Keep track of chosen vehicles across different pages and launch comparisons with one click.
- **Detailed Vehicle Catalog**: Rich vehicle profiles featuring verified specifications, highlighted pros and cons, and feature breakdowns.
- **Accessories & Products**: Integrated product showcase and shopping cart for vehicle gear and maintenance essentials.
- **Responsive & Lightweight**: Built with clean vanilla web technologies for instant loading, smooth animations, and mobile-friendly usability.

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism, Responsive Media Queries)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Storage / State**: Client-side storage (`localStorage`) for vehicle dock and user preferences

---

## 📁 Project Structure

```text
dr-driving/
├── index.html       # Landing page with Quick-VS bar, trending duels & quiz teaser
├── compare.html     # Side-by-side duel matrix and winner evaluation engine
├── vehicles.html    # Full vehicle catalog with search, filter, and comparison triggers
├── quiz.html        # "Find My Ride" 60-second decision quiz
├── products.html    # Vehicle accessories and products catalog
├── cart.html        # Shopping cart for vehicle products
├── script.js        # Vehicle database, comparison logic, and interactive components
├── styles.css       # Complete UI design system, layout, and component styling
├── logo.jpg         # Platform branding logo
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

No build step or dependencies required!

### Option 1: Direct Browser Launch
Simply double-click or open [index.html](file:///d:/code/etc/dr-driving/index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server
Run a local lightweight server in PowerShell or terminal:

```powershell
# Using Python
python -m http.server 8000

# Using Node.js npx
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 👤 Author

Developed by **[Armancle](https://github.com/Armancle)**.
