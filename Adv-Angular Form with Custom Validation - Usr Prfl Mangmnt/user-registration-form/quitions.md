# S2 D2 ***Level 2 - Assignment :***  Advanced Angular Form with Custom Validation - User Profile Management

### Objective

The objective of this assignment is to create a more complex Angular form for user profile management, which includes custom validation rules.

### Task

You are tasked with building an Angular form that allows users to add and edit their profiles. The form should have fields for the following user profile information:

1. **Name:** A text input field for the user's full name. Required and should be at least 3 characters long.
2. **Email:** An email input field for the user's email address. Required and should be a valid email address.
3. **Date of Birth:** A date picker field for the user's date of birth. Required, and users should be at least 18 years old.
4. **Phone Number:** A phone number input field. Optional but, if provided, must follow a specific format (e.g., (123) 456-7890).
5. **Address:** A text area for the user's address. Optional.
6. **Profile Picture:** An upload button for the user to upload their profile picture. Optional, but if a file is uploaded, it should be an image file (e.g., JPEG, PNG).

Additionally, you need to implement custom validation for the following:

- **Password Strength:** If the user decides to change their password, they must enter a password that meets specific criteria, such as a combination of uppercase letters, lowercase letters, digits, and special characters.
- **Username Availability:** If the user decides to change their username, it should be checked for availability (e.g., by making an HTTP request to a server).

### Requirements

To successfully complete this assignment, adhere to these requirements:

1. Create an Angular component for the user profile form.
2. Implement a form in the component's template with the specified fields and validation rules.
3. Use Angular's form validation features, including custom validators, for password strength and username availability.
4. Display appropriate error messages for each validation rule, including custom validation errors.
5. Ensure the form submits when all fields are valid and display a success message.
6. Style the form for a user-friendly interface.

### Assessment

Your assignment will be assessed based on the following criteria:

- Creation of an Angular component for the user profile form.
- Correct implementation of form fields and validation rules, including custom password strength and username availability validation.
- Proper use of Angular's form validation features, including custom validators.
- Display of appropriate error messages for each validation rule, including custom validation errors.
- Successful form submission when all fields are valid and the display of a success message.
- Appropriate styling to create a user-friendly interface.