# Node.js CI/CD Pipeline with GitHub Actions 🚀

This project is a demonstration of a professional **Continuous Integration and Continuous Deployment (CI/CD)** workflow. It features a Node.js Express backend, automated unit testing, and seamless deployment.



## 🛠 Features
- **Backend:** Node.js with Express.js (ES Modules).
- **Testing:** Unit testing using **Jest** and **Babel**.
- **CI/CD:** Automated testing and deployment via **GitHub Actions**.
- **Environment Management:** Uses `cross-env` for cross-platform compatibility.
- **Deployment:** Automatically deploys to **Vercel** upon successful test runs.

## 📁 Project Structure
```text
├── .github/workflows/
│   └── devops.yml       # GitHub Actions configuration
├── index.js             # Main server file
├── index.test.js        # Unit tests
├── package.json         # Dependencies and scripts
└── .babelrc             # Babel configuration for ESM support
```
##  🚀 Getting Started

1. Clone the repository
```bash
git clone [https://github.com/awoladhossain/backend-cicd-practice](https://github.com/awoladhossain/backend-cicd-practice)
cd your-repo-name
```

2. Install Dependencies
```bash
npm install
```
3. Run Tests Locally

```bash
npm test
```

4. Start the Server
```bash
npm start
```

⚙️ CI/CD Workflow
1. This project uses GitHub Actions to automate the development lifecycle:

2. Push/PR: Every time code is pushed to the main branch.

3. Setup: A virtual Ubuntu environment is created.

4. Install: Dependencies are installed using npm install.

5. Test: Jest runs all unit tests.

6. Deploy: If tests pass, the app is automatically deployed to Vercel.
