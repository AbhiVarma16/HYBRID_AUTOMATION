# 🧪 Hybrid Automation Framework

A scalable and modular hybrid automation framework for **UI** and **API** testing using **Playwright**, **Jest**, and **Axios**, written in **TypeScript**.

---

## 🚀 Features

- 🎯 **UI Automation**: Automated browser testing using Playwright.
- 📡 **API Automation**: REST API testing using Jest and Axios.
- 🔁 **Hybrid Flows**: Combine UI + API for end-to-end test scenarios.
- 🧾 **Test Data Management**: Structured and dynamic test data support.
- 📊 **Code Coverage**: Jest-powered code coverage reports.
- 📋 **HTML Reports**: Detailed visual reports for UI and API test runs.

---

## 📁 Project Structure

```
.
├── config.ts
├── jest.config.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── coverage/                  # Jest code coverage (ignored in Git)
├── playwright-report/         # UI test HTML report (ignored in Git)
├── tests/
│   ├── API_Automation/        # API test cases
│   ├── HybridFlows/           # End-to-end test cases (UI + API)
│   │   ├── pages/
│   │   ├── tests/
│   │   └── testData/
│   └── UI_Automation/
│       ├── pages/             # Page Object Models
│       ├── selectors/         # Centralized selectors
│       └── tests/             # UI test cases
└── utils/                     # Shared utilities for tests
```

---

## ⚙️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### 📦 Installation

```bash
npm install
```

---

## 🧪 Running Tests

### 🔹 API Tests (Jest)

```bash
npm test
```

### 🔹 UI Tests (Playwright)

```bash
npx playwright test
```

---

## 📊 Generating Reports

### 🔸 Playwright HTML Report

After running UI tests:

```bash
npx playwright show-report
```

> Opens a rich HTML report in your default browser.

### 🔸 Jest Code Coverage Report

After running API tests:

```bash
npm test -- --coverage
```

Then open:

```
coverage/lcov-report/index.html
```

---

## 📜 Scripts

Refer to [`package.json`](./package.json) for full list of scripts.

---

## 🧾 Test Data

Structured test data lives in:

```
tests/HybridFlows/testData/
```

You can store static data files or use dynamic generators as needed.

---

## 🛠️ Configuration Files

- **Playwright**: [`playwright.config.ts`](./playwright.config.ts)
- **Jest**: [`jest.config.ts`](./jest.config.ts)
- **TypeScript**: [`tsconfig.json`](./tsconfig.json)

---

👨‍💻 Author
Abhishek Varma
Software Engineer in Test (SDET)
