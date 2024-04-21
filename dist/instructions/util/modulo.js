"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../../classes");
const instruction_1 = require("../../classes/instruction");
class $modulo extends instruction_1.Instruction {
    name = "$modulo";
    id = "$akoreModulo";
    async parse({ parameters, total }) {
        if (!parameters[0])
            classes_1.Logger.error("At least one argument is required!", total);
        return classes_1.NodeFactory.line(await Promise.all(parameters.map(node => this.transpiler.resolveAnyOrStringNode(node))), " % ");
    }
}
exports.default = $modulo;
