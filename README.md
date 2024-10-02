# Invoice App

## Overview

The **Invoice App** is a web application designed to create and manage invoices. This application features a real-time invoice form that allows users to input data, which updates dynamically on the page. It integrates with a GraphQL API for saving invoice data and provides visual feedback through toast messages upon successful creation.

## Assessment Requirements

### Invoice Form

- Create the form layout with sections for **"Bill From," "Bill To," "Invoice Details,"** and **"Items List,"** following the provided Figma design.
- All fields in the form are required. Implement form validations as needed.
- The **Invoice Date** is set to the current date by default.
- Calculate the price of a single item based on the **Quantity** and **Price** inputs.
- Calculate the **Total Price** of all items after deducting a **10% tax**.
- The `InvoiceTermsEnum` values include **NET_10_DAYS**, **NET_20_DAYS**, and **NET_30_DAYS**.

### Real-Time Data Display

- As the user fills in the form, the right-hand side of the page should display the real-time invoice data.

### Reset Functionality

- Provide a **Reset** button that clears the form fields and the real-time data display.

### Save Functionality

- Upon saving, send a mutation to the GraphQL API to save the data.
- Display a toast message saying **"Invoice created successfully!"** after saving.
- Reset the form to its empty state after saving.

### Design & Responsiveness

- The design must be pixel-perfect according to the provided Figma design.
- Ensure the form and preview panel layout are responsive and work on different screen sizes.

## Figma Design and Prototype Links

- [Figma Design](https://www.figma.com/design/oovOGLDhZrnGs32edgxUTr/Invoice-Generator?node-id=84-370&node-type=frame)
- [Figma Prototype](https://www.figma.com/proto/oovOGLDhZrnGs32edgxUTr/Invoice-Generator?node-id=84-370)

## Technology Stack

- **Frontend**: React JS with TypeScript
- **Build Tool**: Vite
- **API**: GraphQL

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AliMahmood9/invoice-app.git
   ```
