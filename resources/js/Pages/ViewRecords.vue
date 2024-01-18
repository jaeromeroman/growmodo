

<template>
    <Head title="View Records" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">View Records</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                    <table id="records-table" class="min-w-full border border-gray-300">
                        <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Username</th>
                            <th class="py-2 px-4 border-b">Email</th>
                            <th class="py-2 px-4 border-b">Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td class="py-2 px-4 border-b">{{ user.username }}</td>
                            <td class="py-2 px-4 border-b">{{ user.email }}</td>
                            <td class="py-2 px-4 border-b">{{ user.phone }}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import axios from 'axios';

const users = ref([]);

onMounted(async () => {
    await fetchUsers();
});

const fetchUsers = async () => {
    try {
        const response = await axios.get('/api/users'); // Assuming you have an API route for fetching users
        users.value = response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};
</script>




<style scoped>
#records-table {
    text-align: center;
}
.min-w-full {
  width: 100%;
}

.border {
  border: 1px solid #e2e8f0;
}

.border-b {
  border-bottom: 1px solid #e2e8f0;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>