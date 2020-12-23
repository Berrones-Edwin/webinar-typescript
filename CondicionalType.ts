
type DarkType = "black" | "gray";
type lightType = "pink" | "yellow" | "red";

type Status = "happy" | "sad";

type Palette<T extends Status> = T extends "sad"
    ? DarkType
    : lightType;

const palette: Palette<"sad"> = "gray"
const palette1: Palette<"happy"> = "red"