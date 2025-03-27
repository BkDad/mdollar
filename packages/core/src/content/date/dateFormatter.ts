
/**
     * @desc 日期时间格式化
     
     * @param {String | Date} date 需要格式化的日期
     
     * @param {String} format 格式化字符串(y-m-d h:i:s)
     * format的格式可由（y m d h i s）组合，如：y-m，y-m-d，y年m月，h:i，y-m-d h:i 等
     
     * @param {Number} type 日期类型 1~4 
     * 1-date的格式类型：日期字符串(2017/12/04 12:12:12) 
     * 2-date的格式类型：时间戳(1603676514690) 
     * 3-date的格式类型：日期字符串，无连接符(20171204121212) 
     * 4-date的格式类型：new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间))

     * @param {Boolean} isMs 时间戳精度是否为毫秒，默认为true（当精度为秒时传false），type=2时有效
 **/
export const dateFormatter = (date: string | Date, format: string, type = 1, isMs = true) => {
    const _formatDate = (formatStr: string, fdate: any, type = 1, isMs: boolean) => {
        if (!fdate) return '';
        let fTime, fStr = 'ymdhis';
        if (type === 4) {
            fTime = fdate;
        } else {
            fdate = fdate.toString()
            if (~fdate.indexOf('.')) {
                fdate = fdate.substring(0, fdate.indexOf('.'));
            }
            fdate = fdate.replace('T', ' ').replace(/\-/g, '/');
            if (!formatStr)
                formatStr = "y-m-d h:i:s";
            if (fdate) {
                if (type === 2) {
                    fdate = isMs ? Number(fdate) : Number(fdate) * 1000
                }
                fTime = new Date(fdate);
            } else {
                fTime = new Date();
            }
        }
        let month = fTime.getMonth() + 1;
        let day = fTime.getDate();
        let hours = fTime.getHours();
        let minu = fTime.getMinutes();
        let second = fTime.getSeconds();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hours = hours < 10 ? ('0' + hours) : hours;
        minu = minu < 10 ? '0' + minu : minu;
        second = second < 10 ? '0' + second : second;
        let formatArr = [
            fTime.getFullYear().toString(),
            month.toString(),
            day.toString(),
            hours.toString(),
            minu.toString(),
            second.toString()
        ]
        for (let i = 0; i < formatArr.length; i++) {
            formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
        }
        return formatStr;
    }
    /**
       * @desc 格式化时间
       * @param timeStr 时间字符串 20191212162001
       * @param formatStr 需要的格式 如 y-m-d h:i:s | y/m/d h:i:s | y/m/d | y年m月d日 等
       **/
    const _formatTimeStr = (timeStr: string, formatStr: string): any => {
        if (!timeStr) return;
        timeStr = timeStr.toString()
        if (timeStr.length === 14) {
            let timeArr = timeStr.split('')
            let fStr = 'ymdhis'
            if (!formatStr) {
                formatStr = 'y-m-d h:i:s'
            }
            let formatArr = [
                [...timeArr].splice(0, 4).join(''),
                [...timeArr].splice(4, 2).join(''),
                [...timeArr].splice(6, 2).join(''),
                [...timeArr].splice(8, 2).join(''),
                [...timeArr].splice(10, 2).join(''),
                [...timeArr].splice(12, 2).join('')
            ]
            for (let i = 0; i < formatArr.length; i++) {
                formatStr = formatStr.replace(fStr.charAt(i), formatArr[i])
            }
            return formatStr
        }
        return timeStr
    }
    let formatDate = ""
    if (type === 3) {
        formatDate = _formatTimeStr(date as string, format)
    } else {
        formatDate = _formatDate(format, date, type, isMs)
    }
    return formatDate;
}

