GyroMol
=======

A Node.js and Socket.IO implementation that lets you to use your smart phone(gyroscope) to rotate Jmol-Objects ( Molecules) in 3D on a larger screen

<h3>Concept</h3>
To be able handle(3D rotation, Zoom etc) molecules on a desktop ( laptop / iPad etc. something with a bigger screen) that multiple users can see using  a physically disconnected device (Smart Phone). Once a screen is initialized, an user connects to a specific URL in their phone browser that links them to that Jmol canvas instance. 


<h3>Basic outline:</h3> 
    Register new connections to the server and decide if it is a Canvas or User gyro instance:
    Create a new connection pair(room)
    Or add/pair the connection to an existing canvas
    Constantly poll the mobile device for orientation data
    Use the fed data to update the Jmol objects orientation

<h3>The Technology</h3>
<b>Node.js</b><br />
Node.js is what makes this project possible. Built on Google's V8 Javascript Engine, Node.js is a server environment written in -wait for it- JavaScript.
http://nodejs.org/

<b>Socket.io</b><br />
A Node.js module, Socket.io adds multiple levels of socket support, accommodating nearly every browser.
http://socket.io/

<b>Mobile Phone Orientation</b><br />
Nearly all smart phones on the market have some sort of accelerometer or gyroscope in them. The phone parses this information and makes it accessible in the browser. The HTML5 DeviceOrienation and DeviceMotion events allow us to take advantage of this.
http://www.html5rocks.com/en/tutorials/device/orientation/

<h3>To Install/Setup</h3>
<ul>
<li>Ensure Node.js is installed</li>
<li>Clone this repository - git clone https://github.com/CS76/Gyromol</li>
<li>Ensure the mobile device and desktop/larger screen are on a local network, or that the application server is accessable <li>by both devices</li>
<li>Start the application (node index.js)</li>
<li>Visit http://localhost:8080 on a PC, Tablet, SmartTV or other large screen device</li>
<li>Click CREATE. Then a Canvas ID is displayed on the screen</li>
<li>On a mobile device, visit http://your.ip.address:8080</li>
<li>Type in the Canvas ID(displayed on the larger screen) in the mobile input box and click Join/Pair-up.</li>
<li>Find the magic in your hands</li>
</ul>
