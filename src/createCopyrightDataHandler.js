/**
 * 版权的getTemplateDataHandler 的创建函数
 * @param copyrightOptions : Object   版权的默认配置对象；该配置对象里包含的配置项 均可以在 ByViewBox 的 props 上进行配置；只有当 ByViewBox 没有设置对应的 props 时，才会使用该配置选项的相应的配置项
 * @returns getTemplateDataHandler   返回版权的 getTemplateDataHandler ；
 *
 *
 * copyrightOptions 中可配置的项如下：
 * @param copyright : CreateElementTag   必选；版权组件 或 组件名；与 createElement() 第一个参数类型相同，可以是已注册的组件的名字，可以是组件的选项，也可以是函数组件； 
 * @param showCopyright ?: boolean   可选；默认值：false ； 是否显示 版权
 * @param hideWhenHaveBottom ?: boolean   可选；默认值：true ； 当 ViewBox 有 bottom slot 时，是否要隐藏 版权；
 * @param headerHeight ?: string    可选；默认值："46px" ； ViewBox 的 header slot 的 css 高度；
 * @param copyrightHeight ?: string    可选；默认值："46px" ； 版权 的 css 高度；
 * @param copyrightDownOffset ?: string    可选；默认值："0px" ； 版权 的向下偏移量；
 * @param copyrightUpOffset ?: string    可选；默认值："0px" ； 版权 的向上偏移量；
 *
 *
 * 注意：
 * - ByViewBox 有 与 copyrightOptions中所有可配置的项 相对应的 props ；而且这些 props 支持驼峰式 和 中划线式 两种写法；
 * - 传给createCopyrightDataHandler的 copyrightOptions 配置项是全局的，默认的配置项；只有在没有设置 ByViewBox 相应的 props 时才会生效；即版本的配置优先级如下： ByViewBox 的 props > copyrightOptions，
 */
export function createCopyrightDataHandler({copyright:Copyright,showCopyright = false,hideWhenHaveBottom = true,headerHeight = "46px",copyrightHeight = "46px",copyrightDownOffset = "0px",copyrightUpOffset = "0px"}) {

  let autoDisplayHeader = function (templateData,vbInstance,createElement) {

    let {props = {...vbInstance.$attrs},slots = vbInstance.$slots} = templateData || {} ;

    let formatObjects = [{separator:"-",caseType:"L"},{separator:"-",caseType:"U"},{separator:"-",caseType:"N"},{caseType:"N"}];


    let finalShowCopyright = props.findValueForKeyFormats("showCopyright",formatObjects);
    if (finalShowCopyright == null) {
      finalShowCopyright = showCopyright ;
    }


    let finalHideWhenHaveBottom = props.findValueForKeyFormats("hideWhenHaveBottom",formatObjects);
    if (finalHideWhenHaveBottom == null) {
      finalHideWhenHaveBottom = hideWhenHaveBottom ;
    }




    let {header = [],bottom = [],default:defaultSlot = []} = slots;


    if (finalHideWhenHaveBottom && slots.bottom) {
      finalShowCopyright = false;
    }




    if (finalShowCopyright) {

      let finalHeaderHeight = "0px";

      if (!templateData.noHeader) {

        finalHeaderHeight = props.findValueForKeyFormats("headerHeight",formatObjects);
        if (finalHeaderHeight == null) {
          finalHeaderHeight = headerHeight;
        }

      }




      let finalCopyrightHeight = props.findValueForKeyFormats("copyrightHeight",formatObjects);
      if (finalCopyrightHeight == null) {
        finalCopyrightHeight = copyrightHeight;
      }



      let finalCopyrightDownOffset = props.findValueForKeyFormats("copyrightDownOffset",formatObjects);
      if (finalCopyrightDownOffset == null) {
        finalCopyrightDownOffset = copyrightDownOffset;
      }


      let finalCopyrightUpOffset = props.findValueForKeyFormats("copyrightUpOffset",formatObjects);
      if (finalCopyrightUpOffset == null) {
        finalCopyrightUpOffset = copyrightUpOffset;
      }



      let style = {
        minHeight:`calc((((100% - ${finalHeaderHeight}) - ${finalCopyrightHeight}) + ${finalCopyrightDownOffset}) - ${finalCopyrightUpOffset})`
      };

      let defaultSlotsBox = createElement("div", {'class':"view-box-default-slots",style},[...defaultSlot]);
      let copyrightVN = createElement(Copyright);
      defaultSlot = [defaultSlotsBox,copyrightVN];

      slots.default = defaultSlot;
    }


    return {props:props,slots:slots};
  }



  return autoDisplayHeader;

}
