import { useEffect } from 'react'
import { useAdminProducts } from '@/hooks/useAdminProducts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Plus, Minus, Trash } from 'lucide-react'

export default function AdminProductsPage() {
  const {
    products,
    isLoading,
    error,
    isAuthorized,
    updateStock,
    updatePrice,
    deleteProduct
  } = useAdminProducts()

  if (!isAuthorized) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center text-red-500">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              You need admin privileges to access this page.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center text-red-500">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Failed to load products. Please try again.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Product Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span className="text-lg">{product.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this product?')) {
                      deleteProduct.mutate(product.id)
                    }
                  }}
                >
                  <Trash className="h-5 w-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">SKU: {product.sku}</p>
                  <p className={`text-sm font-medium ${
                    product.status === 'Out of Stock' ? 'text-red-500' :
                    product.status === 'Low Stock' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                    {product.status}
                  </p>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Stock</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateStock.mutate({
                        productId: product.id,
                        newStock: Math.max(0, product.stock - 1)
                      })}
                      disabled={product.stock <= 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={product.stock}
                      className="w-20 text-center"
                      onChange={(e) => {
                        const value = parseInt(e.target.value)
                        if (!isNaN(value) && value >= 0) {
                          updateStock.mutate({
                            productId: product.id,
                            newStock: value
                          })
                        }
                      }}
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateStock.mutate({
                        productId: product.id,
                        newStock: product.stock + 1
                      })}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Price</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      type="number"
                      value={product.price}
                      className="w-full"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value)
                        if (!isNaN(value) && value >= 0) {
                          updatePrice.mutate({
                            productId: product.id,
                            newPrice: value
                          })
                        }
                      }}
                    />
                  </div>
                  {product.original_price && product.original_price > product.price && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Original: ${product.original_price}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 