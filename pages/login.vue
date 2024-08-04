<script setup lang="ts">
  definePageMeta({ middleware: ["guest"] });

  const { login } = useAuth();
  const router = useRouter();

  const form = ref({
      email: '',
      password: '',
      errors: {
          email: '',
          password: '',
      }
  });

  const submit = async () => {
    try{
      const success = await login(form.value)

      if (success) {
        console.log('Login successful');
        router.push('/dashboard');
      } else {
        console.error('login failed');
      }
    }
    catch(error){
      console.error('Login error:', error);
    }
    
  }
</script>

<template>
  <div>
    loginページ
    <form @submit.prevent="submit">
        <div class="mt-4">
            <InputLabel for="email" value="Email" />

            <InputText
                id="email"
                type="email"
                class="mt-1 block w-full"
                v-model="form.email"
                required
                autocomplete="username"
            />

            <InputError class="mt-2" :message="form.errors.email" />
        </div>

        <div class="mt-4">
            <InputLabel for="password" value="Password" />

            <InputText
                id="password"
                type="password"
                class="mt-1 block w-full"
                v-model="form.password"
                required
                autocomplete="new-password"
            />

            <InputError class="mt-2" :message="form.errors.password" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <FormButton class="ms-4">
                Login
            </FormButton>
        </div>
    </form>
  </div>
</template>