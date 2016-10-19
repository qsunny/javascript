##### gulp的安装使用
1. Install gulp globally(全局安装) npm rm --global gulp确认是否已经安装了先前的版本.通过安装参数gulp-cli不和以前 的版本冲突
 `npm install --global gulp-cli`
 
1.  Initialize your project directory:
`npm init`

1. install gulp in your project devDependencies:
	`npm install --save-dev gulp`
	`npm install -g gulp`    	//全局安装

1. install dependence glup plugin
`npm install gulp-changed --save-dev`
`npm install gulp-imagemin --save-dev`
`npm install gulp-uglify --save-dev`
`npm install jshint gulp-jshint --save-dev`
`npm install gulp-concat --save-dev`
`npm install gulp-minify-css --save-dev`
`npm install gulp-autoprefixer --save-dev`
`npm install browser-sync --save-dev`
`npm install gulp-strip-debug --save-dev` //移除console debug信息
`npm install del --save-dev` 

reference:
1. https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
1. http://www.w3ctech.com/topic/134
1. http://www.gulpjs.com.cn/
1. https://www.tutorialspoint.com/gulp/gulp_installation.htm
1. http://www.cnblogs.com/starof/p/5194622.html







