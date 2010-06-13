/**
* jQuery xcolor
* Copyright (c) 2010, Robert Eisele (robert@xarg.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
* Date: 06/21/2010
*
* @author Robert Eisele
* @version 1.0
*
* @see http://www.xarg.org/project/jquery-color-plugin-xcolor/
**/

(function ($) {

	/**
	* @constructor
	*/
	function xColor(color) {

		// http://www.w3.org/TR/css3-color/#svg-color
		this.color_names = {
			transparent			: [0, 0, 0, 0],
			aliceblue			: [240, 248, 255],
			antiquewhite		: [250, 235, 215],
			aqua				: [0, 255, 255],
			aquamarine			: [127, 255, 212],
			azure				: [240, 255, 255],
			beige				: [245, 245, 220],
			bisque				: [255, 228, 196],
			black				: [0, 0, 0],
			blanchedalmond		: [255, 235, 205],
			blue				: [0, 0, 255],
			blueviolet			: [138, 43, 226],
			brown				: [165, 42, 42],
			burlywood			: [222, 184, 135],
			cadetblue			: [95, 158, 160],
			chartreuse			: [127, 255, 0],
			chocolate			: [210, 105, 30],
			coral				: [255, 127, 80],
			cornflowerblue		: [100, 149, 237],
			cornsilk			: [255, 248, 220],
			crimson				: [220, 20, 60],
			cyan				: [0, 255, 255],
			darkblue			: [0, 0, 139],
			darkcyan			: [0, 139, 139],
			darkgoldenrod		: [184, 134, 11],
			darkgray			: [169, 169, 169],
			darkgreen			: [0, 100, 0],
			darkgrey			: [169, 169, 169],
			darkkhaki			: [189, 183, 107],
			darkmagenta			: [139, 0, 139],
			darkolivegreen		: [85, 107, 47],
			darkorange			: [255, 140, 0],
			darkorchid			: [153, 50, 204],
			darkred				: [139, 0, 0],
			darksalmon			: [233, 150, 122],
			darkseagreen		: [143, 188, 143],
			darkslateblue		: [72, 61, 139],
			darkslategray		: [47, 79, 79],
			darkslategrey		: [47, 79, 79],
			darkturquoise		: [0, 206, 209],
			darkviolet			: [148, 0, 211],
			deeppink			: [255, 20, 147],
			deepskyblue			: [0, 191, 255],
			dimgray				: [105, 105, 105],
			dimgrey				: [105, 105, 105],
			dodgerblue			: [30, 144, 255],
			firebrick			: [178, 34, 34],
			floralwhite			: [255, 250, 240],
			forestgreen			: [34, 139, 34],
			fuchsia				: [255, 0, 255],
			gainsboro			: [220, 220, 220],
			ghostwhite			: [248, 248, 255],
			gold				: [255, 215, 0],
			goldenrod			: [218, 165, 32],
			gray				: [128, 128, 128],
			green				: [0, 128, 0],
			greenyellow			: [173, 255, 47],
			grey				: [128, 128, 128],
			honeydew			: [240, 255, 240],
			hotpink				: [255, 105, 180],
			indianred			: [205, 92, 92],
			indigo				: [75, 0, 130],
			ivory				: [255, 255, 240],
			khaki				: [240, 230, 140],
			lavender			: [230, 230, 250],
			lavenderblush		: [255, 240, 245],
			lawngreen			: [124, 252, 0],
			lemonchiffon		: [255, 250, 205],
			lightblue			: [173, 216, 230],
			lightcoral			: [240, 128, 128],
			lightcyan			: [224, 255, 255],
			lightgoldenrodyellow: [250, 250, 210],
			lightgray			: [211, 211, 211],
			lightgreen			: [144, 238, 144],
			lightgrey			: [211, 211, 211],
			lightpink			: [255, 182, 193],
			lightsalmon			: [255, 160, 122],
			lightseagreen		: [32, 178, 170],
			lightskyblue		: [135, 206, 250],
			lightslategray		: [119, 136, 153],
			lightslategrey		: [119, 136, 153],
			lightsteelblue		: [176, 196, 222],
			lightyellow			: [255, 255, 224],
			lime				: [0, 255, 0],
			limegreen			: [50, 205, 50],
			linen				: [250, 240, 230],
			magenta				: [255, 0, 255],
			maroon				: [128, 0, 0],
			mediumaquamarine	: [102, 205, 170],
			mediumblue			: [0, 0, 205],
			mediumorchid		: [186, 85, 211],
			mediumpurple		: [147, 112, 219],
			mediumseagreen		: [60, 179, 113],
			mediumslateblue		: [123, 104, 238],
			mediumspringgreen	: [0, 250, 154],
			mediumturquoise		: [72, 209, 204],
			mediumvioletred		: [199, 21, 133],
			midnightblue		: [25, 25, 112],
			mintcream			: [245, 255, 250],
			mistyrose			: [255, 228, 225],
			moccasin			: [255, 228, 181],
			navajowhite			: [255, 222, 173],
			navy				: [0, 0, 128],
			oldlace				: [253, 245, 230],
			olive				: [128, 128, 0],
			olivedrab			: [107, 142, 35],
			orange				: [255, 165, 0],
			orangered			: [255, 69, 0],
			orchid				: [218, 112, 214],
			palegoldenrod		: [238, 232, 170],
			palegreen			: [152, 251, 152],
			paleturquoise		: [175, 238, 238],
			palevioletred		: [219, 112, 147],
			papayawhip			: [255, 239, 213],
			peachpuff			: [255, 218, 185],
			peru				: [205, 133, 63],
			pink				: [255, 192, 203],
			plum				: [221, 160, 221],
			powderblue			: [176, 224, 230],
			purple				: [128, 0, 128],
			red					: [255, 0, 0],
			rosybrown			: [188, 143, 143],
			royalblue			: [65, 105, 225],
			saddlebrown			: [139, 69, 19],
			salmon				: [250, 128, 114],
			sandybrown			: [244, 164, 96],
			seagreen			: [46, 139, 87],
			seashell			: [255, 245, 238],
			sienna				: [160, 82, 45],
			silver				: [192, 192, 192],
			skyblue				: [135, 206, 235],
			slateblue			: [106, 90, 205],
			slategray			: [112, 128, 144],
			slategrey			: [112, 128, 144],
			snow				: [255, 250, 250],
			springgreen			: [0, 255, 127],
			steelblue			: [70, 130, 180],
			tan					: [210, 180, 140],
			teal				: [0, 128, 128],
			thistle				: [216, 191, 216],
			tomato				: [255, 99, 71],
			turquoise			: [64, 224, 208],
			violet				: [238, 130, 238],
			wheat				: [245, 222, 179],
			white				: [255, 255, 255],
			whitesmoke			: [245, 245, 245],
			yellow				: [255, 255, 0],
			yellowgreen			: [154, 205, 50]
		};

		this.color_exp = [
		{// 616064010
			regex: /^([1-9]\d*)$/,
			parse: function (part) {
				c = parseInt(part[1], 10);
				return [ (c >> 16) & 0xff, (c >> 8) & 0xff, c & 0xff, (_normalize((c >> 24) & 0xff, 100) / 100) || 1];
			}
		}, {// #ff9000, #ff0000
			regex: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/,
			parse: function (part) {
				return [
				parseInt(part[1], 16),
				parseInt(part[2], 16),
				parseInt(part[3], 16)];
			}
		}, {// #f00, 000
			regex: /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/,
			parse: function (part) {
				return [
				parseInt(part[1] + part[1], 16),
				parseInt(part[2] + part[2], 16),
				parseInt(part[3] + part[3], 16)];
			}
		}, {// rgb(1, 234, 56)
			regex: /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/,
			parse: function (part) {
				return [
				parseInt(part[1], 10),
				parseInt(part[2], 10),
				parseInt(part[3], 10),
				part[5] ? parseFloat(part[5]) : 1
				];
			}
		}, {// 1, 234, 56
			regex: /^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/,
			parse: function (part) {
				return [
				parseInt(part[1], 10),
				parseInt(part[2], 10),
				parseInt(part[3], 10),
				part[5] ? parseFloat(part[5]) : 1
				];
			}
		}, {// hsv(64, 40, 16) in [0, 360], [0,100], [0,100]
			regex: /^hs[bv]a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/,
			parse: function (part) {

				return _hsva(parseInt(part[1], 10), parseInt(part[2], 10), parseInt(part[3], 10), part[5] ? parseFloat(part[5]) : 1);
			}
		}, {// hsl(64, 40, 16) in [0, 360], [0,100], [0,100]
			regex: /^hsla?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/,
			parse: function (part) {

				return _hsla(parseInt(part[1], 10), parseInt(part[2], 10), parseInt(part[3], 10), part[5] ? parseFloat(part[5]) : 1);
			}
		}];


		function _normalize(n, s) {

			/**
			* Some value.
			* @type {number|undefined}
			*/
			if (undefined === s) {
				s = 255;
			}

			if (isNaN(n) || n <= 0) {
				return 0;
			} if (s < n) {
				return s;
			} if (n <= 1) {
				return n * s;
			}
			return n;
		}

		function _hsla(h,s,l,a) {

			h = _normalize(h, 360) / 360;
			s = _normalize(s, 100) / 100;
			l = _normalize(l, 100) / 100;

			if (0 == s) {
				l = Math.round(l * 255);
				return [l, l, l, a];
			}

			function _hue(v1, v2, h) {
				if (h < 0) h++;
				if (h > 1) h--;
				if (6 * h < 1) return v1 + (v2 - v1) * 6 * h;
				if (2 * h < 1) return v2;
				if (3 * h < 2) return v1 + (v2 - v1) * (4 - 6 * h);
				return v1;
			}

			var v = l < .5 ? (l * (1 + s)) : (l + s - l * s);
			var m = l + l - v;

			return [
			Math.round(255 *_hue(m, v, h + 1 / 3)),
			Math.round(255 *_hue(m, v, h)),
			Math.round(255 *_hue(m, v, h - 1 / 3)), a ];
		}

		function _hsva(h,s,v,a) {

			h = _normalize(h, 360) / 60;
			s = _normalize(s, 100) / 100;
			v = _normalize(v, 100) / 100;

			var hi = Math.floor(h);
			var f = h - hi;

			if (!(hi & 1)) f = 1 - f;

			var m = Math.round(255 * (v * (1 - s)));
			var n = Math.round(255 * (v * (1 - s * f)));

			v = Math.round(255 * v);

			switch (hi) {
			case 6:
			case 0: return [v, n, m, a];
			case 1: return [n, v, m, a];
			case 2: return [m, v, n, a];
			case 3: return [m, n, v, a];
			case 4: return [n, m, v, a];
			case 5: return [v, m, n, a];
			}
		}

		this.setColor = function (color) {

			this.r = null;
			this.g = null;
			this.b = null;
			this.a = 1;

			this.success = false;

			function A(o, c) {
				o.success = true;

				if (undefined !== c) o.a = _normalize(c, 100) / 100;
			}

			if (typeof color == "object") {

				if (color[0] !== undefined && color[1] !== undefined && color[2] !== undefined) {
					this.r = _normalize(color[0]);
					this.g = _normalize(color[1]);
					this.b = _normalize(color[2]);

					A(this, color[3]);

				} else if (color.r !== undefined && color.g !== undefined && color.b !== undefined) {
					this.r = _normalize(color.r);
					this.g = _normalize(color.g);
					this.b = _normalize(color.b);

					A(this, color.a);

				} else if (color.v !== undefined && color.h !== undefined && color.s !== undefined) {
					var set =_hsva(color.h, color.s, color.v, 1);
					this.r = set[0];
					this.g = set[1];
					this.b = set[2];

					A(this, color.a);

				} else if (color.l !== undefined && color.h !== undefined && color.s !== undefined) {
					var set =_hsla(color.h, color.s, color.l, 1);
					this.r = set[0];
					this.g = set[1];
					this.b = set[2];

					A(this, color.a);
				}
				return;
			}

			if (typeof color == "number") {
				this.success = true;

				this.r = (color >> 16) & 0xff;
				this.g = (color >> 8) & 0xff;
				this.b = color & 0xff;

				return;
			}

			if (typeof color != "string") {
				return;
			}

			color = color.toLowerCase().replace(/[^a-z0-9,.()#]/g, '');

			if (undefined !== this.color_names[color]) {

				var c = this.color_names[color];

				this.r = c[0];
				this.g = c[1];
				this.b = c[2];
				A(this, c[3]);

				return;
			}

			var exp = this.color_exp;

			for (var i = 0; i < exp.length; i++) {

				var parts = exp[i].regex.exec(color);

				if (parts) {

					var ret = exp[i].parse(parts);

					this.r = _normalize(ret[0]);
					this.g = _normalize(ret[1]);
					this.b = _normalize(ret[2]);
					A(this, ret[3]);

					break;
				}
			}
		}

		this.getColor = function (type) {

			if (undefined !== type) switch (type.toLowerCase()) {
			case "rgb":
				return this.getRGB();
			case "hsv":
			case "hsb":
				return this.getHSV();
			case "hsl":
				return this.getHSL();
			case "int":
				return this.getInt();
			case "fraction":
				return this.getFraction();
			case "css":
			case "style":
				return this.getCSS();
			case "name":
				return this.getName();
			}
			return this.getHex();
		}

		this.getRGB = function () {

			if (this.success) {

				return {r: this.r, g: this.g, b: this.b, a: this.a};
			}
			return null;
		}

		this.getCSS = function () {

			if (this.success) {

				if (this.a == 1) {
					return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
				}
				return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
			}
			return null;
		}

		this.getName = function () {

			if (this.success) {

				var lowest = null;
				var lowest_ndx;

				var table = this.color_names;

				var a = this.getHSL();

				for (var i in table) {

					var b = new xColor(table[i]).getHSL();

					var tmp = Math.sqrt(0.5 * Math.pow(a.h - b.h, 2) + 0.5 * Math.pow(a.s - b.s, 2) + Math.pow(a.l - b.l, 2));

					if (lowest === null || tmp < lowest) {
						lowest = tmp;
						lowest_ndx = i;
					}
				}
				return lowest_ndx;

			}
			return null;
		}

		this.getFraction = function () {

			if (this.success) {

				return {r: this.r / 255, g: this.g / 255, b: this.b / 255, a: this.a};
			}
			return null;
		}

		this.getHSL = function () {

			// inspiration: http://130.113.54.154/~monger/hsl-rgb.html
			if (this.success) {

				var r = this.r / 255;
				var g = this.g / 255;
				var b = this.b / 255;

				var min = Math.min(r, g, b);
				var max = Math.max(r, g, b);
				var delta = max - min;

				var h, s, l = (max + min) / 2;

				if (0 == delta) {
					h = 0;
					s = 0;
				} else {

					if (l < .5) {
						s = delta / (max + min);
					} else {
						s = delta / (2.0 - (max + min));
					}

					if (max == r) {
						h = (g - b) / delta;
					} else if (max == g) {
						h = 2.0 + (b - r) / delta;
					} else if (max == b) {
						h = 4.0 + (r - g) / delta;
					}

					if (h < 0) {
						h+= 6;
					}
				}
				return { h : Math.round(h * 60), s: Math.round(s * 100), l: Math.round(l * 100), a: this.a };
			}
			return null;
		}

		this.getHSV = function () {

			if (this.success) {

				var r = this.r / 255;
				var g = this.g / 255;
				var b = this.b / 255;

				var min = Math.min(r, g, b);
				var max = Math.max(r, g, b);
				var delta = max - min;

				var h, s, v = max;

				if (0 == delta) {
					h = 0;
					s = 0;
				} else {
					s = delta / max;

					delta*= 6;

					var dR = .5 + (max - r) / delta;
					var dG = .5 + (max - g) / delta;
					var dB = .5 + (max - b) / delta;

					if (r == max) {
						h = dB - dG;
					} else if (g == max) {
						h = 1 / 3 + dR - dB;
					} else if (b == max) {
						h = 2 / 3 + dG - dR;
					}

					if (h < 0) h++;
					if (h > 1) h--;
				}

				return { h : Math.round(h * 360), s: Math.round(s * 100), v: Math.round(v * 100), a: this.a };
			}
			return null;
		}

		this.getHex = function () {

			if (this.success) {

				var chars = "0123456789abcdef"

				var r1 = this.r >> 4;
				var g1 = this.g >> 4;
				var b1 = this.b >> 4;

				var r2 = this.r & 0xf;
				var g2 = this.g & 0xf;
				var b2 = this.b & 0xf;

				if (r1 == r2 && g1 == g2 && b1 == b2) {
					return '#' + chars.charAt(r1) + chars.charAt(g1) + chars.charAt(b1);
				}
				return '#'
				+ chars.charAt(r1) + chars.charAt(r2)
				+ chars.charAt(g1) + chars.charAt(g2)
				+ chars.charAt(b1) + chars.charAt(b2);
			}
			return null;
		}

		this.getInt = function () {

			if (this.success) {
				return ((this.r << 16) + (this.g << 8) + this.b) & 0xffffff;
			}
			return null;
		}

		this.toString = function () {
			return this.getHex();
		}

		this.setColor(color);
	}

	function _supportedBrowser() {
		/* todo: implement a bedder browser detection */

		var ua = navigator.userAgent.toLowerCase();

		if (ua.indexOf("firefox") != -1) {
			return ua.indexOf("3.") != -1;
		} if (ua.indexOf("opera") != -1) {
			return ua.indexOf("10.") != -1;
		} if (ua.indexOf("safari") != -1) {
			return true;
		} if (ua.indexOf("chrome") != -1) {
			return true;
		}
		return false;
	}

	function _fx_setup(fx) {

		fx.end = new xColor(fx.end);

		if (0 == (fx.start.r | fx.start.g | fx.start.b | fx.start.a)) {
			fx.start.r = fx.end.r;
			fx.start.g = fx.end.g;
			fx.start.b = fx.end.b;
		} else if (0 == (fx.end.r | fx.end.g | fx.end.b | fx.end.a)) {
			fx.end.r = fx.start.r;
			fx.end.g = fx.start.g;
			fx.end.b = fx.start.b;
		}
	}

	$.each(['color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'outlineColor'], function(i, attr) {

		// todo: gradientarray implementation

		if (_supportedBrowser()) {

			$.fx.step[attr] = function(fx) {

				if (0 == fx.state) {
					fx.start = findColor(fx.elem, attr);
					_fx_setup(fx);
				}

				var s = fx.start;
				var e = fx.end;

				if (s.success && e.success) {
					fx.elem.style[attr] = "rgba(" +
					Math.floor(fx.pos * (e.r - s.r) + s.r) + "," +
					Math.floor(fx.pos * (e.g - s.g) + s.g) + "," +
					Math.floor(fx.pos * (e.b - s.b) + s.b) + "," +
					(fx.pos * (e.a - s.a) + s.a) + ")";
				}
			}
		} else {

			$.fx.step[attr] = function(fx) {

				if (0 == fx.state) {
					fx.start = findColor(fx.elem, attr);
					_fx_setup(fx);
				}

				var s = fx.start;
				var e = fx.end;

				if (s.success && e.success) {
					fx.elem.style[attr] = "rgb(" +
					Math.floor(fx.pos * (e.r - s.r) + s.r) + "," +
					Math.floor(fx.pos * (e.g - s.g) + s.g) + "," +
					Math.floor(fx.pos * (e.b - s.b) + s.b) + ")";
				}
			}
		}
	});

	function findColor(elem, attr) {

		var color = "";

		if (_supportedBrowser()) {

			do {
				color = $.curCSS(elem, attr);

				if ("" != color || $.nodeName(elem, "body")) break;

			} while (elem = elem.parentNode);

			if ("" == color) {
				color = "transparent";
			}

		} else {

			do {
				color = $.curCSS(elem, attr);

				if ("" != color && "transparent" != color && "rgba(0, 0, 0, 0)" != color || $.nodeName(elem, "body")) break;

			} while (elem = elem.parentNode);

			if ("" == color) {
				if ("backgroundColor" == attr) {
					color = "white";
				} else {
					color = "black";
				}
			}
		}

		return new xColor(color);
	}

	/**
	* @constructor
	*/
	function xColorMix() {

		this.test = function (col) {

			var c = new xColor(col);

			if (c.success) {
				return c;
			}
			return null;
		}

		this.red = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c.g = 0xff;
				c.b = 0xff;
				return c;
			}
			return null;
		}

		this.blue = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c.r = 0xff;
				c.g = 0xff;
				return c;
			}
			return null;
		}

		this.green = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c.r = 0xff;
				c.b = 0xff;
				return c;
			}
			return null;
		}

		this.random = function () {

			var c = new xColor([
			Math.floor(255 * Math.random()),
			Math.floor(255 * Math.random()),
			Math.floor(255 * Math.random())
			]);

			if (c.success) {
				return c;
			}
			return null;
		}

		this.complementary = function (col) {

			var c = new xColor(col);

			if (c.success) {
				c.r^= 0xff;
				c.g^= 0xff;
				c.b^= 0xff;
				return c;
			}
			return null;
		}

		this.opacity = function (x, y, o) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {

				if (o > 1) {
					o/= 100;
				}

				o = Math.max(o - 1 + b.a, 0);

				a.r = Math.round((b.r - a.r) * o + a.r);
				a.g = Math.round((b.g - a.g) * o + a.g);
				a.b = Math.round((b.b - a.b) * o + a.b);

				return a;
			}
			return null;
		}

		this.greyfilter = function (col, formula) {

			var v, c = new xColor(col);

			if (c.success) {
				switch (formula) {
				case 1:
					// My own formula
					v = .35 + 13 * (c.r + c.g + c.b) / 60;
					break;
				case 2:
					// Sun's formula: (1 - avg) / (100 / 35) + avg)
					v = (13 * (c.r + c.g + c.b) + 5355) / 60;
					break;
				default:
					v = c.r * .3 + c.g * .59 + c.b * .11;
				}
				c.r = c.g = c.b = Math.min(Math.floor(v), 255);

				return c;
			}
			return null;
		}

		this.webround = function (col) {

			var c = new xColor(col);

			if (c.success) {
				if ((c.r+= 0x33 - c.r % 0x33) > 0xff) c.r = 0xff;
				if ((c.g+= 0x33 - c.g % 0x33) > 0xff) c.g = 0xff;
				if ((c.b+= 0x33 - c.b % 0x33) > 0xff) c.b = 0xff;
				return c;
			}
			return null;
		}

		this.distance = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {
				// Approximation attempt of http://www.compuphase.com/cmetric.htm
				return Math.sqrt(3 * (b.r - a.r) * (b.r - a.r) + 4 * (b.g - a.g) * (b.g - a.g) + 2 * (b.b - a.b) * (b.b - a.b));
			}
			return null;
		}

		this.readable = function (bg, col) {

			var a = new xColor(col);
			var b = new xColor(bg);

			if (a.success && b.success) {
				return (
				(b.r - a.r) * (b.r - a.r) +
				(b.g - a.g) * (b.g - a.g) +
				(b.b - a.b) * (b.b - a.b)) > 0x28A4;
			}
			return null;
		}

		this.combine = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {
				a.r^= b.r;
				a.g^= b.g;
				a.b^= b.b;
				return a;
			}
			return null;
		}

		this.breed = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			var mask = 0;

			if (a.success && b.success) {

				for (var i = 0; i < 6; i++) {
					if (Math.random() < .5) {
						mask|= 0x0f << (i << 2);
					}
				}

				a.r = (a.r & ((mask >> 0x10) & 0xff)) | (b.r & (((mask >> 0x10) & 0xff) ^ 0xff));
				a.g = (a.g & ((mask >> 0x08) & 0xff)) | (b.g & (((mask >> 0x08) & 0xff) ^ 0xff));
				a.b = (a.b & ((mask >> 0x00) & 0xff)) | (b.b & (((mask >> 0x00) & 0xff) ^ 0xff));
				return a;
			}
			return null;
		}

		this.additive = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {

				if ((a.r+= b.r) > 0xff) a.r = 0xff;
				if ((a.g+= b.g) > 0xff) a.g = 0xff;
				if ((a.b+= b.b) > 0xff) a.b = 0xff;

				return a;
			}
			return null;
		}

		this.subtractive = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {

				if ((a.r+= b.r - 0xff) < 0) a.r = 0;
				if ((a.g+= b.g - 0xff) < 0) a.g = 0;
				if ((a.b+= b.b - 0xff) < 0) a.b = 0;

				return a;
			}
			return null;
		}

		this.subtract = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {

				if ((a.r-= b.r) < 0) a.r = 0;
				if ((a.g-= b.g) < 0) a.g = 0;
				if ((a.b-= b.b) < 0) a.b = 0;

				return a;
			}
			return null;
		}

		this.multiply = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {
				a.r = Math.floor(a.r / 255 * b.r);
				a.g = Math.floor(a.g / 255 * b.g);
				a.b = Math.floor(a.b / 255 * b.b);
				return a;
			}
			return null;
		}

		this.average = function (x, y) {

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {
				a.r = (a.r + b.r) >> 1;
				a.g = (a.g + b.g) >> 1;
				a.b = (a.b + b.b) >> 1;
				return a;
			}
			return null;
		}

		this.triad = function (col) {

			var c = new xColor(col);

			if (c.success) {

				return [c,
				new xColor([c.b, c.r, c.g]),
				new xColor([c.g, c.b, c.r])];
			}
			return null;
		}

		this.tetrad = function (col) {

			var c = new xColor(col);

			if (c.success) {

				return [c,
				new xColor([c.b, c.r, c.b]),
				new xColor([c.b, c.g, c.r]),
				new xColor([c.r, c.b, c.r])];
			}
			return null;
		}

		this.gradientlevel = function (x, y, level, deg) {

			if (level > deg) return null;

			var a = new xColor(x);
			var b = new xColor(y);

			if (a.success && b.success) {

				a.r = Math.floor(a.r + ((b.r - a.r) / deg) * level);
				a.g = Math.floor(a.g + ((b.g - a.g) / deg) * level);
				a.b = Math.floor(a.b + ((b.b - a.b) / deg) * level);

				return a;
			}
			return null;
		}

		this.gradientarray = function (arr, ndx, size) {

			if (ndx > size) return null;

			var e = Math.floor(ndx * (arr.length - 1) / size);
			var m = (ndx - size * e / (arr.length - 1)) / size;

			var a = new xColor(arr[e]);
			var b = new xColor(arr[e + 1]);

			if (a.success && b.success) {

				a.r = Math.floor(a.r + arr.length * (b.r - a.r) * m);
				a.g = Math.floor(a.g + arr.length * (b.g - a.g) * m);
				a.b = Math.floor(a.b + arr.length * (b.b - a.b) * m);

				return a;
			}
			return null;
		},

		this.nearestname = function (a) {

			a = new xColor(a);

			if (a.success) {
				return a.getName();
			}
			return null;
		}

		this.darken = function (col, by, shade) {

			if (by === undefined) {
				by = 1;
			} else if (by < 0) return this.lighten(col, -by, shade);

			if (shade === undefined) {
				shade = 32;
			}

			var c = new xColor(col);

			if (c.success) {
				if ((c.r-= shade * by) < 0) c.r = 0;
				if ((c.g-= shade * by) < 0) c.g = 0;
				if ((c.b-= shade * by) < 0) c.b = 0;
				return c;
			}
			return null;
		}

		this.lighten = function (col, by, shade) {

			if (by === undefined) {
				by = 1;
			} else if (by < 0) return this.darken(col, -by, shade);

			if (shade === undefined) {
				shade = 32;
			}

			var c = new xColor(col);

			if (c.success) {
				if ((c.r+= shade * by) > 0xff) c.r = 0xff;
				if ((c.g+= shade * by) > 0xff) c.g = 0xff;
				if ((c.b+= shade * by) > 0xff) c.b = 0xff;
				return c;
			}
			return null;
		}

		this.analogous = function (col, results, slices) {

			if (results === undefined) {
				results = 8;
			}

			if (slices === undefined) {
				slices = 30;
			}

			var c = new xColor(col);

			if (c.success) {

				var hsv = c.getHSV();
				var part = 360 / slices, ret = [ c ];

				for (hsv.h = ((hsv.h - (part * results >> 1)) + 720) % 360; --results; ) {
					hsv.h+= part;
					hsv.h%= 360;
					ret.push(new xColor(hsv));
				}
				return ret;
			}
			return null;
		}

		this.splitcomplements = function (col) {

			var c = new xColor(col);

			if (c.success) {

				var hsv = c.getHSV();
				var ret = [ c ];

				hsv.h+= 72;
				hsv.h%= 360;
				ret.push(new xColor(hsv));

				hsv.h+= 144;
				hsv.h%= 360;
				ret.push(new xColor(hsv));

				return ret;
			}
			return null;
		}

		this.monochromatic = function (col, results) {

			if (results === undefined) {
				results = 6;
			}

			var c = new xColor(col);

			if (c.success) {

				var hsv = c.getHSV();
				var ret = [ c ];

				while (--results) {
					hsv.v+= 20;
					hsv.v%= 100;
					ret.push(new xColor(hsv));
				}
				return ret;
			}
			return null;
		}
	}

	$.xcolor = new xColorMix();

	$.fn.isReadable = function () {

		var elem = this[0];
		var f = "";
		var b = "";

		do {

			if ("" == f && ("transparent" == (f = $.curCSS(elem, "color")) || "rgba(0, 0, 0, 0)" == f)) {
				f = "";
			}

			if ("" == b && ("transparent" == (b = $.curCSS(elem, "backgroundColor")) || "rgba(0, 0, 0, 0)" == b)) {
				b = "";
			}

			if ("" != f && "" != b || $.nodeName(elem, "body")) {
				break;
			}

		} while (elem = elem.parentNode);

		if ("" == f) {
			f = "black";
		}

		if ("" == b) {
			b = "white";
		}

		// todo: if alpha != 1, use opacity() to calculate correct color on certain element and it's parent
		return $.xcolor.readable(b, f);
	}

})(jQuery);
