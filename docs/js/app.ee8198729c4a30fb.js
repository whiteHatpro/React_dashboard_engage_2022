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
	l.push([1219, 1]), t();
})({
	1219: function (_, e, t) {
		t(1220), (_.exports = t(1395));
	},
	1395: function (_, e, t) {
		'use strict';
		t.r(e),
			function (_) {
				var e,
					a = t(0),
					r = t.n(a),
					l = t(11),
					n = t.n(l),
					i = t(905),
					o = t(893),
					E = t(894);
				(e = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && e(_);
				'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
				var s = document.createElement('div');
				(s.id = 'root'), document.body.appendChild(s);
				var u,
					c,
					d = function (_) {
						var e = document.getElementById('root');
						n.a.render(r.a.createElement(i.AppContainer, null, r.a.createElement(_, null)), e);
					};
				d(E.a),
					Object(o.a)(),
					(u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
						(u.register(s, 'rootEl', 'c:\\workspace\\react-analytics\\src\\index.tsx'),
						u.register(d, 'render', 'c:\\workspace\\react-analytics\\src\\index.tsx')),
					(c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
						c(_);
			}.call(this, t(41)(_));
	},
	173: function (_, e, t) {
		'use strict';
		var a = t(746);
		t.d(e, 'c', function () {
			return a.a;
		});
		var r = t(748);
		t.d(e, 'a', function () {
			return r.a;
		});
		var l = t(834);
		t.d(e, 'b', function () {
			return l.a;
		});
		var n = t(836);
		t.d(e, 'd', function () {
			return n.a;
		});
		var i = t(872);
		t.d(e, 'e', function () {
			return i.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	1860: function (_, e, t) {
		var a = t(77),
			r = t(1861);
		'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[_.i, r, '']]);
		var l = { insert: 'head', singleton: !1 },
			n = (a(_.i, r, l), r.locals ? r.locals : {});
		_.exports = n;
	},
	1861: function (_, e, t) {
		(e = t(78)(!1)).push([
			_.i,
			"body,\n#root,\n.container {\n  height: 100%;\n  width: 100%;\n}\n/* Customize website's scrollbar like Mac OS\nNot supports in Firefox and IE */\n/* total width */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n/* background of the scrollbar except button or resizer */\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n/* scrollbar itself */\n::-webkit-scrollbar-thumb {\n  background-color: #babac0;\n  border-radius: 16px;\n  border: 1px solid transparent;\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: #a0a0a5;\n  border: 1px solid transparent;\n}\n/* set button(top and bottom of the scrollbar) */\n::-webkit-scrollbar-button {\n  display: none;\n}\n.editor-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.editor-panel {\n  width: 100%;\n  height: 100%;\n  flex: 1;\n}\n.editor-property {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.editor-property-header {\n  flex: 0 0 48px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px;\n}\n.editor-property-content {\n  flex: 1;\n  overflow-y: auto;\n}\n.action-icon {\n  transition: color 0.125s;\n  cursor: pointer;\n}\n.ant-form-item {\n  margin-bottom: 16px;\n}\n.dynamic-form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n}\n.dynamic-form .ant-collapse {\n  width: 100%;\n}\n.dynamic-form button {\n  margin: 16px 0 8px;\n}\n.Resizer {\n  background: #000;\n  opacity: 0.1;\n  z-index: 1;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n  cursor: ew-resize;\n}\n.Resizer:hover {\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n.Resizer.horizontal {\n  height: 16px;\n  margin: -5px 0;\n  border-top: 5px solid rgba(255, 255, 255, 0);\n  border-bottom: 5px solid rgba(255, 255, 255, 0);\n  cursor: row-resize;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=);\n}\n.Resizer.horizontal:hover {\n  border-top: 5px solid rgba(0, 0, 0, 0.5);\n  border-bottom: 5px solid rgba(0, 0, 0, 0.5);\n}\n.Resizer.vertical {\n  width: 16px;\n  margin: 0 -5px;\n  border-left: 5px solid rgba(255, 255, 255, 0);\n  border-right: 5px solid rgba(255, 255, 255, 0);\n  cursor: col-resize;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);\n}\n.Resizer.vertical:hover {\n  border-left: 5px solid rgba(0, 0, 0, 0.5);\n  border-right: 5px solid rgba(0, 0, 0, 0.5);\n}\n.Resizer.disabled {\n  cursor: not-allowed;\n}\n.Resizer.disabled:hover {\n  border-color: transparent;\n}\n.gutter {\n  background: #000;\n  opacity: 0.1;\n  z-index: 1;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding;\n  background-clip: padding-box;\n  cursor: ew-resize;\n}\n.gutter.gutter-horizontal {\n  width: 8px !important;\n  cursor: col-resize;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);\n}\n.gutter.gutter-vertical {\n  height: 8px !important;\n  cursor: row-resize;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=);\n}\n.gutter:hover {\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  opacity: 0.2;\n}\n",
			'',
		]),
			(_.exports = e);
	},
	230: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(843),
				antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(605),
				antd_lib_empty__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_empty__WEBPACK_IMPORTED_MODULE_3__,
				),
				antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1759),
				antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					antd_lib_collapse_style_css__WEBPACK_IMPORTED_MODULE_4__,
				),
				antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(613),
				antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(237),
				_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__,
				),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(594),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_7__,
				),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					antd_lib_icon__WEBPACK_IMPORTED_MODULE_8__,
				),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(137),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default =
					__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ =
					__webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_15__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__,
				),
				react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_17__,
				),
				uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81),
				uuid__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_18__),
				i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13),
				lodash_debounce__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(83),
				lodash_debounce__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(
					lodash_debounce__WEBPACK_IMPORTED_MODULE_20__,
				),
				___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(94),
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
										i = e.cloneButton,
										o = void 0 === i || i,
										E = e.deleteButton,
										s = void 0 === E || E,
										u = e.delay,
										c = void 0 === u ? 300 : u,
										d =
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
													'cloneButton',
													'deleteButton',
													'delay',
												],
											),
										P = this.state,
										b = P.datas,
										O = P.activeKey,
										M = Object.keys(b).length;
									return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
										'div',
										{ className: 'dynamic-form' },
										M
											? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
													antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5___default.a,
													{ activeKey: O, onChange: this.handleChangeActiveKey },
													Object.keys(b).map(function (e, r) {
														return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
															antd_lib_collapse__WEBPACK_IMPORTED_MODULE_5___default.a
																.Panel,
															{
																key: e,
																header: ''.concat(a, '_').concat(r),
																extra: [
																	o &&
																		react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
																			antd_lib_icon__WEBPACK_IMPORTED_MODULE_8___default.a,
																			{
																				key: 'copy',
																				className: 'action-icon',
																				type: 'copy',
																				onClick: function (t) {
																					t.stopPropagation(),
																						_.handleCloneForm(b[e]);
																				},
																			},
																		),
																	s && M > 1
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
																___WEBPACK_IMPORTED_MODULE_21__.b,
																_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()(
																	{},
																	d,
																	{
																		wrappedComponentRef: function (t) {
																			_.forms[e] = t;
																		},
																		useForm: !1,
																		formSchema: t,
																		formKey: e,
																		onValuesChange:
																			lodash_debounce__WEBPACK_IMPORTED_MODULE_20___default()(
																				_.handleValuesChange,
																				c < 0 ? 0 : c,
																			),
																		values: b[e],
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
		}.call(this, __webpack_require__(41)(module)));
	},
	238: function (_, e, t) {
		'use strict';
		(function (_) {
			t.d(e, 'a', function () {
				return c;
			});
			var a,
				r = t(17),
				l = t.n(r),
				n = t(65),
				i = t.n(n),
				o = t(0),
				E = t.n(o),
				s = t(93);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			var u =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				c = E.a.createContext(null),
				d = function (_) {
					var e = _.children,
						t = Object(o.useContext)(s.a),
						a = Object(o.useState)(
							Object.keys(t.series).reduce(function (_, e) {
								return Object.assign(_, l()({}, e, {}));
							}, {}),
						),
						r = i()(a, 2),
						n = r[0],
						u = r[1],
						d = Object(o.useState)(
							Object.keys(t.xAxis).reduce(function (_, e) {
								return Object.assign(_, l()({}, e, {}));
							}, {}),
						),
						P = i()(d, 2),
						b = P[0],
						O = P[1],
						M = Object(o.useState)(
							Object.keys(t.yAxis).reduce(function (_, e) {
								return Object.assign(_, l()({}, e, {}));
							}, {}),
						),
						D = i()(M, 2),
						p = D[0],
						f = D[1],
						C = Object(o.useState)(
							Object.keys(t.grid).reduce(function (_, e) {
								return Object.assign(_, l()({}, e, {}));
							}, {}),
						),
						L = i()(C, 2),
						A = L[0],
						m = L[1],
						h = Object(o.useState)([]),
						K = i()(h, 2),
						I = K[0],
						R = K[1],
						T = Object(o.useState)([]),
						B = i()(T, 2),
						W = B[0],
						U = B[1],
						y = Object(o.useState)([]),
						k = i()(y, 2),
						w = k[0],
						v = k[1],
						g = Object(o.useState)([]),
						x = i()(g, 2),
						q = x[0],
						H = x[1];
					return (
						Object(o.useEffect)(
							function () {
								console.log('structureSeries updated');
							},
							[t.series],
						),
						Object(o.useEffect)(
							function () {
								console.log('structureXAxis updated');
							},
							[t.xAxis],
						),
						Object(o.useEffect)(
							function () {
								console.log('structureYAxis updated');
							},
							[t.yAxis],
						),
						Object(o.useEffect)(
							function () {
								console.log('structureGrid updated'),
									m(
										Object.keys(t.grid).reduce(function (_, e) {
											return Object.assign(_, l()({}, e, A[e]));
										}, {}),
									);
							},
							[t.grid],
						),
						E.a.createElement(
							c.Provider,
							{
								value: {
									series: n,
									seriesActiveKey: W,
									onChangeSeries: function (_) {
										u(_);
									},
									onChangeSeriesActiveKey: function (_) {
										U(_);
									},
									xAxis: b,
									xAxisActiveKey: I,
									onChangeXAxis: function (_) {
										O(_);
									},
									onChangeXAxisActiveKey: function (_) {
										R(_);
									},
									yAxis: p,
									yAxisActiveKey: w,
									onChangeYAxis: function (_) {
										f(_);
									},
									onChangeYAxisActiveKey: function (_) {
										v(_);
									},
									grid: A,
									gridActiveKey: q,
									onChangeGrid: function (_) {
										m(_);
									},
									onChangeGridActiveKey: function (_) {
										H(_);
									},
								},
							},
							e,
						)
					);
				};
			u(
				d,
				'useContext{structrue}\nuseState{[series, setSeries](Object.keys(structrue.series).reduce((prev, curr) => {\r\n        return Object.assign(prev, { [curr]: {} });\r\n    }, {}))}\nuseState{[xAxis, setXAxis](Object.keys(structrue.xAxis).reduce((prev, curr) => {\r\n        return Object.assign(prev, { [curr]: {} });\r\n    }, {}))}\nuseState{[yAxis, setYAxis](Object.keys(structrue.yAxis).reduce((prev, curr) => {\r\n        return Object.assign(prev, { [curr]: {} });\r\n    }, {}))}\nuseState{[grid, setGrid](Object.keys(structrue.grid).reduce((prev, curr) => {\r\n        return Object.assign(prev, { [curr]: {} });\r\n    }, {} as Record<string, any>))}\nuseState{[xAxisActiveKey, setXAxisActiveKey]([])}\nuseState{[seriesActiveKey, setSeriesActiveKey]([])}\nuseState{[yAxisActiveKey, setYAxisActiveKey]([])}\nuseState{[gridActiveKey, setGridActiveKey]([])}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}',
			);
			var P,
				b,
				O = d;
			(e.b = O),
				(P = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(P.register(
						c,
						'StyleContext',
						'c:\\workspace\\react-analytics\\src\\containers\\StyleContainer.tsx',
					),
					P.register(
						d,
						'StyleContainer',
						'c:\\workspace\\react-analytics\\src\\containers\\StyleContainer.tsx',
					),
					P.register(O, 'default', 'c:\\workspace\\react-analytics\\src\\containers\\StyleContainer.tsx')),
				(b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && b(_);
		}.call(this, t(41)(_)));
	},
	241: function (_, e, t) {
		'use strict';
		var a = t(837);
		t.d(e, 'b', function () {
			return a.a;
		});
		var r = t(868);
		t.d(e, 'd', function () {
			return r.a;
		});
		var l = t(869);
		t.d(e, 'e', function () {
			return l.a;
		});
		var n = t(870);
		t.d(e, 'a', function () {
			return n.a;
		});
		var i = t(871);
		t.d(e, 'c', function () {
			return i.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	275: function (_, e, t) {
		'use strict';
		var a = t(736);
		t.d(e, 'a', function () {
			return a;
		});
		var r = t(737);
		t.d(e, 'b', function () {
			return r;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	276: function (_, e, t) {
		'use strict';
		var a = t(873);
		t.d(e, 'b', function () {
			return a.a;
		});
		var r = t(874);
		t.d(e, 'a', function () {
			return r.a;
		});
		var l = t(875);
		t.d(e, 'c', function () {
			return l.a;
		});
		var n = t(876);
		t.d(e, 'd', function () {
			return n.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	470: function (_, e, t) {
		'use strict';
		var a = t(747);
		t.d(e, 'a', function () {
			return a.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	471: function (_, e, t) {
		'use strict';
		(function (_) {
			t.d(e, 'a', function () {
				return E;
			});
			var a,
				r = t(0),
				l = t.n(r),
				n = t(238),
				i = t(93);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			var o =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				E = l.a.createContext(null),
				s = function (_) {
					var e = _.children,
						t = Object(r.useContext)(i.a),
						a = Object(r.useContext)(n.a);
					return l.a.createElement(E.Provider, { value: { structure: t, style: a } }, e);
				};
			o(s, 'useContext{structure}\nuseContext{style}');
			var u,
				c,
				d = s;
			(e.b = d),
				(u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(u.register(
						E,
						'ChartContext',
						'c:\\workspace\\react-analytics\\src\\containers\\ChartContainer.tsx',
					),
					u.register(
						s,
						'ChartContainer',
						'c:\\workspace\\react-analytics\\src\\containers\\ChartContainer.tsx',
					),
					u.register(d, 'default', 'c:\\workspace\\react-analytics\\src\\containers\\ChartContainer.tsx')),
				(c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && c(_);
		}.call(this, t(41)(_)));
	},
	612: function (_, e, t) {
		'use strict';
		t(738);
		var a = t(743);
		t.d(e, 'b', function () {
			return a.a;
		});
		var r = t(745);
		t.d(e, 'a', function () {
			return r.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	631: function (_, e, t) {
		var a = {
			'./af': 283,
			'./af.js': 283,
			'./ar': 284,
			'./ar-dz': 285,
			'./ar-dz.js': 285,
			'./ar-kw': 286,
			'./ar-kw.js': 286,
			'./ar-ly': 287,
			'./ar-ly.js': 287,
			'./ar-ma': 288,
			'./ar-ma.js': 288,
			'./ar-sa': 289,
			'./ar-sa.js': 289,
			'./ar-tn': 290,
			'./ar-tn.js': 290,
			'./ar.js': 284,
			'./az': 291,
			'./az.js': 291,
			'./be': 292,
			'./be.js': 292,
			'./bg': 293,
			'./bg.js': 293,
			'./bm': 294,
			'./bm.js': 294,
			'./bn': 295,
			'./bn.js': 295,
			'./bo': 296,
			'./bo.js': 296,
			'./br': 297,
			'./br.js': 297,
			'./bs': 298,
			'./bs.js': 298,
			'./ca': 299,
			'./ca.js': 299,
			'./cs': 300,
			'./cs.js': 300,
			'./cv': 301,
			'./cv.js': 301,
			'./cy': 302,
			'./cy.js': 302,
			'./da': 303,
			'./da.js': 303,
			'./de': 304,
			'./de-at': 305,
			'./de-at.js': 305,
			'./de-ch': 306,
			'./de-ch.js': 306,
			'./de.js': 304,
			'./dv': 307,
			'./dv.js': 307,
			'./el': 308,
			'./el.js': 308,
			'./en-SG': 309,
			'./en-SG.js': 309,
			'./en-au': 310,
			'./en-au.js': 310,
			'./en-ca': 311,
			'./en-ca.js': 311,
			'./en-gb': 312,
			'./en-gb.js': 312,
			'./en-ie': 313,
			'./en-ie.js': 313,
			'./en-il': 314,
			'./en-il.js': 314,
			'./en-nz': 315,
			'./en-nz.js': 315,
			'./eo': 316,
			'./eo.js': 316,
			'./es': 317,
			'./es-do': 318,
			'./es-do.js': 318,
			'./es-us': 319,
			'./es-us.js': 319,
			'./es.js': 317,
			'./et': 320,
			'./et.js': 320,
			'./eu': 321,
			'./eu.js': 321,
			'./fa': 322,
			'./fa.js': 322,
			'./fi': 323,
			'./fi.js': 323,
			'./fo': 324,
			'./fo.js': 324,
			'./fr': 325,
			'./fr-ca': 326,
			'./fr-ca.js': 326,
			'./fr-ch': 327,
			'./fr-ch.js': 327,
			'./fr.js': 325,
			'./fy': 328,
			'./fy.js': 328,
			'./ga': 329,
			'./ga.js': 329,
			'./gd': 330,
			'./gd.js': 330,
			'./gl': 331,
			'./gl.js': 331,
			'./gom-latn': 332,
			'./gom-latn.js': 332,
			'./gu': 333,
			'./gu.js': 333,
			'./he': 334,
			'./he.js': 334,
			'./hi': 335,
			'./hi.js': 335,
			'./hr': 336,
			'./hr.js': 336,
			'./hu': 337,
			'./hu.js': 337,
			'./hy-am': 338,
			'./hy-am.js': 338,
			'./id': 339,
			'./id.js': 339,
			'./is': 340,
			'./is.js': 340,
			'./it': 341,
			'./it-ch': 342,
			'./it-ch.js': 342,
			'./it.js': 341,
			'./ja': 343,
			'./ja.js': 343,
			'./jv': 344,
			'./jv.js': 344,
			'./ka': 345,
			'./ka.js': 345,
			'./kk': 346,
			'./kk.js': 346,
			'./km': 347,
			'./km.js': 347,
			'./kn': 348,
			'./kn.js': 348,
			'./ko': 349,
			'./ko.js': 349,
			'./ku': 350,
			'./ku.js': 350,
			'./ky': 351,
			'./ky.js': 351,
			'./lb': 352,
			'./lb.js': 352,
			'./lo': 353,
			'./lo.js': 353,
			'./lt': 354,
			'./lt.js': 354,
			'./lv': 355,
			'./lv.js': 355,
			'./me': 356,
			'./me.js': 356,
			'./mi': 357,
			'./mi.js': 357,
			'./mk': 358,
			'./mk.js': 358,
			'./ml': 359,
			'./ml.js': 359,
			'./mn': 360,
			'./mn.js': 360,
			'./mr': 361,
			'./mr.js': 361,
			'./ms': 362,
			'./ms-my': 363,
			'./ms-my.js': 363,
			'./ms.js': 362,
			'./mt': 364,
			'./mt.js': 364,
			'./my': 365,
			'./my.js': 365,
			'./nb': 366,
			'./nb.js': 366,
			'./ne': 367,
			'./ne.js': 367,
			'./nl': 368,
			'./nl-be': 369,
			'./nl-be.js': 369,
			'./nl.js': 368,
			'./nn': 370,
			'./nn.js': 370,
			'./pa-in': 371,
			'./pa-in.js': 371,
			'./pl': 372,
			'./pl.js': 372,
			'./pt': 373,
			'./pt-br': 374,
			'./pt-br.js': 374,
			'./pt.js': 373,
			'./ro': 375,
			'./ro.js': 375,
			'./ru': 376,
			'./ru.js': 376,
			'./sd': 377,
			'./sd.js': 377,
			'./se': 378,
			'./se.js': 378,
			'./si': 379,
			'./si.js': 379,
			'./sk': 380,
			'./sk.js': 380,
			'./sl': 381,
			'./sl.js': 381,
			'./sq': 382,
			'./sq.js': 382,
			'./sr': 383,
			'./sr-cyrl': 384,
			'./sr-cyrl.js': 384,
			'./sr.js': 383,
			'./ss': 385,
			'./ss.js': 385,
			'./sv': 386,
			'./sv.js': 386,
			'./sw': 387,
			'./sw.js': 387,
			'./ta': 388,
			'./ta.js': 388,
			'./te': 389,
			'./te.js': 389,
			'./tet': 390,
			'./tet.js': 390,
			'./tg': 391,
			'./tg.js': 391,
			'./th': 392,
			'./th.js': 392,
			'./tl-ph': 393,
			'./tl-ph.js': 393,
			'./tlh': 394,
			'./tlh.js': 394,
			'./tr': 395,
			'./tr.js': 395,
			'./tzl': 396,
			'./tzl.js': 396,
			'./tzm': 397,
			'./tzm-latn': 398,
			'./tzm-latn.js': 398,
			'./tzm.js': 397,
			'./ug-cn': 399,
			'./ug-cn.js': 399,
			'./uk': 400,
			'./uk.js': 400,
			'./ur': 401,
			'./ur.js': 401,
			'./uz': 402,
			'./uz-latn': 403,
			'./uz-latn.js': 403,
			'./uz.js': 402,
			'./vi': 404,
			'./vi.js': 404,
			'./x-pseudo': 405,
			'./x-pseudo.js': 405,
			'./yo': 406,
			'./yo.js': 406,
			'./zh-cn': 407,
			'./zh-cn.js': 407,
			'./zh-hk': 408,
			'./zh-hk.js': 408,
			'./zh-tw': 409,
			'./zh-tw.js': 409,
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
			(r.id = 631);
	},
	735: function (_, e, t) {
		'use strict';
		(function (_) {
			var a,
				r = t(13),
				l = t(898),
				n = t(275);
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
		}.call(this, t(41)(_)));
	},
	736: function (_) {
		_.exports = JSON.parse('{"common":{"home":"Hoe"}}');
	},
	737: function (_) {
		_.exports = JSON.parse(
			'{"action":{"login":"로그인","save":"저장","close":"닫기","cancel":"취소","enabled":"사용 여부","add":"추가","more":"더 보기","ok":"확인","collapse":"축소","expand":"확장","clear":"초기화"},"common":{"id":"아이디","home":"홈","title":"제목","description":"설명","general":"일반","value":"값","gauge":"게이지","name":"이름","type":"종류","data":"데이터","user-id":"사용자 아이디","password":"비밀번호","info":"정보","warning":"경고","critical":"심각","location":"위치","basic-info":"기본 정보","category":"카테고리","time":"시간","log":"로그","visible":"보기","inverse":"역","scale":"규모","min":"최소","max":"최대","structure":"구조","style":"스타일","item":"아이템","axis":"축","none":"없음"},"confirm":{"delete":"\'{{arg}}\'을(를) 삭제하시겠습니까?"},"chart":{"line":"라인 차트","bar":"바 차트","area":"영역 차트","scatter":"스캐터 차트","pie":"파이 차트"},"widget":{"modify":"위젯 수정","delete":"위젯 삭제","clone":"위젯 복제","silent":"이벤트 취소","scale":"차트 확대","z-level":"우선 순위","boundary-gap":"차트 공백","interval":"간격","min-interval":"최소 간격","max-interval":"최대 간격","split-number":"분할 개수","log-base":"로그 베이스","contain-label":"라벨 표시 여부","card":{"title":"카드 위젯","description":"카드 형태의 위젯을 추가합니다","type":"카드 형태"},"memo":{"title":"메모 위젯","description":"HTML, 텍스트 등 다양한 내용을 메모할 수 있습니다","html":"HTML 여부"},"line-chart":{"title":"라인 차트 위젯","description":"라인 형태의 차트 위젯을 추가합니다","isArea":"영역 차트 여부"},"pie-chart":{"title":"파이 차트 위젯","description":"파이 형태의 차트 위젯을 추가합니다"},"area-chart":{"title":"영역 차트 위젯","description":"영역 형태의 차트 위젯을 추가합니다"},"series":{"title":"시리즈","description":"시리즈를 추가합니다"},"xaxis":{"title":"X 축","description":"X 축을 설정합니다","data":"X 축 데이터"},"yaxis":{"title":"Y 축","description":"Y 축을 설정합니다","data":"Y 축 데이터"},"grid":{"title":"그리드","description":"차트의 그리드를 설정합니다"},"animation":{"title":"애니메이션"},"tooltip":{"title":"툴팁"},"trigger":{"title":"트리거"}},"validate":{"enter-arg":"\'{{arg}}\'을(를) 입력해 주세요"},"layout":{"left":"왼쪽","right":"오른쪽","top":"위","bottom":"아래","width":"넓이","height":"높이","background-color":"배경색","border-color":"테두리 색","border-width":"테두리 넓이","shadow-color":"그림자 색","shadow-blur":"그림자 번짐","shadow-offset-x":"그림자 X 위치","shadow-offset-y":"그림자 Y 위치"}}',
		);
	},
	738: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31),
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
		}.call(this, __webpack_require__(41)(module)));
	},
	743: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(744),
				antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82),
				antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
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
												defaultSelectedKeys: ['structure:series'],
												defaultOpenKeys: ['structure', 'style'],
												theme: 'light',
												mode: 'inline',
											},
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu,
												{
													key: 'structure',
													title: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
														'common.structure',
													),
												},
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'structure:series' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.series.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'structure:xAxis' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.xaxis.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'structure:yAxis' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.yaxis.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'structure:grid' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.grid.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'structure:tooltip' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.tooltip.title'),
												),
											),
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu,
												{
													key: 'style',
													title: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('common.style'),
												},
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'style:series' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.series.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'style:xAxis' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.xaxis.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'style:yAxis' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.yaxis.title'),
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'style:grid' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.grid.title'),
												),
											),
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu,
												{
													key: 'animation',
													title: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
														'widget.animation.title',
													),
												},
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item,
													{ key: 'animation:series' },
													i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.series.title'),
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
		}.call(this, __webpack_require__(41)(module)));
	},
	745: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65),
				_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),
				react_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(615),
				_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(173),
				_containers_ChartContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(471),
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
					structure: _panel__WEBPACK_IMPORTED_MODULE_10__.d,
					style: _panel__WEBPACK_IMPORTED_MODULE_10__.e,
				},
				Content = (function (_Component) {
					function Content() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Content),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(
									Content,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Content, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Content, [
							{
								key: 'render',
								value: function () {
									var _ = this.props.panelKey,
										e = _.split(':'),
										t = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(
											e,
											2,
										),
										a = t[0],
										r = t[1],
										l = panels[a];
									return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
										antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content,
										{ style: { position: 'relative', width: '100%', height: '100%' } },
										react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
											react_split__WEBPACK_IMPORTED_MODULE_9__.a,
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
											react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
												_panel__WEBPACK_IMPORTED_MODULE_10__.c,
												null,
												react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(l, {
													key: _,
													panelKey: r,
												}),
											),
											react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
												react_split__WEBPACK_IMPORTED_MODULE_9__.a,
												{
													style: { overflow: 'hidden' },
													direction: 'vertical',
													cursor: 'row-resize',
													sizes: [25, 75],
													minSize: [260, 500],
												},
												react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
													_panel__WEBPACK_IMPORTED_MODULE_10__.c,
													null,
													react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
														_panel__WEBPACK_IMPORTED_MODULE_10__.b,
														null,
													),
												),
												react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
													_panel__WEBPACK_IMPORTED_MODULE_10__.c,
													null,
													react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
														_containers_ChartContainer__WEBPACK_IMPORTED_MODULE_11__.b,
														null,
														react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
															_panel__WEBPACK_IMPORTED_MODULE_10__.a,
															null,
														),
													),
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
				})(react__WEBPACK_IMPORTED_MODULE_8__.Component),
				_default = Content,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						panels,
						'panels',
						'c:\\workspace\\react-analytics\\src\\components\\layout\\Content.tsx',
					),
					reactHotLoader.register(
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
		}.call(this, __webpack_require__(41)(module)));
	},
	746: function (_, e, t) {
		'use strict';
		(function (_) {
			var a,
				r = t(237),
				l = t.n(r),
				n = t(137),
				i = t.n(n),
				o = t(0),
				E = t.n(o),
				s = t(2),
				u = t.n(s),
				c = t(470);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
			var d,
				P,
				b = E.a.forwardRef(function (_, e) {
					var t = _.children,
						a = _.className,
						r = i()(_, ['children', 'className']);
					return E.a.createElement(
						c.a,
						null,
						E.a.createElement('div', l()({ ref: e, className: u()('editor-panel', a) }, r), t),
					);
				}),
				O = b;
			(e.a = O),
				(d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(d.register(b, 'Panel', 'c:\\workspace\\react-analytics\\src\\components\\panel\\Panel.tsx'),
					d.register(O, 'default', 'c:\\workspace\\react-analytics\\src\\components\\panel\\Panel.tsx')),
				(P = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && P(_);
		}.call(this, t(41)(_)));
	},
	747: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__,
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
				ErrorBoundary = (function (_Component) {
					function ErrorBoundary() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
							this,
							ErrorBoundary,
						);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
											ErrorBoundary,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(e),
								'state',
								{ error: null, errorInfo: null },
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
							ErrorBoundary,
							_Component,
						),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorBoundary, [
							{
								key: 'componentDidCatch',
								value: function (_, e) {
									this.setState({ error: _, errorInfo: e });
								},
							},
							{
								key: 'componentWillUnmount',
								value: function () {
									this.setState({ error: null, errorInfo: null });
								},
							},
							{
								key: 'render',
								value: function () {
									var _ = this.props.children,
										e = this.state.error;
									return e
										? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
												'div',
												null,
												e.toString(),
										  )
										: _;
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						ErrorBoundary
					);
				})(react__WEBPACK_IMPORTED_MODULE_7__.Component),
				_default = ErrorBoundary,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						ErrorBoundary,
						'ErrorBoundary',
						'c:\\workspace\\react-analytics\\src\\components\\error\\ErrorBoundary.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\error\\ErrorBoundary.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	748: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default =
					__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__,
				),
				react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),
				echarts_for_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(899),
				echarts_for_react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					echarts_for_react__WEBPACK_IMPORTED_MODULE_9__,
				),
				_containers_ChartContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(471),
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
								_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
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
				ChartPanel = (function (_Component) {
					function ChartPanel() {
						var _, e;
						_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ChartPanel);
						for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
						return (
							(e =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
									this,
									(_ =
										_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
											ChartPanel,
										)).call.apply(_, [this].concat(a)),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(e),
								'chartRef',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(e),
								'echarts',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(e),
								'context',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(e),
								'getOption',
								function () {
									var _ = e.context,
										t = _.structure,
										a = _.style,
										r = t.series,
										l = t.xAxis,
										n = t.yAxis,
										i = t.grid,
										o = Object.keys(i).map(function (_) {
											return _objectSpread({ id: _ }, i[_], {}, a.grid[_]);
										}),
										E = Object.keys(l).map(function (_) {
											var e = l[_],
												t = e.grid,
												a =
													_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
														e,
														['grid'],
													),
												r = o.findIndex(function (_) {
													return _.id === t;
												});
											return _objectSpread({ id: _, gridIndex: r >= 0 ? r : 0 }, a);
										}),
										s = Object.keys(n).map(function (_) {
											var e = n[_],
												t = e.grid,
												a =
													_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
														e,
														['grid'],
													),
												r = o.findIndex(function (_) {
													return _.id === t;
												});
											return _objectSpread({ id: _, gridIndex: r >= 0 ? r : 0 }, a);
										}),
										u = Object.keys(r).map(function (_) {
											var e = r[_],
												t = e.type,
												a = e.xAxis,
												l = e.yAxis,
												n =
													_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
														e,
														['type', 'xAxis', 'yAxis'],
													),
												i = 'area' === t,
												o = E.findIndex(function (_) {
													return _.id === a;
												}),
												u = s.findIndex(function (_) {
													return _.id === l;
												});
											return _objectSpread(
												{
													id: _,
													type: i ? 'line' : t,
													data: r[_].data,
													areaStyle: i ? {} : null,
													xAxisIndex: o >= 0 ? o : 0,
													yAxisIndex: u >= 0 ? u : 0,
												},
												n,
											);
										});
									return { xAxis: E, yAxis: s, grid: o, series: u };
								},
							),
							e
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ChartPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ChartPanel, [
							{
								key: 'componentDidMount',
								value: function () {
									this.echarts = this.chartRef.getEchartsInstance();
								},
							},
							{
								key: 'render',
								value: function () {
									var _ = this;
									return (
										console.log(this.getOption()),
										react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
											echarts_for_react__WEBPACK_IMPORTED_MODULE_9___default.a,
											{
												ref: function (e) {
													_.chartRef = e;
												},
												option: this.getOption(),
												style: { height: '100%', width: '100%' },
											},
										)
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
				})(react__WEBPACK_IMPORTED_MODULE_8__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
				ChartPanel,
				'contextType',
				_containers_ChartContainer__WEBPACK_IMPORTED_MODULE_10__.a,
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
		}.call(this, __webpack_require__(41)(module)));
	},
	834: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				react_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(900),
				react_data_grid__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					react_data_grid__WEBPACK_IMPORTED_MODULE_6__,
				),
				_resizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(901),
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
										_resizer__WEBPACK_IMPORTED_MODULE_7__.a,
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
		}.call(this, __webpack_require__(41)(module)));
	},
	835: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__,
				),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(167),
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
		}.call(this, __webpack_require__(41)(module)));
	},
	836: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				_structure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(241),
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
					series: _structure__WEBPACK_IMPORTED_MODULE_6__.b,
					xAxis: _structure__WEBPACK_IMPORTED_MODULE_6__.d,
					yAxis: _structure__WEBPACK_IMPORTED_MODULE_6__.e,
					grid: _structure__WEBPACK_IMPORTED_MODULE_6__.a,
					tooltip: _structure__WEBPACK_IMPORTED_MODULE_6__.c,
				},
				StructurePanel = (function (_Component) {
					function StructurePanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								StructurePanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									StructurePanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
							StructurePanel,
							_Component,
						),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StructurePanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.props.panelKey,
										e = panels[_];
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(e, null);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						StructurePanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = StructurePanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						panels,
						'panels',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\StructurePanel.tsx',
					),
					reactHotLoader.register(
						StructurePanel,
						'StructurePanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\StructurePanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\StructurePanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	837: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93),
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
												_form__WEBPACK_IMPORTED_MODULE_12__.a,
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
														name: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.name',
															),
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
																	label: t && t.length ? t : 'x'.concat(e),
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
																	label: t && t.length ? t : 'y'.concat(e),
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
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__.a,
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
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\SeriesPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\SeriesPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	838: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237),
				_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137),
				_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default =
					__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(477),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_row__WEBPACK_IMPORTED_MODULE_3__,
				),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(840),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__,
				),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(476),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					antd_lib_col__WEBPACK_IMPORTED_MODULE_5__,
				),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(841),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_6__,
				),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(201),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					antd_lib_form__WEBPACK_IMPORTED_MODULE_7__,
				),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(555),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_8__,
				),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(273),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_9__,
				),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(594),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__,
				),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__,
				),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(842),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_12__,
				),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(140),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					antd_lib_select__WEBPACK_IMPORTED_MODULE_13__,
				),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(844),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
					antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_14__,
				),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(475),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
					antd_lib_switch__WEBPACK_IMPORTED_MODULE_15__,
				),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(845),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_16__,
				),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(474),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					antd_lib_input_number__WEBPACK_IMPORTED_MODULE_17__,
				),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(846),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(
					antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18__,
				),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(139),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
					antd_lib_input__WEBPACK_IMPORTED_MODULE_19__,
				),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(847),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(
					antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_20__,
				),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(473),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(
					antd_lib_divider__WEBPACK_IMPORTED_MODULE_21__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__ =
					__webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_27__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_28__,
				),
				react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_29___default = __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_29__,
				),
				i18next__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(13),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(472),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31___default = __webpack_require__.n(
					lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31__,
				),
				_DynamicForm__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(230),
				_picker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(902),
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
										L = t.rules,
										A = t.initialValue,
										m = t.label,
										h = t.type,
										K = t.render,
										I = t.hasFeedback,
										R = t.mode,
										T = t.style,
										B = t.forms,
										W = t.header,
										U = t.onPressEnter,
										y = t.ref,
										k = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_31___default()(i) ? A : i[_];
									void 0 === k && (k = A), n && (k = i || A);
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
									L && (w = w.concat(L));
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
												A,
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
										case 'color':
											E = react__WEBPACK_IMPORTED_MODULE_29___default.a.createElement(
												_picker__WEBPACK_IMPORTED_MODULE_33__.a,
												null,
											);
											break;
										case 'custom':
											E = K
												? K(o, i, s, e.validators.validate)
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
												{ colon: l, label: m ? g : null, help: d, extra: c, hasFeedback: I },
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
		}.call(this, __webpack_require__(41)(module)));
	},
	849: function (_, e, t) {
		'use strict';
		(function (_) {
			t(1768);
			var a,
				r = t(904),
				l = t.n(r),
				n = (t(136), t(64)),
				i = t.n(n),
				o = (t(744), t(82)),
				E = t.n(o),
				s = t(65),
				u = t.n(s),
				c = t(0),
				d = t.n(c),
				P = t(903),
				b = t(83),
				O = t.n(b);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			var M,
				D,
				p =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				f = d.a.forwardRef(
					p(function (_) {
						var e = _.value,
							t = _.onChange,
							a = Object(c.useState)('#fff'),
							r = u()(a, 2),
							n = r[0],
							o = r[1];
						Object(c.useEffect)(
							function () {
								o(e);
							},
							[e],
						);
						var s = function (_) {
							var e = _.rgb,
								a = e.r,
								r = e.g,
								l = e.b,
								n = e.a,
								i = 'rgba('.concat(a, ', ').concat(r, ', ').concat(l, ', ').concat(n, ')');
							o(i), t && t(i);
						};
						return d.a.createElement(
							l.a,
							{
								overlay: d.a.createElement(
									E.a,
									null,
									d.a.createElement(P.SketchPicker, { color: n, onChange: O()(s, 300) }),
								),
								trigger: ['click'],
							},
							d.a.createElement(i.a, { shape: 'circle', style: { backgroundColor: n } }),
						);
					}, "useState{[color, setColor]('#fff')}\nuseEffect{}"),
				),
				C = f;
			(e.a = C),
				(M = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(M.register(
						f,
						'ColorPicker',
						'c:\\workspace\\react-analytics\\src\\components\\picker\\ColorPicker.tsx',
					),
					M.register(
						C,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\picker\\ColorPicker.tsx',
					)),
				(D = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && D(_);
		}.call(this, t(41)(_)));
	},
	867: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(839),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(477),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_row__WEBPACK_IMPORTED_MODULE_1__,
				),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(840),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__,
				),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(476),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					antd_lib_col__WEBPACK_IMPORTED_MODULE_3__,
				),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(841),
				antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_4__,
				),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201),
				antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					antd_lib_form__WEBPACK_IMPORTED_MODULE_5__,
				),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(555),
				antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_6__,
				),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(273),
				antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_7__,
				),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(594),
				antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_8__,
				),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58),
				antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
					antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__,
				),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(842),
				antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
					antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__,
				),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(140),
				antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
					antd_lib_select__WEBPACK_IMPORTED_MODULE_11__,
				),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(844),
				antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_12__,
				),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(475),
				antd_lib_switch__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
					antd_lib_switch__WEBPACK_IMPORTED_MODULE_13__,
				),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(845),
				antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
					antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_14__,
				),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(474),
				antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
					antd_lib_input_number__WEBPACK_IMPORTED_MODULE_15__,
				),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(846),
				antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
					antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__,
				),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(139),
				antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
					antd_lib_input__WEBPACK_IMPORTED_MODULE_17__,
				),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(847),
				antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(
					antd_lib_divider_style_css__WEBPACK_IMPORTED_MODULE_18__,
				),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(473),
				antd_lib_divider__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
					antd_lib_divider__WEBPACK_IMPORTED_MODULE_19__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22__ =
					__webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_24__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_26__,
				),
				react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_27___default = __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_27__,
				),
				i18next__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(13),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(472),
				lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29___default = __webpack_require__.n(
					lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29__,
				),
				_DynamicForm__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(230),
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
										L = t.rules,
										A = t.initialValue,
										m = t.label,
										h = t.type,
										K = t.render,
										I = t.hasFeedback,
										R = t.mode,
										T = t.style,
										B = t.forms,
										W = t.header,
										U = t.onPressEnter,
										y = t.ref,
										k = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_29___default()(i) ? A : i[_];
									n && (k = i || A);
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
									L && (w = w.concat(L));
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
												A,
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
											E = K
												? K(o, i, s, e.validators.validate)
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
												{ colon: l, label: m ? g : null, help: d, extra: c, hasFeedback: I },
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
		}.call(this, __webpack_require__(41)(module)));
	},
	868: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93),
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
										a = _.grid,
										r = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										'div',
										{ className: 'editor-property' },
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property-header' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
												{ icon: r ? 'arrows-alt' : 'shrink', onClick: this.handleCollapse },
												r
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
												_form__WEBPACK_IMPORTED_MODULE_12__.a,
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
																	forms: {
																		logBase: {
																			label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																				'widget.log-base',
																			),
																			type: 'number',
																			initialValue: 10,
																			min: 10,
																		},
																	},
																},
															],
														},
														grid: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.grid.title',
															),
															type: 'select',
															style: { width: '100%' },
															items: Object.keys(a).map(function (_, e) {
																var t = a[_].name;
																return {
																	label: t && t.length ? t : 'grid'.concat(e),
																	value: _,
																};
															}),
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
														scale: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.scale',
															),
															type: 'boolean',
															initialValue: !1,
															span: 12,
														},
														silent: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.silent',
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
														interval: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.interval',
															),
															type: 'number',
															span: 8,
															min: 0,
														},
														minInterval: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.min-interval',
															),
															type: 'number',
															span: 8,
															initialValue: 0,
															min: 0,
														},
														maxInterval: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.max-interval',
															),
															type: 'number',
															span: 8,
															min: 0,
														},
														splitNumber: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.split-number',
															),
															type: 'number',
															initialValue: 5,
															span: 8,
															min: 0,
														},
														min: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.min',
															),
															type: 'number',
															initialValue: null,
															span: 8,
														},
														max: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.max',
															),
															type: 'number',
															initialValue: null,
															span: 8,
														},
														boundaryGap: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.boundary-gap',
															),
															type: 'boolean',
															initialValue: !0,
															span: 12,
														},
														zLevel: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.z-level',
															),
															type: 'number',
															initialValue: 0,
															min: 0,
															max: 1e3,
															span: 12,
														},
													},
													onChange: this.handleChangeXAxis,
													onChangeActiveKey: this.handleChangeActiveKey,
												},
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
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__.a,
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
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\XAxisPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\XAxisPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	869: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93),
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
										a = _.grid,
										r = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
										'div',
										{ className: 'editor-property' },
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property-header' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
												{ icon: r ? 'arrows-alt' : 'shrink', onClick: this.handleCollapse },
												r
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
												_form__WEBPACK_IMPORTED_MODULE_12__.a,
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
																	forms: {
																		logBase: {
																			label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																				'widget.log-base',
																			),
																			type: 'number',
																			initialValue: 10,
																			min: 10,
																		},
																	},
																},
															],
														},
														grid: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.grid.title',
															),
															type: 'select',
															style: { width: '100%' },
															items: Object.keys(a).map(function (_, e) {
																var t = a[_].name;
																return {
																	label: t && t.length ? t : 'grid'.concat(e),
																	value: _,
																};
															}),
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
														scale: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.scale',
															),
															type: 'boolean',
															initialValue: !1,
															span: 12,
														},
														silent: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.silent',
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
														interval: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.interval',
															),
															type: 'number',
															span: 8,
															min: 0,
														},
														minInterval: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.min-interval',
															),
															type: 'number',
															span: 8,
															initialValue: 0,
															min: 0,
														},
														maxInterval: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.max-interval',
															),
															type: 'number',
															span: 8,
															min: 0,
														},
														splitNumber: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.split-number',
															),
															type: 'number',
															initialValue: 5,
															span: 8,
															min: 0,
														},
														min: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.min',
															),
															type: 'number',
															initialValue: null,
															span: 8,
														},
														max: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.max',
															),
															type: 'number',
															initialValue: null,
															span: 8,
														},
														boundaryGap: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.boundary-gap',
															),
															type: 'boolean',
															initialValue: !0,
															span: 12,
														},
														zLevel: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.z-level',
															),
															type: 'number',
															initialValue: 0,
															min: 0,
															max: 1e3,
															span: 12,
														},
													},
													onChange: this.handleChangeYAxis,
													onChangeActiveKey: this.handleChangeActiveKey,
												},
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
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__.a,
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
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\YAxisPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\YAxisPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	870: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
				uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81),
				uuid__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_11__),
				_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				GridPanel = (function (_Component) {
					function GridPanel(_, e) {
						var t;
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								GridPanel,
							),
							(t =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
									this,
									_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
										GridPanel,
									).call(this, _, e),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'context',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeGrid',
								function (_) {
									t.setState({ grid: Object.assign({}, _) }, function () {
										t.context.onChangeGrid(t.state.grid);
									});
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeActiveKey',
								function (_) {
									t.setState({ activeKey: _ }), t.context.onChangeGridActiveKey(_);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleAddGrid',
								function () {
									var _ = uuid__WEBPACK_IMPORTED_MODULE_11___default()();
									t.setState(
										{
											grid: Object.assign(
												{},
												t.state.grid,
												_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
													{},
													_,
													{ show: !1 },
												),
											),
											activeKey: t.state.activeKey.concat(_),
										},
										function () {
											t.context.onChangeGrid(t.state.grid);
										},
									);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleCollapse',
								function () {
									var _ = !t.state.collapsed,
										e = _ ? [] : Object.keys(t.state.grid);
									t.setState({ collapsed: _, activeKey: e }), t.context.onChangeGridActiveKey(e);
								},
							),
							(t.state = { grid: e.grid, activeKey: e.gridActiveKey, collapsed: !1 }),
							t
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(GridPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GridPanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.context,
										e = _.grid,
										t = _.gridActiveKey,
										a = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
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
												{ type: 'primary', icon: 'plus', onClick: this.handleAddGrid },
												i18next__WEBPACK_IMPORTED_MODULE_10__.a.t('widget.grid.title'),
											),
										),
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property-content' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												_form__WEBPACK_IMPORTED_MODULE_12__.a,
												{
													value: e,
													label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
														'widget.grid.title',
													),
													addButton: !1,
													activeKey: t,
													formSchema: {
														name: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.name',
															),
														},
														show: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'common.visible',
															),
															type: 'boolean',
															initialValue: !0,
															span: 12,
														},
														zLevel: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.z-level',
															),
															type: 'number',
															initialValue: 0,
															min: 0,
															max: 1e3,
															span: 12,
														},
													},
													onChange: this.handleChangeGrid,
													onChangeActiveKey: this.handleChangeActiveKey,
												},
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
						GridPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
				GridPanel,
				'contextType',
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__.a,
			);
			var _default = GridPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						GridPanel,
						'GridPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\GridPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\GridPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	871: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__,
				),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13),
				_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				TooltipPanel = (function (_Component) {
					function TooltipPanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								TooltipPanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
									TooltipPanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(
							TooltipPanel,
							_Component,
						),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TooltipPanel, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
										'div',
										{ className: 'editor-property' },
										react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
											'div',
											{ className: 'editor-property-header' },
											react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
												antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a,
												{ icon: 'close' },
												i18next__WEBPACK_IMPORTED_MODULE_8__.a.t('action.clear'),
											),
										),
										react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
											'div',
											{ className: 'editor-property-content' },
											react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
												_form__WEBPACK_IMPORTED_MODULE_9__.b,
												{
													formSchema: {
														show: {
															label: i18next__WEBPACK_IMPORTED_MODULE_8__.a.t(
																'common.visible',
															),
															type: 'boolean',
															initialValue: !0,
														},
														trigger: {
															label: i18next__WEBPACK_IMPORTED_MODULE_8__.a.t(
																'widget.trigger.title',
															),
															type: 'select',
															initialValue: 'item',
															items: [
																{
																	label: i18next__WEBPACK_IMPORTED_MODULE_8__.a.t(
																		'common.item',
																	),
																	value: 'item',
																},
																{
																	label: i18next__WEBPACK_IMPORTED_MODULE_8__.a.t(
																		'common.axis',
																	),
																	value: 'axis',
																},
																{
																	label: i18next__WEBPACK_IMPORTED_MODULE_8__.a.t(
																		'common.none',
																	),
																	value: 'none',
																},
															],
														},
													},
												},
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
						TooltipPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_7__.Component),
				_default = TooltipPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						TooltipPanel,
						'TooltipPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\TooltipPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\structure\\TooltipPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	872: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(276),
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
					series: _style__WEBPACK_IMPORTED_MODULE_6__.b,
					grid: _style__WEBPACK_IMPORTED_MODULE_6__.a,
					xAxis: _style__WEBPACK_IMPORTED_MODULE_6__.c,
					yAxis: _style__WEBPACK_IMPORTED_MODULE_6__.d,
				},
				StylePanel = (function (_Component) {
					function StylePanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								StylePanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									StylePanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(StylePanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StylePanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.props.panelKey,
										e = panels[_];
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(e, null);
								},
							},
							{
								key: '__reactstandin__regenerateByEval',
								value: function __reactstandin__regenerateByEval(key, code) {
									this[key] = eval(code);
								},
							},
						]),
						StylePanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = StylePanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						panels,
						'panels',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\StylePanel.tsx',
					),
					reactHotLoader.register(
						StylePanel,
						'StylePanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\StylePanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\StylePanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	873: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
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
					function SeriesPanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								SeriesPanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									SeriesPanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SeriesPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SeriesPanel, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', null);
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
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = SeriesPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						SeriesPanel,
						'SeriesPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\SeriesPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\SeriesPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	874: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136),
				antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64),
				antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_button__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
				_containers_StyleContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(238),
				_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				GridPanel = (function (_Component) {
					function GridPanel(_, e) {
						var t;
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								GridPanel,
							),
							(t =
								_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
									this,
									_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(
										GridPanel,
									).call(this, _, e),
								)),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'context',
								void 0,
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleCollapse',
								function () {
									var _ = !t.state.collapsed,
										e = _ ? [] : Object.keys(t.state.grid);
									t.setState({ collapsed: _, activeKey: e }), t.context.onChangeGridActiveKey(e);
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeGrid',
								function (_) {
									t.setState({ grid: Object.assign({}, _) }, function () {
										t.context.onChangeGrid(t.state.grid);
									});
								},
							),
							_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
								_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t),
								'handleChangeActiveKey',
								function (_) {
									t.setState({ activeKey: _ }), t.context.onChangeGridActiveKey(_);
								},
							),
							(t.state = { grid: e.grid, activeKey: e.gridActiveKey, collapsed: !1 }),
							t
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(GridPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GridPanel, [
							{
								key: 'render',
								value: function () {
									var _ = this.context,
										e = _.grid,
										t = _.gridActiveKey,
										a = this.state.collapsed;
									return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
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
										),
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											'div',
											{ className: 'editor-property-content' },
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												_form__WEBPACK_IMPORTED_MODULE_12__.a,
												{
													label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
														'widget.grid.title',
													),
													addButton: !1,
													deleteButton: !1,
													cloneButton: !1,
													value: e,
													activeKey: t,
													formSchema: {
														containLabel: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'widget.contain-label',
															),
															type: 'boolean',
															initialValue: !1,
														},
														left: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.left',
															),
															initialValue: '10%',
															span: 12,
														},
														right: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.right',
															),
															initialValue: '10%',
															span: 12,
														},
														top: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.top',
															),
															initialValue: 60,
															span: 12,
														},
														bottom: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.bottom',
															),
															initialValue: 60,
															span: 12,
														},
														width: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.width',
															),
															initialValue: 'auto',
															span: 12,
														},
														height: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.height',
															),
															initialValue: 'auto',
															span: 12,
														},
														backgroundColor: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.background-color',
															),
															type: 'color',
															initialValue: 'transparent',
														},
														borderColor: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.border-color',
															),
															type: 'color',
															initialValue: '#ccc',
														},
														borderWidth: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.border-width',
															),
															type: 'number',
															min: 0,
															max: 100,
															initialValue: 1,
														},
														shadowColor: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.shadow-color',
															),
															type: 'color',
														},
														shadowBlur: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.shadow-blur',
															),
															type: 'number',
														},
														shadowOffsetX: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.shadow-offset-x',
															),
															type: 'number',
															span: 12,
															initialValue: 0,
														},
														shadowOffsetY: {
															label: i18next__WEBPACK_IMPORTED_MODULE_10__.a.t(
																'layout.shadow-offset-y',
															),
															type: 'number',
															span: 12,
															initialValue: 0,
														},
													},
													onChange: this.handleChangeGrid,
													onChangeActiveKey: this.handleChangeActiveKey,
												},
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
						GridPanel
					);
				})(react__WEBPACK_IMPORTED_MODULE_9__.Component);
			_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(
				GridPanel,
				'contextType',
				_containers_StyleContainer__WEBPACK_IMPORTED_MODULE_11__.a,
			);
			var _default = GridPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						GridPanel,
						'GridPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\GridPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\GridPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	875: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
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
					function XAxisPanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								XAxisPanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									XAxisPanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(XAxisPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(XAxisPanel, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', null);
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
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = XAxisPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						XAxisPanel,
						'XAxisPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\XAxisPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\XAxisPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	876: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
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
					function YAxisPanel() {
						return (
							_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
								this,
								YAxisPanel,
							),
							_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
								this,
								_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
									YAxisPanel,
								).apply(this, arguments),
							)
						);
					}
					return (
						_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(YAxisPanel, _Component),
						_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(YAxisPanel, [
							{
								key: 'render',
								value: function () {
									return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', null);
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
				})(react__WEBPACK_IMPORTED_MODULE_5__.Component),
				_default = YAxisPanel,
				reactHotLoader,
				leaveModule;
			(__webpack_exports__.a = _default),
				(reactHotLoader = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
				reactHotLoader &&
					(reactHotLoader.register(
						YAxisPanel,
						'YAxisPanel',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\YAxisPanel.tsx',
					),
					reactHotLoader.register(
						_default,
						'default',
						'c:\\workspace\\react-analytics\\src\\components\\panel\\style\\YAxisPanel.tsx',
					)),
				(leaveModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
				leaveModule && leaveModule(module);
		}.call(this, __webpack_require__(41)(module)));
	},
	893: function (_, e, t) {
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
		}.call(this, t(41)(_)));
	},
	894: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
				),
				react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
				react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(895),
				react_helmet__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
					react_helmet__WEBPACK_IMPORTED_MODULE_6__,
				),
				_components_editor_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(896),
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
												content:
													'Data visualization analysis editor developed with react, antd, echarts',
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
		}.call(this, __webpack_require__(41)(module)));
	},
	896: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		(function (module) {
			var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439),
				antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
					antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__,
				),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150),
				antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
				),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27),
				_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
					_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
				),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28),
				_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
					_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
				),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29),
				_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default =
					__webpack_require__.n(
						_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
					),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30),
				_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
					_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__,
				),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
				_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default =
					__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31),
				_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
					_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__,
				),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17),
				_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
					_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__,
				),
				react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
				_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(897),
				_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(612),
				_styles_index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1860),
				_styles_index_less__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
					_styles_index_less__WEBPACK_IMPORTED_MODULE_12__,
				),
				_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93),
				_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(470),
				enterModule;
			(enterModule = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
				enterModule && enterModule(module);
			var __signature__ =
				'undefined' != typeof reactHotLoaderGlobal
					? reactHotLoaderGlobal.default.signature
					: function (_) {
							return _;
					  };
			Object(_i18n__WEBPACK_IMPORTED_MODULE_10__.a)();
			var Editor = (function (_Component) {
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
								{ panelKey: 'structure:series' },
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
										_error__WEBPACK_IMPORTED_MODULE_14__.a,
										null,
										react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
											_containers_StructureContainer__WEBPACK_IMPORTED_MODULE_13__.b,
											null,
											react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
												antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a,
												{ className: 'editor-container' },
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													_layout__WEBPACK_IMPORTED_MODULE_11__.b,
													{ onSelect: this.handleSelectMenu },
												),
												react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
													antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a,
													null,
													react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
														_layout__WEBPACK_IMPORTED_MODULE_11__.a,
														{ panelKey: _ },
													),
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
		}.call(this, __webpack_require__(41)(module)));
	},
	897: function (_, e, t) {
		'use strict';
		var a = t(735);
		t.d(e, 'a', function () {
			return a.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	901: function (_, e, t) {
		'use strict';
		var a = t(835);
		t.d(e, 'a', function () {
			return a.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	902: function (_, e, t) {
		'use strict';
		var a = t(849);
		t.d(e, 'a', function () {
			return a.a;
		});
		'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
	93: function (_, e, t) {
		'use strict';
		(function (_) {
			t.d(e, 'a', function () {
				return P;
			});
			var a,
				r = t(17),
				l = t.n(r),
				n = t(65),
				i = t.n(n),
				o = t(0),
				E = t.n(o),
				s = t(81),
				u = t.n(s),
				c = t(238);
			(a = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && a(_);
			var d =
					'undefined' != typeof reactHotLoaderGlobal
						? reactHotLoaderGlobal.default.signature
						: function (_) {
								return _;
						  },
				P = E.a.createContext(null),
				b = function (_) {
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
						s = Object(o.useState)(l()({}, u()(), { type: 'category', show: !0 })),
						d = i()(s, 2),
						b = d[0],
						O = d[1],
						M = Object(o.useState)(l()({}, u()(), { type: 'value', show: !0 })),
						D = i()(M, 2),
						p = D[0],
						f = D[1],
						C = Object(o.useState)(l()({}, u()(), { show: !1 })),
						L = i()(C, 2),
						A = L[0],
						m = L[1],
						h = Object(o.useState)([]),
						K = i()(h, 2),
						I = K[0],
						R = K[1],
						T = Object(o.useState)([]),
						B = i()(T, 2),
						W = B[0],
						U = B[1],
						y = Object(o.useState)([]),
						k = i()(y, 2),
						w = k[0],
						v = k[1],
						g = Object(o.useState)([]),
						x = i()(g, 2),
						q = x[0],
						H = x[1];
					return E.a.createElement(
						P.Provider,
						{
							value: {
								series: r,
								seriesActiveKey: W,
								onChangeSeries: function (_) {
									n(_);
								},
								onChangeSeriesActiveKey: function (_) {
									U(_);
								},
								xAxis: b,
								xAxisActiveKey: I,
								onChangeXAxis: function (_) {
									O(_);
								},
								onChangeXAxisActiveKey: function (_) {
									R(_);
								},
								yAxis: p,
								yAxisActiveKey: w,
								onChangeYAxis: function (_) {
									f(_);
								},
								onChangeYAxisActiveKey: function (_) {
									v(_);
								},
								grid: A,
								gridActiveKey: q,
								onChangeGrid: function (_) {
									m(_);
								},
								onChangeGridActiveKey: function (_) {
									H(_);
								},
							},
						},
						E.a.createElement(c.b, null, e),
					);
				};
			d(
				b,
				"useState{[series, setSeries]({\r\n        [uuid()]: {\r\n            type: 'line',\r\n            data: Array.from({ length: 12 }, () => Math.random() * 1000 + 100),\r\n        },\r\n    })}\nuseState{[xAxis, setXAxis]({\r\n        [uuid()]: {\r\n            type: 'category',\r\n            show: true,\r\n        },\r\n    })}\nuseState{[yAxis, setYAxis]({\r\n        [uuid()]: {\r\n            type: 'value',\r\n            show: true,\r\n        },\r\n    })}\nuseState{[grid, setGrid]({\r\n        [uuid()]: {\r\n            show: false,\r\n        },\r\n    })}\nuseState{[xAxisActiveKey, setXAxisActiveKey]([])}\nuseState{[seriesActiveKey, setSeriesActiveKey]([])}\nuseState{[yAxisActiveKey, setYAxisActiveKey]([])}\nuseState{[gridActiveKey, setGridActiveKey]([])}",
			);
			var O,
				M,
				D = b;
			(e.b = D),
				(O = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
					(O.register(
						P,
						'StructureContext',
						'c:\\workspace\\react-analytics\\src\\containers\\StructureContainer.tsx',
					),
					O.register(
						b,
						'StructureContainer',
						'c:\\workspace\\react-analytics\\src\\containers\\StructureContainer.tsx',
					),
					O.register(
						D,
						'default',
						'c:\\workspace\\react-analytics\\src\\containers\\StructureContainer.tsx',
					)),
				(M = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && M(_);
		}.call(this, t(41)(_)));
	},
	94: function (_, e, t) {
		'use strict';
		var a = t(838);
		t.d(e, 'b', function () {
			return a.a;
		});
		var r = t(230);
		t.d(e, 'a', function () {
			return r.a;
		});
		t(867), 'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
	},
});
