# 极简组件使用文档



#### ks-crud表格

##### 基础表格

![image-20210721164722630](D:\vue-project\01fengzhuang-pj\组件文档.assets\image-基础表格.png)

使用组件，`data`和`tableOpts`是必传属性， `data`为数据内容，`tableOpts`是一个对象，对象必须有colmun属性用于配置表头及表格行的各种属性

```vue
<template>
  <div>
    <ks-crud
      :data="tableData"
      :tableOpts="tableOpts"
    ></ks-crud>
  </div>
</template>
<script>
	export default {
        data(){
            return {
                tableData: [
                  {name:'张三',sex:'男',job:'木匠',status:1},
                  {name:'小丽',sex:'女',job:'',status:2}
                ],
                tableOpts:{
                  column:[
                    { label:'姓名',prop:'name' },
                    { label:'性别',prop:'sex' },
                    { label:'职业',prop:'job' },
                    { label:'操作',prop:'operate' }
                  ]
                }
            }
        }
    }
</script>
```

##### 带分页表格

![image-带分页](D:\vue-project\01fengzhuang-pj\组件文档.assets\image-带分页.png)

如果想要你的表格带上分页，你可以配置`page`属性，你可以在page中配置分页的位置、分页每页条数等，具体page可配置的属性请查看 下方 ks-crud属性配置文档

```vue
<template>
  <div>
    <ks-crud
      :data="tableData"
      :tableOpts="tableOpts"
      :page.sync="page"
    ></ks-crud>
  </div>
</template>
<script>
	export default {
        data(){
            return {
                tableData: [
                  {name:'张三',sex:'男',job:'木匠',status:1},
                  {name:'小丽',sex:'女',job:'',status:2}
                ],
                tableOpts:{
                  column:[
                    { label:'姓名',prop:'name' },
                    { label:'性别',prop:'sex' },
                    { label:'职业',prop:'job' },
                    { label:'操作',prop:'operate' }
                  ]
                },
                page:{
                    total:20
                }
            }
        }
    }
</script>
```

##### 可配置的操作按钮

![image-20210721170653286](D:\vue-project\01fengzhuang-pj\组件文档.assets\image-20210721170653286.png)

你也许希望你的按钮按照你希望的方式展示，你可以在`tableOpts`中配置某个按钮是否显示或者某个按钮显示的文字是什么

```vue
<template>
  <div>
    <ks-crud
      :data="tableData"
      :tableOpts="tableOpts"
      :page.sync="page"
    ></ks-crud>
  </div>
</template>
<script>
	export default {
        data(){
            return {
                tableData: [
                	{name:'张三',sex:'男',job:'木匠',status:1},
                  	{name:'小丽',sex:'女',job:'',status:2}
                ],
                tableOpts:{
                  	readBtn:false,		// 不显示查看按钮
    				editBtnText:'自定义文字',	//更改编辑按钮的文字
                  	column:[
                    	{ label:'姓名',prop:'name' },
                    	{ label:'性别',prop:'sex' },
                    	{ label:'职业',prop:'job' },
                    	{ label:'操作',prop:'operate' }
                  	]
                },
                page:{
                    total:20
                }
            }
        }
    }
</script>
```

##### 插槽方式使用

![image-20210721173315896](D:\vue-project\01fengzhuang-pj\组件文档.assets\image-20210721173315896.png)

有时候，服务端返回给我们的数据是枚举数字值，我们需要将枚举数字值显示成对应的中文文案，如上图，状态栏的字段值是 1、2 显示成对应的 单身、已婚

```vue
<template>
  <div>
    <ks-crud
      :data="tableData"
      :tableOpts="tableOpts"
    >
      <template slot-scope="scope" slot="status">
        <p>{{scope.row.status | statusFormat}}</p>
      </template>
    </ks-crud>
  </div>
</template>
<script>
	export default {
        data(){
            return {
                tableData: [
                	{name:'张三',sex:'男',job:'木匠',status:1},
                  	{name:'小丽',sex:'女',job:'',status:2}
                ],
                tableOpts:{
                  	column:[
                        { label:'姓名',prop:'name' },
                        { label:'性别',prop:'sex' },
                        { label:'职业',prop:'job' },
                        { label:'状态',prop:'status',slot:true },
                        { label:'操作',prop:'operate' }
                  	]
                }
            }
        },
        filters:{
            statusFormat(v){
              switch(v){
                case 1:
                  return '单身';
                case 2:
                  return '已婚';
              }
            }
        }
    }
</script>
```

##### 固定列、列宽度等配置

![image-20210721172526171](D:\vue-project\01fengzhuang-pj\组件文档.assets\image-20210721172526171.png)

当表格项过多宽度不够时，可配置固定列，用滚动条的方式查看。如下代码可以发现，宽度、固定列等都是在`column`属性中配置的，具体可查看下方ks-crud属性配置文档

