import { supabase } from '../lib/supabase';

export function useAuthActions() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return { handleLogout };
}