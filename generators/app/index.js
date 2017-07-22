'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the outstanding ' + chalk.red('generator-newgen') + ' generator!'
    ));

    const prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name'+'('+this.appname+'',
      default : this.appname 
    }];
    
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
   
         this.fs.copy(
      this.templatePath('_css'),
      this.destinationPath('css')
    );
            this.fs.copy(
      this.templatePath('_img'),
      this.destinationPath('img')
    );
       this.fs.copy(
      this.templatePath('_vendor'),
      this.destinationPath('vendor')
    );
       this.fs.copy(
      this.templatePath('_js'),
      this.destinationPath('js')
    );

        this.fs.copyTpl(
      this.templatePath('_index.html'),
      this.destinationPath('index.html'),
       { title: this.props.name }
    );
  

  }

};
