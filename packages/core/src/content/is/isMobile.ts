/**
 * 是否为手机端
 */
 export const isMobile = () => {
    let userAgentInfo = navigator.userAgent.toLowerCase();
    let Agents = new Array('android', 'iphone', 'symbianos', 'windows phone', 'ipad', 'ipod');
    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) !== -1) {
            flag = true;
            break;
        }
    }
    return flag;
};
