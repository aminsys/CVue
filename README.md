# CVue - A CV powered by ![](https://img.shields.io/badge/-Vue.js-4fc08d?style=flat&logo=vuedotjs&logoColor=white) + ![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)
[![pages-build-deployment](https://github.com/aminsys/CVue/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/aminsys/CVue/actions/workflows/pages/pages-build-deployment)
![Known Vulnerabilities](https://snyk.io/test/github/aminsys/CVue/badge.svg)

A resumé built with Vue 3 and vite.js. See current results by visiting this [link](https://aminsys.github.io/CVue/)


## Packages used for this application are as following
- `@vueuse` and `@tailwindcss` to implement dark mode functionality on the created page.

## How to deploy Vue applicationt as a Github page
1. (If it doesn't exist) create a file named `vite.config.js` in root directory and add the following code:

   ``` js
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
    
   export default defineConfig({
     base: '/<REPO-NAME>/',
     plugins: [vue()]
   })
   ```
   Make sure to replace `<REPO-NAME>` with the name of the relevant repository.

2. Run the following command in terminal:

   ``` bash
   npm run build
   ```
   This command should create a `dist` folder in root directory.

3. After verifying that the folder is created, run the following two git commands in terminal to stage the `dist` folder for committing:

   ``` bash
   git add dist -f
   git commit -m "Adding dist subtree"
   ```
   The `-f` is to force the folder to be staged, otherwise it will be ignored by `.gitignore`. the second command commits the folder.

4. Now, to deploy the `dist` folder, run the following git command in terminal:
   
   ``` bash
   git subtree push --prefix dist origin gh-pages
   ```
   This command will push the `dist` folder to the branch named `gh-pages`.

5. (In the web browser) navigate to the settings of the repository that contains the code for the Vue application. From there navigate to `Pages` and under the section `Build and deployment` setup the source to be `Deploy from a branch` as shown in the image below:

   ![image](https://github.com/aminsys/CVue/assets/18234996/f3b51d45-26b6-472e-ac07-419c3740f726)

6. After that, choose the branch of which the build and deployment will be performed, in this case it should be the branch that the folder `dist` was pushed to, which was named `gh-pages`:

   ![image](https://github.com/aminsys/CVue/assets/18234996/0f8b01a0-793b-441e-896d-8ed8ece4609e)

7. Done. The results of the deployed page should be visible in the link that should be shown in the Pages page, or one can navigate to the page that should look something like this URL: `https://<GITHUB-USERNAME>.github.io/<REPO-NAME>/` where `<GITHUB-USERNAME>` is to be replaced by the user's username and the `<REPO-NAME>` by the name of the repository that contains the Vue application.


***If any of the information provided above is inaccurate or doesn't show the expected result, please open an issue linking to the github repository in question.***
