var controllerVar = "testThis";
var elementArray = [{type:"button", id:"button1", page:"menu1"},
                    {type:"button", id:"button2", page:"menu1"},
                    {type:"slideBar", id:"slide1", page:"menu1"},
                    {type:"button", id:"button3", page:"menu2"},
                    {type:"slideBar", id:"slide2", page:"menu2"}];
var elementPage = "menu1";
var menuArray = ["menu1", "menu2"];


function menuElement(type, id, menu, info, value, minVal, maxVal, choices, link, columnValue, dataValue, advanced) {
    this.type      = type;
    this.id        = id;
    this.menu      = menu;
    this.info      = info;
    this.value     = value;
    this.min       = minVal;
    this.max       = maxVal;
    this.choices   = choices;
    this.link      = link;
    this.column    = columnValue;
    this.dataValue = dataValue;
    this.advanced  = advanced;
    this.setValue  = function () {
        this.value = this.dataValue;
        console.log(this.value);
    }
    this.onChange = function () {
        var elementId = document.getElementById(this.id);
        if (this.type === "SelectMenu" || this.type === "Switch" || this.type === "GridSwitch") {
            this.value = elementId.options[elementId.selectedIndex].value;
            console.log(this.value);
        } else {
            if (this.type === "GridText" || this.type === "SlideBar") {
                if (isNaN(elementId.value) === true) {
                    elementId.value = this.value;
                    alert("Please Enter a Proper Value");
                    console.log(this.value);
                } else {
                    this.value = elementId.value;
                    console.log(this.value);
                }
            } else {
                this.value = elementId.value;
                console.log(this.value);
            }
        }
    }
}

