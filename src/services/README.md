# Services Directory

This directory contains service modules that handle API calls and external integrations.

## Purpose

The services directory centralizes all external API communication and third-party integrations, making the codebase more maintainable and testable.

## Organization

- Each service file should focus on a specific domain or external integration
- Service files should export functions that handle API requests and data transformation
- Authentication and error handling should be consistent across services

## Examples

```typescript
// Example service file structure (api.ts)
export const API_BASE_URL = process.env.API_URL || 'https://api.example.com';

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  // Add authentication headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    // Add auth token if available
    ...(getAuthToken() ? { 'Authorization': `Bearer ${getAuthToken()}` } : {}),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// Example domain-specific service (products-service.ts)
import { fetchWithAuth } from './api';

export async function getProducts() {
  return fetchWithAuth('/products');
}

export async function getProductById(id: string) {
  return fetchWithAuth(`/products/${id}`);
}
```

## Best Practices

1. Keep service functions focused on a single responsibility
2. Handle errors consistently
3. Use TypeScript for type safety
4. Document complex API interactions
5. Use environment variables for API URLs and keys