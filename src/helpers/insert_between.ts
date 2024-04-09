/**
 * Inserts a value between each pair of consecutive elements in an array.
 * @param array - The array in which to insert the value.
 * @param insertValue - The value to insert between each pair of elements.
 * @template T
 * @returns {T[]} The new array with the value inserted between each pair of elements.
 */
export function insertBetween<T>(array: T[], insertValue: T): T[] {
	return array.flatMap((value, index) =>
		index < array.length - 1 ? [value, insertValue] : [value],
	);
}
