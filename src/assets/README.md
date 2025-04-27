# Assets Directory

This directory contains static assets used throughout the application.

## Organization

Assets are organized by type in the following subdirectories:

### `/images`

Contains image files used in the application (JPG, PNG, WebP, SVG).

- Product images
- Banner images
- Logo and brand assets

### `/icons`

Contains icon files, preferably in SVG format for better scaling.

### `/styles`

Contains global styles and theme-related files that aren't component-specific.

## Best Practices

1. **Optimize Images**: Compress and optimize images before adding them to the project
2. **Use SVG for Icons**: Prefer SVG format for icons when possible
3. **Naming Convention**: Use kebab-case for filenames (e.g., `product-banner.jpg`)
4. **Group by Feature**: For feature-specific assets, consider using subdirectories
5. **Import Path**: Import assets using the `@/assets/...` path alias

## Example Usage

```tsx
// Importing an image
import productBanner from '@/assets/images/product-banner.jpg';

// Using in a component
function Banner() {
  return <img src={productBanner} alt="Product Banner" />;
}
```

For icons, consider using an icon component system for consistency:

```tsx
// Icon component example
import { Icon } from '@/components/ui/icon';

function ProductCard() {
  return (
    <div>
      <Icon name="shopping-cart" />
      <span>Add to Cart</span>
    </div>
  );
}
```