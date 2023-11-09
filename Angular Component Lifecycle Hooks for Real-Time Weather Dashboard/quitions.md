# S3 D2 ***Level 1 -*** Assignment : Angular Component Lifecycle Hooks for Real-Time Weather Dashboard

### Objective

The objective of this assignment is to apply your knowledge of Angular component lifecycle hooks in the context of a real-time weather dashboard. By addressing a set of advanced features and requirements, you'll gain practical experience in using lifecycle hooks effectively.

### Problem Statement

You have been tasked with developing a feature-rich real-time weather dashboard for a meteorological application. The `WeatherDashboardComponent` should not only fetch and display real-time weather data but also incorporate advanced functionality, such as user preferences and multiple locations. This assignment challenges you to manage the lifecycle of the component efficiently while implementing these advanced features.

### Requirements

To successfully complete this assignment, follow the detailed instructions:

### Step 1: Component Creation

1.1. **Generate the Component:**

- Create an Angular component named `WeatherDashboardComponent`.

### Step 2: Implement Lifecycle Hooks

2.1. **OnInit:**

- Implement the `ngOnInit` lifecycle hook in the `WeatherDashboardComponent`.
- Use this hook to set up an initial call to a weather data API for the user's default location, which can be defined in user preferences.

2.2. **DoCheck:**

- Implement the `ngDoCheck` lifecycle hook in the `WeatherDashboardComponent`.
- Use this hook to monitor changes in the data source and update the component's weather data when changes are detected.

2.3. **AfterViewInit:**

- Implement the `ngAfterViewInit` lifecycle hook in the `WeatherDashboardComponent`.
- Use this hook to start rendering the weather data and displaying it in the component.

2.4. **OnDestroy:**

- Implement the `ngOnDestroy` lifecycle hook in the `WeatherDashboardComponent`.
- Use this hook to clean up resources, such as stopping data retrieval, when the component is destroyed.

### Step 3: Advanced Features

3.1. **User Preferences:**

- Create a user preferences feature that allows users to set their default location and temperature units (e.g., Celsius or Fahrenheit).

3.2. **Multiple Locations:**

- Allow users to add multiple locations to the dashboard and switch between them seamlessly. Each location should have its real-time weather data displayed.

3.3. **Custom Data Update Interval:**

- Implement a feature that enables users to specify the interval at which the weather data updates. Users should have options like "5 minutes," "30 minutes," or "1 hour."

### Step 4: Styling and User Experience

4.1. **CSS Styling:**

- Enhance the dashboard's visual appeal with CSS styling or a preferred CSS framework to provide a user-friendly and visually appealing interface.

4.2. **Responsive Design:**

- Ensure that the dashboard is responsive and adapts to various screen sizes, providing a consistent user experience.

### Step-by-Step Guidance

To complete the assignment, follow these steps:

1. Create the `WeatherDashboardComponent`.
2. Implement the specified lifecycle hooks within the `WeatherDashboardComponent` to manage data retrieval, rendering, and resource cleanup.
3. Develop advanced features such as user preferences, multiple locations, and custom data update intervals.
4. Apply CSS styling for a visually appealing and user-friendly dashboard while ensuring responsive design.

### Assessment

Your assignment will be assessed based on the following criteria:

- Successful creation of the `WeatherDashboardComponent`.
- Accurate implementation of the specified lifecycle hooks and advanced features.
- Proper simulation of real-time data updates and dynamic data display within the component.
- Implementation of user preferences and multiple locations, allowing users to customize their dashboard.
- Implementation of responsive design principles for different screen sizes.