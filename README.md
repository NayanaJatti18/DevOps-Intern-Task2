# Task 2: Create a Simple Jenkins Pipeline for CI/CD

## Overview
This project demonstrates a basic Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Jenkins** and **Docker**. The pipeline automates building, testing, and deploying a simple Node.js application.

## Objective
Set up a basic Jenkins pipeline to automate the process of building and deploying an application.

## Tools and Technologies
- **Jenkins** — orchestrates the CI/CD pipeline.
- **Docker** — packages the application into a container.
- **Node.js** — runs the sample application.
- **Git and GitHub** — store the source code and Jenkinsfile.

## Project Structure
```text
DevOps-Intern-Task2/
├── Dockerfile
├── Jenkinsfile
├── package.json
└── server.js
```

> Your repository may contain additional files or folders. Adjust this example to match your actual project structure.

## Pipeline Stages

1. **Checkout** — retrieves the latest source code from the Git repository.
2. **Build** — builds a Docker image tagged `my-node-app:latest`.
3. **Test** — runs the project's test command inside a temporary Docker container.
4. **Deploy** — starts the application container.

## Prerequisites
- Jenkins is installed and running.
- Git is installed and configured for Jenkins.
- Docker Desktop is installed and running on the Windows machine hosting Jenkins.
- The repository contains a valid `Dockerfile`, `Jenkinsfile`, Node.js application files, and a test script.
- The Docker commands are available to the account running the Jenkins service.

## Run Locally
From the project directory, build the image:

```bat
docker build -t my-node-app:latest .
```

Run the tests:

```bat
docker run --rm my-node-app:latest npm test
```

Run the application (if the application listens on port 3000):

```bat
docker run --rm -p 3000:3000 my-node-app:latest
```

Then open http://localhost:3000 in your browser.

## Configure Jenkins
1. Create a **Pipeline** job in Jenkins.
2. Configure the job to use **Pipeline script from SCM**.
3. Select **Git** and enter your repository URL.
4. Set the branch to `*/main` and the script path to `Jenkinsfile`.
5. Save and select **Build Now** to test the pipeline.
6. To trigger builds on each code commit, configure a GitHub webhook or another SCM trigger appropriate for your setup.

### Windows Jenkins note
Because Jenkins is running on Windows, use the `bat` step for Windows command-line commands rather than `sh`. For example:

```groovy
bat 'docker build -t my-node-app:latest .'
bat 'docker run --rm my-node-app:latest npm test'
```

## Expected Outcome
A successful pipeline should check out the code, build the Docker image, pass the test stage, and run the application during deployment.

## Troubleshooting

- **`Cannot run program "sh"`**: Replace Linux `sh` steps with Windows `bat` steps when Jenkins runs natively on Windows.
- **`docker buildx build requires 1 argument`**: Add the build context, usually `.` at the end of the build command.
- **`Unable to find image 'my-node-app:latest' locally`**: Ensure the Build stage runs successfully and uses the same image name and tag as the Test stage.
- **`SyntaxError` in `server.js`**: Check the indicated line for missing quotes, parentheses, or template-literal backticks. For a port message, use `console.log(` + "`" + `Server running on port ${PORT}` + "`" + `);`.
- **Test or deployment failures**: Review the first error in Jenkins Console Output. Confirm the `npm test` script exists and the application uses the expected port.

## Deliverable
A GitHub repository containing the application source code, Dockerfile, and a `Jenkinsfile` with build, test, and deploy stages.

## Author
This is completed by Nayana Jatti during pursuing internship in Elevate Labs
