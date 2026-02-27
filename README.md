# Playwright POC (Proof of Concept)

### When to use Playwright
- Ideal for modern teams seeking scalable, reliable E2E test automation ready for modern web applications, with local execution and native integration with cloud CI/CD pipelines.

### Strengths
- Complete E2E automation, with parallel and scalable execution.
- Native support for multiple browsers (Chromium, Firefox, and WebKit/Safari).
- Advanced debugging features (trace viewer, screenshots, videos).
- Modern architecture, ready for continuous evolution and new testing scenarios.

### Limitations
- Does not automate native mobile applications (only mobile browser emulation).
- Has an initial learning curve, especially in parallelization, context isolation, and advanced use of selectors.
- Smaller community than Selenium, but growing rapidly and with strong official support from Microsoft.

### Highlights
- Intelligent automatic waiting, reducing the need for manual waitFor.
- Network interception and simulation for API testing and complex scenarios.
- Integrated trace viewer, facilitating debugging.
- Support for multiple languages (JavaScript, TypeScript, Python, C#, Java).
- Native parallel execution, no grid required.

<br/>

---
<br/>

This POC demonstrates the practical application of these resources through E2E scenarios, exploring parallelization, context isolation, and modern automation strategies.

<br/>

---
<br/>

# Proposed scenarios

This Proof of Concept covers scenarios that demonstrate best practices, advanced Playwright features, and integration with modern automated testing pipelines.

### [05] Test Structure (with BDD and Pure Playwright)
Implementation of tests using BDD or the native Playwright Test syntax, with a focus on good nomenclature, readability, and easy understanding of scenarios.

### [06] Automatic Report Generation
Automatic generation of execution reports (HTML/trace), facilitating the analysis of results and the identification of failures.

### [07] Continuous Integration with Jenkins
Automated execution of tests in CI pipeline, demonstrating integration with Jenkins and readiness for execution in cloud environments.

<br/>

---
<br/>

Note: All scenarios were developed in TypeScript, leveraging static typing, better code organization, and greater reliability during test development. This choice aims to increase automation robustness, reduce errors during development, and facilitate solution scalability.

<br/>

---
<br/>

# Useful commands

### Blocking npm execution in Terminal in VS Code:
Get-ExecutionPolicy       
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned  

### Code generation:
npx playwright codegen

### Execution:
npx playwright test

### Execution in UI:
npx playwright test --ui

### Execution in Debug:
npx playwright test --ui --debug

<br/>

---
<br/>

### To run POC:
npm test

<br/>

---
<br/>