/**
 * Nullable
 * Permite eliminar de un tipo de union
 * los valores  null o undefined
 */

type Choice = "left" | "right" | "center" | undefined | null;

type validChoice = NonNullable<Choice>;