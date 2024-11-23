import React from "react"

export const Button = ({ text, type = "button", disabled, id }) => {

    console.log(React.createElement('button', { disabled: true, type: 'submit', id: 'next-btn' },
        React.createElement('span', null, text))
    )
    return <button type={type} id={id} disabled={disabled}>
        {text}
    </button>
}

// export const Button = ({ text }) => (
//     React.createElement('button', {disabled: true, type: 'submit', id: 'next-btn'},
//         React.createElement('span', null, text))
// )
