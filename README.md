# Dev blog

Bside Dev Blog - Code Refactoring using RedwoodJs

## Overview

After using RedwoodJs from version 1 for a period of 6 months, as the project grew, it became necessary to review and improve the code. To achieve this, we plan to create a small project and gradually apply new features and improvements that we have been wanting to implement during development. The insights gained from this project will be integrated into the main project code.

## Key Objectives

- Build: Test the Vite build tool.
- Style: Establish a new design system for the web.
- TDD: Revive and integrate Storybook, Jest, and Cypress, which have been neglected, and connect them with GitHub Actions.
- Admin: Create an admin dashboard using Tremor and develop an Editor.
- Infra: Test the possibility of migrating to a new deployment method.
- Monitoring: Implement error catching and performance tracking dashboards using RW Studio.

## Details

### 1. Build: Test the Vite build tool

The Vite build tool was successfully applied in the development environment without major issues. However, there is an issue where the tailwind config is not being read in the build environment. To resolve this issue, it is necessary to switch to webpack specifically for the build process.

### 2. Style: Establish a new design system for the web

One of the drawbacks of using TailwindCSS is that it can be challenging to read due to its purpose of "writing CSS alongside HTML." Especially since the design system is not yet complete, it requires creating an excessive number of components, leading to a lack of consistency. This situation makes it challenging to highlight the advantages of TailwindCSS effectively.

We have decided to introduce Mantine and Tremor into the code. Both frameworks are officially supported by RedwoodJs and offer the benefits of being headless while being compatible with TailwindCSS. Although some components required consolidation due to overlap, the development productivity has significantly improved.

### 3. TDD: Test-Driven Development

#### Storybook

Initially, we attempted to use Storybook to test and showcase every component and page. However, this approach increased the maintenance cost and made UI development less enjoyable. To address this, we limit the use of Storybook to the basic UI tokens, components, and layouts. We will selectively utilize it for responsive design, dark theme, and testing in different language environments.

#### Jest

We plan to follow the updated official RedwoodJs documentation for Jest.

#### Cypress

While Cypress provides a strong sense of stability when tests pass, it is susceptible to updates. Until our internal design system stabilizes, we have decided not to use Cypress. Instead, we will focus on using React Testing Library for some of the testing needs.

### 4. Admin

We are reconstructing the admin section based on the RedwoodJs scaffold with Mantine and Tremor. We need to carefully consider the integration of tables with GraphQL. In terms of graphs and numerical representations, there may be some limitations compared to d3. However, with careful planning and product design considerations, we believe it can provide sufficient value to customers even as a simple admin section.

### 5. Infra

Coherence, a framework similar to Terraform, has been officially supported and announced for collaboration with RedwoodJs. It is said to offer an experience similar to Netlify, allowing for the continued use of AWS accounts and credits, although it may not provide a fully comprehensive lambda-based serverless environment.

Despite some opposing views internally, we are cautiously approaching this new infrastructure option. We are focusing on highlighting the benefits of development cost.

### 6. Monitoring

While Redwood studio are still in the experimental phase, there isn't much specific features to test at the moment. However, we are excited about the possibilities.
