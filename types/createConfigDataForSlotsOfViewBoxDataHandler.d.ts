import {TemplateData,GetTemplateDataHandler} from "custom-viewbox"

/**
 * 创建 configDataForSlotsOfViewBox
 * @param tempDatas : {header : TempData  header 的模板数据,bottom : TempData  bottom 的模板数据}
 *
 * @property tempDatas.header : TempData   header 的模板数据
 * @property tempDatas.bottom : TempData   bottom 的模板数据
 * @returns getTemplateDataHandler
 *
 * configDataForSlotsOfViewBox
 * 当 ByViewBox 的 header 和 bottom 都只有一个时，给 ByViewBox 的 header 和 bottom slots 配置 模板数据
 */
export function createConfigDataForSlotsOfViewBoxDataHandler(tempDatas:{header?:TemplateData,bottom?:TemplateData}):GetTemplateDataHandler;








