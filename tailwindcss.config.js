module.exports = {
  mode: 'jit',
  purge: [
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
};
