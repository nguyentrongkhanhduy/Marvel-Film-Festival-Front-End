const ticket_object = {
    one_pass: 50,
    full_pass: 300
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#order_summary").style.display = "none"
    document.querySelector('#ticket_price').innerHTML = ` $${ticket_object.one_pass}`
})
document.querySelector("#ticket_type").addEventListener("change", () => {
    let ticket_type = document.querySelector("#ticket_type").value
    if (ticket_type === 'one_pass') {
        document.querySelector('#ticket_price').innerHTML = ` $${ticket_object.one_pass}`
    } else {
        document.querySelector('#ticket_price').innerHTML = ` $${ticket_object.full_pass}`
    }
})

document.querySelector("#tickets_quantity").addEventListener("input", () => {
    document.querySelector("#tickets_quantity").className = 'normal_input'
})

document.querySelector("#credit_card").addEventListener("input", () => {
    document.querySelector("#credit_card").className = 'normal_input'
})

const pay_now = () => {
    let ticket_type = document.querySelector("#ticket_type").value
    let ticket_quantity = document.querySelector("#tickets_quantity").value
    let credit_card = document.querySelector("#credit_card").value
    let validation_obj = {
        quantity: ticket_quantity,
        card: credit_card,
    }
    let [vali_res, valid_quant, valid_card] = validate(validation_obj)
    if (vali_res) {
        let subtotal = ticket_object[ticket_type] * valid_quant
        let tax = subtotal * 0.13
        let total = subtotal + tax
        document.querySelector("#ticket_number").innerHTML = valid_quant
        document.querySelector("#unit_price").innerHTML = ticket_object[ticket_type]
        document.querySelector("#subtotal_price").innerHTML = subtotal
        document.querySelector("#tax").innerHTML = tax
        document.querySelector("#total_price").innerHTML = total
        document.querySelector("#order_summary").style.display = "flex"
    }
}

const validate = (validation_obj) => {
    let validate_res = true
    // validate tickets_quantity
    let valid_quant = Number(validation_obj.quantity)
    if (validation_obj.quantity.length === 0) {
        display_error(false, "#tickets_quantity", 'error_input', 'Error: quantity of tickets required!')
        validate_res = false
    } else {
        if (!isNaN(valid_quant)) {
            if (valid_quant <= 0) {
                display_error(true, "#tickets_quantity", 'error_input', 'Error: quantity of tickets must > 0!')
                validate_res = false
            } else {
                if (!Number.isInteger(valid_quant)) {
                    display_error(true, "#tickets_quantity", 'error_input', 'Error: quantity of tickets must be integer!')
                    validate_res = false
                }
            }
        } else {
            display_error(true, "#tickets_quantity", 'error_input', 'Error: please input a number at quantity of tickets!')
            validate_res = false
        }
    }
    // validate credit card
    let valid_card = validation_obj.card.replace(/\s+/g, '')
    if (valid_card.length !== 6) {
        display_error(true, "#credit_card", 'error_input', 'Error: credit card must be 6 digits long!')
        validate_res = false
    }
    return [validate_res, valid_quant, valid_card]
}

const display_error = (clear_value, element_id, set_class_name, placeholder) => {
    if (clear_value) {
        document.querySelector(element_id).value = null
    }
    document.querySelector(element_id).className = set_class_name
    document.querySelector(element_id).placeholder = placeholder;
}

document.querySelector("#pay").addEventListener("click", pay_now)