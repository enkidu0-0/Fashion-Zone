import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase, supabaseAdmin } from '@/lib/supabase'
import { PostgrestFilterBuilder } from '@supabase/postgrest-js'

// Generic type for Supabase query response
type SupabaseResponse<T> = {
  data: T | null
  error: Error | null
}

export function useSupabaseQuery<T>(
  key: string[],
  query: () => PostgrestFilterBuilder<any, any, any[]>
) {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await query()
      if (error) throw error
      return data as T[]
    }
  })
}

export function useSupabaseMutation<T>(
  table: string,
  options: {
    onSuccess?: (data: T) => void
    requireAdmin?: boolean
  } = {}
) {
  const queryClient = useQueryClient()
  const client = options.requireAdmin ? supabaseAdmin : supabase

  return useMutation({
    mutationFn: async (variables: Partial<T>) => {
      const { data, error } = await client
        .from(table)
        .insert(variables)
        .select()
        .single()

      if (error) throw error
      return data as T
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [table] })
      options.onSuccess?.(data)
    }
  })
}

export function useSupabaseUpdate<T>(
  table: string,
  options: {
    onSuccess?: (data: T) => void
    requireAdmin?: boolean
  } = {}
) {
  const queryClient = useQueryClient()
  const client = options.requireAdmin ? supabaseAdmin : supabase

  return useMutation({
    mutationFn: async ({
      id,
      data
    }: {
      id: string
      data: Partial<T>
    }) => {
      const { data: updated, error } = await client
        .from(table)
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return updated as T
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [table] })
      options.onSuccess?.(data)
    }
  })
}

export function useSupabaseDelete(
  table: string,
  options: {
    onSuccess?: () => void
    requireAdmin?: boolean
  } = {}
) {
  const queryClient = useQueryClient()
  const client = options.requireAdmin ? supabaseAdmin : supabase

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await client
        .from(table)
        .delete()
        .eq('id', id)

      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] })
      options.onSuccess?.()
    }
  })
} 