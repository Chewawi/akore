import $function from "./instructions/types/function";
import $string from "./instructions/types/string";
import $object from "./instructions/types/object";
import $array from "./instructions/types/array";
import $null from "./instructions/types/null";
import $increment from "./instructions/variables/increment";
import $call from "./instructions/variables/call";
import $get from "./instructions/variables/get";
import $var from "./instructions/variables/var";
import $escape from "./instructions/escape";
import $print from "./instructions/print";
import $new from "./instructions/new";
import $if from "./instructions/if";
import $modulo from "./instructions/util/modulo";
import $multi from "./instructions/util/multi";
import $sum from "./instructions/util/sum";
import $sub from "./instructions/util/sub";
import $continue from "./instructions/loops/continue";
import $while from "./instructions/loops/while";
import $break from "./instructions/loops/break";
import $for from "./instructions/loops/for";
export declare const BasicInstructions: {
    $increment: typeof $increment;
    $function: typeof $function;
    $continue: typeof $continue;
    $string: typeof $string;
    $object: typeof $object;
    $modulo: typeof $modulo;
    $escape: typeof $escape;
    $multi: typeof $multi;
    $break: typeof $break;
    $array: typeof $array;
    $print: typeof $print;
    $while: typeof $while;
    $null: typeof $null;
    $call: typeof $call;
    $sum: typeof $sum;
    $sub: typeof $sub;
    $new: typeof $new;
    $for: typeof $for;
    $get: typeof $get;
    $var: typeof $var;
    $if: typeof $if;
};
export * from "./classes/";
