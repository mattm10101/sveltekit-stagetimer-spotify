import { writable } from 'svelte/store';
import type { Session } from '@supabase/supabase-js';

export const userSession = writable<Session | null>(null);