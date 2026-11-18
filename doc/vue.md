# 基础编码与 Vue 组件规范

本规范适用于项目根目录及其所有子目录。

## 三、基础编码规范

- 如果使用模拟数据，禁止新增仅用于承载模拟数据的中间变量；直接给现有目标字段赋值。例如 `list` 需要模拟数据时，直接赋值给 `list`。
- 如果服务端定义的字段与本地不一致，禁止做字段映射，直接修改为使用服务端字段。
- 本项目使用 uview-plus，输入校验必须使用 UI 组件库的表单校验机制；先检查现有表单实现。
- 组件中使用模板 `ref` 时，其值必须以 `Ref` 结尾。例如 `ref="abc"` 应改为 `ref="abcRef"`，相关引用同步更新。
- 涉及跨端行为时，先检查现有条件编译和平台实现，按实际目标端验证。

## 四、Vue 组件规范

- 所有 Vue 组件样式必须使用 SCSS。
- 自定义组件标签必须以小写字母开头，并使用 camelCase 命名。
- 自定义组件的使用方式和组件 `name` 必须保持一致。
- 所有 Vue 组件中的字段、方法、函数都必须添加注释。
- 函数注释必须说明函数用途、参数含义、返回值及关键副作用；没有参数、返回值或副作用时，也应明确说明。
- 组件传参和事件绑定使用 camelCase，不使用 kebab-case。

正确示例：

```vue
<realNameVerification :certNo="form.legalIdCard" @faceResult="handleFaceResult" />
```

错误示例：

```vue
<realNameVerification :cert-no="form.legalIdCard" @face-result="handleFaceResult" />
```
