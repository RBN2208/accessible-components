"use strict";(self.webpackChunk_rbn2208_accessible_webcomponents=self.webpackChunk_rbn2208_accessible_webcomponents||[]).push([[330,717],{"./dist/esm/stencil-image.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{stencil_image:()=>StencilImage});var _index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-1cf7b021.js");const StencilImage=class{constructor(hostRef){(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.imgTitle="",this.alt="",this.ariaLabel="",this.lazy="lazy",this.sources="",this.sizes="",this.cssMediaBreakpoints=""}computedImageProps(sources,sizes,mediaBps){let lastSize,lastWidth,lastHeight,lastBreakpoint;return sources.map(((src,index)=>(void 0!==sizes[index]&&(lastSize=sizes[index],lastHeight=sizes[index].split("x")[0],lastWidth=sizes[index].split("x")[1]),void 0!==mediaBps[index]&&(lastBreakpoint=mediaBps[index]),{source:src,size:sizes[index]||lastSize,width:void 0!==sizes[index]?sizes[index].split("x")[0]:lastWidth,height:void 0!==sizes[index]?sizes[index].split("x")[1]:lastHeight,breakpoints:mediaBps[index]||lastBreakpoint})))}componentDidRender(){this.element.shadowRoot.querySelectorAll("source").forEach((source=>{source.width=Number(source.dataset.width),source.height=Number(source.dataset.height)}))}formatString(str){return str.split(",").map((str=>str.trim()))}render(){const sources=this.formatString(this.sources),sizes=this.formatString(this.sizes),mediaBPs=this.formatString(this.cssMediaBreakpoints),imageProps=this.computedImageProps(sources,sizes,mediaBPs);return(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.a,null,(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.h)("picture",null,imageProps[3]&&(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.h)("source",{srcSet:imageProps[3].source,media:`(min-width: ${imageProps[2].breakpoints}px)`,"data-width":imageProps[3].width,"data-height":imageProps[3].height}),imageProps[2]&&(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.h)("source",{srcSet:imageProps[2].source,media:`(min-width: ${imageProps[1].breakpoints}px)`,"data-width":imageProps[2].width,"data-height":imageProps[2].height}),imageProps[1]&&(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.h)("source",{srcSet:imageProps[1].source,media:`(min-width: ${imageProps[0].breakpoints}px)`,"data-width":imageProps[1].width,"data-height":imageProps[1].height}),(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{class:"stencil-image",alt:this.alt||this.imgTitle,title:this.imgTitle,loading:this.lazy,src:imageProps[0].source,width:imageProps[0].width,height:imageProps[0].height,"aria-label":this.ariaLabel})))}get element(){return(0,_index_1cf7b021_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};StencilImage.style=":host{display:block;width:100%}.stencil-image{width:100%;height:auto}"}}]);