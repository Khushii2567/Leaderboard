# Google Cloud Study Jam Leaderboard

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18.x or newer) and a package manager like npm, yarn, or pnpm installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    Open your terminal and run the following command to clone the project to your local machine. Replace `github-link-url` with the actual URL of your Git repository.
    ```bash
    git clone https://github.com/shivjeet1/Leaderboard.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Leaderboard/
    ```

3.  **Install dependencies:**
    Use your preferred package manager to install the project's dependencies.

    * **Using npm:**
        ```bash
        npm install
        ```
    * **Using yarn:**
        ```bash
        yarn install
        ```
    * **Using pnpm:**
        ```bash
        pnpm install
        ```

4.  **Start the development server:**
    This command will start the Vite development server, typically on `http://localhost:5173`.
    * **Using npm:**
        ```bash
        npm run dev
        ```
    * **Using yarn:**
        ```bash
        yarn dev
        ```
    * **Using pnpm:**
        ```bash
        pnpm dev
        ```

The Application should start running locally on your Device.

## Using Docker to Containerize the Application

1. Ensure you have Docker CLI installed.

2. Follow same steps in [Installation Guide](#Installation)

3. Build your Docker Image using Dockerfile:
    ```bash
    docker build -t leaderboard:latest .
    ```

4. Run your Docker Container:
    ```bash
    docker run -p 5173:5173 leaderboard:latest
    ```

5. Stop your Docker Container:
    ```bash
    docker stop CONTAINER_NAME
    ```
  - CONTAINER_NAME is the name of the container which can be found using 'docker ps' or 'docker ps -a'
