import Vue from "vue"
import {TemplateData,GetTemplateDataHandler} from "custom-viewbox"

/**
 * 自动显示ViewBox的Header
 * 定制 Vux 的 ViewBox 组件 的 getTemplateDataHandler，使其能根据 client.showWebNavBar 和  自身是否有 header 插槽来动态决定 Vux的ViewBox的 body-padding-top 是否需要设置为 0 ；这样便不用每次使用都要单独定制了
 *
 * 备注：
 * 该 getTemplateDataHandler 会在 返回的 templateData 中用 noHeader (即：templateData.noHeader) 标识否有 header
 */
/*export default function autoDisplayHeader(templateData,vbInstance,createElement) {

  let {props = {...vbInstance.$attrs},slots = vbInstance.$slots} = templateData || {} ;
  let headerSlots = slots.header;
  let needHideWebNavBar = !(shareInst.client.showWebNavBar && headerSlots);

  if (needHideWebNavBar) {
    props.bodyPaddingTop = "0" ;
  }


  let noHeader = needHideWebNavBar || !headerSlots || headerSlots.length <= 0 ;

  return {props:props,noHeader:noHeader};
}*/



interface AutoDisplayOpts {
    hide ? : boolean | ((vbInstance:Vue,templateData:TemplateData)=>boolean);    //可选；是否隐藏 Header
    navBarHeight ? : string;     //可选；导航条的高度
    headerHeight ? : string;     //可选；默认值是 navBarHeight ; ViewBox的Header 的高度
} 


/**
 * 自动显示ViewBox的Header 的创建者
 * 定制 Vux 的 ViewBox 组件 的 getTemplateDataHandler，使其能根据 client.showWebNavBar 和  自身是否有 header 插槽来动态决定 Vux的ViewBox的 body-padding-top 是否需要设置为 0 ；这样便不用每次使用都要单独定制了
 * @param hide ? : boolean | (vbInstance,templateData)=>boolean    可选；是否隐藏 Header
 * @param navBarHeight ? : string     可选；导航条的高度
 * @param headerHeight ? : string     可选；默认值是 navBarHeight ; ViewBox的Header 的高度
 *
 *
 * 备注：
 * 该 getTemplateDataHandler 会在 返回的 templateData 中用 noHeader (即：templateData.noHeader) 标识否有 header
 */
export function createAutoDisplayHeaderDataHandler(options?:AutoDisplayOpts):GetTemplateDataHandler;