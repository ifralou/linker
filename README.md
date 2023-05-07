## Netlify deploy is right <a href="https://main--shiny-pothos-c1476f.netlify.app/">here</a>.

### Motivation

    Successfully pass the KAJ.

### Progress
Task tracker with local browser persistence using indexedDB fully able to run offline.

##### Points to improve:

<ol>
    <li>Global state management is not functioning properly as useContext is being used without adequate memoization. </li> 
    <li>The styles appear disorganized due to rapid prototyping and frequent changes.</li>
</ol>

##### Solutions:

<ol>
    <li>Implement memoization for components or utilize specialized global state management tools like React.</li>
    <li>Migrate CSS styles to ChakraUI components.</li>
</ol>


##### Functionality:

Tasks could be added with a form. You could track particular tasks time with a timer.

##### Start state:

<img src="./public/start.png" width="800px">

##### Add a task:

You could add a task and it's description.

<video controls width="800"> 
    <source src="./public/addtask.webm" type="video/webm">
</video>

#### Drag'n'Drop links. 

D'n'D links to a particular task to keep your links organized.
It will give you an opportunity to then open a workspace with all your links open.

<video controls width="800"> 
    <source src="./public/draganddrop.webm" type="video/webm">
</video>

#### Calendar and tasks sessions.

You can use a timer to monitor the time spent on your tasks. 
A daily summary of all your tasks will be presented in a calendar.

<video controls width="800"> 
    <source src="./public/tracking.webm" type="video/webm">
</video>

To be continued.