module.exports = {
  //一旦配置了root，ESlint停止在父级目录中查找配置文件
  root: true,
  //解析器
  // parser: 'babel-eslint',
  //想要支持的JS语言选项
  parserOptions: {
    parser: 'babel-eslint',
    //启用ES6语法支持(如果支持es6的全局变量{env: {es6: true}}，则默认启用ES6语法支持)
    //此处也可以使用年份命名的版本号：2015
    ecmaVersion: 2018,
    //默认为script
    sourceType: 'module'
  },
   //代码运行的环境，每个环境都会有一套预定义的全局对象，不同环境可以组合使用
  env: {
    'browser': true,
    'es6': true
  },
  //集成推荐的规则
  extends: ['standard', 'plugin:vue/essential'],
  //访问当前源文件中未定义的变量时，no-undef会报警告。
  //如果这些全局变量是合规的，可以在globals中配置，避免这些全局变量发出警告
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  //支持第三方插件的规则，插件以eslint-plugin-作为前缀，配置时该前缀可省略
  //检查vue文件需要eslint-plugin-vue插件
  plugins: [
    'vue'
  ],
  //启用额外的规则或者覆盖默认的规则
  //规则级别分别：为"off"(0)关闭、"warn"(1)警告、"error"(2)错误--error触发时，程序退出
  rules: {
  }
}
