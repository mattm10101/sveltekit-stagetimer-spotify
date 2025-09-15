<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { userSession } from '$lib/store';

  async function signInWithSpotify() {
    await supabase.auth.signInWithOAuth({ provider: 'spotify' });
  }

  async function signOut() {
    await supabase.auth.signOut();
  }
</script>

<div class="bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center font-sans">
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 max-w-lg mx-auto text-center">

    {#if $userSession}
      <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-2">
        Welcome!
      </h1>
      <p class="text-gray-500 dark:text-gray-400 mb-6 break-all">
        Signed in as: {$userSession.user.email}
      </p>
      <button 
        on:click={signOut}
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
      >
        Logout
      </button>

    {:else}
      <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Stage & Spotify Controller
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Connect your Spotify account to get started.
      </p>
      
    <button 
      on:click={signOut}
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
    >
    Logout
    </button>

    {/if}

  </div>
</div>