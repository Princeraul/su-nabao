/*
 * Author: Princeraul
 * Email: suliangprinceraul@gmail.com or 398528895@qq.com
 */

'use strict';

import BASEDIR from './basedir';

const styleOtions = {
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'safari 5',
			'ie 7',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade: true
	}
};

// 配置监听目录配置
module.exports = {
	business: {
		styles: {
			src: BASEDIR.BSN.SRC + '/styles/*.scss',
			dest: BASEDIR.BSN.DEVELOPBUILD + '/css',
			options: {
				autoprefixer: styleOtions.autoprefixer
			}
		},
		fonts: {
			src: BASEDIR.BSN.SRC + '/fonts/*',
			dest: BASEDIR.BSN.DEVELOPBUILD + '/fonts/',
			releaseBuild: BASEDIR.BSN.RELEASEBUILD + '/fonts/'
		},
		views: {
			src: BASEDIR.BSN.SRC + '/views/*.ejs',
			dest: BASEDIR.BSN.DEVELOPBUILD + '/'
		},
		images: {
			src: BASEDIR.INDEX.SRC + '/images/*.+(jpeg|jpg|png)',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/images',
			sprite: BASEDIR.INDEX.SRC + '/images/sprite/*.png',
			spriteScssDest: BASEDIR.INDEX.SRC + '/styles/components'
		},
		scripts: {
			src: BASEDIR.INDEX.SRC + '/scripts/*.js',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/js'
		},
		baseDir: BASEDIR.BSN.DEVELOPBUILD
	},
	index: {
		styles: {
			src: BASEDIR.INDEX.SRC + '/styles/*.scss',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/css',
			options: {
				autoprefixer: styleOtions.autoprefixer
			}
		},
		fonts: {
			src: BASEDIR.INDEX.SRC + '/fonts/*',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/fonts/',
			releaseBuild: BASEDIR.INDEX.RELEASEBUILD + '/fonts/'
		},
		views: {
			src: BASEDIR.INDEX.SRC + '/views/*.ejs',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/'
		},
		images: {
			src: BASEDIR.INDEX.SRC + '/images/*.+(jpeg|jpg|png)',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/images',
			sprite: BASEDIR.INDEX.SRC + '/images/sprite/*.png',
			spriteScssDest: BASEDIR.INDEX.SRC + '/styles/components'
		},
		scripts: {
			src: BASEDIR.INDEX.SRC + '/scripts/*.js',
			dest: BASEDIR.INDEX.DEVELOPBUILD + '/js'
		},
		baseDir: BASEDIR.INDEX.DEVELOPBUILD
	},
	visual: {
		styles: {
			src: BASEDIR.VISUAL.SRC + '/styles/*.scss',
			dest: BASEDIR.VISUAL.DEVELOPBUILD + '/css',
			options: {
				autoprefixer: styleOtions.autoprefixer
			}
		},
		fonts: {
			src: BASEDIR.VISUAL.SRC + '/fonts/*',
			dest: BASEDIR.VISUAL.DEVELOPBUILD + '/fonts/',
			releaseBuild: BASEDIR.VISUAL.RELEASEBUILD + '/fonts/'
		},
		views: {
			src: BASEDIR.VISUAL.SRC + '/views/*.ejs',
			dest: BASEDIR.VISUAL.DEVELOPBUILD + '/'
		},
		images: {
			src: BASEDIR.VISUAL.SRC + '/images/*.+(jpeg|jpg|png)',
			dest: BASEDIR.VISUAL.DEVELOPBUILD + '/images',
			sprite: BASEDIR.VISUAL.SRC + '/images/sprite/*.png',
			spriteScssDest: BASEDIR.VISUAL.SRC + '/styles/components'
		},
		scripts: {
			src: BASEDIR.VISUAL.SRC + '/scripts/*.js',
			dest: BASEDIR.VISUAL.DEVELOPBUILD + '/js'
		},
		baseDir: BASEDIR.VISUAL.DEVELOPBUILD
	},
	consumer: {
		dev: BASEDIR.CONSUMER.DEV,
		styles: {
			src: BASEDIR.CONSUMER.SRC + '/styles/*.scss',
			dest: BASEDIR.CONSUMER.DEVELOPBUILD + '/css',
			options: {
				autoprefixer: {
					browsers: [
						'last 1 Chrome versions', 'iOS 7', 'android 4'
					],
					cascade: true
				}
			}
		},
		fonts: {
			src: BASEDIR.CONSUMER.SRC + '/fonts/*',
			dest: BASEDIR.CONSUMER.DEVELOPBUILD + '/fonts/',
			releaseBuild: BASEDIR.CONSUMER.RELEASEBUILD + '/fonts/'
		},
		views: {
			src: BASEDIR.CONSUMER.SRC + '/views/*.ejs',
			dest: BASEDIR.CONSUMER.DEVELOPBUILD + '/'
		},
		images: {
			src: BASEDIR.CONSUMER.SRC + '/images/*.png',
			dest: BASEDIR.CONSUMER.DEVELOPBUILD + '/images',
			sprite: BASEDIR.CONSUMER.SRC + '/images/sprite/*.png',
			spriteScssDest: BASEDIR.CONSUMER.SRC + '/styles/components',
			releaseBuild: BASEDIR.CONSUMER.RELEASEBUILD + '/img/'
		},
		scripts: {
			src: BASEDIR.CONSUMER.SRC + '/scripts/*.js',
			dest: BASEDIR.CONSUMER.DEVELOPBUILD + '/js',
			releaseBuild: BASEDIR.CONSUMER.RELEASEBUILD + '/js/'
		},
		baseDir: BASEDIR.CONSUMER.DEVELOPBUILD
	}
};
