[**AKORE v1.8.3**](../README.md) • **Docs**

***

[AKORE v1.8.3](../globals.md) / DeclareCompetence

# Class: DeclareCompetence

Abstract class representing a competence within the transpiler.

## Extends

- [`Competence`](Competence.md)\<[`JavaScriptTranspiler`](JavaScriptTranspiler.md)\>

## Constructors

### new DeclareCompetence()

> **new DeclareCompetence**(`t`): [`DeclareCompetence`](DeclareCompetence.md)

Creates a new competence.

#### Parameters

• **t**: [`JavaScriptTranspiler`](JavaScriptTranspiler.md)

The transpiler instance that this competence belongs to.

#### Returns

[`DeclareCompetence`](DeclareCompetence.md)

#### Inherited from

[`Competence`](Competence.md).[`constructor`](Competence.md#constructors)

#### Source

[structures/competence.ts:55](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/structures/competence.ts#L55)

## Properties

### identifier

> **identifier**: `string` = `"akore:declare"`

The unique identifier for this competence.

#### Overrides

[`Competence`](Competence.md).[`identifier`](Competence.md#identifier)

#### Source

[common/javascript/competences/declare.ts:6](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/common/javascript/competences/declare.ts#L6)

***

### ~~pattern~~

> `readonly` **pattern**: `RegExp`

The regular expression pattern that this competence matches.

#### Deprecated

#### Inherited from

[`Competence`](Competence.md).[`pattern`](Competence.md#pattern)

#### Source

[structures/competence.ts:43](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/structures/competence.ts#L43)

***

### patterns

> **patterns**: `object`

The regular expressions patterns that this competence matches.

#### closer

> **closer**: `RegExp`

#### foremost

> **foremost**: `RegExp`

#### opener

> **opener**: `RegExp`

#### Overrides

[`Competence`](Competence.md).[`patterns`](Competence.md#patterns)

#### Source

[common/javascript/competences/declare.ts:7](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/common/javascript/competences/declare.ts#L7)

***

### transpiler

> `protected` **transpiler**: [`JavaScriptTranspiler`](JavaScriptTranspiler.md)

The transpiler instance that this competence belongs to.

#### Inherited from

[`Competence`](Competence.md).[`transpiler`](Competence.md#transpiler)

#### Source

[structures/competence.ts:46](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/structures/competence.ts#L46)

## Methods

### resolve()

> **resolve**(`__namedParameters`): [`SequenceNode`](SequenceNode.md)\<`object`\>

Resolves a token into a node.

#### Parameters

• **\_\_namedParameters**: [`Token`](../interfaces/Token.md)\<`true`\>

The token to resolve.

#### Returns

[`SequenceNode`](SequenceNode.md)\<`object`\>

The node resulting from the resolution of the token.

##### elements

> **elements**: ([`SequenceNode`](SequenceNode.md)\<`object`\> \| [`EscapeNode`](EscapeNode.md)\<`"="`\> \| [`EscapeNode`](EscapeNode.md)\<\`var $\{string\}\`\>)[]

##### operator

> **operator**: `string` = `" "`

#### Overrides

[`Competence`](Competence.md).[`resolve`](Competence.md#resolve)

#### Source

[common/javascript/competences/declare.ts:13](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/common/javascript/competences/declare.ts#L13)

***

### splitByDelimiter()

> `protected` **splitByDelimiter**(`inside`, `delimiter`): `Generator`\<`string`, `any`, `unknown`\>

Splits the inside string by a specified delimiter, accounting for nested structures defined by opener and closer patterns.

#### Parameters

• **inside**: `string`

The string to split.

• **delimiter**: `string`= `";"`

The delimiter to split the string by. Defaults to ";".

#### Returns

`Generator`\<`string`, `any`, `unknown`\>

#### Inherited from

[`Competence`](Competence.md).[`splitByDelimiter`](Competence.md#splitbydelimiter)

#### Yields

An array of substrings split by the delimiter.

#### Source

[structures/competence.ts:72](https://github.com/Pavez7274/akore//blob/9379e12b9c8fd6ab82cc6e06af5ef6733f206841/src/structures/competence.ts#L72)