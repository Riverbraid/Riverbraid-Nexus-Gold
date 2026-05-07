export const PETAL = "Nexus-Gold";
export const INVARIANT = "NEXUS_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "nexus-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Nexus-Gold" &&
    input.petal === "Nexus-Gold" &&
    input.ring === 1 &&
    input.invariant === "NEXUS_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "nexus-gold:STATIONARY" : "nexus-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
