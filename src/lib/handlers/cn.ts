// // Importing necessary modules from 'clsx' and 'tailwind-merge' libraries
// import { type ClassValue, clsx } from 'clsx'
// import { twMerge } from 'tailwind-merge'

// /**
//  * Combines and merges Tailwind CSS class names with other class names.
//  * @param inputs - Class values to be combined. These can be strings, arrays of strings, or objects where keys are class names and values are booleans.
//  * @returns A string containing the merged and optimized class names.
//  */
// export function cn(...inputs: ClassValue[]) {
//   /**
//    * Merging the class values using clsx() function from 'clsx' library
//    * clsx() combines multiple class names, arrays, objects conditionally based on truthiness
//    * The result is passed to twMerge() function from 'tailwind-merge' library to merge Tailwind CSS
//    * twMerge() is useful for optimizing class names in a Tailwind CSS context
//    */
//   return twMerge(clsx(inputs))
// }
