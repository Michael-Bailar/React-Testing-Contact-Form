import React from "react"
import { render, fireEvent, findByTestId, getByText, findByText} from "@testing-library/react"
import ContactForm from "./ContactForm"

test("form works correctly", () => {
    render(<ContactForm />)
})

test("user info updates correctly on submit", () => {
    const  { getByLabelText, getByTestId} = render(<ContactForm />)

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)


    fireEvent.change(firstNameInput, {
        target: { name: 'firstName', value: 'Michael'}
    })
    fireEvent.change(lastNameInput, {
        target: { name: 'lastName', value: 'Bailar'}
    })
    fireEvent.change(emailInput, {
        target: { name: 'email', value: 'test@test.com'}
    })
    fireEvent.change(messageInput, {
        target: { name: 'message', value: 'testing message is message'}
    })


    findByTestId('submit').then(() => {
        fireEvent.click();
    })


    const items = findByText(
    `{
        "firstName": "Michael",
        "lastName": "Bailar",
        "email": "mikebailar@gmail.com",
        "message": "testing message is message"
      }`
    )
})
