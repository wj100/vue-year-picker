# vue-year-picker  

> 仿ant风格年份选择器
>
> ![image](https://user-images.githubusercontent.com/49010296/133737321-f0068d26-6e4f-4f10-a4eb-33f0f898f359.png)


## 使用方法

###  1. 安装至你的项目



```bash
npm install --save vue-year-picker
```

```js
import Vue from 'vue';
import yearPicker from 'vue-year-picker'

Vue.use(yearPicker);
```

### 2. 组件中使用

```html
<year-picker
             dark 
             v-model="year" 
             :year-disable="'no'"
             @input="handlerInput" 
             />
```

```js
export default {
  name: 'demo',
  data() {
    return {
      year: ''
    }
  },
  methods: {
    handlerInput(v) {
      console.log('选中的年份',v)
    }
  }
}
```

### 3.Attributes

|     参数     |  类型   |                    描述                     |
| :----------: | :-----: | :-----------------------------------------: |
|     dark     | Boolean |     默认false，设置为true时开启深色模式     |
| year-disable | String  | 'after'=禁用今年以后，'before'=禁用今年以前 |

## 4.Events

| 事件名 | 说明                 | 参数  |
| :----: | -------------------- | ----- |
| input  | 当用户选中年份时触发 | value |
