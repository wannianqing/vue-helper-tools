!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self)["vue-helper-tools"]=t()}(this,(function(){"use strict";var e={name:"CustomTable",props:{tableOpts:{type:Object,required:!0,validator:function(e){return e.hasOwnProperty("column")}},page:{type:void 0|Object,default:function(){return{}}}},data:function(){return{currentPage:1,pageObj:{pageSizes:[10,20,30],pageSize:10,total:10,layout:"total, sizes, prev, pager, next, jumper"},tableOption:{readBtn:!0,readBtnText:"查看",editBtn:!0,editBtnText:"编辑",deleteBtn:!0,deleteBtnText:"删除"}}},watch:{page:{immediate:!0,deep:!0,handler:function(e,t){this.pageObj=Object.assign({},this.pageObj,e)}},tableOpts:{immediate:!0,deep:!0,handler:function(e,t){this.tableOption=Object.assign({},this.tableOption,e),console.log(this.tableOption)}}},computed:{isPageEmpty:function(){return Object.getOwnPropertyNames(this.page).length>1}},methods:{handleSizeChange:function(e){this.$emit("changeSize",e)},handleCurrentChange:function(e){this.$emit("changeCurrent",e)},readRow:function(e){this.$emit("readBtnEvent",e)},editRow:function(e){this.$emit("editBtnEvent",e)},deleteRow:function(e){this.$emit("deleteBtnEvent",e)}}};function t(e,t,n,r,a,i,o,l,p,s){"boolean"!=typeof o&&(p=l,l=o,o=!1);var d,m="function"==typeof n?n.options:n;if(e&&e.render&&(m.render=e.render,m.staticRenderFns=e.staticRenderFns,m._compiled=!0,a&&(m.functional=!0)),r&&(m._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,p(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},m._ssrRegister=d):t&&(d=o?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),d)if(m.functional){var c=m.render;m.render=function(e,t){return d.call(t),c(e,t)}}else{var u=m.beforeCreate;m.beforeCreate=u?[].concat(u,d):[d]}return n}var n,r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function a(e){return function(e,t){return function(e,t){var a=r?t.media||"default":e,o=i[a]||(i[a]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var l=t.source;if(t.map&&(l+="\n/*# sourceURL="+t.map.sources[0]+" */",l+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===n&&(n=document.head||document.getElementsByTagName("head")[0]),n.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(l),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var p=o.ids.size-1,s=document.createTextNode(l),d=o.element.childNodes;d[p]&&o.element.removeChild(d[p]),d.length?o.element.insertBefore(s,d[p]):o.element.appendChild(s)}}}(e,t)}}var i={};var o=e,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-table-wrap"},[n("div",{staticClass:"table-wrap"},[n("el-table",e._g(e._b({},"el-table",e.$attrs,!1),e.$listeners),[e._l(e.tableOption.column,(function(t){return[t.slot||"operate"===t.prop?e._e():n("el-table-column",{key:t.label,attrs:{type:t.type,prop:t.prop,label:t.label,width:t.width,"min-width":t.minWidth,fixed:t.fixed,sortable:t.sortable,"sort-by":t.sortBy,formatter:t.formatter,align:t.align}}),e._v(" "),t.slot&&"operate"!==t.prop?n("el-table-column",{key:t.label,attrs:{type:t.type,prop:t.prop,label:t.label,width:t.width,"min-width":t.minWidth,fixed:t.fixed,sortable:t.sortable,"sort-by":t.sortBy,formatter:t.formatter,align:t.align},scopedSlots:e._u([{key:"default",fn:function(n){return[e._t(t.prop,null,{row:n.row})]}}],null,!0)}):e._e(),e._v(" "),"operate"===t.prop?n("el-table-column",{key:t.label,attrs:{type:t.type,prop:t.prop,label:t.label,width:t.width,"min-width":t.minWidth,fixed:t.fixed,sortable:t.sortable,"sort-by":t.sortBy,formatter:t.formatter,align:t.align},scopedSlots:e._u([{key:"default",fn:function(t){return[e.tableOption.readBtn?n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-view"},nativeOn:{click:function(n){return n.preventDefault(),e.readRow(t.row)}}},[e._v("\n                            "+e._s(e.tableOption.readBtnText)+"\n                        ")]):e._e(),e._v(" "),e.tableOption.editBtn?n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},nativeOn:{click:function(n){return n.preventDefault(),e.editRow(t.row)}}},[e._v("\n                            "+e._s(e.tableOption.editBtnText)+"\n                        ")]):e._e(),e._v(" "),e.tableOption.deleteBtn?n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},nativeOn:{click:function(n){return n.preventDefault(),e.deleteRow(t.row)}}},[e._v("\n                            "+e._s(e.tableOption.deleteBtnText)+"\n                        ")]):e._e()]}}],null,!0)}):e._e()]}))],2)],1),e._v(" "),e.isPageEmpty?n("div",{staticClass:"pagination-wrap",class:[e.page.align?"paginaition-wrap--"+e.page.align:""]},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pageObj.pageSizes,"page-size":e.pageObj.pageSize,layout:e.pageObj.layout,total:e.pageObj.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()])};l._withStripped=!0;var p=t({render:l,staticRenderFns:[]},(function(e){e&&e("data-v-0a3f88d0_0",{source:"\n.pagination-wrap[data-v-0a3f88d0]{\r\n    margin-top:20px;\n}\n.paginaition-wrap--center[data-v-0a3f88d0]{\r\n    text-align:center;\n}\n.paginaition-wrap--right[data-v-0a3f88d0]{\r\n    text-align:right;\n}\r\n",map:{version:3,sources:["D:\\rollup\\vue-helper-tools\\packages\\crud\\src\\index.vue"],names:[],mappings:";AA6LA;IACA,eAAA;AACA;AACA;IACA,iBAAA;AACA;AACA;IACA,gBAAA;AACA",file:"index.vue",sourcesContent:['<template>\r\n    <div class="custom-table-wrap">\r\n        <div class="table-wrap">\r\n            <el-table v-bind="$attrs" v-on="$listeners">\r\n                <template v-for="item in tableOption.column">\r\n                    <el-table-column\r\n                        v-if="!item.slot && item.prop !== \'operate\'"\r\n                        :type="item.type"\r\n                        :key="item.label"\r\n                        :prop="item.prop"\r\n                        :label="item.label"\r\n                        :width="item.width"\r\n                        :min-width="item.minWidth"\r\n                        :fixed="item.fixed"\r\n                        :sortable="item.sortable"\r\n                        :sort-by="item.sortBy"\r\n                        :formatter="item.formatter"\r\n                        :align="item.align"\r\n                    >\r\n                    </el-table-column>\r\n                    <el-table-column\r\n                        v-if="item.slot && item.prop !== \'operate\'"\r\n                        :type="item.type"\r\n                        :key="item.label"\r\n                        :prop="item.prop"\r\n                        :label="item.label"\r\n                        :width="item.width"\r\n                        :min-width="item.minWidth"\r\n                        :fixed="item.fixed"\r\n                        :sortable="item.sortable"\r\n                        :sort-by="item.sortBy"\r\n                        :formatter="item.formatter"\r\n                        :align="item.align"\r\n                    >\r\n                        <template slot-scope="scope">\r\n                            <slot :row="scope.row" :name="item.prop"></slot>\r\n                        </template>\r\n                    </el-table-column>\r\n                    <el-table-column\r\n                        v-if="item.prop === \'operate\'"\r\n                        :type="item.type"\r\n                        :key="item.label"\r\n                        :prop="item.prop"\r\n                        :label="item.label"\r\n                        :width="item.width"\r\n                        :min-width="item.minWidth"\r\n                        :fixed="item.fixed"\r\n                        :sortable="item.sortable"\r\n                        :sort-by="item.sortBy"\r\n                        :formatter="item.formatter"\r\n                        :align="item.align"\r\n                    >\r\n                        <template slot-scope="scope">\r\n                            <el-button\r\n                                v-if="tableOption.readBtn"\r\n                                @click.native.prevent="readRow(scope.row)"\r\n                                type="primary"\r\n                                size="small"\r\n                                icon="el-icon-view"\r\n                            >\r\n                                {{tableOption.readBtnText}}\r\n                            </el-button>\r\n                            <el-button\r\n                                v-if="tableOption.editBtn"\r\n                                @click.native.prevent="editRow(scope.row)"\r\n                                type="primary"\r\n                                size="small"\r\n                                icon="el-icon-edit"\r\n                            >\r\n                                {{tableOption.editBtnText}}\r\n                            </el-button>\r\n                            <el-button\r\n                                v-if="tableOption.deleteBtn"\r\n                                @click.native.prevent="deleteRow(scope.row)"\r\n                                type="danger"\r\n                                size="small"\r\n                                icon="el-icon-delete"\r\n                            >\r\n                                {{tableOption.deleteBtnText}}\r\n                            </el-button>\r\n                        </template>\r\n                    </el-table-column>\r\n                </template>\r\n            </el-table>\r\n        </div>\r\n        <div\r\n            class="pagination-wrap" \r\n            :class="[\r\n                page.align ? \'paginaition-wrap--\' + page.align : \'\',\r\n            ]"\r\n            v-if="isPageEmpty">\r\n            <el-pagination\r\n                @size-change="handleSizeChange"\r\n                @current-change="handleCurrentChange"\r\n                :current-page="currentPage"\r\n                :page-sizes="pageObj.pageSizes"\r\n                :page-size="pageObj.pageSize"\r\n                :layout="pageObj.layout"\r\n                :total="pageObj.total">\r\n            </el-pagination>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name:\'CustomTable\',\r\n    props:{\r\n        tableOpts:{\r\n            type:Object,\r\n            required:true,\r\n            validator:function(value){\r\n                return value.hasOwnProperty(\'column\')\r\n            }\r\n        },\r\n        page:{\r\n            type:Object | undefined,\r\n            default:() => {\r\n                return {}\r\n            }\r\n        }\r\n    },\r\n    data(){\r\n        return {\r\n            currentPage:1,\r\n            pageObj:{\r\n                pageSizes:[10,20,30],\r\n                pageSize:10,\r\n                total:10,\r\n                layout:"total, sizes, prev, pager, next, jumper"\r\n            },\r\n            tableOption:{\r\n                readBtn:true,\r\n                readBtnText:\'查看\',\r\n                editBtn:true,\r\n                editBtnText:\'编辑\',\r\n                deleteBtn:true,\r\n                deleteBtnText:\'删除\'\r\n            }\r\n        }\r\n    },\r\n    watch:{\r\n        page:{\r\n            immediate: true,\r\n            deep:true,\r\n            handler:function(val,oldVal){\r\n                this.pageObj = Object.assign({},this.pageObj,val)\r\n            }\r\n        },\r\n        tableOpts:{\r\n            immediate:true,\r\n            deep:true,\r\n            handler:function(val,oldVal){\r\n                this.tableOption = Object.assign({},this.tableOption,val)\r\n\r\n                console.log(this.tableOption)\r\n            }\r\n        }\r\n    },\r\n    computed:{\r\n        isPageEmpty:function(){\r\n            var arr = Object.getOwnPropertyNames(this.page);\r\n            return arr.length > 1\r\n        }\r\n    },\r\n    methods:{\r\n        /** 改变每页显示条数触发 */\r\n        handleSizeChange(v){\r\n            this.$emit(\'changeSize\',v)\r\n        },\r\n        /** 改变当前页触发 */\r\n        handleCurrentChange(v){\r\n            this.$emit(\'changeCurrent\',v)\r\n        },\r\n        /** 点击查看按钮 */\r\n        readRow(row){\r\n            this.$emit(\'readBtnEvent\',row)\r\n        },\r\n        /** 点击编辑按钮 */\r\n        editRow(row){\r\n            this.$emit(\'editBtnEvent\',row)\r\n        },\r\n        /** 点击删除按钮 */\r\n        deleteRow(row){\r\n            this.$emit(\'deleteBtnEvent\',row)\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n<style scoped>\r\n.pagination-wrap{\r\n    margin-top:20px;\r\n}\r\n.paginaition-wrap--center{\r\n    text-align:center;\r\n}\r\n.paginaition-wrap--right{\r\n    text-align:right;\r\n}\r\n</style>']},media:void 0})}),o,"data-v-0a3f88d0",false,undefined,!1,a,void 0,void 0);p.install=function(e){e.component(p.name,p)};var s=[p],d=function(e){s.forEach((function(t){e.component(t.name,t)}))};return"undefined"!=typeof window&&window.Vue&&d(window.Vue),{install:d}}));