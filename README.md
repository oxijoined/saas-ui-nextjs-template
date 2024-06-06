
# Next.js Template with Saas UI and Chakra UI

  

This is a Next.js template preconfigured with Saas UI and Chakra UI. This template helps you quickly start a project with these libraries already set up and ready to use.

  

## Features

  

-  **Next.js**: The React framework for production.

-  **Saas UI**: A set of high-quality, reusable components designed for SaaS applications.

-  **Chakra UI**: A simple, modular, and accessible component library for React.

-  **TypeScript**: TypeScript is fully supported in this template.

  

## Installation

  

To create a new project based on this template, follow these steps:

  

1.  **Create a new project**:

  

```typescript

npx create-next-app --example https://github.com/oxijoined/saas-ui-nextjs-template

```
  

2.  **Install dependencies:**

Navigate to your project directory and install the necessary dependencies:

```bash

cd my-new-project

npm install

```

  
  

3.  **Run the development server:**

Start the development server to see your project in action:

```typescript

npm run dev

````

Open  http://localhost:3000  with  your  browser  to  see  the  result.

  
  

3.  **Build for production:**

When you're ready to deploy your project, build it for production:

```typescript

npm run build

```

  

## File Structure

  

Here’s a brief overview of the main folders and files in this template:

  

* /pages: Contains all the pages of your application.

* /components: Reusable components used across your application.

* /lib: Utility functions and helpers.

* /public: Static files such as images and fonts.

* /next.config.js: Configuration file for Next.js.

* /tsconfig.json: TypeScript configuration file.

  
  
  

## Adding New Pages

  

To add a new page to your application, create a new .tsx file in the /pages directory. For example, to add an "About" page:

  

1. Create a file named about.tsx in the /pages directory.

2. Add your page content in the file:

	```bash

	import { Box,  Heading  }  from  '@chakra-ui/react';

    const About = () => (
    <Box p={5}>
        <Heading as="h1">About Us</Heading>
        <p>Welcome to the about page!</p>
    </Box>
    );

  
    export default About;
	```
	  

3. Navigate to http://localhost:3000/about to see your new page.

  

**Customizing the Theme**

  

This template uses Chakra UI's theming capabilities. To customize the theme, edit the theme.ts file.

  

```typescript

// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#d1e0ff',
      200: '#a3bfff',
      300: '#759fff',
      400: '#476fff',
      500: '#2351ff',
      600: '#1c42cc',
      700: '#163299',
      800: '#102166',
      900: '#0a1033',
    },
  },
});

export default theme;
```



# Шаблон Next.js с Saas UI и Chakra UI

  

Это шаблон Next.js с предустановленными Saas UI и Chakra UI. 
Этот шаблон поможет вам быстро начать проект с этими библиотеками, уже настроенными и готовыми к использованию.

  

## Характеристики

  

-  **Next.js**: Фреймворк React для производства.

-  **Saas UI**: Набор высококачественных компонентов многократного использования, предназначенных для SaaS-приложений.

-  **Chakra UI**: Простая, модульная и доступная библиотека компонентов для React.

-  **TypeScript**: TypeScript полностью поддерживается в этом шаблоне.

  

## Установка

  

Чтобы создать новый проект на основе этого шаблона, выполните следующие действия:

  

1.  **Создайте новый проект**:

  

```typescript

npx create-next-app --example https://github.com/oxijoined/saas-ui-nextjs-template

```
  

2.  **Установите зависимости:**

Перейдите в каталог вашего проекта и установите необходимые зависимости:

```bash

cd my-new-project

npm install

```

  
  

3.  **Запустите сервер разработки:**

Запустите сервер разработки, чтобы увидеть ваш проект в действии:

```typescript

npm run dev

````

Откройте http://localhost:3000 в браузере, чтобы увидеть результат.

  
  

3.  **Сборка для производства:**

Когда вы будете готовы развернуть свой проект, создайте его для производства:

```typescript

npm run build

```

  

## Структура файла

  

Вот краткий обзор основных папок и файлов в этом шаблоне:

  

* /pages: Содержит все страницы вашего приложения.

* /components: Многократно используемые компоненты, используемые в вашем приложении.

* /styles: Содержит CSS и файлы настройки темы.

* /lib: Утилитарные функции и помощники.

* /public: Статические файлы, такие как изображения и шрифты.

* /next.config.js: Файл конфигурации для Next.js.

* /tsconfig.json: Файл конфигурации TypeScript.

  
  
  

## Добавление новых страниц

  

Чтобы добавить новую страницу в приложение, создайте новый файл .tsx в каталоге /pages. Например, чтобы добавить страницу "about":

  

1. Создайте файл с именем about.tsx в каталоге /pages.

2. Добавьте содержимое страницы в файл:

	```bash

	import { Box,  Heading  }  from  '@chakra-ui/react';

    const About = () => (
    <Box p={5}>
        <Heading as="h1">About Us</Heading>
        <p>Welcome to the about page!</p>
    </Box>
    );

  
    export default About;
	```
	  

3. Перейдите по адресу http://localhost:3000/about, чтобы увидеть новую страницу.

  

**Настройка темы**

  

Этот шаблон использует возможности тематического оформления Chakra UI. Чтобы настроить тему, отредактируйте файл theme.ts.

  

```typescript

// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#d1e0ff',
      200: '#a3bfff',
      300: '#759fff',
      400: '#476fff',
      500: '#2351ff',
      600: '#1c42cc',
      700: '#163299',
      800: '#102166',
      900: '#0a1033',
    },
  },
});

export default theme;
```
