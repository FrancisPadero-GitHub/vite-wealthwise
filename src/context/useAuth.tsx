import { useQuery } from "@tanstack/react-query";
import { User } from "@supabase/supabase-js";
import { supabase } from "../supabase";
import React from "react";
import { queryClient } from "../lib/queryClient";

export function useAuth() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      return session?.user ?? null;
    },
    staleTime: 0, // Always consider the data stale to get real-time updates
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  // Set up auth state change listener
  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      // Invalidate the query when auth state changes
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    user: user as User | null,
    loading: isLoading,
  };
}
