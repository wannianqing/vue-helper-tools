<template>
    <div class="custom-table-wrap">
        <div class="table-wrap">
            <el-table v-bind="$attrs" v-on="$listeners">
                <template v-for="item in tableOption.column">
                    <el-table-column
                        v-if="!item.slot && item.prop !== 'operate'"
                        :type="item.type"
                        :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                        :min-width="item.minWidth"
                        :fixed="item.fixed"
                        :sortable="item.sortable"
                        :sort-by="item.sortBy"
                        :formatter="item.formatter"
                        :align="item.align"
                    >
                    </el-table-column>
                    <el-table-column
                        v-if="item.slot && item.prop !== 'operate'"
                        :type="item.type"
                        :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                        :min-width="item.minWidth"
                        :fixed="item.fixed"
                        :sortable="item.sortable"
                        :sort-by="item.sortBy"
                        :formatter="item.formatter"
                        :align="item.align"
                    >
                        <template slot-scope="scope">
                            <slot :row="scope.row" :name="item.prop"></slot>
                        </template>
                    </el-table-column>
                    <el-table-column
                        v-if="item.prop === 'operate'"
                        :type="item.type"
                        :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                        :min-width="item.minWidth"
                        :fixed="item.fixed"
                        :sortable="item.sortable"
                        :sort-by="item.sortBy"
                        :formatter="item.formatter"
                        :align="item.align"
                    >
                        <template slot-scope="scope">
                            <el-button
                                v-if="tableOption.readBtn"
                                @click.native.prevent="readRow(scope.row)"
                                type="primary"
                                size="small"
                                icon="el-icon-view"
                            >
                                {{tableOption.readBtnText}}
                            </el-button>
                            <el-button
                                v-if="tableOption.editBtn"
                                @click.native.prevent="editRow(scope.row)"
                                type="primary"
                                size="small"
                                icon="el-icon-edit"
                            >
                                {{tableOption.editBtnText}}
                            </el-button>
                            <el-button
                                v-if="tableOption.deleteBtn"
                                @click.native.prevent="deleteRow(scope.row)"
                                type="danger"
                                size="small"
                                icon="el-icon-delete"
                            >
                                {{tableOption.deleteBtnText}}
                            </el-button>
                        </template>
                    </el-table-column>
                </template>
            </el-table>
        </div>
        <div
            class="pagination-wrap" 
            :class="[
                page.align ? 'paginaition-wrap--' + page.align : '',
            ]"
            v-if="isPageEmpty">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageObj.pageSizes"
                :page-size="pageObj.pageSize"
                :layout="pageObj.layout"
                :total="pageObj.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name:'KsCrud',
    props:{
        tableOpts:{
            type:Object,
            required:true,
            validator:function(value){
                return value.hasOwnProperty('column')
            }
        },
        page:{
            type:Object | undefined,
            default:() => {
                return {}
            }
        }
    },
    data(){
        return {
            currentPage:1,
            pageObj:{
                pageSizes:[10,20,30],
                pageSize:10,
                total:10,
                layout:"total, sizes, prev, pager, next, jumper"
            },
            tableOption:{
                readBtn:true,
                readBtnText:'查看',
                editBtn:true,
                editBtnText:'编辑',
                deleteBtn:true,
                deleteBtnText:'删除'
            }
        }
    },
    watch:{
        page:{
            immediate: true,
            deep:true,
            handler:function(val,oldVal){
                this.pageObj = Object.assign({},this.pageObj,val)
            }
        },
        tableOpts:{
            immediate:true,
            deep:true,
            handler:function(val,oldVal){
                this.tableOption = Object.assign({},this.tableOption,val)

                console.log(this.tableOption)
            }
        }
    },
    computed:{
        isPageEmpty:function(){
            var arr = Object.getOwnPropertyNames(this.page);
            return arr.length > 1
        }
    },
    methods:{
        /** 改变每页显示条数触发 */
        handleSizeChange(v){
            this.$emit('changeSize',v)
        },
        /** 改变当前页触发 */
        handleCurrentChange(v){
            this.$emit('changeCurrent',v)
        },
        /** 点击查看按钮 */
        readRow(row){
            this.$emit('readBtnEvent',row)
        },
        /** 点击编辑按钮 */
        editRow(row){
            this.$emit('editBtnEvent',row)
        },
        /** 点击删除按钮 */
        deleteRow(row){
            this.$emit('deleteBtnEvent',row)
        }
    }
}
</script>
<style scoped>
.pagination-wrap{
    margin-top:20px;
}
.paginaition-wrap--center{
    text-align:center;
}
.paginaition-wrap--right{
    text-align:right;
}
</style>