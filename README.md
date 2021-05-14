# CO2 Control Panel

### Table of Contents

- [CO2 Control Panel](#CO2-Control-Panel)
    - [Table of Contents](#table-of-contents)
  - [Description](#description)
      - [Technologies](#technologies)
  - [Installation](#installation)
  - [References](#references)
  - [License](#license)
  - [Contributors](#contributors)

---

## 1. Description
The CO2 control panel gives the new hires at BART the ability to simulate various situations. They are allowed to put the electricity breakers in a remote/local state as well as being able to trip/reset them. It also alerts the trainee when the panel is in a dangerous state. 
...



---
### 1.1 Technologies
- Java Script

[Back To The Top](#read-me-template)

---

### 1.2 Installation
The web application can be accessed through the HTML file include in the folder. If accessing the code from Visual Studio Code the Live Server extension package will have to be added to reference libraries.This will allow the user to open the app in a web browser. 

Download [Visual Studio Code](https://code.visualstudio.com/download)

Download [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---
## 2. How to Use
1. Access the web application through HTML file  
2. Redirected to web browser 
3. Test the CO2 control panel with different situations

### 2.1 Demo

Live Demo can be accessed [here](https://bit.ly/3enVJUA)

---![](https://i.imgur.com/UskM4tx.gif)



---
## 3. About the App

We attempted to develop this app to be seperated into two major javascripts files, animations.js and co2.js. The animations.js takes care of animating the control panel while the co2.js takes care of implementing all logic in the panel. The structure of this app was made so the animations.js takes care of all inputs and sends the data to the co2.js for further processing. 

### 3.1 UI Animations Details (animations.js)

#### 3.1.1 How to do Major Features:
##### 3.1.1.1 “Switch to LOCAL/REMOTE Command”
* If the selector switch is set to REMOTE you can click on it to switch to LOCAL and vice versa it is set to REMOTE. You can type in V_243_1_Remote_CMD or V_243_1_Local_CMD
##### 3.1.1.2 “Open Control Switch”
* You can do this two ways:
    1. When either in REMOTE/LOCAL, click on the left side of the control switch when it is in closed position.
    2. When either in REMOTE/LOCAL, go to the command input and type in V_252_1_Open_CMD and “1” can be replaced with “2” or “8” depending on which control switch you want to be tripped.
##### 3.1.1.3 “Close Control Switch”
* You can do this two ways:
    1. When in LOCAL, click on the right side of the control switch when it is in closed position.
    2. When in REMOTE, go to the command input and type in V_252_1_Open_CMD and “1” can be replaced with “2” or “8” depending on which control switch you want to be tripped.
##### 3.1.1.4 “Trip Lockout Relays”
* There is no remote tripping of the lockout relays so you have to click on them
##### 3.1.1.5 “Close Lockout Relays”
* When the orange light is blinking, it cannot be manually closed.  In the HMI drop box, click “Acknowledge.” When this happens, the light will turn a solid orange and you can close it manually by clicking on it.
##### 3.1.1.6 “Overcurrent”
* Abnormally high current in a circuit 
* Activate the function by clicking on the alarms section of the drop box. There will be a button where it will simulate the panel into an overcurrent. 
* This will trip the lockout relay switch and trip two switches 
* In order to stop the overcurrent you have to go to the drop down menu and click the “Acknowledge” button in order to be able to reset the lockout switch

#### 3.1.2 Major animations.js functions:

##### 3.1.2.1 closeSwitch( name )
    closeSwitch(name) { 
        ....
    }

* Depending on the variable “name”, this function chooses what close animation to play.

        

## Contributors

- Irma Gonzalez Padilla
- Austin Chan
- Gerardo Rodriguez
- Fernando Diego Chino
- Adrian Sanchez Magana 

[Back To The Top](#read-me-template)

    
