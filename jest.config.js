module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "jest-fetch-mock"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"  // Solo babel-jest debería estar aquí
  },
  moduleNameMapper: {
    "^swiper/react$": "<rootDir>/__mocks__/swiperReactMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",  // identity-obj-proxy debería estar aquí
	"\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window|dom7)/)"],
  testMatch: ["**/UnitaryTest/**/*.test.js"]  // Asegúrate de que tus archivos de prueba sigan este patrón
};
