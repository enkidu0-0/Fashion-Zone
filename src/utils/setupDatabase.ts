import { supabaseAdmin } from '@/lib/supabase';

interface UserData {
  name: string;
  password: string;
  phone: string;
  registeredAt: string;
}

interface Product {
  name: string;
  description?: string;
  price: string | number;
  image?: string;
  category?: string;
  stock?: string | number;
}

export async function migrateToSupabase() {
  try {
    // Get data from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}') as Record<string, UserData>;
    const products = JSON.parse(localStorage.getItem('products') || '[]') as Product[];
    
    console.log('Starting migration...');
    console.log(`Found ${Object.keys(users).length} users and ${products.length} products`);

    // Migrate users
    console.log('\nMigrating users...');
    for (const [phone, userData] of Object.entries(users)) {
      const { error: userError } = await supabaseAdmin
        .from('profiles')
        .insert({
          id: crypto.randomUUID(),
          email: `${phone}@example.com`,
          name: userData.name,
          role: userData.name.toLowerCase() === 'admin' ? 'admin' : 'user',
          created_at: userData.registeredAt || new Date().toISOString()
        });

      if (userError) {
        console.error(`Error migrating user ${userData.name}:`, userError.message);
      } else {
        console.log(`✓ Migrated user: ${userData.name}`);
      }
    }

    // Migrate products
    console.log('\nMigrating products...');
    for (const product of products) {
      const { error: productError } = await supabaseAdmin
        .from('products')
        .insert({
          id: crypto.randomUUID(),
          name: product.name,
          description: product.description || '',
          price: parseFloat(String(product.price)) || 0,
          image_url: product.image || '',
          category: product.category || 'uncategorized',
          stock_quantity: parseInt(String(product.stock)) || 0,
          created_at: new Date().toISOString(),
          is_active: true,
          sku: `SKU${Math.random().toString(36).substring(7).toUpperCase()}`
        });

      if (productError) {
        console.error(`Error migrating product ${product.name}:`, productError.message);
      } else {
        console.log(`✓ Migrated product: ${product.name}`);
      }
    }

    console.log('\nMigration completed!');
    
    // Clear localStorage except for essential items
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = localStorage.getItem('currentUser');
    localStorage.clear();
    if (isLoggedIn) localStorage.setItem('isLoggedIn', isLoggedIn);
    if (currentUser) localStorage.setItem('currentUser', currentUser);
    
    console.log('localStorage cleared (except login state)');
    
    // Invalidate React Query cache to force refetch
    window.location.reload();
    
    return { success: true, message: 'Migration completed successfully' };
    
  } catch (error) {
    console.error('Migration failed:', error instanceof Error ? error.message : 'Unknown error');
    return { success: false, message: error instanceof Error ? error.message : 'Unknown error' };
  }
} 