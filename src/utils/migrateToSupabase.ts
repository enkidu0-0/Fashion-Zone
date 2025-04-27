import { supabase } from '@/lib/supabase';

export const migrateToSupabase = async () => {
  try {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Migrate each user
    for (const [phone, userData] of Object.entries(users)) {
      const user = userData as {
        name: string;
        password: string;
        phone: string;
        registeredAt: string;
      };

      // Insert into Supabase users table
      const { error: userError } = await supabase
        .from('users')
        .insert({
          email: `${phone}@example.com`, // Using phone as email since we don't have email
          name: user.name,
          role: user.name.toLowerCase() === 'admin' ? 'admin' : 'user',
          created_at: user.registeredAt
        });

      if (userError) {
        console.error('Error migrating user:', userError);
      }
    }

    // Get all products from localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Migrate each product
    for (const product of products) {
      const { error: productError } = await supabase
        .from('products')
        .insert({
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image,
          category: product.category,
          stock: product.stock || 0,
          created_at: new Date().toISOString()
        });

      if (productError) {
        console.error('Error migrating product:', productError);
      }
    }

    return { success: true, message: 'Migration completed successfully' };
  } catch (error) {
    console.error('Migration failed:', error);
    return { success: false, message: 'Migration failed' };
  }
}; 