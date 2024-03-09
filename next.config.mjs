export async function redirects() {
  return [
    // Basic redirect
    {
      source: "/",
      destination: "/dashboard",
      permanent: true,
    },
  ];
}
