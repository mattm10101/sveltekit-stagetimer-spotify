<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { userSession } from '$lib/store';
  import '../app.css';

  onMount(() => {
    supabase.auth.getSession().then(({ data }) => {
      $userSession = data.session;
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      $userSession = session;
    });

    return () => subscription.unsubscribe();
  });
</script>

<slot />