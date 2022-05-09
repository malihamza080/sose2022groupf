/**
 * Updates the current shape, distance and motor status calling
 * the corresponding methods.
 */
function updateStatus() {
    // Update current shape based on Open CV

    (async () => await updateCurrentShapeOpenCV())();
    // Update motor status
    //...

    // Update current shape based on OpenCV
    //...

    // Update current distance
    //...

}

/**
 * Update the current shape based on OpenCV.
 */
async function updateCurrentShapeOpenCV() {
    try {
        // Request shape from server
        const requestResult = await requestShapeFromOpenCV()
        // Get the HTML element where the status is displayed
        const triangle_open_cv = document.getElementById('triangle_open_cv')
        triangle_open_cv.innerHTML = requestResult.data[0]
        const square_open_cv = document.getElementById('square_open_cv')
        square_open_cv.innerHTML = requestResult.data[1]
        const circle_open_cv = document.getElementById('circle_open_cv')
        circle_open_cv.innerHTML = requestResult.data[2]

    } catch (e) {
        console.log('Error getting the shape based on OpenCV', e)
        updateStatus('Error getting the shape based on OpenCV')
    }
}

/**
 * Function to request the server to update the current
 * shape based on OpenCV.
 */
function requestShapeFromOpenCV() {
    try {
        // Make request to server
        return axios.get('/get_shape_from_opencv')
    } catch (e) {
        console.log('Error getting the status', e)
        updateStatus('Error getting the status')

    }
}


/**
 * Function to request the server to start the motor.
 */
function requestStartMotor() {
    //...
}


/**
 * Function to request the server to stop the motor.
 */
function requestStopMotor() {
    //...
}

/**
 * Update the status of the motor.
 * @param {String} status
 */
function updateMotorStatus(status) {
    // Get the HTML element where the status is displayed
    // ...
}

/**
 * Update the current shape based on distance sensor.
 */
function updateDistance() {
    // Get the HTML element where the status is displayed
    // ...
}


/**
 * Function to request the server to get the distance from
 * the rod to the ultrasonic sensor.
 */
function requestDistance() {
    //...
}


/**
 * Update the current shape based on distance sensor.
 */
function updateCurrentShapeDistance() {
    // Get the HTML element where the status is displayed
    // ...
}


/**
 * Function to request the server to get the shape based
 * on distance only.
 */
function requestShapeFromDistance() {
    //...
}
