export default class {


    /**
     * 返回指定的变量是否为空指针（NULL）。
     * @param target
     * @returns {boolean}
     */
    static isNull(target) {
        return target === null || target === undefined;
    }

    /**
     * 返回指定的变量是否为空。
     * @param target
     * @returns {boolean}
     */
    static isEmpty(target) {
        return typeof (target) === "string" ? target == "" || target === null : target === undefined || target === null || Object.keys(target).length == 0;
    }

}