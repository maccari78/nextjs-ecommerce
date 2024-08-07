async function getConfig() {
  const tailwindcss = await import('prettier-plugin-tailwindcss');
  return {
    plugins: [tailwindcss.default],
  };
}

module.exports = getConfig();
