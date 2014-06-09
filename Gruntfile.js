"use strict";
module.exports = new TaskRunner(grunt);

function TaskRunner(grunt) {
	var taskConfig = require("task/TaskConfig");
	grunt.initConfig(taskConfig);\


}
