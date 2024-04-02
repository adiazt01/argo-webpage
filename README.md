# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Technical test

- Link to the test: [https://vite-react-ts.vercel.app/](https://gist.github.com/fabianmedina09/73a7e4fa45f133aff2baedb25f174b0e)
- Project Manager: [https://www.linkedin.com/in/roberto-rodriguez-8a7012224/](https://www.linkedin.com/in/roberto-rodriguez-8a7012224/)
- Page to replicate: [agora2030](https://agora2030.org/)

## Tecnologias usadas

## Reconocimiento a los Recursos Empleados

- 🎥 **[Carousel Hero Tutorial](https://www.youtube.com/watch?v=Kx8XlKRBZx8)**: Este recurso, proporcionado por _Web Dev Simplified_, fue adaptado para satisfacer las necesidades específicas de nuestro proyecto. ¡Echa un vistazo al tutorial para obtener una visión detallada de cómo se construyó nuestro carrusel!

- 📷 **[Imagenes](https://unsplash.com)**: Gracias a la pagina web Unsplash se extrayeron las siguientes fotografias:
  - 404 Error: [Image by storyset](https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_13315300.htm#query=404%20page%20found&position=3&from_view=keyword&track=ais&uuid=4d518585-71c1-43e5-b0b1-0b9753d3231b)
