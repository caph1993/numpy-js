/**
 * @param {TemplateStringsArray | any[] | number | boolean} template
 * @param {...any} [variables]
 * @returns {any}
 */
declare const np: {
    (template: TemplateStringsArray | any[] | number | boolean, ...variables: any[]): any;
    NDArray: typeof NDArray;
    tolist(template: TemplateStringsArray | any[] | number | boolean, ...variables: any[]): any;
    fromlist: typeof import("./NDArray/js-interface").fromlist;
    ravel: typeof import("./NDArray/basic").ravel;
    reshape: typeof import("./NDArray/basic").reshape;
    array: typeof import("./NDArray/_globals").array;
    asarray: typeof import("./NDArray/_globals").asarray;
    sum: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    product: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    prod: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    any: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => boolean | NDArray;
    all: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => boolean | NDArray;
    max: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    min: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    argmax: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    argmin: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    mean: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    norm: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceNormKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceNormKwargs, ord?: number | import("./NDArray/kwargs").ReduceNormKwargs) => number | NDArray;
    var: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceKwargs) => number | NDArray;
    std: (arr: number | boolean | NDArray, axis?: number | import("./NDArray/kwargs").ReduceStdKwargs, keepdims?: boolean | import("./NDArray/kwargs").ReduceStdKwargs, ddof?: number | import("./NDArray/kwargs").ReduceStdKwargs) => number | NDArray;
    transpose: typeof import("./NDArray/transform").transpose;
    apply_along_axis: typeof import("./NDArray/transform").apply_along_axis;
    sort: typeof import("./NDArray/transform").sort;
    concatenate: typeof import("./NDArray/transform").concatenate;
    stack: typeof import("./NDArray/transform").stack;
    add: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    subtract: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    multiply: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    divide: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    mod: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    divide_int: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    pow: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    bitwise_or: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    bitwise_and: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    bitwise_xor: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    bitwise_shift_left: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    bitwise_shift_right: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    greater: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    less: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    greater_equal: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    less_equal: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    equal: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    not_equal: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    maximum: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    minimum: (arr: number | boolean | NDArray, other: number | NDArray, out?: NDArray) => NDArray;
    logical_or: (arr: number | boolean | NDArray, other: boolean | NDArray, out?: NDArray) => NDArray;
    logical_and: (arr: number | boolean | NDArray, other: boolean | NDArray, out?: NDArray) => NDArray;
    atan2: (y: NDArray, x: NDArray, out?: NDArray) => NDArray;
    allclose: typeof import("./NDArray/operators").allclose;
    isclose: typeof import("./NDArray/operators").isclose;
    sign: (A: NDArray, out?: NDArray) => NDArray;
    sqrt: (A: NDArray, out?: NDArray) => NDArray;
    square: (A: NDArray, out?: NDArray) => NDArray;
    exp: (A: NDArray, out?: NDArray) => NDArray;
    log: (A: NDArray, out?: NDArray) => NDArray;
    log2: (A: NDArray, out?: NDArray) => NDArray;
    log10: (A: NDArray, out?: NDArray) => NDArray;
    log1p: (A: NDArray, out?: NDArray) => NDArray;
    sin: (A: NDArray, out?: NDArray) => NDArray;
    cos: (A: NDArray, out?: NDArray) => NDArray;
    tan: (A: NDArray, out?: NDArray) => NDArray;
    asin: (A: NDArray, out?: NDArray) => NDArray;
    acos: (A: NDArray, out?: NDArray) => NDArray;
    atan: (A: NDArray, out?: NDArray) => NDArray;
    cosh: (A: NDArray, out?: NDArray) => NDArray;
    sinh: (A: NDArray, out?: NDArray) => NDArray;
    tanh: (A: NDArray, out?: NDArray) => NDArray;
    acosh: (A: NDArray, out?: NDArray) => NDArray;
    asinh: (A: NDArray, out?: NDArray) => NDArray;
    atanh: (A: NDArray, out?: NDArray) => NDArray;
    abs: (arr: number | boolean | NDArray, out?: NDArray) => NDArray;
    bitwise_not: (arr: number | boolean | NDArray, out?: NDArray) => NDArray;
    logical_not: (arr: number | boolean | NDArray, out?: NDArray) => NDArray;
    negative: (arr: number | boolean | NDArray, out?: NDArray) => NDArray;
    round: (arr: number | boolean | NDArray, decimals?: number) => NDArray;
    modules: {
        constructors: typeof import("./modules/constructors");
        grammar: typeof import("./modules/grammar");
        random: typeof import("./modules/random");
    };
    empty: typeof import("./modules/constructors").empty;
    zeros: typeof import("./modules/constructors").zeros;
    ones: typeof import("./modules/constructors").ones;
    arange: typeof import("./modules/constructors").arange;
    linspace: typeof import("./modules/constructors").linspace;
    geomspace: typeof import("./modules/constructors").geomspace;
    random: typeof import("./modules/random");
    pi: number;
    e: number;
};
import NDArray from './NDArray-class';
export { np };
//# sourceMappingURL=index.d.ts.map