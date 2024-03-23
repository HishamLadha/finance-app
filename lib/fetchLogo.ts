export async function fetchCompanyLogo(query: string) {
  const endpoint = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      // User-Agent and other headers might not be necessary or recommended for client-side requests
      Accept: "*/*",
      Origin: "https://clearbit.com",
      // Include additional headers as needed, following the API documentation and respecting CORS policies
    },
  });

  if (!response.ok) {
    console.log("Network response was not ok");
  }

  const data = await response.json();

  // Iterate over the companies and return the first logo ending with ".ca"
  for (const company of data) {
    if (company.logo && company.logo.includes(".ca")) {
      return company.logo;
    }
  }
  // Fallback to the first logo if no ".ca" logos are found
  return data[0]?.logo;
}
