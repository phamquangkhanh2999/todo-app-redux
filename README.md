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
- applyMiddleware là một cơ chế mở rộng mạnh hơn chính phần mềm trung gian
- Redux Thunk là một Middleware cho phép bạn viết các Action trả về một function thay vì một plain javascript object bằng cách trì hoãn việc đưa action đến reducer.
- Redux Thunk được sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập đến Store hoặc đơn giản là việc lấy dữ liệu như Ajax request.
- <Provider>phần làm cho Redux store có sẵn cho bất kỳ thành phần lồng nhau nào cần truy cập cửa hàng Redux.
- store( Redux Store ) Redux duy nhất storetrong ứng dụng của bạn.
- children (ReactElement) root cấu trúc phần cấp component .
- context Bạn có thể cung cấp một trường hợp ngữ cảnh

- connect chấp nhận bốn tham số khác nhau, tất cả đều là tùy chọn. Theo quy ước, chúng được gọi là:

  - mapStateToProps?: Function
  - mapDispatchToProps?: Function | Object
  - mergeProps?: Function
  - options?: Object

- Phương JSON.parse()thức phân tích cú pháp một chuỗi JSON, xây dựng giá trị JavaScript ->get
- Phương JSON.stringify()thức chuyển đổi một đối tượng hoặc giá trị JavaScript thành một chuỗi JSON, -> set

- value thuộc tính trong phần tử biểu mẫu sẽ ghi đè các giá trị trong DOM
- defaultValue thuộc tính, thuộc tính này chỉ định giá trị ban đầu nhưng không kiểm soát được các bản cập nhật tiếp theo.

tiến trình dự án : https://trello.com/b/1jRENHzN/reatjs-todo-redux
