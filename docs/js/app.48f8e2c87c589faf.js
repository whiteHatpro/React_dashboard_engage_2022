!(function (_) {
	function e(e) {
		for (var a, n, i = e[0], o = e[1], E = e[2], u = 0, c = []; u < i.length; u++)
			(n = i[u]), Object.prototype.hasOwnProperty.call(r, n) && r[n] && c.push(r[n][0]), (r[n] = 0);
		for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (_[a] = o[a]);
		for (s && s(e); c.length; ) c.shift()();
		return l.push.apply(l, E || []), t();
	}
	function t() {
		for (var _, e = 0; e < l.length; e++) {
			for (var t = l[e], a = !0, i = 1; i < t.length; i++) {
				var o = t[i];
				0 !== r[o] && (a = !1);
			}
			a && (l.splice(e--, 1), (_ = n((n.s = t[0]))));
		}
		return _;
	}
	var a = {},
		r = { 0: 0 },
		l = [];
	function n(e) {
		if (a[e]) return a[e].exports;
		var t = (a[e] = { i: e, l: !1, exports: {} });
		return _[e].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
	}
	(n.m = _),
		(n.c = a),
		(n.d = function (_, e, t) {
			n.o(_, e) || Object.defineProperty(_, e, { enumerable: !0, get: t });
		}),
		(n.r = function (_) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(_, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(_, '__esModule', { value: !0 });
		}),
		(n.t = function (_, e) {
			if ((1 & e && (_ = n(_)), 8 & e)) return _;
			if (4 & e && 'object' == typeof _ && _ && _.__esModule) return _;
			var t = Object.create(null);
			if (
				(n.r(t),
				Object.defineProperty(t, 'default', { enumerable: !0, value: _ }),
				2 & e && 'string' != typeof _)
			)
				for (var a in _)
					n.d(
						t,
						a,
						function (e) {
							return _[e];
						}.bind(null, a),
					);
			return t;
		}),
		(n.n = function (_) {
			var e =
				_ && _.__esModule
					? function () {
							return _.default;
					  }
					: function () {
							return _;
					  };
			return n.d(e, 'a', e), e;
		}),
		(n.o = function (_, e) {
			return Object.prototype.hasOwnProperty.call(_, e);
		}),
		(n.p = './');
	var i = (window.webpackJsonp = window.webpackJsonp || []),
		o = i.push.bind(i);
	(i.push = e), (i = i.slice());
	for (var E = 0; E < i.length; E++) e(i[E]);
	var s = o;
	l.push([1186, 1]), t();
})({
	1186: function (_, e, t) {
		t(1187), (_.exports = t(1362));
	},
	128: function (_, e, t) {
		'use strict';
		(function (_) {
			t.d(e, 'a', function () {
				return d;
			});
			var a,
				r = t(19),
				l = t.n(r),
				n = t(192),
				i = t.n(n),
				o = t(0),
				E = t.n(o),
				s = t(86),
				u = t.n(s);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			var c =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				d = E.a.createContext(null),
				P = function (_) {
					var e = _.children,
						t = Object(o.useState)(
							l()({}, u()(), {
								type: 'line',
								data: Array.from({ length: 12 }, function () {
									return 1e3 * Math.random() + 100;
								}),
							}),
						),
						a = i()(t, 2),
						r = a[0],
						n = a[1],
						s = Object(o.useState)([]),
						c = i()(s, 2),
						P = c[0],
						b = c[1],
						O = Object(o.useState)(l()({}, u()(), { type: 'category' })),
						M = i()(O, 2),
						D = M[0],
						p = M[1],
						f = Object(o.useState)([]),
						C = i()(f, 2),
						A = C[0],
						L = C[1],
						m = Object(o.useState)(l()({}, u()(), { type: 'value' })),
						h = i()(m, 2),
						I = h[0],
						K = h[1],
						R = Object(o.useState)([]),
						T = i()(R, 2),
						B = T[0],
						W = T[1];
					return E.a.createElement(
						d.Provider,
						{
							value: {
								series: r,
								seriesActiveKey: P,
								onChangeSeries: function (_) {
									n(_);
								},
								onChangeSeriesActiveKey: function (_) {
									b(_);
								},
								xAxis: D,
								xAxisActiveKey: A,
								onChangeXAxis: function (_) {
									p(_);
								},
								onChangeXAxisActiveKey: function (_) {
									L(_);
								},
								yAxis: I,
								yAxisActiveKey: B,
								onChangeYAxis: function (_) {
									K(_);
								},
								onChangeYAxisActiveKey: function (_) {
									W(_);
								},
							},
						},
						e,
					);
				};
			c(
				P,
				"useState{[series, setSeries]({\r\n        [uuid()]: {\r\n            type: 'line',\r\n            data: Array.from({ length: 12 }, () => Math.random() * 1000 + 100),\r\n        },\r\n    })}\nuseState{[seriesActiveKey, setSeriesActiveKey]([])}\nuseState{[xAxis, setXAxis]({\r\n        [uuid()]: {\r\n            type: 'category',\r\n        },\r\n    })}\nuseState{[xAxisActiveKey, setXAxisActiveKey]([])}\nuseState{[yAxis, setYAxis]({\r\n        [uuid()]: {\r\n            type: 'value',\r\n        },\r\n    })}\nuseState{[yAxisActiveKey, setYAxisActiveKey]([])}",
			);
			var b,
				O,
				M = P;
			(e.b = M),
				(b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(b.register(
						d,
						'StructureContext',
						'c:\\workspace\\react-analytics\\src\\containers\\StructureContainer.tsx',
					),
					b.register(
						P,
						'StructureContainer',
						'c:\\workspace\\react-analytics\\src\\containers\\StructureContainer.tsx',
					),
					b.register(
						M,
						'default',
						'c:\\workspace\\react-analytics\\src\\containers\\StructureContainer.tsx',
					)),
				(O = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && O(_);
		}.call(this, t(63)(_)));
	},
	1362: function (_, e, t) {
		'use strict';
		t.r(e),
			function (_) {
				var e,
					a = t(0),
					r = t.n(a),
					l = t(11),
					n = t.n(l),
					i = t(855),
					o = t(846),
					E = t(848),
					s = t(849);
				(e = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && e(_);
				'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
				Object(o.a)();
				var u = document.createElement('div');
				(u.id = 'root'), document.body.appendChild(u);
				var c,
					d,
					P = function (_) {
						var e = document.getElementById('root');
						n.a.render(r.a.createElement(i.AppContainer, null, r.a.createElement(_, null)), e);
					};
				P(s.a),
					Object(E.a)(),
					(c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
						(c.register(u, 'rootEl', 'c:\\workspace\\react-analytics\\src\\index.tsx'),
						c.register(P, 'render', 'c:\\workspace\\react-analytics\\src\\index.tsx')),
					(d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
						d(_);
			}.call(this, t(63)(_));
	},
	159: function (_, e, t) {
		'use strict';
		var a = t(808);
		t.d(e, 'b', function () {
			return a.a;
		});
		var r = t(219);
		t.d(e, 'a', function () {
			return r.a;
		});
		t(828), 'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	1749: function (_, e, t) {
		var a = t(75),
			r = t(1750);
		'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[_.i, r, '']]);
		var l = { insert: 'head', singleton: !1 },
			n = (a(_.i, r, l), r.locals ? r.locals : {});
		_.exports = n;
	},
	1750: function (_, e, t) {
		(e = t(76)(!1)).push([
			_.i,
			"body,\n#root,\n.container {\n  height: 100%;\n  width: 100%;\n}\n/* Customize website's scrollbar like Mac OS\nNot supports in Firefox and IE */\n/* total width */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n/* background of the scrollbar except button or resizer */\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n/* scrollbar itself */\n::-webkit-scrollbar-thumb {\n  background-color: #babac0;\n  border-radius: 16px;\n  border: 1px solid transparent;\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: #a0a0a5;\n  border: 1px solid transparent;\n}\n/* set button(top and bottom of the scrollbar) */\n::-webkit-scrollbar-button {\n  display: none;\n}\n.editor-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.editor-panel {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n}\n.editor-property {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.editor-property-header {\n  flex: 0 0 48px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px;\n}\n.editor-property-content {\n  flex: 1;\n  overflow-y: auto;\n}\n.action-icon {\n  transition: color 0.125s;\n  cursor: pointer;\n}\n.ant-form-item {\n  margin-bottom: 16px;\n}\n.dynamic-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n}\n.dynamic-form .ant-collapse {\n  width: 100%;\n}\n.dynamic-form button {\n  margin: 16px 0 8px;\n}\n.Resizer {\n  background: #000;\n  opacity: 0.1;\n  z-index: 1;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n  cursor: ew-resize;\n}\n.Resizer:hover {\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n.Resizer.horizontal {\n  height: 16px;\n  margin: -5px 0;\n  border-top: 5px solid rgba(255, 255, 255, 0);\n  border-bottom: 5px solid rgba(255, 255, 255, 0);\n  cursor: row-resize;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=);\n}\n.Resizer.horizontal:hover {\n  border-top: 5px solid rgba(0, 0, 0, 0.5);\n  border-bottom: 5px solid rgba(0, 0, 0, 0.5);\n}\n.Resizer.vertical {\n  width: 16px;\n  margin: 0 -5px;\n  border-left: 5px solid rgba(255, 255, 255, 0);\n  border-right: 5px solid rgba(255, 255, 255, 0);\n  cursor: col-resize;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);\n}\n.Resizer.vertical:hover {\n  border-left: 5px solid rgba(0, 0, 0, 0.5);\n  border-right: 5px solid rgba(0, 0, 0, 0.5);\n}\n.Resizer.disabled {\n  cursor: not-allowed;\n}\n.Resizer.disabled:hover {\n  border-color: transparent;\n}\n.gutter {\n  background: #000;\n  opacity: 0.1;\n  z-index: 1;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n  cursor: ew-resize;\n}\n.gutter.gutter-horizontal {\n  width: 8px !important;\n  cursor: col-resize;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);\n}\n.gutter.gutter-vertical {\n  height: 8px !important;\n  cursor: row-resize;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=);\n}\n.gutter:hover {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  opacity: 0.2;\n}\n",
			'',
		]),
			(_.exports = e);
	},
	219: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(813),
				antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(586),
				antd_lib_empty__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_empty__WEBPACK_IMPORTED_MODULE_3__,
				),
				antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1727),
				antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_4__,
				),
				antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(593),
				antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(226),
				_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__,
				),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(577),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_7__,
				),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					antd_lib_icon__WEBPACK_IMPORTED_MODULE_8__,
				),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(227),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default =
					__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ =
					__webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__,
				),
				react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_17__,
				),
				uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86),
				uuid__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_18__),
				i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26),
				___WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(159),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				DynamicForm = (function (_Component) {
					function DynamicForm() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(
							this,
							DynamicForm,
						);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(
											DynamicForm,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'forms',
								{},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'state',
								{
									datas:
										e.props.value ||
										_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
											{},
											uuid__WEBPACK_IMPORTED_MODULE_18___default()(),
											{},
										),
									activeKey: e.props.activeKey || [],
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'handleAddForm',
								function () {
									var _ = uuid__WEBPACK_IMPORTED_MODULE_18___default()();
									e.setState(
										{
											datas: Object.assign(
												{},
												e.state.datas,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
													{},
													_,
													{},
												),
											),
											activeKey: e.state.activeKey.concat(_),
										},
										function () {
											var _ = e.props,
												t = _.onChange,
												a = _.onChangeActiveKey;
											t && t(e.state.datas), a && a(e.state.activeKey);
										},
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'handleCloneForm',
								function (_) {
									var t = uuid__WEBPACK_IMPORTED_MODULE_18___default()();
									e.setState(
										{
											datas: Object.assign(
												{},
												e.state.datas,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
													{},
													t,
													_,
												),
											),
											activeKey: e.state.activeKey.concat(t),
										},
										function () {
											var _ = e.props,
												t = _.onChange,
												a = _.onChangeActiveKey;
											t && t(e.state.datas), a && a(e.state.activeKey);
										},
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'handleRemoveForm',
								function (_) {
									delete e.state.datas[_],
										e.setState(
											{
												datas: e.state.datas,
												activeKey: e.state.activeKey.filter(function (e) {
													return e !== _;
												}),
											},
											function () {
												var _ = e.props,
													t = _.onChange,
													a = _.onChangeActiveKey;
												t && t(e.state.datas), a && a(e.state.activeKey);
											},
										);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'handleValuesChange',
								function (_, t, a) {
									var r = Object.assign({}, e.state.datas[t], _),
										l = Object.assign(
											{},
											e.state.datas,
											_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
												{},
												t,
												r,
											),
										),
										n = e.props.onChange;
									n && n(l);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default()(e),
								'handleChangeActiveKey',
								function (_) {
									e.setState({ activeKey: _ });
									var t = e.props.onChangeActiveKey;
									t && t(_);
								},
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15___default()(
							DynamicForm,
							_Component,
						),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(DynamicForm, [
							{
								key: 'UNSAFE_componentWillReceiveProps',
								value: function (_) {
									JSON.stringify(_.value) !== JSON.stringify(this.props.value) &&
										this.setState({ datas: Object.assign({}, _.value) }),
										JSON.stringify(_.activeKey) !== JSON.stringify(this.props.activeKey) &&
											this.setState({ activeKey: _.activeKey });
								},
							},
							{
								key: 'render',
								value: function () {
									var _ = this,
										e = this.props,
										t = e.formSchema,
										a = e.label,
										r = e.addButton,
										l = void 0 === r || r,
										n = (e.onChange, e.onChangeActiveKey, e.activeKey, e.allDelete),
										i =
											_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default()(
												e,
												[
													'formSchema',
													'label',
													'addButton',
													'onChange',
													'onChangeActiveKey',
													'activeKey',
													'allDelete',
												],
											),
										o = this.state,
										E = o.datas,
										s = o.activeKey,
										u = Object.keys(E).length;
									return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
										'div',
										{ className: 'dynamic-form' },
										u
											? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
													antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5___default.a,
													{ activeKey: s, onChange: this.handleChangeActiveKey },
													Object.keys(E).map(function (e, r) {
														return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
															antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5___default.a
																.Panel,
															{
																key: e,
																header: ''.concat(a, '_').concat(r),
																extra: [
																	react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
																		antd_lib_icon__WEBPACK_IMPORTED_MODULE_8___default.a,
																		{
																			key: 'copy',
																			className: 'action-icon',
																			type: 'copy',
																			onClick: function (t) {
																				t.stopPropagation(),
																					_.handleCloneForm(E[e]);
																			},
																		},
																	),
																	u > 1
																		? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
																				antd_lib_icon__WEBPACK_IMPORTED_MODULE_8___default.a,
																				{
																					key: 'delete',
																					className: 'action-icon',
																					type: 'delete',
																					onClick: function (t) {
																						t.stopPropagation(),
																							_.handleRemoveForm(e);
																					},
																				},
																		  )
																		: n &&
																		  react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
																				antd_lib_icon__WEBPACK_IMPORTED_MODULE_8___default.a,
																				{
																					key: 'delete',
																					className: 'action-icon',
																					type: 'delete',
																					onClick: function (t) {
																						t.stopPropagation(),
																							_.handleRemoveForm(e);
																					},
																				},
																		  ),
																],
															},
															react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
																___WEBPACK_IMPORTED_MODULE_20__.b,
																_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()(
																	{},
																	i,
																	{
																		wrappedComponentRef: function (t) {
																			_.forms[e] = t;
																		},
																		useForm: !1,
																		formSchema: t,
																		formKey: e,
																		onValuesChange: _.handleValuesChange,
																		values: E[e],
																	},
																),
															),
														);
													}),
											  )
											: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
													antd_lib_empty__WEBPACK_IMPORTED_MODULE_3___default.a,
													null,
											  ),
										l &&
											react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
												antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
												{ icon: 'plus', onClick: this.handleAddForm },
												i18next__WEBPACK_IMPORTED_MODULE_19__.a.t('action.add'),
											),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						DynamicForm
					);
				})(react__WEBPACK_IMPORTED_MODULE_17__.Component),
				_default = DynamicForm,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						DynamicForm,
						'DynamicForm',
						'c:\\workspace\\react-analytics\\src\\components\\form\\DynamicForm.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\form\\DynamicForm.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	264: function (_, e, t) {
		'use strict';
		var a = t(710);
		t.d(e, 'a', function () {
			return a;
		});
		var r = t(711);
		t.d(e, 'b', function () {
			return r;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	447: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_Panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84),
				_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(159),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(128),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				SeriesPanel = (function (_Component) {
					function SeriesPanel(_, e) {
						var t;
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								SeriesPanel,
							),
							(t =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
									this,
									_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
										SeriesPanel,
									).call(this, _, e),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'context',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeSeries',
								function (_) {
									t.setState({ series: Object.assign({}, _) }, function () {
										t.context.onChangeSeries(t.state.series);
									});
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeActiveKey',
								function (_) {
									t.setState({ activeKey: _ }), t.context.onChangeSeriesActiveKey(_);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleAddSeries',
								function () {
									var _ = uuid__WEBPACK_IMPORTED_MODULE_11___default()();
									t.setState(
										{
											series: Object.assign(
												{},
												t.state.series,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
													{},
													_,
													{
														type: 'line',
														data: Array.from({ length: 12 }, function () {
															return 1e3 * Math.random() + 100;
														}),
													},
												),
											),
											activeKey: t.state.activeKey.concat(_),
										},
										function () {
											t.context.onChangeSeries(t.state.series);
										},
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleCollapse',
								function () {
									var _ = !t.state.collapsed,
										e = _ ? [] : Object.keys(t.state.series);
									t.setState({ collapsed: _, activeKey: e }), t.context.onChangeSeriesActiveKey(e);
								},
							),
							(t.state = { series: e.series, activeKey: e.seriesActiveKey, collapsed: !1 }),
							t
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(SeriesPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SeriesPanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.context,
										e = _.series,
										t = _.seriesActiveKey,
										a = _.xAxis,
										r = _.yAxis,
										l = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										_Panel__WEBPACK_IMPORTED_MODULE_12__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												'div',
												{ className: 'editor-property-header' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
													{ icon: l ? 'arrows-alt' : 'shrink', onClick: this.handleCollapse },
													l
														? i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('action.expand')
														: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('action.collapse'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
													{ type: 'primary', icon: 'plus', onClick: this.handleAddSeries },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.series.title'),
												),
											),
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												'div',
												{ className: 'editor-property-content' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													_form__WEBPACK_IMPORTED_MODULE_13__.a,
													{
														value: e,
														label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
															'widget.series.title',
														),
														addButton: !1,
														activeKey: t,
														formSchema: {
															type: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.type',
																),
																type: 'select',
																initialValue: 'line',
																style: { width: '100%' },
																items: [
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'chart.line',
																		),
																		value: 'line',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'chart.bar',
																		),
																		value: 'bar',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'chart.scatter',
																		),
																		value: 'scatter',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'chart.area',
																		),
																		value: 'area',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'chart.pie',
																		),
																		value: 'pie',
																	},
																],
															},
															xData: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'widget.xaxis.data',
																),
																type: 'select',
																style: { width: '100%' },
																span: 12,
															},
															yData: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'widget.yaxis.data',
																),
																type: 'select',
																style: { width: '100%' },
																span: 12,
															},
															xAxis: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'widget.xaxis.title',
																),
																type: 'select',
																style: { width: '100%' },
																span: 12,
																items: Object.keys(a).map(function (_, e) {
																	var t = a[_].name;
																	return {
																		label: void 0 === t ? 'x'.concat(e) : t,
																		value: _,
																	};
																}),
															},
															yAxis: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'widget.yaxis.title',
																),
																type: 'select',
																style: { width: '100%' },
																span: 12,
																items: Object.keys(r).map(function (_, e) {
																	var t = r[_].name;
																	return {
																		label: void 0 === t ? 'y'.concat(e) : t,
																		value: _,
																	};
																}),
															},
														},
														onChange: this.handleChangeSeries,
														onChangeActiveKey: this.handleChangeActiveKey,
													},
												),
											),
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						SeriesPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
				SeriesPanel,
				'contextType',
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_14__.a,
			);
			var _default = SeriesPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						SeriesPanel,
						'SeriesPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\SeriesPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\SeriesPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	448: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_Panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84),
				_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(159),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(128),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				XAxisPanel = (function (_Component) {
					function XAxisPanel(_, e) {
						var t;
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								XAxisPanel,
							),
							(t =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
									this,
									_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
										XAxisPanel,
									).call(this, _, e),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'context',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeXAxis',
								function (_) {
									t.setState({ xAxis: Object.assign({}, _) }, function () {
										t.context.onChangeXAxis(t.state.xAxis);
									});
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeActiveKey',
								function (_) {
									t.setState({ activeKey: _ }), t.context.onChangeXAxisActiveKey(_);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleAddXAxis',
								function () {
									var _ = uuid__WEBPACK_IMPORTED_MODULE_11___default()();
									t.setState(
										{
											xAxis: Object.assign(
												{},
												t.state.xAxis,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
													{},
													_,
													{ type: 'category', show: !0 },
												),
											),
											activeKey: t.state.activeKey.concat(_),
										},
										function () {
											t.context.onChangeXAxis(t.state.xAxis);
										},
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleCollapse',
								function () {
									var _ = !t.state.collapsed,
										e = _ ? [] : Object.keys(t.state.xAxis);
									t.setState({ collapsed: _, activeKey: e }), t.context.onChangeXAxisActiveKey(e);
								},
							),
							(t.state = { xAxis: e.xAxis, activeKey: e.xAxisActiveKey, collapsed: !1 }),
							t
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(XAxisPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(XAxisPanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.context,
										e = _.xAxis,
										t = _.xAxisActiveKey,
										a = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										_Panel__WEBPACK_IMPORTED_MODULE_12__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												'div',
												{ className: 'editor-property-header' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
													{ icon: a ? 'arrows-alt' : 'shrink', onClick: this.handleCollapse },
													a
														? i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('action.expand')
														: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('action.collapse'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
													{ type: 'primary', icon: 'plus', onClick: this.handleAddXAxis },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.xaxis.title'),
												),
											),
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												'div',
												{ className: 'editor-property-content' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													_form__WEBPACK_IMPORTED_MODULE_13__.a,
													{
														value: e,
														label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
															'widget.xaxis.title',
														),
														addButton: !1,
														activeKey: t,
														formSchema: {
															type: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.type',
																),
																type: 'select',
																initialValue: 'category',
																style: { width: '100%' },
																items: [
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.value',
																		),
																		value: 'value',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.time',
																		),
																		value: 'time',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.category',
																		),
																		value: 'category',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.log',
																		),
																		value: 'log',
																	},
																],
															},
															show: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.visible',
																),
																type: 'boolean',
																initialValue: !0,
																span: 12,
															},
															inverse: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.inverse',
																),
																type: 'boolean',
																initialValue: !1,
																span: 12,
															},
															name: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.name',
																),
															},
														},
														onChange: this.handleChangeXAxis,
														onChangeActiveKey: this.handleChangeActiveKey,
													},
												),
											),
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						XAxisPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
				XAxisPanel,
				'contextType',
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_14__.a,
			);
			var _default = XAxisPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						XAxisPanel,
						'XAxisPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\XAxisPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\XAxisPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	449: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_Panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84),
				_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(159),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(128),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				YAxisPanel = (function (_Component) {
					function YAxisPanel(_, e) {
						var t;
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								YAxisPanel,
							),
							(t =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
									this,
									_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
										YAxisPanel,
									).call(this, _, e),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'context',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeYAxis',
								function (_) {
									t.setState({ yAxis: Object.assign({}, _) }, function () {
										t.context.onChangeYAxis(t.state.yAxis);
									});
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeActiveKey',
								function (_) {
									t.setState({ activeKey: _ }), t.context.onChangeYAxisActiveKey(_);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleAddYAxis',
								function () {
									var _ = uuid__WEBPACK_IMPORTED_MODULE_11___default()();
									t.setState(
										{
											yAxis: Object.assign(
												{},
												t.state.yAxis,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
													{},
													_,
													{ type: 'value', show: !0 },
												),
											),
											activeKey: t.state.activeKey.concat(_),
										},
										function () {
											t.context.onChangeYAxis(t.state.yAxis);
										},
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleCollapse',
								function () {
									var _ = !t.state.collapsed,
										e = _ ? [] : Object.keys(t.state.yAxis);
									t.setState({ collapsed: _, activeKey: e }), t.context.onChangeYAxisActiveKey(e);
								},
							),
							(t.state = { yAxis: e.yAxis, activeKey: e.yAxisActiveKey, collapsed: !1 }),
							t
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(YAxisPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(YAxisPanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.context,
										e = _.yAxis,
										t = _.yAxisActiveKey,
										a = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										_Panel__WEBPACK_IMPORTED_MODULE_12__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												'div',
												{ className: 'editor-property-header' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
													{ icon: a ? 'arrows-alt' : 'shrink', onClick: this.handleCollapse },
													a
														? i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('action.expand')
														: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('action.collapse'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
													{ type: 'primary', icon: 'plus', onClick: this.handleAddYAxis },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.yaxis.title'),
												),
											),
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												'div',
												{ className: 'editor-property-content' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													_form__WEBPACK_IMPORTED_MODULE_13__.a,
													{
														value: e,
														label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
															'widget.yaxis.title',
														),
														addButton: !1,
														activeKey: t,
														formSchema: {
															type: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.type',
																),
																type: 'select',
																initialValue: 'value',
																style: { width: '100%' },
																items: [
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.value',
																		),
																		value: 'value',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.time',
																		),
																		value: 'time',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.category',
																		),
																		value: 'category',
																	},
																	{
																		label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																			'common.log',
																		),
																		value: 'log',
																	},
																],
															},
															show: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.visible',
																),
																type: 'boolean',
																initialValue: !0,
																span: 12,
															},
															inverse: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.inverse',
																),
																type: 'boolean',
																initialValue: !1,
																span: 12,
															},
															name: {
																label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																	'common.name',
																),
															},
														},
														onChange: this.handleChangeYAxis,
														onChangeActiveKey: this.handleChangeActiveKey,
													},
												),
											),
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						YAxisPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
				YAxisPanel,
				'contextType',
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_14__.a,
			);
			var _default = YAxisPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						YAxisPanel,
						'YAxisPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\YAxisPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\YAxisPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	466: function (_, e, t) {
		'use strict';
		t(84);
		var a = t(720);
		t.d(e, 'a', function () {
			return a.a;
		});
		var r = t(806);
		t.d(e, 'b', function () {
			return r.a;
		});
		t(447), t(448), t(449);
		var l = t(829);
		t.d(e, 'c', function () {
			return l.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	592: function (_, e, t) {
		'use strict';
		t(713);
		var a = t(718);
		t.d(e, 'b', function () {
			return a.a;
		});
		var r = t(719);
		t.d(e, 'a', function () {
			return r.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	610: function (_, e, t) {
		var a = {
			'./af': 271,
			'./af.js': 271,
			'./ar': 272,
			'./ar-dz': 273,
			'./ar-dz.js': 273,
			'./ar-kw': 274,
			'./ar-kw.js': 274,
			'./ar-ly': 275,
			'./ar-ly.js': 275,
			'./ar-ma': 276,
			'./ar-ma.js': 276,
			'./ar-sa': 277,
			'./ar-sa.js': 277,
			'./ar-tn': 278,
			'./ar-tn.js': 278,
			'./ar.js': 272,
			'./az': 279,
			'./az.js': 279,
			'./be': 280,
			'./be.js': 280,
			'./bg': 281,
			'./bg.js': 281,
			'./bm': 282,
			'./bm.js': 282,
			'./bn': 283,
			'./bn.js': 283,
			'./bo': 284,
			'./bo.js': 284,
			'./br': 285,
			'./br.js': 285,
			'./bs': 286,
			'./bs.js': 286,
			'./ca': 287,
			'./ca.js': 287,
			'./cs': 288,
			'./cs.js': 288,
			'./cv': 289,
			'./cv.js': 289,
			'./cy': 290,
			'./cy.js': 290,
			'./da': 291,
			'./da.js': 291,
			'./de': 292,
			'./de-at': 293,
			'./de-at.js': 293,
			'./de-ch': 294,
			'./de-ch.js': 294,
			'./de.js': 292,
			'./dv': 295,
			'./dv.js': 295,
			'./el': 296,
			'./el.js': 296,
			'./en-SG': 297,
			'./en-SG.js': 297,
			'./en-au': 298,
			'./en-au.js': 298,
			'./en-ca': 299,
			'./en-ca.js': 299,
			'./en-gb': 300,
			'./en-gb.js': 300,
			'./en-ie': 301,
			'./en-ie.js': 301,
			'./en-il': 302,
			'./en-il.js': 302,
			'./en-nz': 303,
			'./en-nz.js': 303,
			'./eo': 304,
			'./eo.js': 304,
			'./es': 305,
			'./es-do': 306,
			'./es-do.js': 306,
			'./es-us': 307,
			'./es-us.js': 307,
			'./es.js': 305,
			'./et': 308,
			'./et.js': 308,
			'./eu': 309,
			'./eu.js': 309,
			'./fa': 310,
			'./fa.js': 310,
			'./fi': 311,
			'./fi.js': 311,
			'./fo': 312,
			'./fo.js': 312,
			'./fr': 313,
			'./fr-ca': 314,
			'./fr-ca.js': 314,
			'./fr-ch': 315,
			'./fr-ch.js': 315,
			'./fr.js': 313,
			'./fy': 316,
			'./fy.js': 316,
			'./ga': 317,
			'./ga.js': 317,
			'./gd': 318,
			'./gd.js': 318,
			'./gl': 319,
			'./gl.js': 319,
			'./gom-latn': 320,
			'./gom-latn.js': 320,
			'./gu': 321,
			'./gu.js': 321,
			'./he': 322,
			'./he.js': 322,
			'./hi': 323,
			'./hi.js': 323,
			'./hr': 324,
			'./hr.js': 324,
			'./hu': 325,
			'./hu.js': 325,
			'./hy-am': 326,
			'./hy-am.js': 326,
			'./id': 327,
			'./id.js': 327,
			'./is': 328,
			'./is.js': 328,
			'./it': 329,
			'./it-ch': 330,
			'./it-ch.js': 330,
			'./it.js': 329,
			'./ja': 331,
			'./ja.js': 331,
			'./jv': 332,
			'./jv.js': 332,
			'./ka': 333,
			'./ka.js': 333,
			'./kk': 334,
			'./kk.js': 334,
			'./km': 335,
			'./km.js': 335,
			'./kn': 336,
			'./kn.js': 336,
			'./ko': 337,
			'./ko.js': 337,
			'./ku': 338,
			'./ku.js': 338,
			'./ky': 339,
			'./ky.js': 339,
			'./lb': 340,
			'./lb.js': 340,
			'./lo': 341,
			'./lo.js': 341,
			'./lt': 342,
			'./lt.js': 342,
			'./lv': 343,
			'./lv.js': 343,
			'./me': 344,
			'./me.js': 344,
			'./mi': 345,
			'./mi.js': 345,
			'./mk': 346,
			'./mk.js': 346,
			'./ml': 347,
			'./ml.js': 347,
			'./mn': 348,
			'./mn.js': 348,
			'./mr': 349,
			'./mr.js': 349,
			'./ms': 350,
			'./ms-my': 351,
			'./ms-my.js': 351,
			'./ms.js': 350,
			'./mt': 352,
			'./mt.js': 352,
			'./my': 353,
			'./my.js': 353,
			'./nb': 354,
			'./nb.js': 354,
			'./ne': 355,
			'./ne.js': 355,
			'./nl': 356,
			'./nl-be': 357,
			'./nl-be.js': 357,
			'./nl.js': 356,
			'./nn': 358,
			'./nn.js': 358,
			'./pa-in': 359,
			'./pa-in.js': 359,
			'./pl': 360,
			'./pl.js': 360,
			'./pt': 361,
			'./pt-br': 362,
			'./pt-br.js': 362,
			'./pt.js': 361,
			'./ro': 363,
			'./ro.js': 363,
			'./ru': 364,
			'./ru.js': 364,
			'./sd': 365,
			'./sd.js': 365,
			'./se': 366,
			'./se.js': 366,
			'./si': 367,
			'./si.js': 367,
			'./sk': 368,
			'./sk.js': 368,
			'./sl': 369,
			'./sl.js': 369,
			'./sq': 370,
			'./sq.js': 370,
			'./sr': 371,
			'./sr-cyrl': 372,
			'./sr-cyrl.js': 372,
			'./sr.js': 371,
			'./ss': 373,
			'./ss.js': 373,
			'./sv': 374,
			'./sv.js': 374,
			'./sw': 375,
			'./sw.js': 375,
			'./ta': 376,
			'./ta.js': 376,
			'./te': 377,
			'./te.js': 377,
			'./tet': 378,
			'./tet.js': 378,
			'./tg': 379,
			'./tg.js': 379,
			'./th': 380,
			'./th.js': 380,
			'./tl-ph': 381,
			'./tl-ph.js': 381,
			'./tlh': 382,
			'./tlh.js': 382,
			'./tr': 383,
			'./tr.js': 383,
			'./tzl': 384,
			'./tzl.js': 384,
			'./tzm': 385,
			'./tzm-latn': 386,
			'./tzm-latn.js': 386,
			'./tzm.js': 385,
			'./ug-cn': 387,
			'./ug-cn.js': 387,
			'./uk': 388,
			'./uk.js': 388,
			'./ur': 389,
			'./ur.js': 389,
			'./uz': 390,
			'./uz-latn': 391,
			'./uz-latn.js': 391,
			'./uz.js': 390,
			'./vi': 392,
			'./vi.js': 392,
			'./x-pseudo': 393,
			'./x-pseudo.js': 393,
			'./yo': 394,
			'./yo.js': 394,
			'./zh-cn': 395,
			'./zh-cn.js': 395,
			'./zh-hk': 396,
			'./zh-hk.js': 396,
			'./zh-tw': 397,
			'./zh-tw.js': 397,
		};
		function r(_) {
			var e = l(_);
			return t(e);
		}
		function l(_) {
			if (!t.o(a, _)) {
				var e = new Error("Cannot find module '" + _ + "'");
				throw ((e.code = 'MODULE_NOT_FOUND'), e);
			}
			return a[_];
		}
		(r.keys = function () {
			return Object.keys(a);
		}),
			(r.resolve = l),
			(_.exports = r),
			(r.id = 610);
	},
	709: function (_, e, t) {
		'use strict';
		(function (_) {
			var a,
				r = t(26),
				l = t(847),
				n = t(264);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
			var i,
				o,
				E = r.a
					.use(l.a)
					.init({
						load: 'languageOnly',
						whitelist: ['en', 'en-US', 'ko', 'ko-KR'],
						nonExplicitWhitelist: !1,
						fallbackLng: 'en-US',
						interpolation: { escapeValue: !1 },
						react: { wait: !0, nsMode: 'default' },
						defaultNS: 'locale.constant',
						resources: {
							en: { 'locale.constant': n.a },
							'en-US': { 'locale.constant': n.a },
							ko: { 'locale.constant': n.b },
							'ko-KR': { 'locale.constant': n.b },
						},
					}),
				s = function () {
					return E;
				};
			(e.a = s),
				(i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(i.register(E, 'i18nClient', 'c:\\workspace\\react-analytics\\src\\i18n\\i18nClient.ts'),
					i.register(s, 'default', 'c:\\workspace\\react-analytics\\src\\i18n\\i18nClient.ts')),
				(o = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && o(_);
		}.call(this, t(63)(_)));
	},
	710: function (_) {
		_.exports = JSON.parse('{"common":{"home":"Hoe"}}');
	},
	711: function (_) {
		_.exports = JSON.parse(
			'{"action":{"login":"로그인","save":"저장","close":"닫기","cancel":"취소","enabled":"사용 여부","add":"추가","more":"더 보기","ok":"확인","collapse":"축소","expand":"확장"},"common":{"id":"아이디","home":"홈","title":"제목","description":"설명","general":"일반","value":"값","gauge":"게이지","name":"이름","type":"종류","data":"데이터","user-id":"사용자 아이디","password":"비밀번호","info":"정보","warning":"경고","critical":"심각","location":"위치","basic-info":"기본 정보","category":"카테고리","time":"시간","log":"로그","visible":"보기","inverse":"역"},"confirm":{"delete":"\'{{arg}}\'을(를) 삭제하시겠습니까?"},"chart":{"line":"라인 차트","bar":"바 차트","area":"영역 차트","scatter":"스캐터 차트","pie":"파이 차트"},"widget":{"modify":"위젯 수정","delete":"위젯 삭제","clone":"위젯 복제","card":{"title":"카드 위젯","description":"카드 형태의 위젯을 추가합니다","type":"카드 형태"},"memo":{"title":"메모 위젯","description":"HTML, 텍스트 등 다양한 내용을 메모할 수 있습니다","html":"HTML 여부"},"line-chart":{"title":"라인 차트 위젯","description":"라인 형태의 차트 위젯을 추가합니다","isArea":"영역 차트 여부"},"pie-chart":{"title":"파이 차트 위젯","description":"파이 형태의 차트 위젯을 추가합니다"},"area-chart":{"title":"영역 차트 위젯","description":"영역 형태의 차트 위젯을 추가합니다"},"series":{"title":"시리즈","description":"시리즈를 추가합니다"},"xaxis":{"title":"X 축","description":"X 축을 설정합니다","data":"X 축 데이터"},"yaxis":{"title":"Y 축","description":"Y 축을 설정합니다","data":"Y 축 데이터"},"grid":{"title":"그리드","description":"차트의 그리드를 설정합니다"}},"validate":{"enter-arg":"\'{{arg}}\'을(를) 입력해 주세요"}}',
		);
	},
	713: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__,
				),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				Header = (function (_Component) {
					function Header() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Header),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
									Header,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Header, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Header, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
										antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
										null,
										'test',
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						Header
					);
				})(react__WEBPACK_IMPORTED_MODULE_7__.Component),
				_default = Header,
				_unused_webpack_default_export = _default,
				reactHotLoader,
				leaveModule;
			(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						Header,
						'Header',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Header.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Header.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	718: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386),
				antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(230),
				antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				Sider = (function (_Component) {
					function Sider() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Sider),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(
									Sider,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Sider, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Sider, [
							{
								key: 'render',
								value: function () {
									var _ = this.props.onSelect;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Sider,
										{ theme: 'light' },
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a,
											{
												onSelect: _,
												defaultSelectedKeys: ['series'],
												defaultOpenKeys: ['structure'],
												theme: 'light',
												mode: 'inline',
											},
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu,
												{ key: 'structure', title: '구조' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'series' },
													'시리즈',
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'xaxis' },
													'X 축',
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'yaxis' },
													'Y 축',
												),
											),
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						Sider
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component),
				_default = Sider,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						Sider,
						'Sider',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Sider.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Sider.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	719: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__,
				),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				react_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(595),
				_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(466),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				Content = (function (_Component) {
					function Content() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Content),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
									Content,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Content, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Content, [
							{
								key: 'render',
								value: function () {
									var _ = this.props.panelKey;
									return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
										antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content,
										{ style: { position: 'relative', width: '100%', height: '100%' } },
										react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
											react_split__WEBPACK_IMPORTED_MODULE_8__.a,
											{
												style: {
													height: '100%',
													width: '100%',
													display: 'flex',
													overflow: 'hidden',
												},
												direction: 'horizontal',
												sizes: [25, 75],
												minSize: [260, 700],
											},
											react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
												_panel__WEBPACK_IMPORTED_MODULE_9__.c,
												{ panelKey: _ },
											),
											react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
												react_split__WEBPACK_IMPORTED_MODULE_8__.a,
												{
													style: { overflow: 'hidden' },
													direction: 'vertical',
													cursor: 'row-resize',
													sizes: [25, 75],
													minSize: [260, 500],
												},
												react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
													_panel__WEBPACK_IMPORTED_MODULE_9__.b,
													null,
												),
												react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
													_panel__WEBPACK_IMPORTED_MODULE_9__.a,
													null,
												),
											),
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						Content
					);
				})(react__WEBPACK_IMPORTED_MODULE_7__.Component),
				_default = Content,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						Content,
						'Content',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Content.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Content.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	720: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__,
				),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				echarts_for_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(852),
				echarts_for_react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					echarts_for_react__WEBPACK_IMPORTED_MODULE_8__,
				),
				_Panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(128),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				ChartPanel = (function (_Component) {
					function ChartPanel() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ChartPanel);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
											ChartPanel,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'chartRef',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'echarts',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'context',
								void 0,
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ChartPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ChartPanel, [
							{
								key: 'componentDidMount',
								value: function () {
									this.echarts = this.chartRef.getEchartsInstance();
								},
							},
							{
								key: 'componentDidCatch',
								value: function (_, e) {
									console.log(_, e);
								},
							},
							{
								key: 'render',
								value: function () {
									var _ = this,
										e = this.context,
										t = e.series,
										a = e.xAxis,
										r = e.yAxis,
										l = Object.keys(a).map(function (_) {
											var e = a[_],
												t = e.type,
												r = void 0 === t ? 'category' : t,
												l = e.show;
											return { id: _, type: r, show: void 0 === l || l };
										}),
										n = Object.keys(r).map(function (_) {
											var e = r[_],
												t = e.type,
												a = void 0 === t ? 'value' : t,
												l = e.show;
											return { id: _, type: a, show: void 0 === l || l };
										});
									return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
										_Panel__WEBPACK_IMPORTED_MODULE_9__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
											echarts_for_react__WEBPACK_IMPORTED_MODULE_8___default.a,
											{
												ref: function (e) {
													_.chartRef = e;
												},
												notMerge: !0,
												option: {
													xAxis: l,
													yAxis: n,
													series: Object.keys(t).map(function (_) {
														var e = t[_],
															a = e.type,
															r = e.xAxis,
															i = e.yAxis,
															o = 'area' === a,
															E = l.findIndex(function (_) {
																return _.id === r;
															}),
															s = n.findIndex(function (_) {
																return _.id === i;
															});
														return {
															id: _,
															type: o ? 'line' : a,
															data: t[_].data,
															areaStyle: o ? {} : null,
															xAxisIndex: E >= 0 ? E : 0,
															yAxisIndex: s >= 0 ? s : 0,
														};
													}),
												},
												style: { height: '100%', width: '100%' },
											},
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						ChartPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_7__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
				ChartPanel,
				'contextType',
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_10__.a,
			);
			var _default = ChartPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						ChartPanel,
						'ChartPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\ChartPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\ChartPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	806: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				react_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(853),
				react_data_grid__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					react_data_grid__WEBPACK_IMPORTED_MODULE_6__,
				),
				_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84),
				_resizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(854),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				columns = [
					{ key: 'id', name: 'ID', editable: !0 },
					{ key: 'title', name: 'Title', editable: !0 },
					{ key: 'complete', name: 'Complete', editable: !0 },
				],
				rows = [
					{ id: 0, title: 'Task 1', complete: 20 },
					{ id: 1, title: 'Task 2', complete: 40 },
					{ id: 2, title: 'Task 3', complete: 60 },
				],
				DataGridPanel = (function (_Component) {
					function DataGridPanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								DataGridPanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									DataGridPanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							DataGridPanel,
							_Component,
						),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DataGridPanel, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
										_Panel__WEBPACK_IMPORTED_MODULE_7__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
											_resizer__WEBPACK_IMPORTED_MODULE_8__.a,
											null,
											function (_, e) {
												return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
													react_data_grid__WEBPACK_IMPORTED_MODULE_6___default.a,
													{
														minHeight: e,
														minWidth: _,
														columns,
														rowGetter: function (_) {
															return rows[_];
														},
														rowsCount: 3,
													},
												);
											},
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						DataGridPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = DataGridPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						columns,
						'columns',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\DataGridPanel.tsx',
					),
					reactHotLoader.register(
						rows,
						'rows',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\DataGridPanel.tsx',
					),
					reactHotLoader.register(
						DataGridPanel,
						'DataGridPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\DataGridPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\DataGridPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	807: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__,
				),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(156),
				enterModule;
			function ownKeys(_, e) {
				var t = Object.keys(_);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(_);
					e &&
						(a = a.filter(function (e) {
							return Object.getOwnPropertyDescriptor(_, e).enumerable;
						})),
						t.push.apply(t, a);
				}
				return t;
			}
			function _objectSpread(_) {
				for (var e = 1; e < arguments.length; e++) {
					var t = null != arguments[e] ? arguments[e] : {};
					e % 2
						? ownKeys(Object(t), !0).forEach(function (e) {
								_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
									_,
									e,
									t[e],
								);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(_, Object.getOwnPropertyDescriptors(t))
						: ownKeys(Object(t)).forEach(function (e) {
								Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(t, e));
						  });
				}
				return _;
			}
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				Resizer = (function (_Component) {
					function Resizer() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Resizer);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
											Resizer,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'container',
								react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef(),
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'resizeObserver',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'state',
								{ width: 0, height: 0 },
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'createObserver',
								function () {
									(e.resizeObserver =
										new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_8__.default(function (_) {
											var t = (_[0] && _[0].contentRect) || {},
												a = t.width,
												r = void 0 === a ? 0 : a,
												l = t.height,
												n = void 0 === l ? 0 : l;
											e.setState({ width: r, height: n });
										})),
										e.resizeObserver.observe(e.container.current);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'cancelObserver',
								function () {
									e.resizeObserver && e.resizeObserver.disconnect();
								},
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Resizer, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Resizer, [
							{
								key: 'componentDidMount',
								value: function () {
									this.createObserver();
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.cancelObserver();
								},
							},
							{
								key: 'render',
								value: function () {
									var _ = this.props,
										e = _.children,
										t = _.style,
										a = _.className,
										r = this.state,
										l = r.width,
										n = r.height;
									return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
										'div',
										{
											style: _objectSpread({ width: '100%', height: '100%' }, t),
											className: a,
											ref: this.container,
										},
										e(l, n),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						Resizer
					);
				})(react__WEBPACK_IMPORTED_MODULE_7__.Component),
				_default = Resizer,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						Resizer,
						'Resizer',
						'c:\\workspace\\react-analytics\\src\\components\\resizer\\Resizer.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\resizer\\Resizer.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	808: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226),
				_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(227),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(809),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(464),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_row__WEBPACK_IMPORTED_MODULE_3__,
				),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(810),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__,
				),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(463),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					antd_lib_col__WEBPACK_IMPORTED_MODULE_5__,
				),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(811),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_6__,
				),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(191),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					antd_lib_form__WEBPACK_IMPORTED_MODULE_7__,
				),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(538),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__,
				),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(262),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__,
				),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(577),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__,
				),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__,
				),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(812),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_12__,
				),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(131),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					antd_lib_select__WEBPACK_IMPORTED_MODULE_13__,
				),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(814),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
					antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_14__,
				),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(462),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
					antd_lib_switch__WEBPACK_IMPORTED_MODULE_15__,
				),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(815),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_16__,
				),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(461),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17__,
				),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(816),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(
					antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18__,
				),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(130),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
					antd_lib_input__WEBPACK_IMPORTED_MODULE_19__,
				),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(817),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(
					antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_20__,
				),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(460),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(
					antd_lib_divider__WEBPACK_IMPORTED_MODULE_21__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__ =
					__webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28__,
				),
				react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_29___default = __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_29__,
				),
				i18next__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(26),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(459),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31___default = __webpack_require__.n(
					lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31__,
				),
				_DynamicForm__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(219),
				enterModule;
			function ownKeys(_, e) {
				var t = Object.keys(_);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(_);
					e &&
						(a = a.filter(function (e) {
							return Object.getOwnPropertyDescriptor(_, e).enumerable;
						})),
						t.push.apply(t, a);
				}
				return t;
			}
			function _objectSpread(_) {
				for (var e = 1; e < arguments.length; e++) {
					var t = null != arguments[e] ? arguments[e] : {};
					e % 2
						? ownKeys(Object(t), !0).forEach(function (e) {
								_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
									_,
									e,
									t[e],
								);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(_, Object.getOwnPropertyDescriptors(t))
						: ownKeys(Object(t)).forEach(function (e) {
								Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(t, e));
						  });
				}
				return _;
			}
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				Form = (function (_Component) {
					function Form() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22___default()(this, Form);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default()(
											Form,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(e),
								'state',
								{ errors: null, selectedValues: {} },
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(e),
								'createFormItem',
								function (_, t) {
									var a = e.props,
										r = a.colon,
										l = void 0 !== r && r,
										n = a.isSingle,
										i = a.values,
										o = a.form,
										E = null,
										s = t.disabled,
										u = t.icon,
										c = t.extra,
										d = t.help,
										P = t.description,
										b = t.span,
										O = t.max,
										M = t.min,
										D = t.placeholder,
										p = t.valuePropName,
										f = t.items,
										C = t.required,
										A = t.rules,
										L = t.initialValue,
										m = t.label,
										h = t.type,
										I = t.render,
										K = t.hasFeedback,
										R = t.mode,
										T = t.style,
										B = t.forms,
										W = t.header,
										U = t.onPressEnter,
										y = t.ref,
										k = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31___default()(i) ? L : i[_];
									void 0 === k && 'boolean' === h && (k = L), n && (k = i || L);
									var w = C
										? [
												{
													required: !0,
													message: i18next__WEBPACK_IMPORTED_MODULE_30__.a.t(
														'validation.enter-arg',
														{ arg: m },
													),
												},
										  ]
										: [];
									A && (w = w.concat(A));
									var v = null;
									switch (h) {
										case 'divider':
											return (E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_divider__WEBPACK_IMPORTED_MODULE_21___default.a,
												{ style: T, key: _ },
												m,
											));
										case 'label':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												'span',
												{ style: { fontWeight: 'bold' } },
												L,
											);
											break;
										case 'text':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default.a,
												{
													ref: y,
													onPressEnter: U,
													style: T,
													disabled: s,
													minLength: M,
													maxLength: O,
													placeholder: D,
												},
											);
											break;
										case 'password':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default.a.Password,
												{
													ref: y,
													onPressEnter: U,
													style: T,
													disabled: s,
													minLength: M,
													maxLength: O,
													placeholder: D,
												},
											);
											break;
										case 'textarea':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default.a.TextArea,
												{ ref: y, style: T, disabled: s, placeholder: D },
											);
											break;
										case 'number':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17___default.a,
												{
													ref: y,
													style: _objectSpread({}, T, { width: '100%' }),
													disabled: s,
													min: M,
													max: O,
												},
											);
											break;
										case 'boolean':
											(E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_switch__WEBPACK_IMPORTED_MODULE_15___default.a,
												{ style: T, disabled: s },
											)),
												void 0 === k && (k = !0);
											break;
										case 'select':
											(k = e.state.selectedValues[_] || k),
												(E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
													antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a,
													{
														style: T,
														mode: R,
														placeholder: D,
														disabled: s,
														onSelect: function (t) {
															return e.handlers.onSelect(t, _);
														},
													},
													Array.isArray(f) &&
														f.map(function (_) {
															return (
																_.forms &&
																	_.value === k &&
																	(v = Object.keys(_.forms).map(function (t) {
																		return e.createFormItem(t, _.forms[t]);
																	})),
																react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
																	antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default
																		.a.Option,
																	{ key: _.value, value: _.value },
																	_.label,
																)
															);
														}),
												));
											break;
										case 'tags':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a,
												{
													style: T,
													mode: 'tags',
													dropdownStyle: { display: 'none' },
													placeholder: D,
													disabled: s,
												},
												k &&
													k.map(function (_) {
														return react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
															antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default.a
																.Option,
															{ key: _, value: _ },
															_,
														);
													}),
											);
											break;
										case 'dynamic':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												_DynamicForm__WEBPACK_IMPORTED_MODULE_32__.a,
												{ formSchema: B, label: W },
											);
											break;
										case 'custom':
											E = I
												? I(o, i, s, e.validators.validate)
												: t.component
												? react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
														t.component,
														{
															ref: y,
															onPressEnter: U,
															style: T,
															onValidate: e.validators.validate,
															form: o,
															values: i,
															disabled: s,
														},
												  )
												: null;
											break;
										default:
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default.a,
												{
													ref: y,
													onPressEnter: U,
													style: T,
													minLength: M,
													maxLength: O,
													placeholder: D,
													disabled: s,
												},
											);
									}
									var g = P
										? react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												react__WEBPACK_IMPORTED_MODULE_29___default.a.Fragment,
												null,
												u
													? react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
															antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a,
															{ type: u },
													  )
													: null,
												react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
													'span',
													null,
													m,
												),
												react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
													antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default.a,
													{ title: P, placement: 'topRight' },
													react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
														'span',
														{ style: { float: 'right' } },
														react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
															antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a,
															{ type: 'question-circle' },
														),
													),
												),
										  )
										: react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												react__WEBPACK_IMPORTED_MODULE_29___default.a.Fragment,
												null,
												u
													? react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
															antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a,
															{ type: u },
													  )
													: null,
												react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
													'span',
													null,
													m,
												),
										  );
									return react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
										react__WEBPACK_IMPORTED_MODULE_29___default.a.Fragment,
										{ key: _ },
										react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
											antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a,
											{ md: 24, lg: b || 24 },
											react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item,
												{ colon: l, label: m ? g : null, help: d, extra: c, hasFeedback: K },
												o.getFieldDecorator(_, {
													initialValue: k,
													rules: w,
													valuePropName: 'boolean' == typeof k ? 'checked' : p || 'value',
												})(E),
											),
										),
										v,
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(e),
								'handlers',
								{
									onSelect: function (_, t) {
										var a = e.state.selectedValues;
										e.setState({
											selectedValues: Object.assign(
												{},
												a,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
													{},
													t,
													_,
												),
											),
										});
									},
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(e),
								'validators',
								{
									validate: function (_) {
										e.setState({ errors: _ });
									},
									aceEditorValidator: function (_, t, a) {
										e.state.errors && e.state.errors.length ? a(e.state.errors) : a();
									},
									cronValidator: function (_, t, a) {
										e.state.errors && e.state.errors.length ? a(e.state.errors) : a();
									},
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(e),
								'createForm',
								function () {
									var _,
										t = e.props,
										a = t.gutter,
										r = void 0 === a ? 16 : a,
										l = t.isSingle,
										n = t.formKey,
										i = t.formSchema;
									if (l) _ = e.createFormItem(n, i);
									else {
										var o = i;
										_ = Object.keys(i).map(function (_) {
											return e.createFormItem(_, o[_]);
										});
									}
									return react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
										antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a,
										{ gutter: r },
										_,
									);
								},
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27___default()(Form, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23___default()(Form, [
							{
								key: 'UNSAFE_componentWillReceiveProps',
								value: function (_) {
									JSON.stringify(_.values) !== JSON.stringify(this.props.values) &&
										(_.form.resetFields(), this.setState({ selectedValues: {} }));
								},
							},
							{
								key: 'render',
								value: function () {
									var _,
										e = this.props,
										t = e.children,
										a = (e.onValuesChange, e.formSchema),
										r = e.form,
										l = (e.gutter, e.values, e.layout),
										n = void 0 === l ? 'vertical' : l,
										i = e.colon,
										o = void 0 !== i && i,
										E = e.useForm,
										s = void 0 === E || E,
										u = (e.formKey, e.isSingle, e.render),
										c =
											_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
												e,
												[
													'children',
													'onValuesChange',
													'formSchema',
													'form',
													'gutter',
													'values',
													'layout',
													'colon',
													'useForm',
													'formKey',
													'isSingle',
													'render',
												],
											);
									return (
										(_ = a
											? this.createForm()
											: 'function' == typeof t
											? t(r)
											: 'function' == typeof u
											? u(r)
											: t),
										s
											? react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
													antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a,
													_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
														{ colon: o, layout: n },
														c,
													),
													_,
											  )
											: _
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						Form
					);
				})(react__WEBPACK_IMPORTED_MODULE_29__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default()(Form, 'Item', void 0),
				(Form.Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item);
			var _default = antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.create({
					onValuesChange: function (_, e, t) {
						var a = _.onValuesChange,
							r = _.formKey,
							l = _.isSingle;
						a && a(t, r, l);
					},
				})(Form),
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						Form,
						'Form',
						'c:\\workspace\\react-analytics\\src\\components\\form\\Form.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\form\\Form.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	828: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(464),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_row__WEBPACK_IMPORTED_MODULE_1__,
				),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(810),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(463),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_col__WEBPACK_IMPORTED_MODULE_3__,
				),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(811),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__,
				),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(191),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					antd_lib_form__WEBPACK_IMPORTED_MODULE_5__,
				),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(538),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6__,
				),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(262),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7__,
				),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(577),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__,
				),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__,
				),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(812),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__,
				),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(131),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					antd_lib_select__WEBPACK_IMPORTED_MODULE_11__,
				),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(814),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__,
				),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(462),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__,
				),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(815),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
					antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_14__,
				),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(461),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
					antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15__,
				),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(816),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__,
				),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(130),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					antd_lib_input__WEBPACK_IMPORTED_MODULE_17__,
				),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(817),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(
					antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_18__,
				),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(460),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
					antd_lib_divider__WEBPACK_IMPORTED_MODULE_19__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22__ =
					__webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26__,
				),
				react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_27___default = __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_27__,
				),
				i18next__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(26),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(459),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29___default = __webpack_require__.n(
					lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29__,
				),
				_DynamicForm__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(219),
				enterModule;
			function ownKeys(_, e) {
				var t = Object.keys(_);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(_);
					e &&
						(a = a.filter(function (e) {
							return Object.getOwnPropertyDescriptor(_, e).enumerable;
						})),
						t.push.apply(t, a);
				}
				return t;
			}
			function _objectSpread(_) {
				for (var e = 1; e < arguments.length; e++) {
					var t = null != arguments[e] ? arguments[e] : {};
					e % 2
						? ownKeys(Object(t), !0).forEach(function (e) {
								_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
									_,
									e,
									t[e],
								);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(_, Object.getOwnPropertyDescriptors(t))
						: ownKeys(Object(t)).forEach(function (e) {
								Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(t, e));
						  });
				}
				return _;
			}
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				FormItem = (function (_Component) {
					function FormItem() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default()(this, FormItem);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default()(
											FormItem,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default()(e),
								'state',
								{ errors: null, selectedValues: {} },
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default()(e),
								'createFormItem',
								function (_, t) {
									var a = e.props,
										r = a.colon,
										l = void 0 !== r && r,
										n = a.isSingle,
										i = a.values,
										o = a.form,
										E = null,
										s = t.disabled,
										u = t.icon,
										c = t.extra,
										d = t.help,
										P = t.description,
										b = t.span,
										O = t.max,
										M = t.min,
										D = t.placeholder,
										p = t.valuePropName,
										f = t.items,
										C = t.required,
										A = t.rules,
										L = t.initialValue,
										m = t.label,
										h = t.type,
										I = t.render,
										K = t.hasFeedback,
										R = t.mode,
										T = t.style,
										B = t.forms,
										W = t.header,
										U = t.onPressEnter,
										y = t.ref,
										k = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29___default()(i) ? L : i[_];
									n && (k = i || L);
									var w = C
										? [
												{
													required: !0,
													message: i18next__WEBPACK_IMPORTED_MODULE_28__.a.t(
														'validation.enter-arg',
														{ arg: m },
													),
												},
										  ]
										: [];
									A && (w = w.concat(A));
									var v = null;
									switch (h) {
										case 'divider':
											return (E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_divider__WEBPACK_IMPORTED_MODULE_19___default.a,
												{ style: T, key: _ },
												m,
											));
										case 'label':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												'span',
												{ style: { fontWeight: 'bold' } },
												L,
											);
											break;
										case 'text':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a,
												{
													ref: y,
													onPressEnter: U,
													style: T,
													disabled: s,
													minLength: M,
													maxLength: O,
													placeholder: D,
												},
											);
											break;
										case 'password':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a.Password,
												{
													ref: y,
													onPressEnter: U,
													style: T,
													disabled: s,
													minLength: M,
													maxLength: O,
													placeholder: D,
												},
											);
											break;
										case 'textarea':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a.TextArea,
												{ ref: y, style: T, disabled: s, placeholder: D },
											);
											break;
										case 'number':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15___default.a,
												{
													ref: y,
													style: _objectSpread({}, T, { width: '100%' }),
													disabled: s,
													min: M,
													max: O,
												},
											);
											break;
										case 'boolean':
											(E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default.a,
												{ style: T, disabled: s },
											)),
												void 0 === k && (k = !0);
											break;
										case 'select':
											(k = e.state.selectedValues[_] || k),
												(E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
													antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a,
													{
														style: T,
														mode: R,
														placeholder: D,
														disabled: s,
														onSelect: function (t) {
															return e.handlers.onSelect(t, _);
														},
													},
													Array.isArray(f) &&
														f.map(function (_) {
															return (
																_.forms &&
																	_.value === k &&
																	(v = Object.keys(_.forms).map(function (t) {
																		return e.createFormItem(t, _.forms[t]);
																	})),
																react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
																	antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default
																		.a.Option,
																	{ key: _.value, value: _.value },
																	_.label,
																)
															);
														}),
												));
											break;
										case 'tags':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a,
												{
													style: T,
													mode: 'tags',
													dropdownStyle: { display: 'none' },
													placeholder: D,
													disabled: s,
												},
												k &&
													k.map(function (_) {
														return react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
															antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a
																.Option,
															{ key: _, value: _ },
															_,
														);
													}),
											);
											break;
										case 'dynamic':
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												_DynamicForm__WEBPACK_IMPORTED_MODULE_30__.a,
												{ formSchema: B, label: W },
											);
											break;
										case 'custom':
											E = I
												? I(o, i, s, e.validators.validate)
												: t.component
												? react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
														t.component,
														{
															ref: y,
															onPressEnter: U,
															style: T,
															onValidate: e.validators.validate,
															form: o,
															values: i,
															disabled: s,
														},
												  )
												: null;
											break;
										default:
											E = react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a,
												{
													ref: y,
													onPressEnter: U,
													style: T,
													minLength: M,
													maxLength: O,
													placeholder: D,
													disabled: s,
												},
											);
									}
									var g = P
										? react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												react__WEBPACK_IMPORTED_MODULE_27___default.a.Fragment,
												null,
												u
													? react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
															antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a,
															{ type: u },
													  )
													: null,
												react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
													'span',
													null,
													m,
												),
												react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
													antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7___default.a,
													{ title: P, placement: 'topRight' },
													react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
														'span',
														{ style: { float: 'right' } },
														react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
															antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a,
															{ type: 'question-circle' },
														),
													),
												),
										  )
										: react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												react__WEBPACK_IMPORTED_MODULE_27___default.a.Fragment,
												null,
												u
													? react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
															antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a,
															{ type: u },
													  )
													: null,
												react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
													'span',
													null,
													m,
												),
										  );
									return react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
										react__WEBPACK_IMPORTED_MODULE_27___default.a.Fragment,
										{ key: _ },
										react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
											antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a,
											{ md: 24, lg: b || 24 },
											react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
												antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item,
												{ colon: l, label: m ? g : null, help: d, extra: c, hasFeedback: K },
												o.getFieldDecorator(_, {
													initialValue: k,
													rules: w,
													valuePropName: 'boolean' == typeof k ? 'checked' : p || 'value',
												})(E),
											),
										),
										v,
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default()(e),
								'handlers',
								{
									onSelect: function (_, t) {
										var a = e.state.selectedValues;
										e.setState({
											selectedValues: Object.assign(
												{},
												a,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
													{},
													t,
													_,
												),
											),
										});
									},
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default()(e),
								'validators',
								{
									validate: function (_) {
										e.setState({ errors: _ });
									},
									aceEditorValidator: function (_, t, a) {
										e.state.errors && e.state.errors.length ? a(e.state.errors) : a();
									},
									cronValidator: function (_, t, a) {
										e.state.errors && e.state.errors.length ? a(e.state.errors) : a();
									},
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default()(e),
								'createForm',
								function () {
									var _,
										t = e.props,
										a = t.gutter,
										r = void 0 === a ? 16 : a,
										l = t.isSingle,
										n = t.formKey,
										i = t.formSchema;
									if (l) _ = e.createFormItem(n, i);
									else {
										var o = i;
										_ = Object.keys(i).map(function (_) {
											return e.createFormItem(_, o[_]);
										});
									}
									return react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(
										antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a,
										{ gutter: r },
										_,
									);
								},
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25___default()(FormItem, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default()(FormItem, [
							{
								key: 'UNSAFE_componentWillReceiveProps',
								value: function (_) {
									JSON.stringify(_.values) !== JSON.stringify(this.props.values) &&
										this.setState({ selectedValues: {} });
								},
							},
							{
								key: 'render',
								value: function () {
									var _ = this.props,
										e = _.children,
										t = _.formSchema,
										a = _.form,
										r = _.render;
									return t
										? this.createForm()
										: 'function' == typeof e
										? e(a)
										: 'function' == typeof r
										? r(a)
										: e;
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						FormItem
					);
				})(react__WEBPACK_IMPORTED_MODULE_27__.Component),
				_default = FormItem,
				_unused_webpack_default_export = _default,
				reactHotLoader,
				leaveModule;
			(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						FormItem,
						'FormItem',
						'c:\\workspace\\react-analytics\\src\\components\\form\\FormItem.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\form\\FormItem.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	829: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84),
				_XAxisPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(448),
				_YAxisPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(449),
				_SeriesPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(447),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				panels = {
					xaxis: _XAxisPanel__WEBPACK_IMPORTED_MODULE_7__.a,
					yaxis: _YAxisPanel__WEBPACK_IMPORTED_MODULE_8__.a,
					series: _SeriesPanel__WEBPACK_IMPORTED_MODULE_9__.a,
				},
				PropertyPanel = (function (_Component) {
					function PropertyPanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								PropertyPanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									PropertyPanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							PropertyPanel,
							_Component,
						),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertyPanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.props.panelKey,
										e = panels[_];
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
										_Panel__WEBPACK_IMPORTED_MODULE_6__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(e, null),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						PropertyPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = PropertyPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						panels,
						'panels',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\PropertyPanel.tsx',
					),
					reactHotLoader.register(
						PropertyPanel,
						'PropertyPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\PropertyPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\PropertyPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	84: function (_, e, t) {
		'use strict';
		(function (_) {
			var a,
				r = t(226),
				l = t.n(r),
				n = t(227),
				i = t.n(n),
				o = t(0),
				E = t.n(o),
				s = t(2),
				u = t.n(s);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
			var c,
				d,
				P = E.a.forwardRef(function (_, e) {
					var t = _.children,
						a = _.className,
						r = i()(_, ['children', 'className']);
					return E.a.createElement('div', l()({ ref: e, className: u()('editor-panel', a) }, r), t);
				}),
				b = P;
			(e.a = b),
				(c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(c.register(P, 'Panel', 'c:\\workspace\\react-analytics\\src\\components\\panel\\Panel.tsx'),
					c.register(b, 'default', 'c:\\workspace\\react-analytics\\src\\components\\panel\\Panel.tsx')),
				(d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && d(_);
		}.call(this, t(63)(_)));
	},
	846: function (_, e, t) {
		'use strict';
		var a = t(709);
		t.d(e, 'a', function () {
			return a.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	848: function (_, e, t) {
		'use strict';
		(function (_) {
			var a;
			t.d(e, 'a', function () {
				return i;
			}),
				(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
			var r,
				l,
				n = Boolean(
					'localhost' === window.location.hostname ||
						'[::1]' === window.location.hostname ||
						window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
				);
			function i(_) {
				if ('serviceWorker' in navigator) {
					if (new URL('/', window.location.href).origin !== window.location.origin) return;
					window.addEventListener('load', function () {
						var e = ''.concat('/', 'sw.js');
						n
							? (E(e, _),
							  navigator.serviceWorker.ready.then(function () {
									console.log(
										'This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA',
									);
							  }))
							: o(e, _);
					});
				}
			}
			function o(_, e) {
				navigator.serviceWorker
					.register(_)
					.then(function (_) {
						_.onupdatefound = function () {
							var t = _.installing;
							null != t &&
								(t.onstatechange = function () {
									'installed' === t.state &&
										(navigator.serviceWorker.controller
											? (console.log(
													'New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA.',
											  ),
											  e && e.onUpdate && e.onUpdate(_))
											: (console.log('Content is cached for offline use.'),
											  e && e.onSuccess && e.onSuccess(_)));
								});
						};
					})
					.catch(function (_) {
						console.error('Error during service worker registration:', _);
					});
			}
			function E(_, e) {
				fetch(_)
					.then(function (t) {
						var a = t.headers.get('content-type');
						404 === t.status || (null != a && -1 === a.indexOf('javascript'))
							? navigator.serviceWorker.ready.then(function (_) {
									_.unregister().then(function () {
										window.location.reload();
									});
							  })
							: o(_, e);
					})
					.catch(function () {
						console.log('No internet connection found. App is running in offline mode.');
					});
			}
			function s() {
				'serviceWorker' in navigator &&
					navigator.serviceWorker.ready.then(function (_) {
						_.unregister();
					});
			}
			(r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
				(r.register(n, 'isLocalhost', 'c:\\workspace\\react-analytics\\src\\serviceWorker.ts'),
				r.register(i, 'register', 'c:\\workspace\\react-analytics\\src\\serviceWorker.ts'),
				r.register(o, 'registerValidSW', 'c:\\workspace\\react-analytics\\src\\serviceWorker.ts'),
				r.register(E, 'checkValidServiceWorker', 'c:\\workspace\\react-analytics\\src\\serviceWorker.ts'),
				r.register(s, 'unregister', 'c:\\workspace\\react-analytics\\src\\serviceWorker.ts')),
				(l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && l(_);
		}.call(this, t(63)(_)));
	},
	849: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(850),
				react_helmet__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					react_helmet__WEBPACK_IMPORTED_MODULE_6__,
				),
				_components_editor_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(851),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				App = (function (_Component) {
					function App() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(
									this,
									arguments,
								),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
										'div',
										{ className: 'container' },
										react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
											react_helmet__WEBPACK_IMPORTED_MODULE_6___default.a,
											null,
											react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('meta', {
												charSet: 'utf-8',
											}),
											react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('meta', {
												name: 'viewport',
												content: 'width=device-width, initial-scale=1.0',
											}),
											react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('meta', {
												name: 'description',
												content: 'Gyul Admin Template',
											}),
											react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('link', {
												rel: 'manifest',
												href: ''.concat('/', 'manifest.json'),
											}),
											react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('link', {
												rel: 'shortcut icon',
												href: ''.concat('/', 'favicon.png'),
											}),
											react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('link', {
												rel: 'stylesheet',
												href: 'https://fonts.googleapis.com/earlyaccess/notosanskr.css',
											}),
										),
										react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
											_components_editor_Editor__WEBPACK_IMPORTED_MODULE_7__.a,
											null,
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						App
					);
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = App,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(App, 'App', 'c:\\workspace\\react-analytics\\src\\App.tsx'),
					reactHotLoader.register(_default, 'default', 'c:\\workspace\\react-analytics\\src\\App.tsx')),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	851: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(592),
				_styles_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1749),
				_styles_index_less__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					_styles_index_less__WEBPACK_IMPORTED_MODULE_11__,
				),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(128),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				Editor = (function (_Component) {
					function Editor() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Editor);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
											Editor,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),
								'state',
								{ panelKey: 'series' },
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(e),
								'handleSelectMenu',
								function (_) {
									var t = _.key;
									e.setState({ panelKey: t });
								},
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Editor, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Editor, [
							{
								key: 'render',
								value: function () {
									var _ = this.state.panelKey;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_12__.b,
										null,
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a,
											{ className: 'editor-container' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												_layout__WEBPACK_IMPORTED_MODULE_10__.b,
												{ onSelect: this.handleSelectMenu },
											),
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a,
												null,
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													_layout__WEBPACK_IMPORTED_MODULE_10__.a,
													{ panelKey: _ },
												),
											),
										),
									);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						Editor
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component),
				_default = Editor,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						Editor,
						'Editor',
						'c:\\workspace\\react-analytics\\src\\components\\editor\\Editor.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\editor\\Editor.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(63)(module)));
	},
	854: function (_, e, t) {
		'use strict';
		var a = t(807);
		t.d(e, 'a', function () {
			return a.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
});
