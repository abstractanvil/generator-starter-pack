'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The name of the page'
    });
  },

  writing: function () {
    var p = {
      name: this.name
    };

    this.fs.copyTpl(this.templatePath('page.jade'), this.destinationPath('src/app/' + this.name + '.jade'), p);
    this.fs.copyTpl(this.templatePath('page.styl'), this.destinationPath('src/app/styles/' + this.name + '.styl'), p);
    this.fs.copyTpl(this.templatePath('page.coffee'), this.destinationPath('src/app/scripts/' + this.name + '.coffee'), p);
  }
});