var dataStruct = [
    ["OpenMenuPage", "advanced", "AdvancedMenu", "Advanced"],
    ["DataLabel", "firmwareRev", "AdvancedMenu", "Firmware Rev: ", "No Unit"],
    ["DataLabel", "serialNumber", "AdvancedMenu", "Serial Number: ", "No Unit"],
    ["LinkButton", "BluetoothPage", "AdvancedMenu", "Bluetooth",0,0,0,0, "#bluetoothMenu"],
    ["LinkButton", "FilesPage", "AdvancedMenu", "Files",0,0,0,0, "#filesMenu"],
    ["LinkButton", "UtilityPage", "AdvancedMenu", "Utility",0,0,0,0, "#utilityMenu"],
    ["LinkButton", "PilotInputsPage", "AdvancedMenu", "Pilot Inputs",0,0,0,0, "#pilotInputsMenu"],
    ["LinkButton", "GyroSensesPage", "AdvancedMenu", "Gyro Senses",0,0,0,0, "#gyroSensesMenu"],
    ["LinkButton", "GpsDataPage", "AdvancedMenu", "GPS Data",0,0,0,0, "#gpsDataMenu"],
    ["LinkButton", "RecieverPage", "AdvancedMenu", "Reciever",0,0,0,0, "#recieverMenu"],
    ["LinkButton", "OrientationPage", "AdvancedMenu", "Orientation",0,0,0,0, "#orientationMenu"],
    ["LinkButton", "ControlPage", "AdvancedMenu", "Control",0,0,0,0, "#controlMenu"],
    ["LinkButton", "DriveSystemPage", "AdvancedMenu", "DriveSystem",0,0,0,0, "#driveSystemMenu"],
    ["LinkButton", "GovernorSettingsPage", "AdvancedMenu", "Gov Settings",0,0,0,0, "#govSettingsMenu"],
    ["LinkButton", "GpsSettingsPage", "AdvancedMenu", "GPS Settings",0,0,0,0, "#gpsSettingsMenu"],
    ["LinkButton", "SwashMixingPage", "AdvancedMenu", "Swash Mixing",0,0,0,0, "#swashMixingMenu"],
    ["LinkButton", "SwashServoPage", "AdvancedMenu", "Swash Servo",0,0,0,0, "#swashServoMenu"],
    ["LinkButton", "TailServoPage", "AdvancedMenu", "Tail Servo",0,0,0,0, "#tailServoMenu"],
    ["LinkButton", "CyclicBank1Page", "AdvancedMenu", "Cyc Bank 1",0,0,0,0, "#cycBank1Menu"],
    ["LinkButton", "CyclicBank2Page", "AdvancedMenu", "Cyc Bank 2",0,0,0,0, "#cycBank2Menu"],
    ["LinkButton", "TailBank1Page", "AdvancedMenu", "Tail Bank 1",0,0,0,0, "#tailBank1Menu"],
    ["LinkButton", "TailBank2Page", "AdvancedMenu", "Tail Bank 2",0,0,0,0, "#tailBank2Menu"],
    ["CloseMenuPage", "closeAdvancedPage", "AdvancedMenu", "Basic",0,0,0,0,"#basic",0,0, true],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "bluetoothMenu", "BluetoothPage", "Bluetooth"],
    ["DataLabel", "bluetoothStatus", "BluetoothPage", "Bluetooth Status: ", "Working"],
    ["DataLabel", "bluetoothStatus2", "BluetoothPage", "Message Precentage: ", "Working"],
    ["Button", "scanButton", "BluetoothPage", "Scan" ,0,0,0,0,0,0,"app.createList()"],
    ["Button", "connectButton", "BluetoothPage", "Connect" ,0,0,0,0,0,0,"app.connectBle()"],
    ["Button", "disconnectButton", "BluetoothPage", "Disconnect" ,0,0,0,0,0,0,"app.disconnectBle()"],
    ["Button", "writeButton", "BluetoothPage", "Write" ,0,0,0,0,0,0,"app.buildSetupMenu()"],
    ["SelectMenu", "deviceAddress", "BluetoothPage", "Device",[0] ,0,0, [""]],
    ["DataLabel", "bluetoothMessage", "BluetoothPage", "Bluetooth Message: ", ""],
    ["TextBox", "bluetoothWrite", "BluetoothPage", "Write Data Here", ""],
    ["ClosePage", "bluetoothClose", "BluetoothPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "filesMenu", "FilesPage", "Files"],
    ["TextBox", "fileName", "FilesPage", "Rename: ", "test my name"],
    ["Button", "recieveFromGyro", "FilesPage", "Recieve File From Gyro" ,0,0,0,0,0,0,"app.requestSetup()"],
    ["Button", "sendToGyro", "FilesPage", "Send File To Gyro" ,0,0,0,0,0,0,"app.storeData()"],
    ["Button", "setDefault", "FilesPage", "Set To Default",0,0,0,0,0, "Hello World"],
    ["ClosePage", "filesClose", "FilesPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "utilityMenu", "UtilityPage", "Utility"],
    ["DataLabel", "errorState", "UtilityPage", "Error State: ", "state"],
    ["DataLabel", "lastVibLevel", "UtilityPage", "Last Vib Level: ", "0.0"],
    ["DataLabel", "logCounter", "UtilityPage", "Log Counter: ", "0"],
    ["Button", "resetLog", "UtilityPage", "Reset Log Counter",0,0,0,0,0, "resetLogCount()"],
    ["Button", "bindSat", "UtilityPage", "Bind satellite RX's",0,0,0,0,0, "bindSatelliteRx()"],
    ["Button", "formatLog", "UtilityPage", "Format Log Drive",0,0,0,0,0, "formatLogDrive()"],
    ["ClosePage", "utilityClose", "UtilityPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "pilotInputsMenu", "PilotInputsPage", "Pilot Inputs"],
    ["DataLabel", "elevData", "PilotInputsPage", "Elevator: ", "0"],
    ["DataLabel", "ailrData", "PilotInputsPage", "Aileron: ", "0"],
    ["DataLabel", "rudd", "PilotInputsPage", "Rudder: ", "0"],
    ["DataLabel", "coll", "PilotInputsPage", "Coll: ", "0"],
    ["DataLabel", "pilotThrottle", "PilotInputsPage", "Throttle: ", "0"],
    ["DataLabel", "pitchRate", "PilotInputsPage", "Elevator: ", "0"],
    ["DataLabel", "rollRate", "PilotInputsPage", "Aileron: ", "0"],
    ["DataLabel", "yawRate", "PilotInputsPage", "Rudder: ", "0"],
    ["DataLabel", "cycGain", "PilotInputsPage", "Cyc Gain: ", "0"],
    ["DataLabel", "tailGain", "PilotInputsPage", "Tail Gain: ", "0"],
    ["DataLabel", "cycBank", "PilotInputsPage", "Cyc Bank: ", "0"],
    ["DataLabel", "tailBank", "PilotInputsPage", "Tail Bank: ", "0"],
    ["ClosePage", "pilotInputsClose", "PilotInputsPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "gyroSensesMenu", "GyroSensesPage", "Gyro Senses"],
    ["DataLabel", "gyroElevator", "GyroSensesPage", "Elevator: ", "state"],
    ["DataLabel", "gyroAileron", "GyroSensesPage", "Aileron: ", "0.0"],
    ["DataLabel", "gyroRudder", "GyroSensesPage", "Rudder: ", "0"],
    ["DataLabel", "gyroRpmSensor", "GyroSensesPage", "RPM Sns: ", "0.0"],
    ["DataLabel", "gyroBus", "GyroSensesPage", "Bus: ", "0"],
    ["ClosePage", "gyroSensesClose", "GyroSensesPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "gpsDataMenu", "GpsDataPage", "GPS Data"],
    ["DataLabel", "gpsEast", "GpsDataPage", "E: ", "0.0"],
    ["DataLabel", "gpsNorth", "GpsDataPage", "N: ", "0.0"],
    ["DataLabel", "gpsAltitude", "GpsDataPage", "Altitude: ", "0"],
    ["DataLabel", "gpsHeading", "GpsDataPage", "Heading: ", "0.0"],
    ["DataLabel", "gpsMagneticField", "GpsDataPage", "Magnetic Field: ", "0"],
    ["DataLabel", "vs_agSat", "GpsDataPage", "VS/AG Sat: ", "0"],
    ["DataLabel", "gpsSelectMode", "GpsDataPage", "Sel Mode: ", "0"],
    ["DataLabel", "gpsStatus", "GpsDataPage", "Status: ", "0"],
    ["ClosePage", "gpsDataClose", "GpsDataPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "recieverMenu", "RecieverPage", "Reciever"],
    ["SlideBar", "tailGain1", "PilotInputsPage", "Tail Gain", 50, 0, 100],
    ["SelectMenu", "recieverType", "RecieverPage", "Type", [0,1,2,3,4,5,6,7,8,9,10],0,0, ["Spektrum/JR Sats 2048 Res", "Spektrum/JR Sats 1024 Res", "Spektrum DSMX Sats",
        "Futaba S-Bus,Futaba / JETI PPM", "Traditional Receiver", "Graupner/JR Sats 2048 Res",
        "Graupner/JR Sats 1024 Res", "JR DMSS,UDI / JR XbusB,Graupner"]],
    ["SelectMenu", "aux0", "RecieverPage", "Aux 0", [0,1,2,3,4,5,6,7],4,0, ["Cyclic Gain/Bank","Tail Gain/Bank", "GPS Mode", "GPS Altitude Gain",
        "Governor Gain", "Cyclic Gain", "Bell Gain", "Self Level Gain"]],
    ["SelectMenu", "aux1", "RecieverPage", "Aux 1", [0,1,2,3,4,5,6,7],3,0, ["Cyclic Gain/Bank", "Tail Gain/Bank", "GPS Mode", "GPS Altitude Gain",
        "Governor Gain", "Cyclic Gain", "Bell Gain", "Self Level Gain"]],
    ["SelectMenu", "aux2", "RecieverPage", "Aux 2", [0,1,2,3,4,5,6,7],0,0, ["Cyclic Gain/Bank", "Tail Gain/Bank", "GPS Mode", "GPS Altitude Gain",
        "Governor Gain", "Cyclic Gain", "Bell Gain", "Self Level Gain"]],
    ["SelectMenu", "aux3", "RecieverPage", "Aux 3", [0,1,2,3,4,5,6,7],0,0, ["Cyclic Gain/Bank", "Tail Gain/Bank", "GPS Mode", "GPS Altitude Gain",
        "Governor Gain", "Cyclic Gain", "Bell Gain", "Self Level Gain"]],
    ["Button", "stickCenter", "RecieverPage", "Set Stick Center", "setStickCenters()"],
    ["Button", "stickLimit", "RecieverPage", "Set Stick Limits", "setStickLimits()"],
    ["ClosePage", "recieverClose", "RecieverPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "orientationMenu", "OrientationPage", "Orientation"],
    ["SelectMenu", "servoBusOrientation", "OrientationPage", "Servo Bus", [0,8,3,11],3,0, ["Forward", "Left", "Aft", "Right"]],
    ["Switch", "upsideDown", "OrientationPage", "Upside Down", ["No", "Yes"], 0],
    ["Switch", "counterClockwise", "OrientationPage", "Counter Clockwise", ["No", "Yes"]],
    ["ClosePage", "orientationClose", "OrientationPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "controlMenu", "ControlPage", "Control"],
    ["SlideBar", "elevatorDeadband", "ControlPage", "Elevator Deadband %", "0", "0", "5"],
    ["SlideBar", "aileronDeadband", "ControlPage", "Aileron Deadband %", "0", "0", "5"],
    ["SlideBar", "rudderDeadband", "ControlPage", "Rudder Deadband %", "0", "0", "5"],
    ["Switch", "slLinkLost", "ControlPage", "Self Level if Link is Lost", ["No", "Yes"]],
    ["SelectMenu", "flightLog", "ControlPage", "Flight Log", [0,1,2],0,0, ["Off", "Playback", "Vibration"]],
    ["SelectMenu", "lowVoltageAlarm", "ControlPage", "Low Voltage Alarm", [0,1,2,3,4],0,0, ["Off", "BEC", "2S LIPO", "BEC, Low Throttle", "2S LIPO, Low Throttle"]],
    ["ClosePage", "controlClose", "ControlPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "driveSystemMenu", "DriveSystemPage", "Drive System"],
    ["DataLabel","throttle", "DriveSystemPage", "Throttle: ", "0"],
    ["Button", "setIdle", "DriveSystemPage", "Set Idle Throttle",0,0,0,0,0, "app.testButton()"],
    ["Button", "setMax", "DriveSystemPage", "Set Max Throttle", "setMaxThrottle()"],
    ["SlideBar", "rpmSensorGr", "DriveSystemPage", "RPM Sensor G/R", "1", "0", "5"],
    ["ClosePage", "driveSystemClose", "DriveSystemPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "govSettingsMenu", "GovernorSettingsPage", "Governor Settings"],
    ["SelectMenu", "governorMode", "GovernorSettingsPage", "Governor Mode", [0,1,2],0,0, ["Off", "Elec", "Nitro"]],
    ["SlideBar", "gain", "GovernorSettingsPage", "Gain", "50", "0", "100"],
    ["SlideBar", "rpm1", "GovernorSettingsPage", "RPM1", "1500", "500", "20000"],
    ["SlideBar", "rpm2", "GovernorSettingsPage", "RPM2", "1500", "500", "20000"],
    ["SlideBar", "rpm3", "GovernorSettingsPage", "RPM3", "1500", "500", "20000"],
    ["SlideBar", "lowRamp", "GovernorSettingsPage", "Low Ramp", "200", "10", "400"],
    ["SlideBar", "highRamp", "GovernorSettingsPage", "High Ramp", "200", "10", "400"],
    ["SlideBar", "overDrive", "GovernorSettingsPage", "Overdrive", "250", "0", "500"],
    ["ClosePage", "governorSettingsClose", "GovernorSettingsPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "gpsSettingsMenu", "GpsSettingsPage", "GPS Settings"],
    ["SelectMenu", "orientationLabel", "GpsSettingsPage", "Orientation Label", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SelectMenu", "rxChannel", "GpsSettingsPage", "RX Channel", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SelectMenu", "modeA", "GpsSettingsPage", "Mode A", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SelectMenu", "modeB", "GpsSettingsPage", "Mode B", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SlideBar", "altFl", "GpsSettingsPage", "Altitude Fl", "1500", "0", "3000"],
    ["SlideBar", "gpsGain", "GpsSettingsPage", "GPS Gain", "1500", "0", "3000"],
    ["Button", "swingCompass", "GpsSettingsPage", "Swing Compass", "setMaxThrottle()"],
    ["ClosePage", "gpsSettingsClose", "GpsSettingsPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "swashMixingMenu", "SwashMixingPage", "Swash Mixing"],
    ["SelectMenu", "swashType", "SwashMixingPage", "Swash Type", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SlideBar", "elevatorCyclic", "SwashMixingPage", "Elevator Cyclic", "50", "0", "100"],
    ["SlideBar", "aileronCyclic", "SwashMixingPage", "Aileron Cyclic", "50", "0", "100"],
    ["SlideBar", "collectivePitch", "SwashMixingPage", "Collective Pitch", "50", "0", "100"],
    ["SlideBar", "phaseTrim", "SwashMixingPage", "phase Trim", "0", -90, "90"],
    ["ClosePage", "swashMixingClose", "SwashMixingPage"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "swashServoMenu", "SwashServoPage", "Swash Servo"],
    ["Switch", "swashServoType", "SwashServoPage", "Servo Type", ["Analog", "Digital"]],
    ["SlideBar", "swashServoSpeed", "SwashServoPage", "Servo Speed", "50", "0", "100"],
    ["GridOpen", "grid1", "Basic Page", 0, 0, 0, 0, 0, 0, "d"],
    ["GridLabel", "grid2", "Basic Page", "", 0, 0, 0, 0, 0, "a"],
    ["GridLabel", "grid3", "Basic Page", "Trim", 0, 0, 0, 0, 0, "b"],
    ["GridLabel", "grid4", "Basic Page", "Travel -", 0, 0, 0, 0, 0, "c"],
    ["GridLabel", "grid6", "Basic Page", "Travel +", 0, 0, 0, 0, 0, "d"],
    ["GridLabel", "grid7", "Basic Page", "Rev", 0, 0, 0, 0, 0, "e"],
    ["GridLabel", "grid8", "Basic Page", "C1", 0, 0, 0, 0, 0, "a"],

    ["GridText", "centerServo", "Basic Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "centerMinus", "Basic Page", "", 0, 0, 0, 0, 0, "c"],
    ["GridText", "centerPlus", "Basic Page", "", 0, 0, 0, 0, 0, "d"],

    ["GridSwitch", "centerRev", "Basic Page", "", 1, 0, 0, ["No", "Yes"], 0, "e"],
    ["GridLabel", "grid13", "Basic Page", "R2", 0, 0, 0, 0, 0, "a"],

    ["GridText", "rightServo", "Basic Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "rightMinus", "Basic Page", "", 0, 0, 0, 0, 0, "c"],
    ["GridText", "rightPlus", "Basic Page", "", 0, 0, 0, 0, 0, "d"],

    ["GridSwitch", "rightRev", "Basic Page", "", 1, 0, 0, ["No", "Yes"], 0, "e"],
    ["GridLabel", "grid18", "Basic Page", "L3", 0, 0, 0, 0, 0, "a"],

    ["GridText", "leftServo", "Basic Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "leftMinus", "Basic Page", "", 0, 0, 0, 0, 0, "c"],
    ["GridText", "leftPlus", "Basic Page", "", 0, 0, 0, 0, 0, "d"],

    ["GridSwitch", "leftRev", "Basic Page", "", 0, 0, 0, ["No", "Yes"], 0, "e"],
    ["GridLabel", "aftTrim", "Basic Page", "A4", 0, 0, 0, 0, 0, "a"],

    ["GridText", "aftServo", "Basic Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "aftMinus", "Basic Page", "", 0, 0, 0, 0, 0, "c"],
    ["GridText", "aftPlus", "Basic Page", "", 0, 0, 0, 0, 0, "d"],

    ["GridSwitch", "aftRev", "Basic Page", "", 0, 0, 0, ["No", "Yes"], 0, "e"],
    ["GridClose", "grid23", "Basic Page"],
    ["ClosePage", "swashServoClose", "SwashServoPage"],

    ////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "tailServoMenu", "TailServoPage", "Tail Servo"],
    ["SelectMenu", "tailServoName", "TailServoPage", "Name", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SelectMenu", "tailServoType", "TailServoPage", "Type", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["GridOpen", "tailGridOpen", "Basic Page", 0, 0, 0, 0, 0, 0, "d"],

    ["GridLabel", "tailGrid1", "Basic Page", "", 0, 0, 0, 0, 0, "a"],
    ["GridLabel", "tailGrid2", "Basic Page", "Trim", 0, 0, 0, 0, 0, "b"],
    ["GridLabel", "tailGrid3", "Basic Page", "Travel -", 0, 0, 0, 0, 0, "c"],
    ["GridLabel", "tailGrid4", "Basic Page", "Travel +", 0, 0, 0, 0, 0, "d"],
    ["GridLabel", "tailGrid5", "Basic Page", "Rev", 0, 0, 0, 0, 0, "e"],

    ["GridLabel", "tailTrimLabel", "TailServoPage", "Tail", 0, 0, 0, 0, 0, "a"],

    ["GridText", "tailServo", "TailServoPage", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "tailMinus", "TailServoPage", "", 0, 0, 0, 0, 0, "c"],
    ["GridText", "tailPlus", "TailServoPage", "", 0, 0, 0, 0, 0, "d"],

    ["GridSwitch", "tailRev", "TailServoPage", "", 0, 0, 0, ["No", "Yes"], 0, "e"],
    ["GridClose", "tailGridClose", "Basic Page"],
    ["SlideBar", "tailServoSpeed", "TailServoPage", "Speed", "50", "0", "100"],
    ["ClosePage", "tailServoClose", "TailServoPage"],

    ////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "cycBank1Menu", "CyclicBank1Page", "Cyclic Bank 1 Options"],

    ["GridOpen", "cycBank1GridOpen", "CyclicBank1Page", 0, 0, 0, 0, 0, 0, "b"],

    ["GridLabel", "cycBank1Grid1", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "a"],
    ["GridLabel", "cycBank1Grid2", "CyclicBank1Page", "Aileron", 0, 0, 0, 0, 0, "b"],
    ["GridLabel", "cycBank1Grid3", "CyclicBank1Page", "Elevator", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "controlRateLabel", "CyclicBank1Page", "Control Rates", 0, 0, 0, 0, 0, "a"],
    ["GridText", "controlRate1A", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "controlRate1B", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "bellGainLabel", "CyclicBank1Page", "Bell Gain", 0, 0, 0, 0, 0, "a"],
    ["GridText", "bellGain1A", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "bellGain1B", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "hillerGainLabel", "CyclicBank1Page", "Hiller Gain", 0, 0, 0, 0, 0, "a"],
    ["GridText", "hillerGain1A", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "hillerGain1B", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "dampingGainLabel", "CyclicBank1Page", "Damping Gain", 0, 0, 0, 0, 0, "a"],
    ["GridText", "dampingGain1A", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "dampingGain1B", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "tallDragCompLabel", "CyclicBank1Page", "Tail Drag Comp", 0, 0, 0, 0, 0, "a"],
    ["GridText", "tailDragComp1A", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "tailDragComp1B", "CyclicBank1Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridClose", "cycBank1GridClose", "CyclicBank1Page"],

    ["Switch", "lockCyclicGain1", "CyclicBank1Page", "RPM Sensor G/R", ["No", "Yes"]],
    ["SlideBar", "cycGainLockedValue1", "CyclicBank1Page", "Gain Locked To", "50", "0", "100"],
    ["Switch", "selfTuneBell1", "CyclicBank1Page", "Self-Tune Bell", ["No", "Yes"]],
    ["SlideBar", "hillerDecay1", "CyclicBank1Page", "Hiller Decay", "100", "0", "200"],
    ["SelectMenu", "selfLevel1", "CyclicBank1Page", "RPM Sensor G/R", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SlideBar", "cycBank1Precent", "CyclicBank1Page", "Precent", "50", "0", "100"],
    ["ClosePage", "cyclicBank1Close", "CyclicBank1Page"],

    ////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "cycBank2Menu", "CyclicBank2Page", "Cyclic Bank 2 Options"],
    ["GridOpen", "cycBank2GridOpen", "CyclicBank2Page", 0, 0, 0, 0, 0, 0, "b"],

    ["GridLabel", "cycBank2Grid1", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "a"],
    ["GridLabel", "cycBank2Grid2", "CyclicBank2Page", "Aileron", 0, 0, 0, 0, 0, "b"],
    ["GridLabel", "cycBank2Grid3", "CyclicBank2Page", "Elevator", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "controlRate2Label", "CyclicBank2Page", "Control Rates", 0, 0, 0, 0, 0, "a"],
    ["GridText", "controlRate2A", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "controlRate2B", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "bellGain2Label", "CyclicBank2Page", "Bell Gain", 0, 0, 0, 0, 0, "a"],
    ["GridText", "bellGain2A", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "bellGain2B", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "hillerGain2Label", "CyclicBank2Page", "Hiller Gain", 0, 0, 0, 0, 0, "a"],
    ["GridText", "hillerGain2A", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "hillerGain2B", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridLabel", "dampingGain2Label", "CyclicBank2Page", "Damping Gain", 0, 0, 0, 0, 0, "a"],
    ["GridText", "dampingGain2A", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "dampingGain2B", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "c"],
    ["GridLabel", "tallDragComp2Label", "CyclicBank2Page", "Tail Drag Comp", 0, 0, 0, 0, 0, "a"],
    ["GridText", "tailDragComp2A", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "b"],
    ["GridText", "tailDragComp2B", "CyclicBank2Page", "", 0, 0, 0, 0, 0, "c"],

    ["GridClose", "cycBank2GridClose", "CyclicBank2Page"],
    ["Switch", "lockCyclicGain2", "CyclicBank2Page", "RPM Sensor G/R", ["No", "Yes"]],
    ["SlideBar", "cycGainLockedValue2", "CyclicBank2Page", "Gain Locked To", "50", "0", "100"],
    ["Switch", "selfTuneBell2", "CyclicBank2Page", "Self-Tune Bell", ["No", "Yes"]],
    ["SlideBar", "hillerDecay2", "CyclicBank2Page", "Hiller Decay", "100", "0", "200"],
    ["SelectMenu", "selfLevel2", "CyclicBank2Page", "RPM Sensor G/R", ["menuValue1", "MenuValue2"],0,0, ["menu1", "Menu2"]],
    ["SlideBar", "cycBank2Precent", "CyclicBank2Page", "Precent", "50", "0", "100"],
    ["ClosePage", "cyclicBank2Close", "CyclicBank2Page"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "tailBank1Menu", "TailBank1Page", "Tail Bank 1"],
    ["SlideBar", "tailControlRate1", "TailBank1Page", "Control Rate", "50", "0", "100"],
    ["SlideBar", "controlExpo1", "TailBank1Page", "Control Expo", "50", "0", "100"],
    ["SlideBar", "rateGain1", "TailBank1Page", "Rate Gain", "50", "0", "100"],
    ["SlideBar", "holdGain1", "TailBank1Page", "Hold Gain", "50", "0", "100"],
    ["SlideBar", "accelGain1", "TailBank1Page", "Accel Gain", "5", "0", "10"],
    ["Switch", "lockTailGain1", "TailBank1Page", "Lock Tail Gain", ["No", "Yes"]],
    ["SlideBar", "tailGainLockedValue1", "TailBank1Page", "Gain Locked To", "50", "0", "100"],
    ["Switch", "smallHeli1", "TailBank1Page", "Small Heli", ["No", "Yes"]],
    ["Switch", "blurPiros1", "TailBank1Page", "Blur Piros", ["No", "Yes"]],
    ["ClosePage", "tailBank1Close", "TailBank1Page"],
////////////////////////////////////////////////////////////////////////////////////////
    ["OpenPage", "tailBank2Menu", "TailBank2Page", "Tail Bank 2"],
    ["SlideBar", "tailControlRate2", "TailBank2Page", "Control Rate", "50", "0", "100"],
    ["SlideBar", "controlExpo2", "TailBank2Page", "Control Expo", "50", "0", "100"],
    ["SlideBar", "rateGain2", "TailBank1Page", "Rate Gain", "50", "0", "100"],
    ["SlideBar", "holdGain2", "TailBank1Page", "Hold Gain", "50", "0", "100"],
    ["SlideBar", "accelGain2", "TailBank1Page", "Accel Gain", "5", "0", "10"],
    ["Switch", "lockTailGain2", "TailBank2Page", "Lock Tail Gain", ["No", "Yes"]],
    ["SlideBar", "tailGainLockedValue2", "TailBank2Page", "Gain Locked To", "50", "0", "100"],
    ["Switch", "smallHeli2", "TailBank2Page", "Small Heli", ["No", "Yes"]],
    ["Switch", "blurPiros2", "TailBank2Page", "Blur Piros", ["No", "Yes"]],
    ["ClosePage", "tailBank2Close", "TailBank2Page"],

    ["OpenPage", "basic", "Basic Page", "Basic"],

    ["CloseMenuPage", "closeBasicPage", "BasicPage", "Advanced",0,0,0,0,"#advanced", 0, 0, false]];

var menuElements = {};

var menuObjects = function (inputArray) {

    for (var l in inputArray) {
        menuElements[inputArray[l][1]] = new menuElement(inputArray[l][0], inputArray[l][1], inputArray[l][2], inputArray[l][3], inputArray[l][4], inputArray[l][5], inputArray[l][6], inputArray[l][7], inputArray[l][8], inputArray[l][9], inputArray[l][10], inputArray[l][11]);
    }



}

menuObjects(dataStruct);
console.log(menuElements.fileName.value);
var elementMenu = "";