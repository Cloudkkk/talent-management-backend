
# talent-management-backend 

> 后端代码
> 技术栈：node+express+sqlite

### 项目结构
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
- app.js：应用的主入口文件，用于设置应用的基本配置，如中间件、路由等。
- bin/www：应用的启动脚本。
- public：存放静态文件，如图片、CSS、JavaScript 文件等。
- routes：存放路由文件。
- views：存放视图文件，用于渲染页面。