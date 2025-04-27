import { useAdminProducts } from '@/hooks/useAdminProducts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Plus, Minus, Trash } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function ProductManager() {
  const { toast } = useToast()
  const {
    products,
    isLoading,
    error,
    updateStock,
    updateProduct,
    deleteProduct
  } = useAdminProducts()

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center text-red-500">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              {error instanceof Error ? error.message : 'Failed to load products. Please try again.'}
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleStockUpdate = async (productId: string, newStock: number) => {
    try {
      await updateStock.mutateAsync({
        productId,
        newStock
      })
      toast({
        title: 'Stock Updated',
        description: 'Product stock has been updated successfully.'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update stock',
        variant: 'destructive'
      })
    }
  }

  const handleDelete = async (productId: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return

    try {
      await deleteProduct.mutateAsync(productId)
      toast({
        title: 'Product Deleted',
        description: 'Product has been removed successfully.'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to delete product',
        variant: 'destructive'
      })
    }
  }

  return (
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
                onClick={() => handleDelete(product.id)}
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
                  product.stock === 0 ? 'text-red-500' :
                  product.stock <= 10 ? 'text-yellow-500' :
                  'text-green-500'
                }`}>
                  {product.stock === 0 ? 'Out of Stock' :
                   product.stock <= 10 ? 'Low Stock' :
                   'In Stock'}
                </p>
              </div>

              <div>
                <label className="text-sm text-muted-foreground">Stock</label>
                <div className="flex items-center gap-2 mt-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleStockUpdate(
                      product.id,
                      Math.max(0, product.stock - 1)
                    )}
                    disabled={product.stock <= 0 || updateStock.isPending}
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
                        handleStockUpdate(product.id, value)
                      }
                    }}
                    disabled={updateStock.isPending}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleStockUpdate(
                      product.id,
                      product.stock + 1
                    )}
                    disabled={updateStock.isPending}
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
                        updateProduct.mutate({
                          id: product.id,
                          updates: { price: value }
                        })
                      }
                    }}
                    disabled={updateProduct.isPending}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 