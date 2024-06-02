import { Competence, type Token } from "#structures";
import type { JavaScriptTranspiler } from "../../transpiler";

export class NumberCompetence extends Competence<JavaScriptTranspiler> {
	override identifier = "akore:number";
	override pattern = /\$(number|integer)/;

	override resolve({ inside }: Token<true>) {
		return this.transpiler.number(inside);
	}
}