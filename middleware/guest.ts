export default defineNuxtRouteMiddleware(() => {
  const user = useUser();
  if (user.value) return navigateTo("/dashboard", { replace: true });
});