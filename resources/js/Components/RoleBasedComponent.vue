<script setup>
import LogoutButton from '@/Components/LogoutButton.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ButtonLink from '@/Components/ButtonLink.vue';

const { user } = defineProps(['user']);

const unsubscribe = async () => {
  try {
    const userId = user.id;
    const unsubscribeRoute = route('unsubscribe', { id: userId });
    
    await axios.delete(unsubscribeRoute);

    await Swal.fire({
      icon: 'success',
      title: 'Unsubscribe Successful',
      text: 'You have been unsubscribed.',
    });

    window.location.href = route('login'); 
  } catch (error) {
    console.error('Error:', error);
  }
};

</script>

<template>
  <div>
    <div v-if="user.role === 'admin'">
        <ButtonLink link="/view-records" buttonText="View Records" />

        <LogoutButton :href="route('logout')" method="post" as="button">
        Log Out
      </LogoutButton>
    </div>

    <div v-else-if="user.role === 'guest'">

        <button @click="unsubscribe" class="bg-yellow-500 text-white px-4 py-2 rounded mr-10">
        Unsubscribe
      </button>
      <LogoutButton :href="route('logout')" method="post" as="button">
        Log Out
      </LogoutButton>
     
    </div>
   
  </div>
</template>
