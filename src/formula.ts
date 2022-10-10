/**
 * This feeds the parameters into the formula that determines if a cube will still be solvable after twisting a certain number of corner piece
 *
 * @param c - The total number of times any corner twisted clockwise
 * @param ɔ - The total number of times any corner twisted counter-clockwise
 * @returns A boolean that tells wether the cube is still solvable or not
 */
export function ꓭ(c: number, ɔ: number): boolean {
    return Math.floor(Math.abs(Math.cos(((c - ɔ) * Math.PI) / 3))) === 1;
}