```vue
<template>
  <div>
    <ks-crud
      :data="tableData"
      :tableOpts="tableOpts"
      :page.sync="page"
    ></ks-crud>
  </div>
</template>
<script>
	export default {
        data(){
            return {
                tableData: [
                	{name:'张三',sex:'男',job:'木匠',age:22,address:'深圳',emotion:'单身',height:'174cm',weight:'50kg'},
    				{name:'小丽',sex:'女',job:'美甲师',age:22,address:'深圳',emotion:'单身',height:'174cm',weight:'50kg'}
                ],
                tableOpts:{
                  	readBtn:false,		// 不显示查看按钮
    				editBtnText:'自定义文字',	//更改编辑按钮的文字
                  	column:[
                        { label:'姓名',prop:'name',width:'300',fixed:'left' },
                        { label:'性别',prop:'sex',width:'150', },
                        { label:'职业',prop:'job',width:'150', },
                        { label:'年龄',prop:'age',width:'150', },
                        { label:'住址',prop:'address',width:'300', },
                        { label:'情感状态',prop:'emotion',width:'300', },
                        { label:'身高',prop:'height',width:'300', },
                        { label:'体重',prop:'weight',width:'150', },
                        { label:'操作',prop:'operate',width:'300',fixed:'right' }
                  	]
                },
                page:{
                    total:20
                }
            }
        }
    }
</script>
```

##### 带复选框表格

![image-20210722091718386](D:\vue-project\01fengzhuang-pj\组件文档.assets\image-复选框.png)

如果你的表格需要复选框，你可以在column中添加一条 type类型为selection的对象选项，配合 @selection-change触发，可获得你选中的数据

```vue
<template>
  <div>
    <mini-table
      :data="tableData"
      :tableOpts="tableOpts"
      :page.sync="page"
       @selection-change="handleSelectionChange"
    >
    </mini-table>
  </div>
</template>
<script>
	export default {
        data(){
            return {
                tableData: [
                	{name:'张三',sex:'男',job:'木匠',status:1},
                  	{name:'小丽',sex:'女',job:'',status:2}
                ],
                tableOpts:{
                  	column:[
                    	{ type:"selection" },
                        { label:'姓名',prop:'name' },
                        { label:'性别',prop:'sex' },
                        { label:'职业',prop:'job' },
                        { label:'状态',prop:'status',slot:true },
                        { label:'操作',prop:'operate' }
                  	]
                }
            }
        },
        methods:{
            handleSelectionChange(val){
                console.log(val)
            }
        }
    }
</script>
```



##### ks-crud属性配置文档

**tableOpts attributes**

| 属性          | 说明               | 类型    | 可选值            | 默认值 |
| ------------- | ------------------ | ------- | ----------------- | ------ |
| readBtn       | 控制显示查看按钮   | Boolean | 非必填 true/false | true   |
| readBtnText   | 自定义查看按钮文字 | String  | 非必填            | 查看   |
| editBtn       | 控制显示编辑按钮   | Boolean | 非必填 true/false | true   |
| editBtnText   | 自定义编辑按钮文字 | String  | 非必填            | 编辑   |
| deleteBtn     | 控制显示删除按钮   | Boolean | 非必填 true/false | true   |
| deleteBtnText | 自定义删除按钮文字 | String  | 非必填            | 删除   |
| column        | 表头及行配置集合   | Array   | 必填              |        |

**column 对象属性**

| 属性     | 说明                                  | 类型           | 可选值                   | 默认值 |
| -------- | ------------------------------------- | -------------- | ------------------------ | ------ |
| label    | 显示的标题                            | String         |                          |        |
| prop     | 对应列内容的字段名                    | String         |                          |        |
| slot     | 是否开启插槽                          | Boolean        | 非必填                   |        |
| width    | 指定列的宽度                          | string         |                          |        |
| flxed    | 列是否固定在左侧或右侧                | string         | 非必填 left/right        |        |
| align    | 列的对齐方式                          | String         | 非必填 left/center/right |        |
| sortable | 对应列是否可排序，用法继承自elementui | Boolean,String | true/false/'custom'      | false  |

**page 属性配置**

| 属性      | 说明               | 类型   | 可选                     | 默认值                                    |
| --------- | ------------------ | ------ | ------------------------ | ----------------------------------------- |
| align     | 分页位置           | String | 非必填 center/left/right | left                                      |
| pageSize  | 每页显示条数       | Number | 非必填                   | 10                                        |
| pageSizes | 可选的每页显示条数 | Array  | 非必填                   | [10,20,30]                                |
| total     | 总条数             | Number | 必填                     |                                           |
| layout    | 分页包含包含功能   | String | 非必填，用法同elementui  | "total, sizes, prev, pager, next, jumper" |



**方法** 继承ks-ui的table所有方法，另增加下列方法

| 方法名         | 说明                                   | 参数 |
| -------------- | -------------------------------------- | ---- |
| readBtnEvent   | 点击查看按钮，返回点选的对应数据       |      |
| editBtnEvent   | 点击编辑按钮，返回点选的对应数据       |      |
| deleteBtnEvent | 点击删除按钮，返回点选的对应数据       |      |
| changeSize     | 改变每页显示条数时触发，返回每页条数值 |      |
| changeCurrent  | 改变当前页时触发，返回当前页           |      |



