export default {
  // 工具栏配置
  group: '文本组件',
  label: '基础文本',

  // 组件属性
  tag: 'uxo2-text',
  disabled: false,
  size: 'small',
  buttonText: '提交',

  // 自定义样式
  styleConfig: null,
  customClassName: [],
  customRef: "",

  // 事件绑定
  eventConfig: {
    defaultEvent: [
      {
        name: 'click',
        desc: 'click button event',
        key: '',
        code: '',
        args: '',
        cb: ''
      },
      {
        name: 'dbclick',
        desc: 'dbclick button event',
        key: '',
        code: '',
        args: '',
        cb: ''
      }
    ]
  }
}