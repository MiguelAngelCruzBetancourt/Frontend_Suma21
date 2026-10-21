/**
 * Une nombres de clase descartando valores falsy.
 * @param {...(string | false | null | undefined)} values
 * @returns {string}
 */
export function cx(...values) {
  return values.filter(Boolean).join(" ");
}
