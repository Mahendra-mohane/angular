You are tasked with developing a Node.js application that interacts with the 
GitHub API and MongoDB. The goal is to create two APIs for storing and retrieving
GitHub repository data.

API 1: Save GitHub Data to MongoDB
Method: POST
URI: http://localhost:8000/github
Payload:
json
Copy code
{
  "url": "https://api.github.com/users/mralexgray/repos"
}
Functionality:
Fetch GitHub repository data from the provided endpoint in the payload.
Extract and save the following keys into a MongoDB collection:
id
name
html_url
description
created_at
open_issues
watchers
owner:
id
avatar_url
html_url
type
site_admin
Implement a create or update method to ensure that calling this API multiple times does not create duplicate rows if a row with the same "id" already exists in the MongoDB collection.
Use async/await and loops for adding rows one by one (avoid bulk create methods).

API 2: Retrieve Saved GitHub Data from MongoDB
Method: GET
URI: http://localhost:8000/github/<id>
Functionality:
Retrieve GitHub repository data from the MongoDB collection based on the provided "id."
Return the data in the response.
If no data is found for the given "id," return an appropriate error message.

Note (Important):
Ensure that the save operation in MongoDB is a create or update method, preventing the creation of duplicate rows with the same "id."
Implement the use of async/await and loops for adding rows individually to the MongoDB collection, avoiding bulk create methods.
Additional Information:

You can use the official MongoDB Node.js driver for interacting with the MongoDB database.
Set up a locally hosted MongoDB database for this task.
Ensure error handling for cases where GitHub API requests fail or MongoDB operations encounter issues.
Document your APIs and provide clear instructions for setting up and running the Node.js application.