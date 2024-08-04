<script setup lnag="ts">
  const { logout } = useAuth()
  const router = useRouter()
  const user = useUser()
  
  const handleLogout = async() => {
    await logout();
    await router.push('/login')
  }
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/register">register</router-link></li>
        <li><NuxtLink to="/login">login</NuxtLink></li>
        <li v-if="user"><button @click="handleLogout">logout</button></li>
      </ul>
    </div>
  </div>
</template>