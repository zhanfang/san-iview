/**
 * @file 工具
 * @author zhanfang(fzhanxd@gmail.com)
 */
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

// getStyle
export function getStyle(element, styleName) {
    if (!element || !styleName) {
        return null;
    }

    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }

    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    }
    catch (e) {
        return element.style[styleName];
    }
}
