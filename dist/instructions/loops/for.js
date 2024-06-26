"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../../classes");
const instruction_1 = require("../../classes/instruction");
class $for extends instruction_1.Instruction {
    name = "$for";
    id = "$akoreFor";
    async parse({ parameters }) {
        return classes_1.NodeFactory.controlFlow([
            {
                keyword: "for",
                condition: classes_1.NodeFactory.line([
                    await this.transpiler.resolveExpressionTypeNode(parameters[0]),
                    await this.transpiler.resolveConditionTypeNode(parameters[1]),
                    await this.transpiler.resolveExpressionTypeNode(parameters[2]),
                ], "; "),
                body: await this.transpiler.resolveProgramTypeNode(parameters[3]),
            },
        ]);
    }
}
exports.default = $for;
