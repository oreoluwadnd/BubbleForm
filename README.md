# BubbleForm

 <img src="./header.png?raw=true">
   <br>
🥤 Lightweight ReactJS form validation library with Hooks
  <br>

## Table of Contents

1. [Installation](#installation)
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

## 🛠 Config

Pass in the Config props to the component when you place it in <b>any</b> of your vue files

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
|:----------:|:-----:|:----:|:---:|:-----:|:----:|
| data | return data from the form | *`object`* | none |
| handleChange | onChange event handler. Useful for when you need to track whether an input has been touched or not. This should be   passed to `<input onBlur={handleChange()} ... />` | *`Function`* | none |
| handleSubmit | Submit handler. This should be passed to `<form onSubmit={props.handleSubmit}>` </form> | *`Function`* | none |
| handleBlur | onBlur event handler. Useful for when you need to track whether an input has been touched or not. This should be passed to `<input onBlur={handleBlur()} ... />` | *`Function`* | none|
