import { gql } from "@apollo/client";

export const CREATE_INVOICE_MUTATION = gql`
  mutation CreateInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      billingFrom {
        billingFromAddress {
          city
          country
          postalCode
          streetAddress
        }
        companyEmail
        companyName
        id
      }
      billingTo {
        billingToAddress {
          city
          country
          postalCode
          streetAddress
        }
        clientEmail
        clientName
        id
      }
      id
      invoiceDate
      items {
        id
        name
        price
        quantity
        totalPrice
      }
      paymentTerms
      projectDescription
      subTotal
      tax
      totalAmount
    }
  }
`;
