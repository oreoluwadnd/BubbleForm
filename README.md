# BubbleForm

 <img src="./header.png?raw=true">
   <br>
🥤 Lightweight ReactJS form validation library with Hooks
  <br>
  
## Table of Contents

1. [Installation](#Installation)
2. [Usage](#usage)
3. [configuration](#configuration)
4. [examples](#examples)
5. [License](#license)

## 💽 Installation

```
 npm install bubbleform
```

<br>

## 📄 Usage

### Install in your main ts or js file

```jsx
  import BubbleForm from "bubbleForm"  
  
  const {} = BubbleForm({})
```

<br>

## 🛠 Configuration

```jsx
const {
    data: loginData,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
  } = useForm({
    initailErrorMessage: loginErrorMessage,
    initialValues: loginFormData,
    sanitizeFn: (value) => {
      return value.trim();
    },
    validations: {
      email: {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
          message: "Email is invalid",
        },
      },
      password: {
        required: {
          value: true,
          message: "Password is required",
        },
        pattern: {
          value: "^(?=.*[a-z])[a-zA-Z\\d]{8,}$",
          message: "Password must be at least 8 characters",
        },
        custom: {  
          length: { //any custom name 
            isValid: (value: any) => value.length > 6,
            message: "First name must be at least 8 characters",
          },
        },
      },
    },
    onSubmit: () => {
      dispatch(LoginApi(loginData));
    },
  });
```

<br>
## 📦 Props

Bubble Form takes in some parameter to work properly

| Params | Description | Type | Default |
| --- | --- | --- | --- |
| data | return object containing the form data | *`Object`* | none |
| handleChange | onChange event handler. Useful for when you need to track whether an input has been touched or not. This should be   passed to `<input onBlur={handleChange()} ... />` | *`Function`* | none |
| handleSubmit | Submit handler. This should be passed to `<form onSubmit={props.handleSubmit}>` </form> | *`Function`* | none |
| handleBlur | onBlur event handler. Useful for when you need to track whether an input has been touched or not. This should be passed to `<input onBlur={handleBlur()} ... />` | *`Function`* | none|

### 🛠 initailErrorMessage

 Initial error message to be displayed when the form is rendered for the first time should an empty string or an object with the same keys as the form data

```jsx
const loginErrorMessage = {
    email: "",
    password: "",
    };
    
```

<br>
### 🛠 initialValues

Initial values for the form data should an empty string or an object with the same keys as the form data

```jsx
const loginFormData = {
    email: "",
    password: "",
    };
    
```

<br>

### 🛠 sanitizeFn

A function that takes in the value of the input and returns the sanitized value

```jsx
const sanitizeFn = (value) => {
    return value.trim();
    };
    
```

<br>

### 🛠 validations

An object containing the validation rules for the form data

```jsx
const loginValidations = {
    email: {
        required: {
            value: true,
            message: "Email is required",
            },
        pattern: {
            value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
            message: "Email is invalid",
            },
        },
    password: {
        required: {
            value: true,
            message: "Password is required",
            },
        pattern: {
            value: "^(?=.*[a-z])[a-zA-Z\\d]{8,}$",
            message: "Password must be at least 8 characters",
            },
            custom: { // take in an object of custom rules
            length: { //any custom name
                isValid: (value: any) => value.length > 6, // Function that takes in the value of the input and returns a boolean
                message: "First name must be at least 8 characters", // error message
                },
            },
        },
    };
```

<br>

## Issues

If you experience any anomaly or bug while using the component, feel free to create an issue on this repo
[issues](https://github.com/oreoluwadnd/BubbleForm/issues/new/choose)
<br>

## 👷🏽 Contribution Guide

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
