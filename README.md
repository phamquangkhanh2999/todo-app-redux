# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

- npx create-react-app .
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- npm install --save-dev @fortawesome/fontawesome-free
- npm install react-redux
- npm install redux
- npm i redux-thunk
- npm i redux-devtools-extension
- npm i uuid

- import { combineReducers } from "redux"; moi truong redux khac nhau thanh ham duy nhat
- applyMiddleware l?? m???t c?? ch??? m??? r???ng m???nh h??n ch??nh ph???n m???m trung gian
- Redux Thunk l?? m???t Middleware cho ph??p b???n vi???t c??c Action tr??? v??? m???t function thay v?? m???t plain javascript object b???ng c??ch tr?? ho??n vi???c ????a action ?????n reducer.
- Redux Thunk ???????c s??? d???ng ????? x??? l?? c??c logic b???t ?????ng b??? ph???c t???p c???n truy c???p ?????n Store ho???c ????n gi???n l?? vi???c l???y d??? li???u nh?? Ajax request.
- <Provider>ph???n l??m cho Redux store c?? s???n cho b???t k??? th??nh ph???n l???ng nhau n??o c???n truy c???p c???a h??ng Redux.
- store( Redux Store ) Redux duy nh???t storetrong ???ng d???ng c???a b???n.
- children (ReactElement) root c???u tr??c ph???n c???p component .
- context B???n c?? th??? cung c???p m???t tr?????ng h???p ng??? c???nh

- connect ch???p nh???n b???n tham s??? kh??c nhau, t???t c??? ?????u l?? t??y ch???n. Theo quy ?????c, ch??ng ???????c g???i l??:

  - mapStateToProps?: Function
  - mapDispatchToProps?: Function | Object
  - mergeProps?: Function
  - options?: Object

- Ph????ng JSON.parse()th???c ph??n t??ch c?? ph??p m???t chu???i JSON, x??y d???ng gi?? tr??? JavaScript ->get
- Ph????ng JSON.stringify()th???c chuy???n ?????i m???t ?????i t?????ng ho???c gi?? tr??? JavaScript th??nh m???t chu???i JSON, -> set

- value thu???c t??nh trong ph???n t??? bi???u m???u s??? ghi ???? c??c gi?? tr??? trong DOM
- defaultValue thu???c t??nh, thu???c t??nh n??y ch??? ?????nh gi?? tr??? ban ?????u nh??ng kh??ng ki???m so??t ???????c c??c b???n c???p nh???t ti???p theo.

ti???n tr??nh d??? ??n : https://trello.com/b/1jRENHzN/reatjs-todo-redux
