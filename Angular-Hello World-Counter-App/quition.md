# S1 D4 ***Level - 1 - Assignment : Angular Hello World and Counter App***

In this assignment, you will create a basic Angular application that serves as an introduction to Angular's fundamental concepts. You will build a simple web app that displays "Hello, World!" and includes a counter feature.

## **Objective**

Your objective is to create an Angular application that demonstrates the following key concepts:

1. Setting up an Angular project using the Angular CLI.
2. Creating Angular components to structure your application.
3. Using data binding to display dynamic content.
4. Implementing basic event handling.
5. Understanding the Angular development workflow.

## **Assignment Requirements**

Follow the steps below to complete the assignment:

### **Step 1: Setup**

1. Use the Angular CLI to create a new Angular project called "HelloWorldCounterApp."
2. Navigate to the project directory and open it in your code editor.

### **Step 2: Create Components**

1. Create a new component called "hello-world" using the Angular CLI:
    
    ```bash
    ng generate component hello-world
    
    ```
    
2. Create another component called "counter" using the Angular CLI:
    
    ```bash
    ng generate component counter
    
    ```
    

### **Step 3: Hello World Component**

1. In the "hello-world" component, modify the HTML template to display "Hello, World!" as a heading.
2. Import and use the "hello-world" component in the "app.component.html" file to display the greeting.

### **Step 4: Counter Component**

1. In the "counter" component, create a button that displays the current count, initially set to 0.
2. Implement event handling to increase the count when the button is clicked.
3. Display the updated count value on the page.

### **Step 5: Styling (Optional)**

Feel free to add CSS styles to improve the visual appearance of your application.

### **Step 6: Testing (Optional)**

If you're already familiar with Angular testing, you can write unit tests for the components and the counter functionality.

## **Assignment Guidelines**

- Follow Angular best practices for structuring your project and components.
- Use data binding to display the "Hello, World!" message and the counter value.
- Implement event handling to increment the counter when the button is clicked.
- Ensure that your code is well-organized and easy to read.
- You may add optional styling to make your app visually appealing.

## **Evaluation Criteria**

Your assignment will be evaluated based on the following criteria:

1. **Functionality**: Does the application display "Hello, World!" and increment the counter correctly?
2. **Code Quality**: Is the code well-structured, organized, and following Angular best practices?
3. **User Interface**: Is the application visually presentable and user-friendly?
4. **Testing (Optional)**: If you wrote tests, do they cover critical components and functionality?

## **Submission**

Once you have completed the assignment, submit it through the designated platform. Include a link to your code repository if applicable.

## **Bonus Challenge (Optional)**

For those who finish early or are looking for an extra challenge:

- Implement a decrement button in the counter component to decrease the count when clicked.
- Add a reset button to reset the counter to zero.
- Write unit tests for the additional functionality.