const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  promting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    const templates = [
      ".vscode/settings.json",
      ".vscode/extensions.json",
      "public/favicon.ico",
      ".eslintignore",
      ".eslintrc.cjs",
      ".gitignore",
      ".prettierrc.json",
      "auto-imports.d.ts",
      "env.d.ts",
      "index.html",
      "package.json",
      "README.md",
      "tsconfig.json",
      "tsconfig.node.json",
      "vite.config.ts",
      "src/api/types/index.ts",
      "src/api/ws.ts",
      "src/assets/logo.svg",
      "src/router/index.ts",
      "src/stores/counter.ts",
      "src/style/element-variables.scss",
      "src/style/index.css",
      "src/style/variable.css",
      "src/utils/common.ts",
      "src/utils/constants.ts",
      "src/utils/doMain.ts",
      "src/utils/storage.ts",
      "src/views/home/index.vue",
      "src/views/layout/index.vue",
      "src/views/login/index.vue",
      "src/App.vue",
      "src/declaration.d.ts",
      "src/main.ts",
    ];
    templates.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      );
    });
  }
};
