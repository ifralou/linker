## Linker app

### Motivation
    Successfully pass the KAJ.

### Progress: 

##### Points to improve:
1) Global state management is not functioning properly as useContext is being used without adequate memoization.
2) The styles appear disorganized due to rapid prototyping and frequent changes.

##### Solution:
1) Implement memoization for components or utilize specialized global state management tools like React.
2) Migrate CSS styles to ChakraUI components.

##### Functionality:
Tasks could be added with a form. You could track particular tasks time with a timer.


##### Start state:

<img src="./public/start.png" width="800px">

##### Add a task:

<video controls width="800"> 
    <source src="./public/addtask.webm" type="video/webm">
</video>


#### Drag'n'Drop links to your tasks in order to keep them organized.

<video controls width="800"> 
    <source src="./public/draganddrop.webm" type="video/webm">
</video>
