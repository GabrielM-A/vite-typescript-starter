## [vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [scss](https://sass-lang.com/) Starter

This setup includes:
* [vite](https://vitejs.dev/)
* [eslint](https://eslint.org/), [typescript-eslint](https://typescript-eslint.io/), [eslint-airbnb-config](https://github.com/airbnb/javascript), [prettier](https://prettier.io/)
* [vitest](https://vitest.dev/), [jsdom](https://github.com/jsdom/jsdom), [@testing-library](https://testing-library.com/)
* [react-router v6](https://reactrouter.com/en/main)
* scss 


## Linting IDE Setup 
### vscode 
- Install `eslint` vscode extension 

![image](https://user-images.githubusercontent.com/61157456/228272153-f29b4376-d7f7-4749-acf3-9f95c5e16449.png)
> eslint extension

- You may need to reload your window for the setting changes to take effect
- `cntrl shift p` - search for eslint - fix all auto-fixable problems (and can save to a new shortcut or map to save as described below) 

![image](https://user-images.githubusercontent.com/61157456/228268714-516b4e96-f4b2-43c1-a118-086dbc37ece1.png)
> Shows the command pallete and the ability to trigger auto-fix from there

- To enable this on save you can follow this guide specifically `Step 4`: [How to enable linting on save](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting)

![image](https://user-images.githubusercontent.com/61157456/228269212-7f93f370-3f0e-4919-9d41-efae27cd7459.png)

### Jetbrains (Webstorm) 
- There's automatic eslint support 
- Enabling the option in the settings should start the lint warnings as well as fix all problems on save: 

![image](https://user-images.githubusercontent.com/61157456/228271706-0cf89b07-1fd8-4e16-83af-c3daad86cccf.png)
> pick automatic eslint configuration 
