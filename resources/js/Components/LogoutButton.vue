<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
  'bg-red-500 text-white px-4 py-2 rounded'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
