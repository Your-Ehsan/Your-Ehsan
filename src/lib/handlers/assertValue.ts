// ------------------------------------------------------------------------------------------
/**
 * types for the assertValue function.
 */
type assertValueType = {
  value: string | undefined
  errorMessage: string
}
/**
 * Asserts the existence of a value and returns it.
 * Throws an error with a custom error message if the value is undefined.
 *
 * @param {assertValueType<T>} options - Object containing the value and an error message.
 * @returns {string} - The asserted value.
 * @throws {Error} - Throws an error if the value is undefined.
 */
function assertValue({value, errorMessage}: assertValueType) {
  // Check if the value is undefined
  if (value === undefined) {
    // Throw an error with the provided error message
    throw new Error(errorMessage)
  }

  // Return the asserted value
  return value
}

export default assertValue
// ------------------------------------------------------------------------------------------
