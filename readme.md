# generate-react-component

An opinionated CLI generator for ReactJS components.
<br>
## Why?
As a ReactJS developer, from time to time, I have to create components of same structure, by manual copy & paste. It is a time consuming no-brainer process that any React dev may repeat everyday. 

Typically, there are two kinds of components: [Functional and Class Components](https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components), the basic structure of either could always look the same, in one project:

Functional Component:
```javascript
import React from 'react'

const Cmp = (props) => {
  return (
    <div className={s.cover} style={bgStyle} >
    </div>
  )
}

export default Cover
```
Class Component:
```javascript
import React, { Component } from 'react'

class Cmp extends Component {
	componentDidMount() {
	}
	render() {
		return (
		)
	}
}

export default Cmp	
```
It should be a super easy tool to automatically generate these files, without manual new file creation or copy & paste. So, here you are.
<br>
## Install
Run
```yarn global add generate-react-component```
or
```npm install -g generate-react-component```
You may need to ```sudo``` it.
<br>
## Usage
### Generate Class Component
Run
```rccmp <ComponentName>```
This will create a folder of your component name, and a **Class Component** js file with the same name.
<br>
### Generate Pure Function Component
Run
```rccmp <ComponentName> --pure```
or
```rccmp <ComponentName> -p```
This will create a folder of your component name, and **Pure Function Component** js file of the same name.
<br>
### Generate Component (Class or Pure) with a CSS file
Run
```rccmp <ComponentName> --pure --css```
or
```rccmp <ComponentName> -p -c```
This will create a folder of your component name, and component (Functional if ```--pure```) js file of the same name, and a css file of the same name.

<br>
That's it!

Enjoy and feel free to share your suggestion!