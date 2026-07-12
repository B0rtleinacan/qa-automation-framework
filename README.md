# playwright-framework-saucedemo
A scaleable end-to-end test automation framework build with Playwright and Typescript. 

## LINKS
Sauce Demo: https://sauce-demo.myshopify.com/
Postman workspace: d7949280-cd33-4325-8109-df5577358a86

## GOALS
This project demonstrates modern QA automation practices, including reusable Page Object Models, CI/CD integration and a maintanable project structure. This serves as a portfolio project to showcase automation engineering skills and practices. 

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | UI automation |
| TypeScript | Strong typing and maintainability |
| GitHub Actions | Continuous Integration |
| Node.js | Runtime environment |

## About the project

### Why the project?
I have always been fascinated by QA automation after working in QA for over 5 years and have always wanted to learn how to weild the technology. This project is the basis of my understanding of QA automation and the continious improvement of my knowledge base of the industry. 

With that being said, I am moving away from the game industry and 100% manual testing as modern QA has become half if not more automation based. Playwright is something that I somewhat knew and I have recently learned Typescript, so my thought process became "why not test myself and showcase my knowledge?" 

Deepening my knowledge is something I always strive for and I have been able to deepen my knowledge of both technologies (Typescript, Playwright) as well as changed the way I think about QA, diving deeper into what it means and takes to be in QA. 

### Project Structure (currently)
|
|-- .github/workflows/
|-- artifacts/
|-- pages
|-- tests/
|-- utils/
|-- LICESNE
|-- package-lock.json
|-- package.json
|-- playwright.config.ts
|-- README.md
|-- tsconfig.json

### Framework Architecture

The framework follows the POM (Page Object Model).

- Page classes contain UI interactions
- Tests contain assertions and business logic
- Utils provides reusable helper methods and mock data. 

### Roadmap
- [x] Playwright setup
- [x] Page Object Model
- [x] GitHub Actions
- [ ] Parallel Execution
- [ ] API Testing
- [ ] Data-driven Testing
- [ ] Performance Testing

## License
MIT