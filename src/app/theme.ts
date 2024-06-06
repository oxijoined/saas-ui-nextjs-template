import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";

// Конфигурация темы
const config: ThemeConfig = {
  initialColorMode: "dark", // Установите начальный режим цвета (light или dark)
  useSystemColorMode: false, // Использовать ли системные настройки цвета
};

// Расширение базовой темы Chakra UI
const customTheme: ThemeOverride = {
  colors: {
    primary: "#3182CE", // Example of a primary color
    secondary: "#2D3748", // Example of a secondary color
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    // Here you can override styles for Chakra UI components
    Button: {
      baseStyle: {
        fontWeight: "bold", // Example of button styling
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
        },
      },
      variants: {
        solid: {
          bg: "primary",
          color: "white",
          _hover: {
            bg: "secondary",
          },
        },
      },
    },
  },
};

// Combine configuration and custom theme
const theme = extendTheme({ config, ...customTheme });

export default theme;