// ------------------------------------------------------------------------------------------
/**
 * types for the assertValue function.
 */
type assertValueType<T> = {
  value: T | undefined
  errorMessage: string
}
/**
 * Asserts the existence of a value and returns it.
 * Throws an error with a custom error message if the value is undefined.
 *
 * @template T - The type of the value being asserted.
 * @param {assertValueType<T>} options - Object containing the value and an error message.
 * @returns {T} - The asserted value.
 * @throws {Error} - Throws an error if the value is undefined.
 */
const assertValue = <T>({ value, errorMessage }: assertValueType<T>): T => {
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
