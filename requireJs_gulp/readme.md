#1:实现require.js单页引用合并、增加版本号功能

#2：公共config.js

#3:排除出常用（lib）插件不合并

#4: 目录机构：common 本项目自己实现可以公用的js组件参与代码合并打包   mod每个页面自己的逻辑js参与合并打包， lib:第三方组件类库如jquery,不参与打包，gulpfile.js里面需要排除