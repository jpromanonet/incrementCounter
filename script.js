// Get all elements with the class 'counter'
const counters = document.querySelectorAll('.counter')

// Iterate through each counter
counters.forEach(counter => {
    // Set the initial value of the counter to 0
    counter.innerText = '0'

    // Define the function to update the counter
    const updateCounter = () => {
        // Get the target value from the 'data-target' attribute
        const target = +counter.getAttribute('data-target')
        // Get the current value of the counter
        const c = +counter.innerText

        // Calculate the increment value (target divided by 200)
        const increment = target / 200

        // If the current value is less than the target value, increment the counter and set a timeout to call the updateCounter function again
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            // If the current value is equal or greater than the target value, set the counter to the target value
            counter.innerText = target
        }
    }

    // Call the updateCounter function
    updateCounter()
})
