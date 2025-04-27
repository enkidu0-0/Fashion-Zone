# Fashion Zone Project Structure

This document outlines the organization of the Fashion Zone project to help maintain consistency and improve developer onboarding.

## Directory Structure

```
fashion-zone/
├── public/                  # Static assets served as-is
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   │   ├── admin/          # Admin-specific components
│   │   ├── ui/             # Shadcn UI components
│   │   └── ...             # Feature-specific components
│   ├── contexts/           # React context providers
│   ├── data/               # Static data and mock data
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # External library integrations
│   ├── pages/              # Page components for routing
│   │   └── admin/          # Admin-specific pages
│   ├── store/              # State management
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
└── ...                     # Config files
```

## Organization Principles

### Components

- **Feature-based organization**: Components are organized by feature or domain
- **Reusability**: Common components are placed in the `components` directory
- **UI Components**: Shadcn UI components are in `components/ui`
- **Admin Components**: Admin-specific components are in `components/admin`

### Pages

- Each page component corresponds to a route in the application
- Admin pages are grouped in the `pages/admin` directory

### Hooks

- Custom hooks follow the `use-` prefix naming convention
- Hooks are organized by functionality (e.g., `use-products.ts`, `use-supabase-query.ts`)

### State Management

- Store files are organized in the `store` directory
- Each store file is named after the domain it manages (e.g., `ProductStore.ts`)

### Types

- TypeScript types and interfaces are defined in the `types` directory
- Domain-specific types are grouped in relevant files (e.g., `supabase.ts`)

## Best Practices

1. **Naming Conventions**:
   - Use PascalCase for component files and React components
   - Use kebab-case for utility files and hooks
   - Use descriptive names that reflect the component's purpose

2. **File Organization**:
   - Keep related files together
   - Group by feature when possible
   - Avoid deeply nested directories

3. **Code Consistency**:
   - Follow the established patterns in the codebase
   - Use TypeScript for type safety
   - Leverage existing UI components from `components/ui`

4. **New Features**:
   - When adding new features, follow the existing organization pattern
   - Create new directories only when necessary for clarity
   - Document complex components or utilities