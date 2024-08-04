<script setup lang="ts">
  import { ref } from 'vue';

  definePageMeta({ middleware: ["guest"] });
  
  const { register } = useAuth()
  const router = useRouter()
  const user = useUser()


  const form = ref({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
      }
  });

    const submit = async () => {
      console.log(user.value)
      form.value.errors = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      };

      if (form.value.password !== form.value.password_confirmation) {
        form.value.errors.password_confirmation = 'Passwords do not match';
        return;
      }

      try {
        const success = await register(form.value);
          console.log(form, form.value, success)

        if (success) {
          console.log('Registration successful');
          router.push('/dashboard');
          //router.push('login')
        } else {
          console.error('Registration failed');
          //form.value.errors.email = 'Registration failed. Please try again.';
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    };
</script>

<template>
  <form @submit.prevent="submit">
      <div>
          <InputLabel for="name" value="Name" />

          <InputText
              id="name"
              type="text"
              class="mt-1 block w-full"
              v-model="form.name"
              required
              autofocus
              autocomplete="name"
          />

          <InputError class="mt-2" :message="form.errors.name" />
      </div>

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

      <div class="mt-4">
          <InputLabel for="password_confirmation" value="Confirm Password" />

          <InputText
              id="password_confirmation"
              type="password"
              class="mt-1 block w-full"
              v-model="form.password_confirmation"
              required
              autocomplete="new-password"
          />

          <InputError class="mt-2" :message="form.errors.password_confirmation" />
      </div>

      <div class="flex items-center justify-end mt-4">
          <FormButton class="ms-4">
              Register
          </FormButton>
      </div>
  </form>
</template>
