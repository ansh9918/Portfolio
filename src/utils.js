import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using `clsx` and merges them with `twMerge`.
 * @param {...any} inputs - Class names to combine.
 * @returns {string} - The merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
