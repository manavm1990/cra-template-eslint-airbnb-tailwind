# Getting Started with Create React App with Stricter Linting, Prettier and Tailwind

This 1️⃣ is kind of opinionated. You have been warned. Try it. You might like it.

A `components` directory has been created for you in `src`. Kindly remove `.gitkeep` before using.

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It now includes [Airbnb's ESLint Configuration](https://www.npmjs.com/package/eslint-config-airbnb), [Prettier](https://prettier.io/), and [Tailwind CSS](https://tailwindcss.com/).

The ESLint rules have been slightly customized as per [`package.json`](package.json). [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) is also taken care of in the [`prettier.config.js`](prettier.config.js) file.

## Absolute Imports

This feature is now enabled by default via `jsconfig.json`.

ESLint usually complains about absolute imports. This is from the rule: `"import/no-unresolved"`. ESLint will not about `jsconfig.json`, so will not recognize our absolute imports, thinking that they are incorrect.

To alleviate this, some commonly used directories names are listed under `"import/no-unresolved"`. You can see this by checking the `"rules"` section of `package.json` (under `"eslintConfig"`):

```json
 "import/no-unresolved": [
        2,
        {
          "ignore": [
            "^components",
            "^services",
            "^types"
          ]
        }
      ],
```

So, for any directories, maybe `views` or `pages` or `utils` or `hooks`, you can keep adding to the list as you need. Include the `^` in front of the directory name because that is the regex so that it will ignore any paths that start with that directory name.

## VS Code

### Extensions

Some [recommended extensions](.vscode/extensions.json) are included:

1. Tailwind [IntelliSense for VS Code](https://tailwindcss.com/docs/editor-setup)
1. Prettier [Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. ESLint [ESLint](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Settings

Check out the [`settings.json`](settings.json) file for more information.

Basically, every time you leave a file (remove focus 🔍) your work is automatically saved. ES Lint and Prettier also kick 🛴 in. For the full application, press 'ctrl/cmd + s'. This will also clean up and organize your imports. Note that this may result in the inadvertent removal of some imports if you imported them but just haven't used them yet. Kindly press 'ctrl/cmd + z' to undo that part as needed.

Also, Emmett is allowed in JSX files.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

To learn React, check out the [React documentation (beta)](https://beta.reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
