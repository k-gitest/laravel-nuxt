export default defineNuxtPlugin(async() => {
  const user = useUser();

  if (user.value !== undefined) return;
  
  if (user.value === undefined) {
    user.value = await fetchCurrentUser();
  }

})