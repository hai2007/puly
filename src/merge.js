import { isObject, isArray } from "@hai2007/tool/type";
import { setValue, getValue } from '@hai2007/algorithm/value';

/**
 * 合并配置项
 */

export default function (option, newOption) {

    (function doMerge(express, source) {

        for (let key in source) {

            let newExpress = express + "['" + key + "']";

            // 如果是对象且不说数组
            // 需要进一步深入
            if (isObject(source[key]) && !isArray(source[key])) {
                if (!getValue(option, newExpress)) {
                    setValue(option, newExpress, {});
                }
                doMerge(newExpress, source[key]);
            }

            // 否则直接合并即可
            else {
                setValue(option, newExpress, source[key]);
            }

        }

    })("", newOption);

    return option;
};
