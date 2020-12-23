/**
 * Records
 * Construye un objeto a partir de una union y un tipo
 */

type sizes = "small" | "medium" | "large";

type EurSizes = Record<sizes, string>;
type UKSizes = Record<sizes, number>;