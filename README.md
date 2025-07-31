# Nuna Harvest Inventory System

A modern, fast, and accessible inventory management application for New York State dispensaries, built with Angular and Vite. This application focuses on terpene-based filtering and provides a comprehensive product catalog with advanced search and filtering capabilities.

## Features

### 🚀 Core Features
- **Rapid Inventory Index**: Fast, responsive product browsing with 45+ example products
- **Terpene-Based Filtering**: 16 terpenes with color-coded interactive chips
- **Advanced Search**: Search by product name, brand, effects, flavors, and terpenes
- **Multi-Filter System**: Filter by categories, effects, strain types, potency levels, and price range
- **Real-time Filtering**: Instant results as you adjust filters
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility First**: WCAG compliant with keyboard navigation and screen reader support
- **Fast Performance**: Optimized for speed with efficient data handling
- **Color-Coded Terpenes**: Visual terpene identification with effects and flavors
- **Interactive Elements**: Hover effects, smooth transitions, and intuitive controls

### 📊 Product Information
- **Comprehensive Details**: THC/CBD content, effects, flavors, terpenes, and descriptions
- **Visual Indicators**: Stock status, potency levels, and strain types
- **Brand Information**: Product branding and categorization
- **Price Management**: Real-time price filtering and display

## Technology Stack

- **Frontend Framework**: Angular 17 (Standalone Components)
- **Build Tool**: Vite
- **Styling**: SCSS with CSS Custom Properties
- **State Management**: RxJS with BehaviorSubjects
- **Typography**: Inter Font Family
- **Icons**: SVG Icons (Feather Icons style)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dispensary-inventory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── inventory/           # Main inventory component
│   │   ├── product-card/        # Individual product display
│   │   ├── terpene-filter/      # Terpene filtering interface
│   │   └── filter-panel/        # Advanced filtering options
│   ├── models/
│   │   └── inventory.interface.ts  # TypeScript interfaces
│   ├── data/
│   │   └── inventory.data.ts    # Sample inventory data
│   ├── services/
│   │   └── inventory.service.ts # Data management and filtering
│   └── app.ts                   # Main application component
├── styles.scss                  # Global styles
└── main.ts                      # Application entry point
```

## Data Structure

### Product Interface
```typescript
interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'flower' | 'pre-rolls' | 'vaporizers' | 'concentrates' | 'edibles' | 'tinctures' | 'topicals' | 'accessories';
  thcContent: number;
  cbdContent: number;
  terpenes: Terpene[];
  dominantTerpenes: string[];
  effects: string[];
  flavors: string[];
  price: number;
  inStock: boolean;
  imageUrl: string;
  description: string;
  strainType: 'sativa' | 'indica' | 'hybrid';
  potency: 'low' | 'medium' | 'high';
}
```

### Terpene Interface
```typescript
interface Terpene {
  name: string;
  description: string;
  effects: string[];
  flavors: string[];
  color: string;
}
```

## Features in Detail

### Terpene Filtering
The application includes 16 terpenes with detailed information:
- **Myrcene**: Relaxing, sedative effects
- **Limonene**: Uplifting, anti-anxiety effects
- **Pinene**: Focus and memory enhancement
- **Linalool**: Calming and anti-anxiety
- **Caryophyllene**: Anti-inflammatory and pain relief
- And 11 more terpenes with unique properties

### Filtering Capabilities
- **Categories**: Flower, Pre-Rolls, Vaporizers, Concentrates, Edibles, Tinctures, Topicals, Accessories
- **Effects**: Euphoric, Creative, Relaxed, Energetic, Focused, Happy, Sleepy, etc.
- **Strain Types**: Sativa, Indica, Hybrid
- **Potency Levels**: Low, Medium, High
- **Price Range**: Customizable min/max price filtering

### Search Functionality
- **Real-time Search**: Instant results as you type
- **Multi-field Search**: Search across product names, brands, descriptions, effects, flavors, and terpenes
- **Debounced Input**: Optimized performance with 300ms debounce

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Support for high contrast display preferences
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Clear focus indicators and logical tab order

## Performance Optimizations

- **Efficient Filtering**: RxJS operators for optimized data filtering
- **Lazy Loading**: Components load only when needed
- **Debounced Search**: Prevents excessive API calls during typing
- **Optimized Rendering**: TrackBy functions for efficient list rendering
- **CSS Optimization**: Minimal CSS with efficient selectors

## Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The application can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Customization

### Adding New Products
1. Update `src/app/data/inventory.data.ts`
2. Add new products following the Product interface
3. Include terpene information and effects

### Modifying Terpenes
1. Update the TERPENES array in the data file
2. Add new terpenes with color codes and descriptions
3. Update product terpene associations

### Styling Changes
1. Modify SCSS files in component directories
2. Update global styles in `src/styles.scss`
3. Customize color variables and design tokens

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.

---

**Built for Nuna Harvest Dispensary**  
*Licensed Dispensary in Mt. Vernon, NY* 