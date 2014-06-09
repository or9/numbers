"use strict";

var taskConfig = new TaskConfig();
var grunt = null;
var pkg = null;
var path = {
	src:	"app",
	test:	"test",
	bin:	"bin"
};
var banner = getBanner();

module.exports = taskConfig;

function TaskConfig(_grunt) {
	grunt = _grunt;
	pkg = grunt.file.readJSON("package");

}

function getBanner() {
	return "";
}

function clean() {

}

function concat() {

}

function uglify() {

}
