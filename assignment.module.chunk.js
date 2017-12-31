webpackJsonp(["assignment.module"],{

/***/ "../../../../../src/app/assignment/assignment-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentRoutingModule; });
var AssignmentRoutingModule = /** @class */ (function () {
    function AssignmentRoutingModule() {
    }
    return AssignmentRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/assignment.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentModuleNgFactory", function() { return AssignmentModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assignment_module__ = __webpack_require__("../../../../../src/app/assignment/assignment.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_dialog_typings_index_ngfactory__ = __webpack_require__("../../../material/dialog/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_snack_bar_typings_index_ngfactory__ = __webpack_require__("../../../material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_tooltip_typings_index_ngfactory__ = __webpack_require__("../../../material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_view_dialogs_create_class_dialog_create_class_dialog_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/create-class-dialog/create-class-dialog.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_view_dialogs_add_assignment_dialog_add_assignment_dialog_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/add-assignment-dialog/add-assignment-dialog.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_view_dialogs_create_assignment_dialog_create_assignment_dialog_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/create-assignment-dialog/create-assignment-dialog.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_view_dialogs_add_question_dialog_add_question_dialog_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/add-question-dialog/add-question-dialog.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_view_dialogs_submit_confirm_dialog_submit_confirm_dialog_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/submit-confirm-dialog/submit-confirm-dialog.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_view_dialogs_follow_class_dialog_follow_class_dialog_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/follow-class-dialog/follow-class-dialog.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_view_toast_toast_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/toast/toast.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_group_list_question_group_list_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-list.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_dnd_src_dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_dnd_src_dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_pipes_convert09_to_az_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert09-to-az.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_cdk_accordion__ = __webpack_require__("../../../cdk/esm5/accordion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_view_material_material_module__ = __webpack_require__("../../../../../src/app/shared/view/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_angular2_froala_wysiwyg_editor_editor_module__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_angular2_froala_wysiwyg_view_view_module__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__assignment_routing_module__ = __webpack_require__("../../../../../src/app/assignment/assignment-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_ng2_dnd_index__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__core_services_route_guard_service__ = __webpack_require__("../../../../../src/app/core/services/route-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__question_group_list_question_group_list_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-list.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
































































var AssignmentModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__assignment_module__["a" /* AssignmentModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_dialog_typings_index_ngfactory__["a" /* MatDialogContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_snack_bar_typings_index_ngfactory__["a" /* MatSnackBarContainerNgFactory */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_snack_bar_typings_index_ngfactory__["b" /* SimpleSnackBarNgFactory */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_tooltip_typings_index_ngfactory__["a" /* TooltipComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__shared_view_dialogs_create_class_dialog_create_class_dialog_component_ngfactory__["a" /* CreateClassDialogComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__shared_view_dialogs_add_assignment_dialog_add_assignment_dialog_component_ngfactory__["a" /* AddAssignmentDialogComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__shared_view_dialogs_create_assignment_dialog_create_assignment_dialog_component_ngfactory__["a" /* CreateAssignmentDialogComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__shared_view_dialogs_add_question_dialog_add_question_dialog_component_ngfactory__["a" /* AddQuestionDialogComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__shared_view_dialogs_submit_confirm_dialog_submit_confirm_dialog_component_ngfactory__["a" /* SubmitConfirmDialogComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__shared_view_dialogs_follow_class_dialog_follow_class_dialog_component_ngfactory__["a" /* FollowClassDialogComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__shared_view_toast_toast_component_ngfactory__["a" /* ToastComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_12__question_group_list_question_group_list_component_ngfactory__["a" /* QuestionGroupListComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModuleRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["a" /* BREAKPOINTS */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["c" /* DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["b" /* BreakPointRegistry */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["b" /* BreakPointRegistry */], [__WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["a" /* BREAKPOINTS */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["m" /* MatchMedia */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["m" /* MatchMedia */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["l" /* MEDIA_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["n" /* MediaMonitor */]], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["b" /* BreakPointRegistry */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["m" /* MatchMedia */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["q" /* ObservableMedia */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["p" /* OBSERVABLE_MEDIA_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["q" /* ObservableMedia */]], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["m" /* MatchMedia */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["b" /* BreakPointRegistry */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_14__angular_common__["m" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["l" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* LOCALE_ID */], [2, __WEBPACK_IMPORTED_MODULE_14__angular_common__["u" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["i" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["n" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* PLATFORM_ID */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["l" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["o" /* ɵh */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["o" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["i" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["m" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["o" /* ɵh */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["k" /* ɵd */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["k" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["j" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["k" /* ɵd */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["h" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["h" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["j" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["h" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["f" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["p" /* ɵinterceptingHandler */], [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpBackend */], [2, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HTTP_INTERCEPTORS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["f" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_forms__["r" /* ɵi */], __WEBPACK_IMPORTED_MODULE_16__angular_forms__["r" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["b" /* DIR_DOCUMENT */], null, [__WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["c" /* Directionality */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["c" /* Directionality */], [[2, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["b" /* DIR_DOCUMENT */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["j" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["j" /* InteractivityChecker */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["i" /* FocusTrapFactory */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["i" /* FocusTrapFactory */], [__WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["j" /* InteractivityChecker */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](136192, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["e" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["c" /* ARIA_DESCRIBER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["e" /* AriaDescriber */]], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["n" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["m" /* LIVE_ANNOUNCER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["n" /* LiveAnnouncer */]], [2, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["k" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */]], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["f" /* FOCUS_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["h" /* FocusMonitor */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["d" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["b" /* SCROLL_DISPATCHER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["d" /* ScrollDispatcher */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["g" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["f" /* VIEWPORT_RULER_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["g" /* ViewportRuler */]], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["h" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["h" /* ScrollStrategyOptions */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["d" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["g" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["e" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["k" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["e" /* OverlayContainer */]], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["o" /* ɵh */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["o" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["g" /* ViewportRuler */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["f" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["n" /* ɵf */], [[3, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["f" /* OverlayKeyboardDispatcher */]], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["h" /* ScrollStrategyOptions */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["e" /* OverlayContainer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["o" /* ɵh */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["f" /* OverlayKeyboardDispatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["l" /* ɵc */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["m" /* ɵd */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_observers__["b" /* MutationObserverFactory */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_observers__["b" /* MutationObserverFactory */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_23__angular_material_icon__["d" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_23__angular_material_icon__["a" /* ICON_REGISTRY_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_23__angular_material_icon__["d" /* MatIconRegistry */]], [2, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["c" /* HttpClient */]], __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["e" /* GestureConfig */], [[2, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["i" /* MAT_HAMMER_OPTIONS */]], [2, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["n" /* MatCommonModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["b" /* MAT_MENU_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["g" /* ɵc21 */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["c" /* MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["d" /* MatDialog */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], [2, __WEBPACK_IMPORTED_MODULE_14__angular_common__["g" /* Location */]], __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["b" /* MAT_DIALOG_SCROLL_STRATEGY */], [3, __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["d" /* MatDialog */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_28__angular_material_select__["a" /* MAT_SELECT_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_28__angular_material_select__["b" /* MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["d" /* ErrorStateMatcher */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["d" /* ErrorStateMatcher */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_29__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */], __WEBPACK_IMPORTED_MODULE_29__angular_cdk_collections__["e" /* ɵa */], [[3, __WEBPACK_IMPORTED_MODULE_29__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["d" /* MediaMatcher */], [__WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["a" /* Platform */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["a" /* BreakpointObserver */], __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["a" /* BreakpointObserver */], [__WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_31__angular_material_snack_bar__["b" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_31__angular_material_snack_bar__["b" /* MatSnackBar */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["n" /* LiveAnnouncer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["a" /* BreakpointObserver */], [3, __WEBPACK_IMPORTED_MODULE_31__angular_material_snack_bar__["b" /* MatSnackBar */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_32__angular_material_tooltip__["a" /* MAT_TOOLTIP_SCROLL_STRATEGY */], __WEBPACK_IMPORTED_MODULE_32__angular_material_tooltip__["b" /* MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */], [__WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["c" /* Overlay */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_33_ng2_dnd_src_dnd_config__["a" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_33_ng2_dnd_src_dnd_config__["a" /* DragDropConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_34_ng2_dnd_src_dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_34_ng2_dnd_src_dnd_service__["c" /* dragDropServiceFactory */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_34_ng2_dnd_src_dnd_service__["b" /* DragDropSortableService */], __WEBPACK_IMPORTED_MODULE_34_ng2_dnd_src_dnd_service__["d" /* dragDropSortableServiceFactory */], [__WEBPACK_IMPORTED_MODULE_33_ng2_dnd_src_dnd_config__["a" /* DragDropConfig */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_35__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], __WEBPACK_IMPORTED_MODULE_35__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["o" /* MediaQueriesModule */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["o" /* MediaQueriesModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["g" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["g" /* FlexLayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_14__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["c" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_16__angular_forms__["p" /* ɵba */], __WEBPACK_IMPORTED_MODULE_16__angular_forms__["p" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_16__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_16__angular_forms__["f" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_bidi__["a" /* BidiModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */], true, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["n" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["n" /* MatCommonModule */], [[2, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["f" /* MATERIAL_SANITY_CHECKS */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["b" /* PlatformModule */], __WEBPACK_IMPORTED_MODULE_18__angular_cdk_platform__["b" /* PlatformModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_36__angular_material_toolbar__["b" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_36__angular_material_toolbar__["b" /* MatToolbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["a" /* A11yModule */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_a11y__["a" /* A11yModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_37__angular_cdk_portal__["g" /* PortalModule */], __WEBPACK_IMPORTED_MODULE_37__angular_cdk_portal__["g" /* PortalModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["c" /* ScrollDispatchModule */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_scrolling__["c" /* ScrollDispatchModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["g" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_21__angular_cdk_overlay__["g" /* OverlayModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_38__angular_material_sidenav__["g" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_38__angular_material_sidenav__["g" /* MatSidenavModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["y" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["y" /* MatRippleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_22__angular_cdk_observers__["c" /* ObserversModule */], __WEBPACK_IMPORTED_MODULE_22__angular_cdk_observers__["c" /* ObserversModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_39__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_39__angular_material_tabs__["a" /* MatTabsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["p" /* MatLineModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["p" /* MatLineModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["w" /* MatPseudoCheckboxModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["w" /* MatPseudoCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_40__angular_material_list__["f" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_40__angular_material_list__["f" /* MatListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_23__angular_material_icon__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_23__angular_material_icon__["c" /* MatIconModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_41__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_41__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_42__angular_material_card__["f" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material_card__["f" /* MatCardModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_43__angular_material_button__["d" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_43__angular_material_button__["d" /* MatButtonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["e" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["e" /* MatMenuModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["j" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_27__angular_material_dialog__["j" /* MatDialogModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["u" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_core__["u" /* MatOptionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_44__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_44__angular_material_form_field__["c" /* MatFormFieldModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_28__angular_material_select__["d" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_28__angular_material_select__["d" /* MatSelectModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_45__angular_material_input__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_45__angular_material_input__["c" /* MatInputModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_46__angular_material_checkbox__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_46__angular_material_checkbox__["b" /* MatCheckboxModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_47__angular_cdk_accordion__["c" /* CdkAccordionModule */], __WEBPACK_IMPORTED_MODULE_47__angular_cdk_accordion__["c" /* CdkAccordionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_48__angular_material_expansion__["b" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_48__angular_material_expansion__["b" /* MatExpansionModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_49__angular_material_radio__["c" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_49__angular_material_radio__["c" /* MatRadioModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_50__angular_material_grid_list__["b" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_50__angular_material_grid_list__["b" /* MatGridListModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["c" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_30__angular_cdk_layout__["c" /* LayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_31__angular_material_snack_bar__["e" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material_snack_bar__["e" /* MatSnackBarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_51__angular_material_progress_bar__["b" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_51__angular_material_progress_bar__["b" /* MatProgressBarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_52__angular_material_chips__["c" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_52__angular_material_chips__["c" /* MatChipsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_32__angular_material_tooltip__["d" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_32__angular_material_tooltip__["d" /* MatTooltipModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_53__angular_cdk_table__["n" /* CdkTableModule */], __WEBPACK_IMPORTED_MODULE_53__angular_cdk_table__["n" /* CdkTableModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_54__angular_material_table__["k" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_54__angular_material_table__["k" /* MatTableModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_55__shared_view_material_material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_55__shared_view_material_material_module__["a" /* MaterialModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_56_angular2_froala_wysiwyg_editor_editor_module__["a" /* FroalaEditorModule */], __WEBPACK_IMPORTED_MODULE_56_angular2_froala_wysiwyg_editor_editor_module__["a" /* FroalaEditorModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_57_angular2_froala_wysiwyg_view_view_module__["a" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_57_angular2_froala_wysiwyg_view_view_module__["a" /* FroalaViewModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_58__angular_router__["o" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_58__angular_router__["o" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_58__angular_router__["t" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_58__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_59__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_59__shared_shared_module__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_60__assignment_routing_module__["a" /* AssignmentRoutingModule */], __WEBPACK_IMPORTED_MODULE_60__assignment_routing_module__["a" /* AssignmentRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_61_ng2_dnd_index__["a" /* DndModule */], __WEBPACK_IMPORTED_MODULE_61_ng2_dnd_index__["a" /* DndModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__assignment_module__["a" /* AssignmentModule */], __WEBPACK_IMPORTED_MODULE_1__assignment_module__["a" /* AssignmentModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["l" /* ɵe */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["m" /* ɵf */], "X-XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_26__angular_material_menu__["a" /* MAT_MENU_DEFAULT_OPTIONS */], { overlapTrigger: true, xPosition: "after", yPosition: "below" }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_58__angular_router__["i" /* ROUTES */], function () { return [[{ path: "list/:classId/:assignmentId/:studentId/:mode", canDeactivate: [__WEBPACK_IMPORTED_MODULE_62__core_services_route_guard_service__["a" /* CanDeactivateGuard */]], component: __WEBPACK_IMPORTED_MODULE_63__question_group_list_question_group_list_component__["a" /* QuestionGroupListComponent */] }]]; }, [])]); });



/***/ }),

/***/ "../../../../../src/app/assignment/assignment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_froala_wysiwyg__ = __webpack_require__("../../../../angular2-froala-wysiwyg/index.js");

var AssignmentModule = /** @class */ (function () {
    function AssignmentModule() {
    }
    return AssignmentModule;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["mat-chip[_ngcontent-%COMP%]{\r\n    background-color: #f44336;\r\n}\r\n\r\n.mat-chip[_ngcontent-%COMP%]{\r\n    background-color: dimgray !important;\r\n    color: white !important;\r\n    outline:none;\r\n    cursor: default;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_QuestionIndexComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_QuestionIndexComponent_0;
/* unused harmony export View_QuestionIndexComponent_Host_0 */
/* unused harmony export QuestionIndexComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_index_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_chips_typings_index_ngfactory__ = __webpack_require__("../../../material/chips/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_index_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 








var styles_QuestionIndexComponent = [__WEBPACK_IMPORTED_MODULE_0__question_index_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_QuestionIndexComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_QuestionIndexComponent, data: {} });

function View_QuestionIndexComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 8, "mat-chip-list", [["class", "mat-chip-list"]], [[1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-multiselectable", 0], [1, "role", 0], [2, "mat-chip-list-disabled", null], [2, "mat-chip-list-invalid", null], [2, "mat-chip-list-required", null], [1, "aria-orientation", 0]], [[null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).focus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2)._blur() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2)._keydown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_chips_typings_index_ngfactory__["b" /* View_MatChipList_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_chips_typings_index_ngfactory__["a" /* RenderType_MatChipList */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_3__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_4__angular_material_chips__["b" /* MatChipList */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1294336, null, 1, __WEBPACK_IMPORTED_MODULE_4__angular_material_chips__["b" /* MatChipList */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], [2, __WEBPACK_IMPORTED_MODULE_5__angular_cdk_bidi__["c" /* Directionality */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["l" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormGroupDirective */]], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 1, { chips: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, 0, 2, "mat-chip", [["class", "mat-chip"], ["color", "accent"], ["role", "option"], ["tabindex", "-1"]], [[2, "mat-chip-selected", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6)._handleClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = ((__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6)._hasFocus = true) !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6)._blur() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 147456, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_chips__["a" /* MatChip */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { color: [0, "color"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](7, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_15 = "accent"; _ck(_v, 6, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2)._tabIndex; var currVal_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2)._ariaDescribedby || null); var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).required.toString(); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).disabled.toString(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).errorState; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).multiple; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).role; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).disabled; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).errorState; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).required; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).ariaOrientation; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).selected; var currVal_12 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).disabled || null); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).disabled.toString(); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ariaSelected; _ck(_v, 5, 0, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_16 = _co.content; _ck(_v, 7, 0, currVal_16); }); }
function View_QuestionIndexComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-index", [], null, null, null, View_QuestionIndexComponent_0, RenderType_QuestionIndexComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__question_index_component__["a" /* QuestionIndexComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuestionIndexComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-question-index", __WEBPACK_IMPORTED_MODULE_7__question_index_component__["a" /* QuestionIndexComponent */], View_QuestionIndexComponent_Host_0, { content: "content" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var QuestionIndexComponent = /** @class */ (function () {
    function QuestionIndexComponent() {
    }
    QuestionIndexComponent.prototype.ngOnInit = function () {
    };
    return QuestionIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["button[_ngcontent-%COMP%]{\r\n    height: 36px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ScoreMarkerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ScoreMarkerComponent_0;
/* unused harmony export View_ScoreMarkerComponent_Host_0 */
/* unused harmony export ScoreMarkerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__score_marker_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_form_field_typings_index_ngfactory__ = __webpack_require__("../../../material/form-field/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__score_marker_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 













var styles_ScoreMarkerComponent = [__WEBPACK_IMPORTED_MODULE_0__score_marker_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_ScoreMarkerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_ScoreMarkerComponent, data: {} });

function View_ScoreMarkerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 34, "form", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"], ["ngNativeValidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("submit" === en)) {
        var pd_2 = (_co.markScore(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 4210688, [["form", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NgForm */], [[8, null], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 20, "mat-input-container", [["class", "mat-input-container mat-form-field"]], [[2, "mat-input-invalid", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-disabled", null], [2, "mat-focused", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_form_field_typings_index_ngfactory__["b" /* View_MatFormField_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_form_field_typings_index_ngfactory__["a" /* RenderType_MatFormField */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 7389184, null, 6, __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["a" /* MatFormField */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], [2, __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["l" /* MAT_PLACEHOLDER_GLOBAL_OPTIONS */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](335544320, 1, { _control: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](335544320, 2, { _placeholderChild: 0 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 3, { _errorChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 4, { _hintChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 5, { _prefixChildren: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 6, { _suffixChildren: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](17, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["min", "0"], ["name", "score"], ["ngModel", ""], ["required", ""], ["step", "0.5"], ["type", "number"]], [[8, "max", 0], [1, "required", 0], [1, "id", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 20)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 20).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 20)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 20)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25)._focusChanged(false) !== false);
        ad = (pd_7 && ad);
    } if (("focus" === en)) {
        var pd_8 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25)._focusChanged(true) !== false);
        ad = (pd_8 && ad);
    } if (("input" === en)) {
        var pd_9 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25)._onInput() !== false);
        ad = (pd_9 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](21, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* ɵbc */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* ɵbc */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 933888, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInput */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NgControl */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormGroupDirective */]], __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["d" /* ErrorStateMatcher */], [8, null]], { placeholder: [0, "placeholder"], required: [1, "required"], type: [2, "type"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](26, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* NgControl */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, [[1, 4]], __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInput */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](30, 0, null, null, 3, "button", [["class", "mat-raised-button"], ["color", "accent"], ["mat-raised-button", ""]], [[8, "disabled", 0]], null, null, __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__angular_cdk_a11y__["h" /* FocusMonitor */]], { color: [0, "color"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_material_button__["h" /* MatRaisedButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\u8BC4\u5206"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "row"; _ck(_v, 1, 0, currVal_7); var currVal_8 = "10px"; _ck(_v, 2, 0, currVal_8); var currVal_9 = "start center"; _ck(_v, 3, 0, currVal_9); var currVal_43 = ""; _ck(_v, 18, 0, currVal_43); var currVal_44 = "score"; var currVal_45 = ""; _ck(_v, 23, 0, currVal_44, currVal_45); var currVal_46 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* ɵinlineInterpolate */](1, "\u5206\u6570(\u6EE1\u5206", _co.score, "\u5206)"); var currVal_47 = ""; var currVal_48 = "number"; _ck(_v, 25, 0, currVal_46, currVal_47, currVal_48); var currVal_50 = "accent"; _ck(_v, 31, 0, currVal_50); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._control.errorState; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._control.errorState; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._canPlaceholderFloat; var currVal_13 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._control.shouldPlaceholderFloat || __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldAlwaysFloat); var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._control.disabled; var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._control.focused; var currVal_16 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).color == "primary"); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).color == "accent"); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).color == "warn"); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("untouched"); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("touched"); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("pristine"); var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("dirty"); var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("valid"); var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("invalid"); var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9)._shouldForward("pending"); _ck(_v, 8, 1, [currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]); var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* ɵinlineInterpolate */](1, "", _co.score, ""); var currVal_27 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 18).required ? "" : null); var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).id; var currVal_29 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).placeholder; var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).disabled; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).required; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).readonly; var currVal_33 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25)._ariaDescribedby || null); var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).errorState; var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 25).required.toString(); var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassUntouched; var currVal_37 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassTouched; var currVal_38 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassPristine; var currVal_39 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassDirty; var currVal_40 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassValid; var currVal_41 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassInvalid; var currVal_42 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 26).ngClassPending; _ck(_v, 17, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42]); var currVal_49 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 31).disabled || null); _ck(_v, 30, 0, currVal_49); }); }
function View_ScoreMarkerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-score-marker", [], null, null, null, View_ScoreMarkerComponent_0, RenderType_ScoreMarkerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_12__score_marker_component__["a" /* ScoreMarkerComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ScoreMarkerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-score-marker", __WEBPACK_IMPORTED_MODULE_12__score_marker_component__["a" /* ScoreMarkerComponent */], View_ScoreMarkerComponent_Host_0, { score: "score" }, { marking: "marking" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreMarkerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var ScoreMarkerComponent = /** @class */ (function () {
    function ScoreMarkerComponent() {
        this.marking = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    ScoreMarkerComponent.prototype.ngOnInit = function () {
    };
    ScoreMarkerComponent.prototype.markScore = function (form) {
        this.marking.emit(form.value.score);
        form.reset();
    };
    return ScoreMarkerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".container[_ngcontent-%COMP%]{\r\n    margin-top: 3px;\r\n}\r\n\r\n.pager-item[_ngcontent-%COMP%]{\r\n    height: 26px;\r\n    width: 26px;\r\n    text-align: center;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.pager-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.selected.correct[_ngcontent-%COMP%]{\r\n    background-color: #4caf50;\r\n}\r\n\r\n.selected.wrong[_ngcontent-%COMP%] {\r\n    background-color: #f44336;\r\n}\r\n\r\n.correct[_ngcontent-%COMP%]{\r\n    border:2px solid #4caf50;\r\n}\r\n\r\n.wrong[_ngcontent-%COMP%]{\r\n    border:2px solid #f44336;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_QuestionPagerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_QuestionPagerComponent_0;
/* unused harmony export View_QuestionPagerComponent_Host_0 */
/* unused harmony export QuestionPagerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_pager_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_pager_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_QuestionPagerComponent = [__WEBPACK_IMPORTED_MODULE_0__question_pager_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_QuestionPagerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_QuestionPagerComponent, data: {} });

function View_QuestionPagerComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 11, "div", [["class", "container"], ["fxFlex", "5.1%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 7, "div", [["class", "pager-item"], ["fxLayoutAlign", "center center"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.skipTo(_v.context.$implicit.groupIndex, _v.context.$implicit.questionIndex) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [8, null]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](6, { "selected": 0, "correct": 1, "wrong": 2 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "5.1%"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "center center"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "pager-item"; var currVal_3 = _ck(_v, 6, 0, _co.selected(_v.context.$implicit.groupIndex, _v.context.$implicit.questionIndex), _v.context.$implicit.correct, !_v.context.$implicit.correct); _ck(_v, 5, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_4 = (_v.context.index + 1); _ck(_v, 9, 0, currVal_4); }); }
function View_QuestionPagerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 12, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "4px"], ["fxLayoutWrap", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 2, null, View_QuestionPagerComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "div", [["fxFlexFill", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](11, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["f" /* FlexFillDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_2 = "4px"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "start center"; _ck(_v, 4, 0, currVal_3); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).transform(_co.scoreList$)); _ck(_v, 7, 0, currVal_4); _ck(_v, 11, 0); }, null); }
function View_QuestionPagerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-pager", [], null, null, null, View_QuestionPagerComponent_0, RenderType_QuestionPagerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__question_pager_component__["a" /* QuestionPagerComponent */], [__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["l" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuestionPagerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-question-pager", __WEBPACK_IMPORTED_MODULE_4__question_pager_component__["a" /* QuestionPagerComponent */], View_QuestionPagerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_index_reducer__ = __webpack_require__("../../../../../src/app/redux/index.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_assignment_assignment_actions__ = __webpack_require__("../../../../../src/app/redux/assignment/assignment.actions.ts");




var QuestionPagerComponent = /** @class */ (function () {
    function QuestionPagerComponent(store) {
        var _this = this;
        this.store = store;
        this.scoreList$ = store.select(__WEBPACK_IMPORTED_MODULE_2__redux_index_reducer__["b" /* getAssignmentScoreList */]);
        store.select(__WEBPACK_IMPORTED_MODULE_2__redux_index_reducer__["g" /* getCurrentGroupIndex */]).subscribe(function (groupIndex) {
            _this.groupIndex = groupIndex;
        });
        store.select(__WEBPACK_IMPORTED_MODULE_2__redux_index_reducer__["p" /* getQuestionIndex */]).subscribe(function (questionIndex) {
            _this.questionIndex = questionIndex;
        });
    }
    QuestionPagerComponent.prototype.ngOnInit = function () {
    };
    QuestionPagerComponent.prototype.skipTo = function (groupIndex, questionIndex) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__redux_assignment_assignment_actions__["G" /* SkipToQuestionAction */](groupIndex, questionIndex));
    };
    QuestionPagerComponent.prototype.selected = function (groupIndex, questionIndex) {
        return this.groupIndex == groupIndex && this.questionIndex == questionIndex;
    };
    return QuestionPagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".container[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;}\r\n\r\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n}\r\n\r\n.question-page[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.question-content[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.direction[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid lightgray;\r\n    padding: 0 30px 0 30px;\r\n    margin-bottom: 5px !important;\r\n}\r\n\r\n.question[_ngcontent-%COMP%]{\r\n    padding: 0 30px 0 30px;\r\n    background-color: #efeff0;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n    padding: 10px 18px 10px 18px;\r\n}\r\n\r\n.review-content[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    height: 500px;\r\n    overflow: scroll;\r\n    border: 1px solid lightgray;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]{\r\n    border-top: 1px solid lightgray;\r\n    padding: 20px;\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #f44336;\r\n}\r\n\r\napp-score-marker[_ngcontent-%COMP%]{\r\n    padding-right: 16px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_IndependentWritingQuestionDetailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_IndependentWritingQuestionDetailComponent_0;
/* unused harmony export View_IndependentWritingQuestionDetailComponent_Host_0 */
/* unused harmony export IndependentWritingQuestionDetailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__independent_writing_question_detail_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_froala_wysiwyg_editor_editor_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_view_text_editor_text_editor_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/text-editor/text-editor.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_view_text_editor_text_editor_component__ = __webpack_require__("../../../../../src/app/shared/view/text-editor/text-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_question_marker_score_marker_score_marker_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_question_marker_score_marker_score_marker_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_header_question_header_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_header_question_header_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__independent_writing_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 

















var styles_IndependentWritingQuestionDetailComponent = [__WEBPACK_IMPORTED_MODULE_0__independent_writing_question_detail_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_IndependentWritingQuestionDetailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_IndependentWritingQuestionDetailComponent, data: {} });

function View_IndependentWritingQuestionDetailComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 68, "div", [["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 4, "div", [["class", "direction"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions: You have 30 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically an effective response will be 300 words at least."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, null, 56, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "start"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](13, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 6, "div", [["class", "question"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](20, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](21, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](24, 0, null, null, 42, "div", [["class", "passage"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](26, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](29, 0, null, null, 18, "div", [["class", "header"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](30, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](34, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](35, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](37, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](38, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](40, 0, null, null, 1, "label", [["class", "word-count"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](41, null, ["Word Count:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](45, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](46, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](49, 0, null, null, 8, "textarea", [["class", "froala-editor"], ["required", ""], ["rows", "10"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "froalaModelChange"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 50)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 50).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 50)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 50)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("froalaModelChange" === en)) {
        var pd_4 = ((_co.content = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.content = $event) !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = (_co.changeAnswer() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](50, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](51, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](53, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_7_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaEditor: [0, "froalaEditor"], froalaModel: [1, "froalaModel"] }, { froalaModelChange: "froalaModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_7_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](55, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](57, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](59, 0, null, null, 6, "app-text-editor", [["name", "passage"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.content = $event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = (_co.changeAnswer() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__shared_view_text_editor_text_editor_component_ngfactory__["b" /* View_TextEditorComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__shared_view_text_editor_text_editor_component_ngfactory__["a" /* RenderType_TextEditorComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](60, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_9__shared_view_text_editor_text_editor_component__["a" /* TextEditorComponent */], [], { editorOptions: [0, "editorOptions"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_9__shared_view_text_editor_text_editor_component__["a" /* TextEditorComponent */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_9__shared_view_text_editor_text_editor_component__["a" /* TextEditorComponent */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](63, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](65, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row"; var currVal_4 = "column"; _ck(_v, 12, 0, currVal_3, currVal_4); var currVal_5 = "wrap"; _ck(_v, 13, 0, currVal_5); var currVal_6 = "start"; _ck(_v, 14, 0, currVal_6); var currVal_7 = "column"; _ck(_v, 17, 0, currVal_7); var currVal_8 = "1 1 50%"; _ck(_v, 18, 0, currVal_8); var currVal_9 = _co.independentWritingQuestion.question; _ck(_v, 21, 0, currVal_9); var currVal_10 = "column"; _ck(_v, 25, 0, currVal_10); var currVal_11 = "10px"; _ck(_v, 26, 0, currVal_11); var currVal_12 = "1 1 50%"; _ck(_v, 27, 0, currVal_12); var currVal_13 = "row"; _ck(_v, 30, 0, currVal_13); var currVal_14 = "10px"; _ck(_v, 31, 0, currVal_14); var currVal_15 = "start center"; _ck(_v, 32, 0, currVal_15); var currVal_17 = ""; _ck(_v, 46, 0, currVal_17); var currVal_26 = ""; _ck(_v, 51, 0, currVal_26); var currVal_27 = _co.EditorStudentOptions; var currVal_28 = _co.content; _ck(_v, 53, 0, currVal_27, currVal_28); var currVal_29 = _co.content; _ck(_v, 55, 0, currVal_29); var currVal_37 = _co.EditorStudentOptions; _ck(_v, 60, 0, currVal_37); var currVal_38 = "passage"; var currVal_39 = _co.content; _ck(_v, 63, 0, currVal_38, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_16 = _co.wordCount; _ck(_v, 41, 0, currVal_16); var currVal_18 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 51).required ? "" : null); var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassUntouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassTouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassPristine; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassDirty; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassValid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassInvalid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 57).ngClassPending; _ck(_v, 49, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_30 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassUntouched; var currVal_31 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassTouched; var currVal_32 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassPristine; var currVal_33 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassDirty; var currVal_34 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassValid; var currVal_35 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassInvalid; var currVal_36 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).ngClassPending; _ck(_v, 59, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); }); }
function View_IndependentWritingQuestionDetailComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 74, "div", [["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 4, "div", [["class", "direction"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions: You have 30 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically an effective response will be 300 words at least."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, null, 62, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "start"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](13, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 6, "div", [["class", "question"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](20, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](21, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](24, 0, null, null, 48, "div", [["class", "passage"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](26, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](29, 0, null, null, 32, "div", [["class", "header"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](30, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](34, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](35, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](37, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](38, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](40, 0, null, null, 1, "label", [["class", "word-count"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](41, null, ["Word Count:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](45, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](46, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](48, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](49, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](51, 0, null, null, 1, "label", [["class", "grade"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](52, null, ["\u5206\u6570:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](56, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](57, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](59, 0, null, null, 1, "app-score-marker", [], null, [[null, "marking"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("marking" === en)) {
        var pd_0 = (_co.markScore($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__common_question_marker_score_marker_score_marker_component_ngfactory__["b" /* View_ScoreMarkerComponent_0 */], __WEBPACK_IMPORTED_MODULE_10__common_question_marker_score_marker_score_marker_component_ngfactory__["a" /* RenderType_ScoreMarkerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](60, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__common_question_marker_score_marker_score_marker_component__["a" /* ScoreMarkerComponent */], [], { score: [0, "score"] }, { marking: "marking" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](63, 0, null, null, 8, "textarea", [["class", "froala-editor"], ["required", ""], ["rows", "10"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "froalaModelChange"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 64)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 64).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 64)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 64)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("froalaModelChange" === en)) {
        var pd_4 = ((_co.content = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.content = $event) !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = (_co.changeAnswer() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](64, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](65, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["n" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](67, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_7_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaEditor: [0, "froalaEditor"], froalaModel: [1, "froalaModel"] }, { froalaModelChange: "froalaModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_7_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](69, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](71, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row"; var currVal_4 = "column"; _ck(_v, 12, 0, currVal_3, currVal_4); var currVal_5 = "wrap"; _ck(_v, 13, 0, currVal_5); var currVal_6 = "start"; _ck(_v, 14, 0, currVal_6); var currVal_7 = "column"; _ck(_v, 17, 0, currVal_7); var currVal_8 = "1 1 50%"; _ck(_v, 18, 0, currVal_8); var currVal_9 = _co.independentWritingQuestion.question; _ck(_v, 21, 0, currVal_9); var currVal_10 = "column"; _ck(_v, 25, 0, currVal_10); var currVal_11 = "10px"; _ck(_v, 26, 0, currVal_11); var currVal_12 = "1 1 50%"; _ck(_v, 27, 0, currVal_12); var currVal_13 = "row"; _ck(_v, 30, 0, currVal_13); var currVal_14 = "10px"; _ck(_v, 31, 0, currVal_14); var currVal_15 = "start center"; _ck(_v, 32, 0, currVal_15); var currVal_18 = ""; _ck(_v, 57, 0, currVal_18); var currVal_19 = _co.independentWritingQuestion.score; _ck(_v, 60, 0, currVal_19); var currVal_28 = ""; _ck(_v, 65, 0, currVal_28); var currVal_29 = _co.EditorTeacherOptions; var currVal_30 = _co.content; _ck(_v, 67, 0, currVal_29, currVal_30); var currVal_31 = _co.content; _ck(_v, 69, 0, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_16 = _co.wordCount; _ck(_v, 41, 0, currVal_16); var currVal_17 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 52, 0, currVal_17); var currVal_20 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 65).required ? "" : null); var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassUntouched; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassTouched; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassPristine; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassDirty; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassValid; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassInvalid; var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 71).ngClassPending; _ck(_v, 63, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); }); }
function View_IndependentWritingQuestionDetailComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 76, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 73, "div", [["class", "question-page"], ["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 4, "div", [["class", "direction"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions: You have 30 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically an effective response will be 300 words at least."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](13, 0, null, null, 52, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "start"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](18, 0, null, null, 6, "div", [["class", "question"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](19, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](22, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, null, 38, "div", [["class", "passage"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](31, 0, null, null, 29, "div", [["class", "header"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](33, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](34, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](36, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](37, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](42, 0, null, null, 1, "label", [["class", "word-count"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](43, null, ["Word Count:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](47, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](48, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](50, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](51, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](53, 0, null, null, 1, "label", [["class", "grade"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](54, null, ["\u5206\u6570:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](58, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](59, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](62, 0, null, null, 1, "div", [["class", "review-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](63, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](67, 0, null, null, 7, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](69, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u53C2\u8003\u8303\u6587\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](72, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](73, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 5, 0, currVal_2); var currVal_3 = "row"; var currVal_4 = "column"; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_5 = "wrap"; _ck(_v, 15, 0, currVal_5); var currVal_6 = "start"; _ck(_v, 16, 0, currVal_6); var currVal_7 = "column"; _ck(_v, 19, 0, currVal_7); var currVal_8 = "1 1 50%"; _ck(_v, 20, 0, currVal_8); var currVal_9 = _co.independentWritingQuestion.question; _ck(_v, 23, 0, currVal_9); var currVal_10 = "column"; _ck(_v, 27, 0, currVal_10); var currVal_11 = "10px"; _ck(_v, 28, 0, currVal_11); var currVal_12 = "1 1 50%"; _ck(_v, 29, 0, currVal_12); var currVal_13 = "row"; _ck(_v, 32, 0, currVal_13); var currVal_14 = "10px"; _ck(_v, 33, 0, currVal_14); var currVal_15 = "start center"; _ck(_v, 34, 0, currVal_15); var currVal_18 = ""; _ck(_v, 59, 0, currVal_18); var currVal_19 = _co.content; _ck(_v, 63, 0, currVal_19); var currVal_20 = _co.independentWritingQuestion.answer; _ck(_v, 73, 0, currVal_20); }, function (_ck, _v) { var _co = _v.component; var currVal_16 = _co.wordCount; _ck(_v, 43, 0, currVal_16); var currVal_17 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 54, 0, currVal_17); }); }
function View_IndependentWritingQuestionDetailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-header", [], null, [[null, "next"], [null, "pre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("next" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } if (("pre" === en)) {
        var pd_1 = (_co.pre() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__question_header_question_header_component_ngfactory__["b" /* View_QuestionHeaderComponent_0 */], __WEBPACK_IMPORTED_MODULE_12__question_header_question_header_component_ngfactory__["a" /* RenderType_QuestionHeaderComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_13__question_header_question_header_component__["a" /* QuestionHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_14__angular_router__["k" /* Router */]], { assignmentName: [0, "assignmentName"], mode: [1, "mode"], classId: [2, "classId"], showPre: [3, "showPre"], showNext: [4, "showNext"], disableNext: [5, "disableNext"] }, { next: "next", pre: "pre" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IndependentWritingQuestionDetailComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IndependentWritingQuestionDetailComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IndependentWritingQuestionDetailComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.assignmentName; var currVal_1 = _co.mode; var currVal_2 = _co.classId; var currVal_3 = _co.showPreButton; var currVal_4 = _co.showNextButton; var currVal_5 = _co.disableNextButton; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.homeworkMode(); _ck(_v, 6, 0, currVal_6); var currVal_7 = _co.markingMode(); _ck(_v, 9, 0, currVal_7); var currVal_8 = _co.reviewMode(); _ck(_v, 12, 0, currVal_8); }, null); }
function View_IndependentWritingQuestionDetailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-independent-writing-question-detail", [], null, null, null, View_IndependentWritingQuestionDetailComponent_0, RenderType_IndependentWritingQuestionDetailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_16__independent_writing_question_detail_component__["a" /* IndependentWritingQuestionDetailComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndependentWritingQuestionDetailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-independent-writing-question-detail", __WEBPACK_IMPORTED_MODULE_16__independent_writing_question_detail_component__["a" /* IndependentWritingQuestionDetailComponent */], View_IndependentWritingQuestionDetailComponent_Host_0, { assignmentName: "assignmentName", classId: "classId", mode: "mode", groupContent: "groupContent", question: "question", lastAnswer: "lastAnswer", markingScore: "markingScore", shouldShowContent: "shouldShowContent", questionIndex: "questionIndex", questionListLength: "questionListLength" }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndependentWritingQuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IndependentWritingQuestionDetailComponent = /** @class */ (function (_super) {
    __extends(IndependentWritingQuestionDetailComponent, _super);
    function IndependentWritingQuestionDetailComponent() {
        var _this = _super.call(this) || this;
        _this.EditorStudentOptions = {
            placeholderText: '',
            charCounterCount: false,
            toolbarButtons: [],
            height: 450,
            quickInsertTags: [],
            spellcheck: false,
            events: {
                'froalaEditor.initialized': function (e, editor) {
                    console.log(editor.toolbar.hide());
                }
            }
        };
        _this.EditorTeacherOptions = {
            placeholderText: '',
            charCounterCount: false,
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'strikeThrough', 'color',],
            colorsText: ['#d71345', '#f58220', '#ffe600', '#bed742', '#1d953f', '#2b4490', '#000000'],
            height: 450,
            quickInsertTags: [],
            spellcheck: true,
        };
        return _this;
    }
    IndependentWritingQuestionDetailComponent.prototype.ngOnInit = function () {
    };
    IndependentWritingQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        if (!this.lastAnswer || this.lastAnswer.length == 0) {
            this.content = "";
            this.wordCount = 0;
        }
        else {
            this.content = (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).content) || "";
            this.wordCount = (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).wordCount) || 0;
        }
        this.independentWritingQuestion = this.question;
    };
    IndependentWritingQuestionDetailComponent.prototype.changeAnswer = function () {
        //只有做作业的学生可能会导致wordCount发生改变
        //老师修改的时候并不会发生改变
        this.wordCount = _super.prototype.homeworkMode.call(this) ? this.getWordCount() : this.wordCount;
        this.answer = JSON.stringify({
            'content': this.content,
            'wordCount': this.wordCount
        });
        _super.prototype.changeAnswer.call(this);
    };
    IndependentWritingQuestionDetailComponent.prototype.getWordCount = function () {
        var cont = this.content;
        if (cont.length == 0) {
            return 0;
        }
        cont = cont.replace(/<[^>]*>/g, "");
        cont = cont.replace(/[.!?]/g, ' ');
        cont = cont.replace(/\s+/g, ' ');
        cont = cont.trim();
        return cont.split(" ").length;
    };
    return IndependentWritingQuestionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__["a" /* QuestionGroupDetailComponent */]));



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".container[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n}\r\n\r\n.content-page-1[_ngcontent-%COMP%]   .passage[_ngcontent-%COMP%]{\r\n    padding: 30px;\r\n    background-color: white;\r\n    border-right: 1px solid dimgray;\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    overflow: scroll;\r\n}\r\n\r\n.direction[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid lightgray;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.content-page-2[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    padding: 30px 30px 30px 60px;\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.content-page-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n}\r\n\r\n.audio-text[_ngcontent-%COMP%]{\r\n    height: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\n.question-page[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.question[_ngcontent-%COMP%]{\r\n    color: dimgray;\r\n    padding-right: 30px;\r\n}\r\n\r\n.direction[_ngcontent-%COMP%]{\r\n    padding: 0 30px 0 30px;\r\n    margin-bottom: 5px !important;\r\n}\r\n\r\n.question-content[_ngcontent-%COMP%]{\r\n    min-height: 100%;\r\n}\r\n\r\n.question-content[_ngcontent-%COMP%]   .passage[_ngcontent-%COMP%] {\r\n    padding: 0px 30px 0px 30px;\r\n}\r\n\r\n\r\n.header[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n    padding: 10px 18px 10px 18px;\r\n}\r\n\r\n.review-content[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    height: 500px;\r\n    overflow: scroll;\r\n    border: 1px solid lightgray;\r\n    background-color: white;\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]{\r\n    border-top: 1px solid lightgray;\r\n    padding: 20px;\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #f44336;\r\n}\r\n\r\napp-score-marker[_ngcontent-%COMP%]{\r\n    padding-right: 16px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_IntegratedWritingQuestionDetailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_IntegratedWritingQuestionDetailComponent_0;
/* unused harmony export View_IntegratedWritingQuestionDetailComponent_Host_0 */
/* unused harmony export IntegratedWritingQuestionDetailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__integrated_writing_question_detail_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_audio_player_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_view_audio_audio_player_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_froala_wysiwyg_editor_editor_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_question_marker_score_marker_score_marker_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_question_marker_score_marker_score_marker_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_header_question_header_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__question_header_question_header_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__integrated_writing_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



















var styles_IntegratedWritingQuestionDetailComponent = [__WEBPACK_IMPORTED_MODULE_0__integrated_writing_question_detail_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_IntegratedWritingQuestionDetailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_IntegratedWritingQuestionDetailComponent, data: {} });

function View_IntegratedWritingQuestionDetailComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["class", " content-page-1"], ["fxLayout", "row"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 5, "div", [["class", "passage"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "50%"; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.passage; _ck(_v, 8, 0, currVal_3); }, null); }
function View_IntegratedWritingQuestionDetailComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 17, "div", [["class", " content-page-2"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 10, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Listen to the Lecture:  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](11, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["volume_up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](15, 0, null, null, 1, "app-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_audio_player_audio_player_component_ngfactory__["b" /* View_AudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_audio_player_audio_player_component_ngfactory__["a" /* RenderType_AudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_view_audio_audio_player_audio_player_component__["a" /* AudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "row"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "start center"; _ck(_v, 5, 0, currVal_2); _ck(_v, 11, 0); var currVal_3 = (("/assets/records/" + _co.recordUrl) + ".mp3"); _ck(_v, 16, 0, currVal_3); }, null); }
function View_IntegratedWritingQuestionDetailComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 62, "div", [["class", " question-page"], ["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 7, "div", [["class", "direction"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions: You have 20 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically an effective response will be 150 to 225 words. "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Question: Summarize the points made in the lecture, being sure to explain how they challenge the specific theories presented in the reading passage."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](14, 0, null, null, 47, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "start"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](19, 0, null, null, 5, "div", [["class", "passage"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](22, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, null, 34, "div", [["fxFlex", "1 1 50%"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](31, 0, null, null, 18, "div", [["class", "header"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](33, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](34, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](36, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](37, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](42, 0, null, null, 1, "label", [["class", "word-count"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](43, null, ["Word Count:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](47, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](48, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](51, 0, null, null, 8, "textarea", [["class", "froala-editor"], ["required", ""], ["rows", "10"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "froalaModelChange"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("froalaModelChange" === en)) {
        var pd_4 = ((_co.content = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.content = $event) !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = (_co.changeAnswer() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](52, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](53, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["n" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["n" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](55, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_11_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaEditor: [0, "froalaEditor"], froalaModel: [1, "froalaModel"] }, { froalaModelChange: "froalaModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_11_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](57, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["m" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](59, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row"; var currVal_4 = "column"; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = "wrap"; _ck(_v, 16, 0, currVal_5); var currVal_6 = "start"; _ck(_v, 17, 0, currVal_6); var currVal_7 = "50%"; _ck(_v, 20, 0, currVal_7); var currVal_8 = _co.passage; _ck(_v, 23, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 27, 0, currVal_9); var currVal_10 = "10px"; _ck(_v, 28, 0, currVal_10); var currVal_11 = "1 1 50%"; _ck(_v, 29, 0, currVal_11); var currVal_12 = "row"; _ck(_v, 32, 0, currVal_12); var currVal_13 = "10px"; _ck(_v, 33, 0, currVal_13); var currVal_14 = "start center"; _ck(_v, 34, 0, currVal_14); var currVal_16 = ""; _ck(_v, 48, 0, currVal_16); var currVal_25 = ""; _ck(_v, 53, 0, currVal_25); var currVal_26 = _co.EditorStudentOptions; var currVal_27 = _co.content; _ck(_v, 55, 0, currVal_26, currVal_27); var currVal_28 = _co.content; _ck(_v, 57, 0, currVal_28); }, function (_ck, _v) { var _co = _v.component; var currVal_15 = _co.wordCount; _ck(_v, 43, 0, currVal_15); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 53).required ? "" : null); var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassUntouched; var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassTouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassPristine; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassDirty; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassValid; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassInvalid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassPending; _ck(_v, 51, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); }); }
function View_IntegratedWritingQuestionDetailComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contentIndex == 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.contentIndex == 1); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_co.contentIndex > 1); _ck(_v, 9, 0, currVal_2); }, null); }
function View_IntegratedWritingQuestionDetailComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 86, "div", [["class", "question-page"], ["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 7, "div", [["class", "direction"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions: You have 20 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically an effective response will be 150 to 225 words. "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Question: Summarize the points made in the lecture, being sure to explain how they challenge the specific theories presented in the reading passage."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](14, 0, null, null, 71, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "start"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](19, 0, null, null, 5, "div", [["class", "passage"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](22, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, null, 58, "div", [["fxFlex", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](30, 0, null, null, 43, "div", [["class", "header"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](33, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](35, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](36, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](38, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](41, 0, null, null, 1, "label", [["class", "word-count"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](42, null, ["Word Count:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](46, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](47, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](49, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](50, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](52, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](53, null, ["\u8017\u65F6:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](57, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](58, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](60, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](61, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](63, 0, null, null, 1, "label", [["class", "grade"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](64, null, ["\u5206\u6570:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](68, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](69, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](71, 0, null, null, 1, "app-score-marker", [], null, [[null, "marking"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("marking" === en)) {
        var pd_0 = (_co.markScore($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_13__common_question_marker_score_marker_score_marker_component_ngfactory__["b" /* View_ScoreMarkerComponent_0 */], __WEBPACK_IMPORTED_MODULE_13__common_question_marker_score_marker_score_marker_component_ngfactory__["a" /* RenderType_ScoreMarkerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](72, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_14__common_question_marker_score_marker_score_marker_component__["a" /* ScoreMarkerComponent */], [], { score: [0, "score"] }, { marking: "marking" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](75, 0, null, null, 8, "textarea", [["class", "froala-editor"], ["required", ""], ["rows", "10"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "froalaModelChange"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 76)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 76).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 76)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 76)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("froalaModelChange" === en)) {
        var pd_4 = ((_co.content = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.content = $event) !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = (_co.changeAnswer() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](76, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](77, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["n" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["n" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](79, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_11_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaEditor: [0, "froalaEditor"], froalaModel: [1, "froalaModel"] }, { froalaModelChange: "froalaModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_11_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](81, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["m" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](83, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row"; var currVal_4 = "column"; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = "wrap"; _ck(_v, 16, 0, currVal_5); var currVal_6 = "start"; _ck(_v, 17, 0, currVal_6); var currVal_7 = "50%"; _ck(_v, 20, 0, currVal_7); var currVal_8 = _co.passage; _ck(_v, 23, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 27, 0, currVal_9); var currVal_10 = "1 1 50%"; _ck(_v, 28, 0, currVal_10); var currVal_11 = "row"; _ck(_v, 31, 0, currVal_11); var currVal_12 = "10px"; _ck(_v, 32, 0, currVal_12); var currVal_13 = "start center"; _ck(_v, 33, 0, currVal_13); var currVal_17 = ""; _ck(_v, 69, 0, currVal_17); var currVal_18 = _co.integratedWritingQuestion.score; _ck(_v, 72, 0, currVal_18); var currVal_27 = ""; _ck(_v, 77, 0, currVal_27); var currVal_28 = _co.EditorTeacherOptions; var currVal_29 = _co.content; _ck(_v, 79, 0, currVal_28, currVal_29); var currVal_30 = _co.content; _ck(_v, 81, 0, currVal_30); }, function (_ck, _v) { var _co = _v.component; var currVal_14 = _co.wordCount; _ck(_v, 42, 0, currVal_14); var currVal_15 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 53, 0, currVal_15); var currVal_16 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 64, 0, currVal_16); var currVal_19 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 77).required ? "" : null); var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassUntouched; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassTouched; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassPristine; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassDirty; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassValid; var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassInvalid; var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 83).ngClassPending; _ck(_v, 75, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); }); }
function View_IntegratedWritingQuestionDetailComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contentIndex > 1); _ck(_v, 3, 0, currVal_0); }, null); }
function View_IntegratedWritingQuestionDetailComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 75, "div", [["class", "question-page"], ["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 7, "div", [["class", "direction"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions: You have 20 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically an effective response will be 150 to 225 words. "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Question: Summarize the points made in the lecture, being sure to explain how they challenge the specific theories presented in the reading passage."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](14, 0, null, null, 51, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "start"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](19, 0, null, null, 5, "div", [["class", "passage"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](22, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, null, 38, "div", [["fxFlex", "1 1 50%"], ["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](31, 0, null, null, 29, "div", [["class", "header"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](33, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](34, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](36, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](37, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](42, 0, null, null, 1, "label", [["class", "word-count"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](43, null, ["Word Count:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](47, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](48, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](50, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](51, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](53, 0, null, null, 1, "label", [["class", "grade"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](54, null, ["\u5206\u6570:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](58, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](59, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](62, 0, null, null, 1, "div", [["class", "review-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](63, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](67, 0, null, null, 7, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](69, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u53C2\u8003\u8303\u6587\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](72, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](73, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_3_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "row"; var currVal_4 = "column"; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = "wrap"; _ck(_v, 16, 0, currVal_5); var currVal_6 = "start"; _ck(_v, 17, 0, currVal_6); var currVal_7 = "50%"; _ck(_v, 20, 0, currVal_7); var currVal_8 = _co.passage; _ck(_v, 23, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 27, 0, currVal_9); var currVal_10 = "10px"; _ck(_v, 28, 0, currVal_10); var currVal_11 = "1 1 50%"; _ck(_v, 29, 0, currVal_11); var currVal_12 = "row"; _ck(_v, 32, 0, currVal_12); var currVal_13 = "10px"; _ck(_v, 33, 0, currVal_13); var currVal_14 = "start center"; _ck(_v, 34, 0, currVal_14); var currVal_17 = ""; _ck(_v, 59, 0, currVal_17); var currVal_18 = _co.content; _ck(_v, 63, 0, currVal_18); var currVal_19 = _co.integratedWritingQuestion.answer; _ck(_v, 73, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_15 = _co.wordCount; _ck(_v, 43, 0, currVal_15); var currVal_16 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 54, 0, currVal_16); }); }
function View_IntegratedWritingQuestionDetailComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_8)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contentIndex > 1); _ck(_v, 3, 0, currVal_0); }, null); }
function View_IntegratedWritingQuestionDetailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-header", [], null, [[null, "next"], [null, "pre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("next" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } if (("pre" === en)) {
        var pd_1 = (_co.pre() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_15__question_header_question_header_component_ngfactory__["b" /* View_QuestionHeaderComponent_0 */], __WEBPACK_IMPORTED_MODULE_15__question_header_question_header_component_ngfactory__["a" /* RenderType_QuestionHeaderComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_16__question_header_question_header_component__["a" /* QuestionHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["k" /* Router */]], { assignmentName: [0, "assignmentName"], mode: [1, "mode"], classId: [2, "classId"], showPre: [3, "showPre"], showNext: [4, "showNext"], disableNext: [5, "disableNext"] }, { next: "next", pre: "pre" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_IntegratedWritingQuestionDetailComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.assignmentName; var currVal_1 = _co.mode; var currVal_2 = _co.classId; var currVal_3 = _co.showPreButton; var currVal_4 = _co.showNextButton; var currVal_5 = _co.disableNextButton; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.homeworkMode(); _ck(_v, 6, 0, currVal_6); var currVal_7 = _co.markingMode(); _ck(_v, 9, 0, currVal_7); var currVal_8 = _co.reviewMode(); _ck(_v, 12, 0, currVal_8); }, null); }
function View_IntegratedWritingQuestionDetailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-integrated-writing-question-detail", [], null, null, null, View_IntegratedWritingQuestionDetailComponent_0, RenderType_IntegratedWritingQuestionDetailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_18__integrated_writing_question_detail_component__["a" /* IntegratedWritingQuestionDetailComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IntegratedWritingQuestionDetailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-integrated-writing-question-detail", __WEBPACK_IMPORTED_MODULE_18__integrated_writing_question_detail_component__["a" /* IntegratedWritingQuestionDetailComponent */], View_IntegratedWritingQuestionDetailComponent_Host_0, { assignmentName: "assignmentName", classId: "classId", mode: "mode", groupContent: "groupContent", question: "question", lastAnswer: "lastAnswer", markingScore: "markingScore", shouldShowContent: "shouldShowContent", questionIndex: "questionIndex", questionListLength: "questionListLength", contentIndex: "contentIndex" }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegratedWritingQuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_assignments_Assignment__ = __webpack_require__("../../../../../src/app/models/assignments/Assignment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var IntegratedWritingQuestionDetailComponent = /** @class */ (function (_super) {
    __extends(IntegratedWritingQuestionDetailComponent, _super);
    function IntegratedWritingQuestionDetailComponent() {
        var _this = _super.call(this) || this;
        _this.EditorStudentOptions = {
            placeholderText: '',
            charCounterCount: false,
            toolbarButtons: [],
            height: 400,
            quickInsertTags: [],
            spellcheck: false,
            events: {
                'froalaEditor.initialized': function (e, editor) {
                    console.log(editor.toolbar.hide());
                }
            }
        };
        _this.EditorTeacherOptions = {
            placeholderText: '',
            charCounterCount: false,
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'strikeThrough', 'color',],
            colorsText: ['#d71345', '#f58220', '#ffe600', '#bed742', '#1d953f', '#2b4490', '#000000'],
            height: 400,
            quickInsertTags: [],
            spellcheck: true,
        };
        return _this;
    }
    IntegratedWritingQuestionDetailComponent.prototype.ngOnInit = function () {
    };
    IntegratedWritingQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        if (this.groupContent.length > 0) {
            this.passage = JSON.parse(this.groupContent).passage;
            this.recordUrl = JSON.parse(this.groupContent).recordUrl;
        }
        if (!this.lastAnswer || this.lastAnswer.length == 0) {
            this.content = "";
            this.wordCount = 0;
        }
        else {
            this.content = (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).content) || "";
            this.wordCount = (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).wordCount) || 0;
        }
        this.integratedWritingQuestion = this.question;
        this.setupHeader();
    };
    IntegratedWritingQuestionDetailComponent.prototype.setupHeader = function () {
        if (this.mode == __WEBPACK_IMPORTED_MODULE_2__models_assignments_Assignment__["b" /* Mode */].HomeWork) {
            this.showPreButton = false;
        }
        else {
            this.showPreButton = true;
            this.showNextButton = true;
            this.disableNextButton = false;
        }
    };
    IntegratedWritingQuestionDetailComponent.prototype.changeAnswer = function () {
        //只有做作业的学生可能会导致wordCount发生改变
        //老师修改的时候并不会发生改变
        this.wordCount = _super.prototype.homeworkMode.call(this) ? this.getWordCount() : this.wordCount;
        this.answer = JSON.stringify({
            'content': this.content,
            'wordCount': this.wordCount
        });
        _super.prototype.changeAnswer.call(this);
    };
    IntegratedWritingQuestionDetailComponent.prototype.getWordCount = function () {
        var cont = this.content;
        if (cont.length == 0) {
            return 0;
        }
        cont = cont.replace(/<[^>]*>/g, "");
        cont = cont.replace(/[.!?]/g, ' ');
        cont = cont.replace(/\s+/g, ' ');
        cont = cont.trim();
        return cont.split(" ").length;
    };
    return IntegratedWritingQuestionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__["a" /* QuestionGroupDetailComponent */]));



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionGroupDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Questions_Question__ = __webpack_require__("../../../../../src/app/models/Questions/Question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_assignments_Assignment__ = __webpack_require__("../../../../../src/app/models/assignments/Assignment.ts");



var QuestionGroupDetailComponent = /** @class */ (function () {
    function QuestionGroupDetailComponent() {
        this.OnChangeAnswer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.OnMarkScore = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.OnNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.OnPre = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.ModeType = __WEBPACK_IMPORTED_MODULE_2__models_assignments_Assignment__["b" /* Mode */];
        this.showPreButton = true;
        this.showNextButton = true;
        this.disableNextButton = false;
    }
    QuestionGroupDetailComponent.prototype.ngOnInit = function () {
    };
    QuestionGroupDetailComponent.prototype.pre = function () {
        this.OnPre.emit(true);
    };
    QuestionGroupDetailComponent.prototype.next = function () {
        this.OnNext.emit(true);
    };
    QuestionGroupDetailComponent.prototype.changeAnswer = function () {
        this.OnChangeAnswer.emit(this.answer);
    };
    QuestionGroupDetailComponent.prototype.markScore = function (score) {
        this.OnMarkScore.emit(score);
    };
    QuestionGroupDetailComponent.prototype.homeworkMode = function () {
        return this.mode == this.ModeType.HomeWork;
    };
    QuestionGroupDetailComponent.prototype.markingMode = function () {
        return this.mode == this.ModeType.Marking;
    };
    QuestionGroupDetailComponent.prototype.reviewMode = function () {
        return this.mode == this.ModeType.Review;
    };
    QuestionGroupDetailComponent.prototype.correct = function () {
        return this.markingScore == this.question.score;
    };
    QuestionGroupDetailComponent.prototype.getPagerContent = function () {
        if (!this.shouldShowContent) {
            return 'Question ' + (this.questionIndex + 1) + ' of ' +
                (this.questionListLength);
        }
        else {
            return '';
        }
    };
    return QuestionGroupDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".container[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.question-page[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n    padding: 60px 100px 30px 100px;\r\n    min-height: 100%;\r\n}\r\n\r\n.question-page.review[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n\r\n.question-page.review[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]{\r\n    padding: 20px 20px 20px 40px;\r\n}\r\n\r\n#content-page[_ngcontent-%COMP%]{\r\n    padding: 0px 30px 30px 60px;\r\n}\r\n\r\napp-question-pager[_ngcontent-%COMP%]{\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.review-question[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n}\r\n\r\n#audio-text[_ngcontent-%COMP%]{\r\n    height: 24px;\r\n    line-height: 24px;\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px !important;\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    white-space: normal;\r\n}\r\n\r\n.correct-answer[_ngcontent-%COMP%]{\r\n    color: #4caf50;\r\n}\r\n\r\n.passage-container[_ngcontent-%COMP%]{\r\n    padding: 26px 20px 20px 20px;\r\n    background-color: white;\r\n    border-left: 1px solid dimgray;\r\n}\r\n\r\n.passage[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    overflow: scroll;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_TpoListeningQuestionDetailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_TpoListeningQuestionDetailComponent_0;
/* unused harmony export View_TpoListeningQuestionDetailComponent_Host_0 */
/* unused harmony export TpoListeningQuestionDetailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tpo_listening_question_detail_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_audio_player_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_audio_player_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_material_radio_typings_index_ngfactory__ = __webpack_require__("../../../material/radio/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_pipes_convert09_to_az_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert09-to-az.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_material_checkbox_typings_index_ngfactory__ = __webpack_require__("../../../material/checkbox/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/views/tpo-table-for-view/tpo-table-for-view.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_views_tpo_table_for_view_tpo_table_for_view_component__ = __webpack_require__("../../../../../src/app/shared/views/tpo-table-for-view/tpo-table-for-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_question_index_question_index_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_question_index_question_index_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/simple-audio-player/simple-audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_simple_audio_player_simple_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/simple-audio-player/simple-audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_material_list_typings_index_ngfactory__ = __webpack_require__("../../../material/list/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_question_pager_question_pager_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_question_pager_question_pager_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_froala_wysiwyg_view_view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/tpo-review-player/tpo-review-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_view_audio_tpo_review_player_tpo_review_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/tpo-review-player/tpo-review-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__question_header_question_header_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__question_header_question_header_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tpo_listening_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



































var styles_TpoListeningQuestionDetailComponent = [__WEBPACK_IMPORTED_MODULE_0__tpo_listening_question_detail_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_TpoListeningQuestionDetailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_TpoListeningQuestionDetailComponent, data: {} });

function View_TpoListeningQuestionDetailComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 18, "div", [["class", "container"], ["fxLayout", "column"], ["fxLayoutAlign", "start"], ["id", "content-page"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 10, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Listen to this material:"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["volume_up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 1, "app-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_audio_player_audio_player_component_ngfactory__["b" /* View_AudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_audio_player_audio_player_component_ngfactory__["a" /* RenderType_AudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_audio_player_audio_player_component__["a" /* AudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "row"; _ck(_v, 5, 0, currVal_2); var currVal_3 = "start center"; _ck(_v, 6, 0, currVal_3); _ck(_v, 12, 0); var currVal_4 = _co.recordUrl; _ck(_v, 17, 0, currVal_4); }, null); }
function View_TpoListeningQuestionDetailComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Listen again to part of the conversation. Then answer the question."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["volume_up"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); _ck(_v, 8, 0); }, null); }
function View_TpoListeningQuestionDetailComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 7, "mat-radio-button", [["class", "mat-radio-button"], ["color", "accent"], ["name", "choices"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_material_radio_typings_index_ngfactory__["b" /* View_MatRadioButton_0 */], __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_material_radio_typings_index_ngfactory__["a" /* RenderType_MatRadioButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 4440064, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__["a" /* MatRadioButton */], [[2, __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__["b" /* MatRadioGroup */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_9__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_10__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */]], { color: [0, "color"], name: [1, "name"], value: [2, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_11__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, 0, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](5, null, ["", ". ", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_11__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "]))], function (_ck, _v) { var currVal_3 = "accent"; var currVal_4 = "choices"; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 2, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_v.context.index)); _ck(_v, 1, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).checked; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).disabled; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 5, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_v.context.index)); var currVal_7 = _v.context.$implicit; _ck(_v, 5, 0, currVal_6, currVal_7); }); }
function View_TpoListeningQuestionDetailComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 24, "div", [["class", "question"], ["fxLayout", "column"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, null, 12, "mat-radio-group", [["class", "mat-radio-group"], ["fxLayout", "column"], ["fxLayoutGap", "5px"], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.answer = $event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.changeAnswer() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 1064960, null, 1, __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__["b" /* MatRadioGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], { disabled: [0, "disabled"] }, { change: "change" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 1, { _radios: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_8__angular_material_radio__["b" /* MatRadioGroup */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["m" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](22, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start"; _ck(_v, 2, 0, currVal_1); var currVal_2 = (_co.tpoListeningQuestion.questionType == _co.assignmentService.getTpoListeningRepeatQuestion()); _ck(_v, 5, 0, currVal_2); var currVal_11 = _co.reviewMode(); _ck(_v, 12, 0, currVal_11); var currVal_12 = "column"; _ck(_v, 14, 0, currVal_12); var currVal_13 = "5px"; _ck(_v, 15, 0, currVal_13); var currVal_14 = _co.reviewMode(); var currVal_15 = _co.answer; _ck(_v, 17, 0, currVal_14, currVal_15); var currVal_16 = _co.tpoListeningQuestion.options; _ck(_v, 22, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.tpoListeningQuestion.question; _ck(_v, 9, 0, currVal_3); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassTouched; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassPristine; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassDirty; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassValid; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); }); }
function View_TpoListeningQuestionDetailComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 7, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.checkboxAnswers[_v.context.index] = $event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.changeCheckboxAnswer() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_material_checkbox_typings_index_ngfactory__["b" /* View_MatCheckbox_0 */], __WEBPACK_IMPORTED_MODULE_14__node_modules_angular_material_checkbox_typings_index_ngfactory__["a" /* RenderType_MatCheckbox */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 4374528, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_material_checkbox__["a" /* MatCheckbox */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_9__angular_cdk_a11y__["h" /* FocusMonitor */], [8, null]], null, { change: "change" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_15__angular_material_checkbox__["a" /* MatCheckbox */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["m" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](6, 0, ["\n                        ", ". ", "\n                    "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_11__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], [])], function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.checkboxAnswers[_v.context.index]; _ck(_v, 3, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).id; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).indeterminate; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).checked; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).disabled; var currVal_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).labelPosition == "before"); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassUntouched; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassTouched; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassPristine; var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassDirty; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassValid; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassInvalid; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).ngClassPending; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]); var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_v.context.index)); var currVal_14 = _v.context.$implicit; _ck(_v, 6, 0, currVal_13, currVal_14); }); }
function View_TpoListeningQuestionDetailComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 14, "div", [["class", "question"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 6, "div", [["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_8)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "column"; _ck(_v, 8, 0, currVal_2); var currVal_3 = "10px"; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.tpoListeningQuestion.options; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.tpoListeningQuestion.question; _ck(_v, 5, 0, currVal_1); }); }
function View_TpoListeningQuestionDetailComponent_9(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 9, "div", [["class", "question"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](5, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "app-tpo-table-for-view", [], null, [[null, "answerChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("answerChanged" === en)) {
        var pd_0 = (_co.changeTableChoiceAnswer($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__["b" /* View_TpoTableForViewComponent_0 */], __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__["a" /* RenderType_TpoTableForViewComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_17__shared_views_tpo_table_for_view_tpo_table_for_view_component__["a" /* TpoTableForViewComponent */], [], { mode: [0, "mode"], tableRows: [1, "tableRows"], tableCols: [2, "tableCols"], answer: [3, "answer"] }, { answerChanged: "answerChanged" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "homework"; var currVal_3 = _co.getRowsForTableChoiceQuestion(_co.tpoListeningQuestion.question); var currVal_4 = _co.tpoListeningQuestion.options; var currVal_5 = _co.answer; _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.getQuestionForTableChoiceQuestion(_co.tpoListeningQuestion.question); _ck(_v, 5, 0, currVal_1); }); }
function View_TpoListeningQuestionDetailComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 16, "div", [["class", "question-page"], ["fxLayout", "column"], ["fxLayoutAlign", "start"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 1, "app-question-index", [], null, null, null, __WEBPACK_IMPORTED_MODULE_18__common_question_index_question_index_component_ngfactory__["b" /* View_QuestionIndexComponent_0 */], __WEBPACK_IMPORTED_MODULE_18__common_question_index_question_index_component_ngfactory__["a" /* RenderType_QuestionIndexComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_19__common_question_index_question_index_component__["a" /* QuestionIndexComponent */], [], { content: [0, "content"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_9)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "10px"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.getPagerContent(); _ck(_v, 6, 0, currVal_3); var currVal_4 = ((_co.tpoListeningQuestion.questionType == _co.assignmentService.getTpoListeningSingleChoice()) || (_co.tpoListeningQuestion.questionType == _co.assignmentService.getTpoListeningRepeatQuestion())); _ck(_v, 9, 0, currVal_4); var currVal_5 = (_co.tpoListeningQuestion.questionType == _co.assignmentService.getTpoListeningMultipleChoice()); _ck(_v, 12, 0, currVal_5); var currVal_6 = (_co.tpoListeningQuestion.questionType == "tpo_listening_table_choice"); _ck(_v, 15, 0, currVal_6); }, null); }
function View_TpoListeningQuestionDetailComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contentIndex == 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.contentIndex > 0); _ck(_v, 6, 0, currVal_1); }, null); }
function View_TpoListeningQuestionDetailComponent_13(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 9, "div", [["class", "review-question"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Listen again to part of the conversation. Then answer the question."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "app-simple-audio-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_20__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["b" /* View_SimpleAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_20__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["a" /* RenderType_SimpleAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_simple_audio_player_simple_audio_player_component__["a" /* SimpleAudioPlayerComponent */], [], { src: [0, "src"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.tpoListeningQuestion.recordUrl.replace("question", "repeat"); _ck(_v, 8, 0, currVal_2); }, null); }
function View_TpoListeningQuestionDetailComponent_14(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 5, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], null, [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_material_list_typings_index_ngfactory__["c" /* View_MatListItem_0 */], __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_material_list_typings_index_ngfactory__["b" /* RenderType_MatListItem */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 1097728, null, 2, __WEBPACK_IMPORTED_MODULE_23__angular_material_list__["e" /* MatListItem */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_23__angular_material_list__["b" /* MatList */]], [2, __WEBPACK_IMPORTED_MODULE_23__angular_material_list__["h" /* MatNavListCssMatStyler */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 2, { _lines: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](335544320, 3, { _hasAvatar: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](4, 2, ["\n                            ", ". ", "\n                        "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_11__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], [])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 4, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_v.context.index)); var currVal_1 = _v.context.$implicit; _ck(_v, 4, 0, currVal_0, currVal_1); }); }
function View_TpoListeningQuestionDetailComponent_12(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 45, "div", [["class", "question-container"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 1, "app-question-pager", [], null, null, null, __WEBPACK_IMPORTED_MODULE_24__common_question_pager_question_pager_component_ngfactory__["b" /* View_QuestionPagerComponent_0 */], __WEBPACK_IMPORTED_MODULE_24__common_question_pager_question_pager_component_ngfactory__["a" /* RenderType_QuestionPagerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_25__common_question_pager_question_pager_component__["a" /* QuestionPagerComponent */], [__WEBPACK_IMPORTED_MODULE_26__ngrx_store__["l" /* Store */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](6, 0, null, null, 24, "div", [["class", "question"], ["fxLayout", "column"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_13)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](13, 0, null, null, 8, "div", [["class", "review-question"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](18, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](19, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](20, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](23, 0, null, null, 6, "mat-list", [["class", "mat-list"], ["role", "list"]], null, null, null, __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_material_list_typings_index_ngfactory__["d" /* View_MatList_0 */], __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_material_list_typings_index_ngfactory__["a" /* RenderType_MatList */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](24, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_23__angular_material_list__["b" /* MatList */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_23__angular_material_list__["c" /* MatListCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, 0, 1, null, View_TpoListeningQuestionDetailComponent_14)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](32, 0, null, null, 12, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](34, 0, null, null, 3, "p", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](35, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](36, { "correct-answer": 0, "text-danger": 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](37, null, ["\u5B66\u751F\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, null, 1, "p", [["class", "correct-answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](40, null, ["\u6B63\u786E\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](42, 0, null, null, 1, "div", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](43, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_27_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "50%"; _ck(_v, 1, 0, currVal_0); _ck(_v, 4, 0); var currVal_1 = "column"; _ck(_v, 7, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 8, 0, currVal_2); var currVal_3 = (_co.tpoListeningQuestion.questionType == _co.assignmentService.getTpoListeningRepeatQuestion()); _ck(_v, 11, 0, currVal_3); var currVal_4 = "row"; _ck(_v, 14, 0, currVal_4); var currVal_5 = "5px"; _ck(_v, 15, 0, currVal_5); var currVal_6 = "start center"; _ck(_v, 16, 0, currVal_6); var currVal_8 = _co.tpoListeningQuestion.options; _ck(_v, 28, 0, currVal_8); var currVal_9 = _ck(_v, 36, 0, _co.correct(), !_co.correct()); _ck(_v, 35, 0, currVal_9); var currVal_12 = _co.tpoListeningQuestion.explanation; _ck(_v, 43, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.tpoListeningQuestion.question; _ck(_v, 20, 0, currVal_7); var currVal_10 = _co.answer; _ck(_v, 37, 0, currVal_10); var currVal_11 = _co.tpoListeningQuestion.answer; _ck(_v, 40, 0, currVal_11); }); }
function View_TpoListeningQuestionDetailComponent_15(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 32, "div", [["class", "question-container"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 1, "app-question-pager", [], null, null, null, __WEBPACK_IMPORTED_MODULE_24__common_question_pager_question_pager_component_ngfactory__["b" /* View_QuestionPagerComponent_0 */], __WEBPACK_IMPORTED_MODULE_24__common_question_pager_question_pager_component_ngfactory__["a" /* RenderType_QuestionPagerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_25__common_question_pager_question_pager_component__["a" /* QuestionPagerComponent */], [__WEBPACK_IMPORTED_MODULE_26__ngrx_store__["l" /* Store */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](6, 0, null, null, 16, "div", [["class", "question"], ["fxLayout", "column"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 8, "div", [["class", "review-question"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](11, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](13, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](15, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](17, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](20, 0, null, null, 1, "app-tpo-table-for-view", [], null, [[null, "answerChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("answerChanged" === en)) {
        var pd_0 = (_co.changeTableChoiceAnswer($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__["b" /* View_TpoTableForViewComponent_0 */], __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__["a" /* RenderType_TpoTableForViewComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](21, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_17__shared_views_tpo_table_for_view_tpo_table_for_view_component__["a" /* TpoTableForViewComponent */], [], { mode: [0, "mode"], tableRows: [1, "tableRows"], tableCols: [2, "tableCols"], answer: [3, "answer"] }, { answerChanged: "answerChanged" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](24, 0, null, null, 7, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, null, 1, "p", [["class", "correct-answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u6B63\u786E\u7B54\u6848\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](29, 0, null, null, 1, "app-tpo-table-for-view", [], null, [[null, "answerChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("answerChanged" === en)) {
        var pd_0 = (_co.changeTableChoiceAnswer($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__["b" /* View_TpoTableForViewComponent_0 */], __WEBPACK_IMPORTED_MODULE_16__shared_views_tpo_table_for_view_tpo_table_for_view_component_ngfactory__["a" /* RenderType_TpoTableForViewComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](30, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_17__shared_views_tpo_table_for_view_tpo_table_for_view_component__["a" /* TpoTableForViewComponent */], [], { mode: [0, "mode"], tableRows: [1, "tableRows"], tableCols: [2, "tableCols"], answer: [3, "answer"] }, { answerChanged: "answerChanged" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "50%"; _ck(_v, 1, 0, currVal_0); _ck(_v, 4, 0); var currVal_1 = "column"; _ck(_v, 7, 0, currVal_1); var currVal_2 = "start"; _ck(_v, 8, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 11, 0, currVal_3); var currVal_4 = "5px"; _ck(_v, 12, 0, currVal_4); var currVal_5 = "start center"; _ck(_v, 13, 0, currVal_5); var currVal_7 = "review"; var currVal_8 = _co.getRowsForTableChoiceQuestion(_co.tpoListeningQuestion.question); var currVal_9 = _co.tpoListeningQuestion.options; var currVal_10 = _co.answer; _ck(_v, 21, 0, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = "review"; var currVal_12 = _co.getRowsForTableChoiceQuestion(_co.tpoListeningQuestion.question); var currVal_13 = _co.tpoListeningQuestion.options; var currVal_14 = _co.tpoListeningQuestion.answer; _ck(_v, 30, 0, currVal_11, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.getQuestionForTableChoiceQuestion(_co.tpoListeningQuestion.question); _ck(_v, 17, 0, currVal_6); }); }
function View_TpoListeningQuestionDetailComponent_11(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 19, "div", [["class", "question-page review"], ["fxLayout", "row"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_12)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_15)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 8, "div", [["class", "passage-container"], ["fxFlex", "50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](11, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](13, 0, null, null, 1, "app-tpo-review-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_28__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__["b" /* View_TpoReviewPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_28__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__["a" /* RenderType_TpoReviewPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_29__shared_view_audio_tpo_review_player_tpo_review_player_component__["a" /* TpoReviewPlayerComponent */], [], { src: [0, "src"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 1, "div", [["class", "passage"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_27_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start"; _ck(_v, 2, 0, currVal_1); var currVal_2 = (_co.tpoListeningQuestion.questionType !== "tpo_listening_table_choice"); _ck(_v, 5, 0, currVal_2); var currVal_3 = (_co.tpoListeningQuestion.questionType == "tpo_listening_table_choice"); _ck(_v, 8, 0, currVal_3); var currVal_4 = "50%"; _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.recordUrl; _ck(_v, 14, 0, currVal_5); var currVal_6 = _co.passage; _ck(_v, 17, 0, currVal_6); }, null); }
function View_TpoListeningQuestionDetailComponent_10(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_11)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contentIndex > 0); _ck(_v, 3, 0, currVal_0); }, null); }
function View_TpoListeningQuestionDetailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-header", [], null, [[null, "next"], [null, "pre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("next" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } if (("pre" === en)) {
        var pd_1 = (_co.pre() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_30__question_header_question_header_component_ngfactory__["b" /* View_QuestionHeaderComponent_0 */], __WEBPACK_IMPORTED_MODULE_30__question_header_question_header_component_ngfactory__["a" /* RenderType_QuestionHeaderComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_31__question_header_question_header_component__["a" /* QuestionHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_32__angular_router__["k" /* Router */]], { assignmentName: [0, "assignmentName"], mode: [1, "mode"], classId: [2, "classId"], showPre: [3, "showPre"], showNext: [4, "showNext"], disableNext: [5, "disableNext"] }, { next: "next", pre: "pre" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoListeningQuestionDetailComponent_10)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.assignmentName; var currVal_1 = _co.mode; var currVal_2 = _co.classId; var currVal_3 = _co.showPreButton; var currVal_4 = _co.showNextButton; var currVal_5 = false; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.homeworkMode(); _ck(_v, 6, 0, currVal_6); var currVal_7 = _co.reviewMode(); _ck(_v, 9, 0, currVal_7); }, null); }
function View_TpoListeningQuestionDetailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-tpo-listening-question-detail", [], null, null, null, View_TpoListeningQuestionDetailComponent_0, RenderType_TpoListeningQuestionDetailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_33__tpo_listening_question_detail_component__["a" /* TpoListeningQuestionDetailComponent */], [__WEBPACK_IMPORTED_MODULE_34__core_services_assignment_service__["a" /* AssignmentService */], __WEBPACK_IMPORTED_MODULE_11__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TpoListeningQuestionDetailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-tpo-listening-question-detail", __WEBPACK_IMPORTED_MODULE_33__tpo_listening_question_detail_component__["a" /* TpoListeningQuestionDetailComponent */], View_TpoListeningQuestionDetailComponent_Host_0, { assignmentName: "assignmentName", classId: "classId", mode: "mode", groupContent: "groupContent", question: "question", lastAnswer: "lastAnswer", markingScore: "markingScore", shouldShowContent: "shouldShowContent", questionIndex: "questionIndex", questionListLength: "questionListLength", contentIndex: "contentIndex" }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpoListeningQuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pipes_convert09_to_az_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert09-to-az.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_assignments_Assignment__ = __webpack_require__("../../../../../src/app/models/assignments/Assignment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TpoListeningQuestionDetailComponent = /** @class */ (function (_super) {
    __extends(TpoListeningQuestionDetailComponent, _super);
    function TpoListeningQuestionDetailComponent(assignmentService, convert09ToAZ) {
        var _this = _super.call(this) || this;
        _this.assignmentService = assignmentService;
        _this.convert09ToAZ = convert09ToAZ;
        _this.previousQuestionId = '';
        _this.checkboxAnswers = [false, false, false, false];
        return _this;
    }
    TpoListeningQuestionDetailComponent.prototype.ngOnInit = function () {
    };
    TpoListeningQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        if (this.groupContent.length > 0) {
            this.recordUrl = JSON.parse(this.groupContent).recordUrl;
            this.passage = JSON.parse(this.groupContent).passage;
        }
        this.answer = this.lastAnswer;
        this.setupCheckboxAnswer();
        this.setupHeader();
        if (this.contentIndex == 0) {
            this.stopPlayRecord();
            this.previousQuestionId = '';
        }
        if (this.contentIndex != 0
            && this.question && this.question.id !== this.previousQuestionId) {
            this.previousQuestionId = this.question.id;
            this.tpoListeningQuestion = this.question;
            if (_super.prototype.homeworkMode.call(this)) {
                this.playRecord();
            }
        }
    };
    TpoListeningQuestionDetailComponent.prototype.ngOnDestroy = function () {
        this.stopPlayRecord();
    };
    TpoListeningQuestionDetailComponent.prototype.getQuestionForTableChoiceQuestion = function (question) {
        return JSON.parse(question).question || '';
    };
    TpoListeningQuestionDetailComponent.prototype.getRowsForTableChoiceQuestion = function (question) {
        return JSON.parse(question).tableRows || [];
    };
    TpoListeningQuestionDetailComponent.prototype.changeTableChoiceAnswer = function (value) {
        this.answer = value;
        this.changeAnswer();
    };
    TpoListeningQuestionDetailComponent.prototype.setupCheckboxAnswer = function () {
        if (this.question && this.question.questionType == this.assignmentService.getTpoListeningMultipleChoice()) {
            this.checkboxAnswers = [false, false, false, false];
            if (this.answer.includes('A')) {
                this.checkboxAnswers[0] = true;
            }
            if (this.answer.includes('B')) {
                this.checkboxAnswers[1] = true;
            }
            if (this.answer.includes('C')) {
                this.checkboxAnswers[2] = true;
            }
            if (this.answer.includes('D')) {
                this.checkboxAnswers[3] = true;
            }
        }
    };
    TpoListeningQuestionDetailComponent.prototype.changeCheckboxAnswer = function () {
        var _this = this;
        this.answer = this.checkboxAnswers.map(function (checked, index) {
            if (checked) {
                return _this.convert09ToAZ.transform(index);
            }
            else {
                return '';
            }
        }).reduce(function (answer, content) {
            return answer + content;
        });
        _super.prototype.changeAnswer.call(this);
    };
    TpoListeningQuestionDetailComponent.prototype.playRecord = function () {
        var _this = this;
        if (this.contentIndex == 0) {
            //如果正在播放题目的录音，应该暂停
            this.stopPlayRecord();
            //这个时候还在听文章，返回
            return;
        }
        if (this.tpoListeningQuestion && this.tpoListeningQuestion.recordUrl.length > 0) {
            this.stopPlayRecord();
            if (this.question.questionType !== this.assignmentService.getTpoListeningRepeatQuestion()) {
                this.myAudio = new Audio(this.tpoListeningQuestion.recordUrl);
                this.myAudio.play();
            }
            else {
                var repeatUrl = this.tpoListeningQuestion.recordUrl.replace("question", "repeat");
                this.myAudio = new Audio(repeatUrl);
                this.myAudio.play();
                this.myAudio.addEventListener('ended', function () {
                    _this.myAudio = new Audio(_this.tpoListeningQuestion.recordUrl);
                    _this.myAudio.play();
                });
            }
        }
    };
    TpoListeningQuestionDetailComponent.prototype.stopPlayRecord = function () {
        if (this.myAudio) {
            this.myAudio.pause();
        }
    };
    TpoListeningQuestionDetailComponent.prototype.setupHeader = function () {
        if (this.mode == __WEBPACK_IMPORTED_MODULE_4__models_assignments_Assignment__["b" /* Mode */].HomeWork) {
            this.showPreButton = false;
            if (!this.answer || this.answer.length == 0) {
                this.disableNextButton = true;
            }
            else {
                this.disableNextButton = false;
            }
        }
    };
    return TpoListeningQuestionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__["a" /* QuestionGroupDetailComponent */]));



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".question-content[_ngcontent-%COMP%]{\r\n    background-color: #efeff0;\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.question[_ngcontent-%COMP%]{\r\n    padding-left: 40px;\r\n    padding-top: 20px;\r\n    padding-right: 20px;\r\n    min-height: 100%;\r\n}\r\n\r\n.topic-question[_ngcontent-%COMP%]{\r\n    padding:20px 20px 40px 20px;\r\n    background-color: white;\r\n}\r\n\r\n.passage[_ngcontent-%COMP%]{\r\n    padding: 26px 40px 20px 20px;\r\n    background-color: white;\r\n    border-left: 1px solid dimgray;\r\n    overflow: scroll;\r\n}\r\n\r\np.selected-paragraph[_ngcontent-%COMP%]:before{\r\n    content:\"<span>slkdjf</span>\";\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]{\r\n    margin: 10px 0px 10px 0px;\r\n}\r\n\r\nmat-radio-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    white-space: normal;\r\n}\r\n\r\n.correct-answer[_ngcontent-%COMP%]{\r\n    color: #4caf50;\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.choice-item-container[_ngcontent-%COMP%]{\r\n    transform: none !important;\r\n    -webkit-transform: none !important;\r\n    width: 600px;\r\n    min-height: 80px;\r\n    margin-right: 20px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.choice-item[_ngcontent-%COMP%]{\r\n    border:1px solid lightgray;\r\n    background-color: white;\r\n    min-height: 80px;\r\n}\r\n.choice-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    margin: 0;\r\n    padding: 5px 0px 5px 10px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_TpoReadingQuestionDetailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_TpoReadingQuestionDetailComponent_0;
/* unused harmony export View_TpoReadingQuestionDetailComponent_Host_0 */
/* unused harmony export TpoReadingQuestionDetailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tpo_reading_question_detail_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_radio_typings_index_ngfactory__ = __webpack_require__("../../../material/radio/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert09-to-az.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_question_index_question_index_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_question_index_question_index_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_dnd_src_droppable_component__ = __webpack_require__("../../../../ng2-dnd/src/droppable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_dnd_src_dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_dnd_src_dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_dnd_src_draggable_component__ = __webpack_require__("../../../../ng2-dnd/src/draggable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_material_list_typings_index_ngfactory__ = __webpack_require__("../../../material/list/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_question_pager_question_pager_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_question_pager_question_pager_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-pager/question-pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__question_header_question_header_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__question_header_question_header_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tpo_reading_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 


























var styles_TpoReadingQuestionDetailComponent = [__WEBPACK_IMPORTED_MODULE_0__tpo_reading_question_detail_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_TpoReadingQuestionDetailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_TpoReadingQuestionDetailComponent, data: {} });

function View_TpoReadingQuestionDetailComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Look at the four squares [] that indicate where the following sentence could be added to the passage."]))], null, null); }
function View_TpoReadingQuestionDetailComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Where would the sentence best fit?"]))], null, null); }
function View_TpoReadingQuestionDetailComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](1, null, ["\n                                .", "\n                            "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_TpoReadingQuestionDetailComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "mat-radio-button", [["class", "mat-radio-button"], ["color", "accent"], ["name", "choices"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [1, "id", 0]], [[null, "focus"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_radio_typings_index_ngfactory__["b" /* View_MatRadioButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_radio_typings_index_ngfactory__["a" /* RenderType_MatRadioButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 4440064, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["a" /* MatRadioButton */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["b" /* MatRadioGroup */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */]], { color: [0, "color"], name: [1, "name"], value: [2, "value"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, 0, 5, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](5, null, ["", "\n                            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "accent"; var currVal_4 = "choices"; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 2, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_v.context.index)); _ck(_v, 1, 0, currVal_3, currVal_4, currVal_5); var currVal_7 = (_co.tpoReadingQuestion.questionType == "tpo_reading_single"); _ck(_v, 8, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).checked; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).disabled; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 5, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_v.context.index)); _ck(_v, 5, 0, currVal_6); }); }
function View_TpoReadingQuestionDetailComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 47, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "space-around"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 37, "div", [["class", "question"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 1, "app-question-index", [], null, null, null, __WEBPACK_IMPORTED_MODULE_9__common_question_index_question_index_component_ngfactory__["b" /* View_QuestionIndexComponent_0 */], __WEBPACK_IMPORTED_MODULE_9__common_question_index_question_index_component_ngfactory__["a" /* RenderType_QuestionIndexComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](10, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__common_question_index_question_index_component__["a" /* QuestionIndexComponent */], [], { content: [0, "content"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](12, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](20, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](21, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](22, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](25, 0, null, null, 12, "mat-radio-group", [["class", "mat-radio-group"], ["fxLayout", "column"], ["fxLayoutGap", "5px"], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.answer = $event) !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (_co.changeAnswer() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](26, 1064960, null, 1, __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["b" /* MatRadioGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], null, { change: "change" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 2, { _radios: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["b" /* MatRadioGroup */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["m" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_11__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](33, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_11__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](36, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](40, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](41, null, ["Paragraph ", " is marked with \u2666"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](44, 0, [[1, 0], ["passageContainer", 1]], null, 2, "div", [["class", "passage"], ["fxFlex", "1 1 50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](45, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](46, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "wrap"; _ck(_v, 2, 0, currVal_2); var currVal_3 = "space-around"; _ck(_v, 3, 0, currVal_3); var currVal_4 = "column"; _ck(_v, 6, 0, currVal_4); var currVal_5 = "1 1 50%"; _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.getPagerContent(); _ck(_v, 10, 0, currVal_6); var currVal_7 = (_co.tpoReadingQuestion.questionType == "tpo_reading_insert"); _ck(_v, 15, 0, currVal_7); var currVal_8 = (_co.tpoReadingQuestion.questionType == "tpo_reading_insert"); _ck(_v, 18, 0, currVal_8); var currVal_17 = "column"; _ck(_v, 28, 0, currVal_17); var currVal_18 = "5px"; _ck(_v, 29, 0, currVal_18); var currVal_19 = _co.answer; _ck(_v, 31, 0, currVal_19); var currVal_20 = _co.tpoReadingQuestion.options; _ck(_v, 36, 0, currVal_20); var currVal_22 = "1 1 50%"; _ck(_v, 45, 0, currVal_22); var currVal_23 = _co.passage; _ck(_v, 46, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.tpoReadingQuestion.question; _ck(_v, 22, 0, currVal_9); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassUntouched; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassTouched; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassPristine; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassDirty; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassValid; var currVal_15 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassInvalid; var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 33).ngClassPending; _ck(_v, 25, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_21 = _co.tpoReadingQuestion.paragraph; _ck(_v, 41, 0, currVal_21); }); }
function View_TpoReadingQuestionDetailComponent_9(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](1, null, ["\n                                ", ".", "\n                            "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], [])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_v.parent.context.$implicit)); var currVal_1 = _co.tpoReadingQuestion.options[_v.parent.context.$implicit]; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_TpoReadingQuestionDetailComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["class", "choice-item-container"], ["dnd-droppable", ""]], null, [[null, "onDropSuccess"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onDropSuccess" === en)) {
        var pd_0 = (_co.dropAnswer(_v.context.index, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13_ng2_dnd_src_droppable_component__["a" /* DroppableComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_14_ng2_dnd_src_dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_15_ng2_dnd_src_dnd_config__["a" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], null, { onDropSuccess: "onDropSuccess" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 6, "div", [["class", "choice-item"], ["fxLayout", "column"], ["fxLayoutAlign", "center"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeAnswer(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_9)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "center"; _ck(_v, 5, 0, currVal_1); var currVal_2 = (_v.context.$implicit >= 0); _ck(_v, 8, 0, currVal_2); }, null); }
function View_TpoReadingQuestionDetailComponent_11(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](1, null, ["", ".", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], [])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_v.parent.context.index)); var currVal_1 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_TpoReadingQuestionDetailComponent_10(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 11, "div", [["class", "choice-item-container"], ["dnd-draggable", ""], ["fxFlex", "1 1 47%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16_ng2_dnd_src_draggable_component__["a" /* DraggableComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_14_ng2_dnd_src_dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_15_ng2_dnd_src_dnd_config__["a" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], { draggable: [0, "draggable"], dragData: [1, "dragData"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 6, "div", [["class", "choice-item"], ["fxLayout", "column"], ["fxLayoutAlign", "center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_11)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "1 1 47%"; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.selectedAnswers.includes(_v.context.index); var currVal_2 = _v.context.index; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = "column"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "center"; _ck(_v, 6, 0, currVal_4); var currVal_5 = !_co.selectedAnswers.includes(_v.context.index); _ck(_v, 9, 0, currVal_5); }, null); }
function View_TpoReadingQuestionDetailComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 35, "div", [["class", "question-content"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 32, "div", [["class", "topic-question"], ["fxLayout", "column"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions:An introductory sentence for a brief summary of the passage is provided below.Complete the summary by selecting THREE answer choices that express the most important ideas in the passage.Some answer choices do not belong in summary because they express ideas that are not presented in the passage or are minor ideas in the passage.The Question is worth 2 points."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](13, 0, null, null, 6, "div", [["class", "selected-answer"], ["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_8)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](21, 0, null, null, 2, "h3", [["fxFlexAlign", "center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](22, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["d" /* FlexAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Answer Choices"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](25, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"], ["fxLayoutGap", "20px"], ["fxLayoutWrap", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](26, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_10)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "start"; _ck(_v, 4, 0, currVal_1); var currVal_3 = "column"; _ck(_v, 14, 0, currVal_3); var currVal_4 = "start center"; _ck(_v, 15, 0, currVal_4); var currVal_5 = _co.selectedAnswers; _ck(_v, 18, 0, currVal_5); var currVal_6 = "center"; _ck(_v, 22, 0, currVal_6); var currVal_7 = "row"; _ck(_v, 26, 0, currVal_7); var currVal_8 = ""; _ck(_v, 27, 0, currVal_8); var currVal_9 = "20px"; _ck(_v, 28, 0, currVal_9); var currVal_10 = "space-around"; _ck(_v, 29, 0, currVal_10); var currVal_11 = _co.tpoReadingQuestion.options; _ck(_v, 32, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tpoReadingQuestion.question; _ck(_v, 11, 0, currVal_2); }); }
function View_TpoReadingQuestionDetailComponent_12(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 7, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayoutAlign", "end"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, [[1, 0], ["passageContainer", 1]], null, 2, "div", [["class", "passage"], ["fxFlex", "1 1 50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "end"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "1 1 50%"; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.passage; _ck(_v, 6, 0, currVal_3); }, null); }
function View_TpoReadingQuestionDetailComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_12)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.tpoReadingQuestion.questionType == "tpo_reading_single") || (_co.tpoReadingQuestion.questionType == "tpo_reading_insert")); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.tpoReadingQuestion.questionType == "tpo_reading_topic") && (_co.viewMode == "question")); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_co.tpoReadingQuestion.questionType == "tpo_reading_topic") && (_co.viewMode == "text")); _ck(_v, 9, 0, currVal_2); }, null); }
function View_TpoReadingQuestionDetailComponent_15(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Look at the four squares [] that indicate where the following sentence could be added to the passage."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Where would the sentence best fit?"]))], null, null); }
function View_TpoReadingQuestionDetailComponent_17(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 5, "mat-list-item", [["class", "mat-list-item"], ["role", "listitem"]], null, [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_material_list_typings_index_ngfactory__["c" /* View_MatListItem_0 */], __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_material_list_typings_index_ngfactory__["b" /* RenderType_MatListItem */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 1097728, null, 2, __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["e" /* MatListItem */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["b" /* MatList */]], [2, __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["h" /* MatNavListCssMatStyler */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 3, { _lines: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](335544320, 4, { _hasAvatar: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](4, 2, ["\n                        ", ". ", "\n                    "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], [])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 4, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_v.context.index)); var currVal_1 = _v.context.$implicit; _ck(_v, 4, 0, currVal_0, currVal_1); }); }
function View_TpoReadingQuestionDetailComponent_16(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 6, "mat-list", [["class", "mat-list"], ["role", "list"]], null, null, null, __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_material_list_typings_index_ngfactory__["d" /* View_MatList_0 */], __WEBPACK_IMPORTED_MODULE_17__node_modules_angular_material_list_typings_index_ngfactory__["a" /* RenderType_MatList */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["b" /* MatList */], [], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_18__angular_material_list__["c" /* MatListCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, 0, 1, null, View_TpoReadingQuestionDetailComponent_17)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tpoReadingQuestion.options; _ck(_v, 5, 0, currVal_0); }, null); }
function View_TpoReadingQuestionDetailComponent_14(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 44, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "space-around"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](5, 0, null, null, 34, "div", [["class", "question"], ["fxFlex", "1 1 50%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 1, "app-question-pager", [], null, null, null, __WEBPACK_IMPORTED_MODULE_19__common_question_pager_question_pager_component_ngfactory__["b" /* View_QuestionPagerComponent_0 */], __WEBPACK_IMPORTED_MODULE_19__common_question_pager_question_pager_component_ngfactory__["a" /* RenderType_QuestionPagerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](10, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_20__common_question_pager_question_pager_component__["a" /* QuestionPagerComponent */], [__WEBPACK_IMPORTED_MODULE_21__ngrx_store__["l" /* Store */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](12, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_15)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](17, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](18, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](19, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_16)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](25, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](27, null, ["Paragraph ", " is marked with \u2666"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](29, 0, null, null, 9, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](31, 0, null, null, 3, "p", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](33, { "correct-answer": 0, "text-danger": 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](34, null, ["\u5B66\u751F\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](36, 0, null, null, 1, "p", [["class", "correct-answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](37, null, ["\u6B63\u786E\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](41, 0, [[1, 0], ["passageContainer", 1]], null, 2, "div", [["class", "passage"], ["fxFlex", "1 1 50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](42, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](43, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "wrap"; _ck(_v, 2, 0, currVal_2); var currVal_3 = "space-around"; _ck(_v, 3, 0, currVal_3); var currVal_4 = "column"; _ck(_v, 6, 0, currVal_4); var currVal_5 = "1 1 50%"; _ck(_v, 7, 0, currVal_5); _ck(_v, 10, 0); var currVal_6 = (_co.tpoReadingQuestion.questionType == "tpo_reading_insert"); _ck(_v, 15, 0, currVal_6); var currVal_8 = (_co.tpoReadingQuestion.questionType !== "tpo_reading_insert"); _ck(_v, 23, 0, currVal_8); var currVal_10 = _ck(_v, 33, 0, _co.correct(), !_co.correct()); _ck(_v, 32, 0, currVal_10); var currVal_13 = "1 1 50%"; _ck(_v, 42, 0, currVal_13); var currVal_14 = _co.passage; _ck(_v, 43, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.tpoReadingQuestion.question; _ck(_v, 19, 0, currVal_7); var currVal_9 = _co.tpoReadingQuestion.paragraph; _ck(_v, 27, 0, currVal_9); var currVal_11 = _co.answer; _ck(_v, 34, 0, currVal_11); var currVal_12 = _co.tpoReadingQuestion.answer; _ck(_v, 37, 0, currVal_12); }); }
function View_TpoReadingQuestionDetailComponent_19(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 12, "div", [["class", "choice-item-container"], ["dnd-draggable", ""], ["fxFlex", "1 1 47%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16_ng2_dnd_src_draggable_component__["a" /* DraggableComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_14_ng2_dnd_src_dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_15_ng2_dnd_src_dnd_config__["a" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], { draggable: [0, "draggable"], dragData: [1, "dragData"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 7, "div", [["class", "choice-item"], ["fxLayout", "column"], ["fxLayoutAlign", "center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["", ".", ""])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "1 1 47%"; _ck(_v, 1, 0, currVal_0); var currVal_1 = false; var currVal_2 = _v.context.index; _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = "column"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "center"; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 9, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 10).transform(_v.context.index)); var currVal_6 = _v.context.$implicit; _ck(_v, 9, 0, currVal_5, currVal_6); }); }
function View_TpoReadingQuestionDetailComponent_18(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 38, "div", [["class", "question-content"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 35, "div", [["class", "topic-question"], ["fxLayout", "column"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Directions:An introductory sentence for a brief summary of the passage is provided below.Complete the summary by selecting THREE answer choices that express the most important ideas in the passage.Some answer choices do not belong in summary because they express ideas that are not presented in the passage or are minor ideas in the passage.The Question is worth 2 points."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](13, 0, null, null, 2, "h3", [["fxFlexAlign", "center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["d" /* FlexAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["Answer Choices"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](17, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"], ["fxLayoutGap", "20px"], ["fxLayoutWrap", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](19, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](21, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_19)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](24, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](27, 0, null, null, 9, "div", [["class", "answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](29, 0, null, null, 3, "p", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](30, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](31, { "correct-answer": 0, "text-danger": 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](32, null, ["\u5B66\u751F\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](34, 0, null, null, 1, "p", [["class", "correct-answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](35, null, ["\u6B63\u786E\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "start"; _ck(_v, 4, 0, currVal_1); var currVal_3 = "center"; _ck(_v, 14, 0, currVal_3); var currVal_4 = "row"; _ck(_v, 18, 0, currVal_4); var currVal_5 = ""; _ck(_v, 19, 0, currVal_5); var currVal_6 = "20px"; _ck(_v, 20, 0, currVal_6); var currVal_7 = "space-around"; _ck(_v, 21, 0, currVal_7); var currVal_8 = _co.tpoReadingQuestion.options; _ck(_v, 24, 0, currVal_8); var currVal_9 = _ck(_v, 31, 0, _co.correct(), !_co.correct()); _ck(_v, 30, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.tpoReadingQuestion.question; _ck(_v, 11, 0, currVal_2); var currVal_10 = _co.answer; _ck(_v, 32, 0, currVal_10); var currVal_11 = _co.tpoReadingQuestion.answer; _ck(_v, 35, 0, currVal_11); }); }
function View_TpoReadingQuestionDetailComponent_20(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 7, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayoutAlign", "end"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, [[1, 0], ["passageContainer", 1]], null, 2, "div", [["class", "passage"], ["fxFlex", "1 1 50%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "end"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "1 1 50%"; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.passage; _ck(_v, 6, 0, currVal_3); }, null); }
function View_TpoReadingQuestionDetailComponent_13(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_14)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_18)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_20)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.tpoReadingQuestion.questionType == "tpo_reading_single") || (_co.tpoReadingQuestion.questionType == "tpo_reading_insert")); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_co.tpoReadingQuestion.questionType == "tpo_reading_topic") && (_co.viewMode == "question")); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_co.tpoReadingQuestion.questionType == "tpo_reading_topic") && (_co.viewMode == "text")); _ck(_v, 9, 0, currVal_2); }, null); }
function View_TpoReadingQuestionDetailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](671088640, 1, { passageContainer: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](1, 0, null, null, 1, "app-question-header", [], null, [[null, "next"], [null, "pre"], [null, "viewChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("next" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } if (("pre" === en)) {
        var pd_1 = (_co.pre() !== false);
        ad = (pd_1 && ad);
    } if (("viewChanged" === en)) {
        var pd_2 = (_co.changeView() !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_22__question_header_question_header_component_ngfactory__["b" /* View_QuestionHeaderComponent_0 */], __WEBPACK_IMPORTED_MODULE_22__question_header_question_header_component_ngfactory__["a" /* RenderType_QuestionHeaderComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_23__question_header_question_header_component__["a" /* QuestionHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_24__angular_router__["k" /* Router */]], { assignmentName: [0, "assignmentName"], mode: [1, "mode"], questionType: [2, "questionType"], classId: [3, "classId"], showPre: [4, "showPre"], showNext: [5, "showNext"], disableNext: [6, "disableNext"] }, { viewChanged: "viewChanged", next: "next", pre: "pre" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoReadingQuestionDetailComponent_13)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.assignmentName; var currVal_1 = _co.mode; var currVal_2 = _co.tpoReadingQuestion.questionType; var currVal_3 = _co.classId; var currVal_4 = _co.showPreButton; var currVal_5 = _co.showNextButton; var currVal_6 = _co.disableNextButton; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.homeworkMode(); _ck(_v, 7, 0, currVal_7); var currVal_8 = _co.reviewMode(); _ck(_v, 10, 0, currVal_8); }, null); }
function View_TpoReadingQuestionDetailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-tpo-reading-question-detail", [], null, null, null, View_TpoReadingQuestionDetailComponent_0, RenderType_TpoReadingQuestionDetailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 9027584, null, 0, __WEBPACK_IMPORTED_MODULE_25__tpo_reading_question_detail_component__["a" /* TpoReadingQuestionDetailComponent */], [__WEBPACK_IMPORTED_MODULE_6__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TpoReadingQuestionDetailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-tpo-reading-question-detail", __WEBPACK_IMPORTED_MODULE_25__tpo_reading_question_detail_component__["a" /* TpoReadingQuestionDetailComponent */], View_TpoReadingQuestionDetailComponent_Host_0, { assignmentName: "assignmentName", classId: "classId", mode: "mode", groupContent: "groupContent", question: "question", lastAnswer: "lastAnswer", markingScore: "markingScore", shouldShowContent: "shouldShowContent", questionIndex: "questionIndex", questionListLength: "questionListLength", viewMode: "viewMode" }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpoReadingQuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pipes_convert09_to_az_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert09-to-az.pipe.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TpoReadingQuestionDetailComponent = /** @class */ (function (_super) {
    __extends(TpoReadingQuestionDetailComponent, _super);
    function TpoReadingQuestionDetailComponent(convert09ToAZ) {
        var _this = _super.call(this) || this;
        _this.convert09ToAZ = convert09ToAZ;
        _this.passage = '';
        _this.viewMode = 'question';
        _this.selectedAnswers = [-1, -1, -1];
        return _this;
    }
    TpoReadingQuestionDetailComponent.prototype.ngOnInit = function () {
    };
    TpoReadingQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        this.answer = this.lastAnswer;
        if (this.question.questionType == 'tpo_reading_topic') {
            if (this.answer.length != 3) {
                this.answer = '   ';
            }
            this.selectedAnswers = this.parseAnswerForTopicQuestion(this.answer);
        }
        if (this.groupContent.length > 0) {
            this.passage = JSON.parse(this.groupContent).passage;
        }
        this.tpoReadingQuestion = this.question;
    };
    TpoReadingQuestionDetailComponent.prototype.ngAfterViewChecked = function () {
        if (this.tpoReadingQuestion.id == this.scrollQuestionId) {
            return;
        }
        this.scroll();
        this.scrollQuestionId = this.tpoReadingQuestion.id;
    };
    TpoReadingQuestionDetailComponent.prototype.scroll = function () {
        if (!this.passageContainer) {
            return;
        }
        var paragraphNum = 0;
        var scrollTop = 0;
        for (var _i = 0, _a = this.passageContainer.nativeElement.children; _i < _a.length; _i++) {
            var e = _a[_i];
            while (e.childNodes[0].className == 'star') {
                e.removeChild(e.childNodes[0]);
            }
        }
        for (var _b = 0, _c = this.passageContainer.nativeElement.children; _b < _c.length; _b++) {
            var e = _c[_b];
            if (e.innerText.length > 1) {
                if (paragraphNum >= this.tpoReadingQuestion.paragraph) {
                    var newItem = document.createElement("span");
                    var textnode = document.createTextNode("♦ ");
                    newItem.style.fontSize = '19px';
                    newItem.className = 'star';
                    newItem.appendChild(textnode);
                    if (e.childNodes[0].className != 'star') {
                        e.insertBefore(newItem, e.childNodes[0]);
                    }
                    break;
                }
                paragraphNum++;
            }
            scrollTop += e.offsetHeight
                + parseInt(getComputedStyle(e).marginTop) + parseInt(getComputedStyle(e).marginBottom);
        }
        if (this.tpoReadingQuestion.paragraph == 1) {
            this.passageContainer.nativeElement.scrollTop = 0;
        }
        else {
            this.passageContainer.nativeElement.scrollTop = scrollTop - 10;
        }
    };
    TpoReadingQuestionDetailComponent.prototype.changeView = function () {
        if (this.viewMode == 'question') {
            this.viewMode = 'text';
        }
        else {
            this.viewMode = 'question';
        }
    };
    TpoReadingQuestionDetailComponent.prototype.dropAnswer = function (indexToReplace, data) {
        var indexToSelect = data.dragData;
        this.selectedAnswers[indexToReplace] = indexToSelect;
        this.answer = this.getAnswerForTopicQuestion();
        _super.prototype.changeAnswer.call(this);
    };
    TpoReadingQuestionDetailComponent.prototype.removeAnswer = function (indexToRemove) {
        this.selectedAnswers[indexToRemove] = -1;
        this.answer = this.getAnswerForTopicQuestion();
        _super.prototype.changeAnswer.call(this);
    };
    TpoReadingQuestionDetailComponent.prototype.getAnswerForTopicQuestion = function () {
        var _this = this;
        return this.selectedAnswers
            .map(function (answerIndex) {
            if (answerIndex < 0) {
                return ' ';
            }
            else {
                return _this.convert09ToAZ.transform(answerIndex);
            }
        })
            .reduce(function (preValue, currentValue) {
            return preValue + currentValue;
        });
    };
    TpoReadingQuestionDetailComponent.prototype.parseAnswerForTopicQuestion = function (answer) {
        var answers;
        answers = answer.split('').map(function (value) {
            if (value == ' ') {
                return -1;
            }
            else if (value == 'A') {
                return 0;
            }
            else if (value == 'B') {
                return 1;
            }
            else if (value == 'C') {
                return 2;
            }
            else if (value == 'D') {
                return 3;
            }
            else if (value == 'E') {
                return 4;
            }
            else if (value == 'F') {
                return 5;
            }
        });
        return answers;
    };
    return TpoReadingQuestionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__["a" /* QuestionGroupDetailComponent */]));



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 90px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n\r\n.question-content[_ngcontent-%COMP%]{\r\n    padding: 24px 30px 24px 30px;\r\n    min-height: 100%;\r\n}\r\n\r\napp-question-index[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.question[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    font-size: 18px;\r\n    line-height: 28px;\r\n    padding-bottom: 5px;\r\n    margin:15px 0px 10px 0px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.question-detail[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.passage[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-height: 250px;\r\n    padding: 0 10px 0 10px;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n    margin:10px 0px 10px 0px;\r\n}\r\n\r\napp-audio-player[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    margin-top: 50px;\r\n}\r\nmat-expansion-panel[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px !important;\r\n    border:1px solid lightgray;\r\n}\r\n\r\nmat-expansion-panel[_ngcontent-%COMP%]   .passage[_ngcontent-%COMP%]{\r\n    margin:0 0px 0 0;\r\n    min-height: 200px;\r\n}\r\n\r\n.question-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n    padding: 15px 24px 15px 24px;\r\n}\r\n\r\n.question-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n\r\nmat-card.mat-card[_ngcontent-%COMP%]{\r\n    padding: 8px 15px 8px 15px;\r\n}\r\n\r\napp-tpo-review-player[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n}\r\n\r\napp-score-marker[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border:1px solid lightgray;\r\n    min-height: 200px;\r\n    padding: 0 10px 0 10px;\r\n}\r\n\r\n.homework-mode[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    border:none;\r\n}\r\n\r\napp-count-down-timer[_ngcontent-%COMP%]{\r\n    width: 722px;\r\n}\r\n\r\n.homework-mode[_ngcontent-%COMP%]   .passage[_ngcontent-%COMP%]{\r\n    width: 700px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_TpoSpeakingQuestionDetailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_TpoSpeakingQuestionDetailComponent_0;
/* unused harmony export View_TpoSpeakingQuestionDetailComponent_Host_0 */
/* unused harmony export TpoSpeakingQuestionDetailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tpo_speaking_question_detail_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_question_index_question_index_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-index/question-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_background_audio_player_background_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_background_audio_player_background_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_view_recorder_tpo_speaking_recorder_tpo_speaking_recorder_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_view_recorder_tpo_speaking_recorder_tpo_speaking_recorder_component__ = __webpack_require__("../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_view_count_down_timer_count_down_timer_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_view_count_down_timer_count_down_timer_component__ = __webpack_require__("../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/view/view.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_view_audio_audio_player_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_view_audio_audio_player_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__ = __webpack_require__("../../../material/expansion/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/tpo-review-player/tpo-review-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_view_audio_tpo_review_player_tpo_review_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/tpo-review-player/tpo-review-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/simple-audio-player/simple-audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_view_audio_simple_audio_player_simple_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/simple-audio-player/simple-audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__node_modules_angular_material_card_typings_index_ngfactory__ = __webpack_require__("../../../material/card/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__common_question_marker_score_marker_score_marker_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_question_marker_score_marker_score_marker_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/common/question-marker/score-marker/score-marker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_froala_wysiwyg_editor_editor_directive__ = __webpack_require__("../../../../angular2-froala-wysiwyg/editor/editor.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__question_header_question_header_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__question_header_question_header_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__tpo_speaking_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



































var styles_TpoSpeakingQuestionDetailComponent = [__WEBPACK_IMPORTED_MODULE_0__tpo_speaking_question_detail_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_TpoSpeakingQuestionDetailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_TpoSpeakingQuestionDetailComponent, data: {} });

function View_TpoSpeakingQuestionDetailComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 14, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "app-question-index", [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["b" /* View_QuestionIndexComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["a" /* RenderType_QuestionIndexComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__common_question_index_question_index_component__["a" /* QuestionIndexComponent */], [], { content: [0, "content"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 0, "img", [["class", "profile"], ["src", "/assets/tpo/speaking/profile.jpg"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u64AD\u653E\u9898\u578B\u4ECB\u7ECD"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](12, 0, null, null, 1, "app-background-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.completeDirection() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_background_audio_player_background_audio_player_component_ngfactory__["b" /* View_BackgroundAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_background_audio_player_background_audio_player_component_ngfactory__["a" /* RenderType_BackgroundAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](13, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_background_audio_player_background_audio_player_component__["a" /* BackgroundAudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.getPagerContent(); _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.tpoSpeakingQuestion.getQuestionDirectionRecordUrl(); _ck(_v, 13, 0, currVal_3); }, null); }
function View_TpoSpeakingQuestionDetailComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 19, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 14, "div", [["class", "question-container"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "app-question-index", [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["b" /* View_QuestionIndexComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["a" /* RenderType_QuestionIndexComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__common_question_index_question_index_component__["a" /* QuestionIndexComponent */], [], { content: [0, "content"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 1, "p", [["class", "question"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](11, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](13, 0, null, null, 1, "app-background-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.completeQuestion() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_background_audio_player_background_audio_player_component_ngfactory__["b" /* View_BackgroundAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__shared_view_audio_background_audio_player_background_audio_player_component_ngfactory__["a" /* RenderType_BackgroundAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_background_audio_player_background_audio_player_component__["a" /* BackgroundAudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 1, "app-tpo-speaking-recorder", [], null, [[null, "uploaded"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("uploaded" === en)) {
        var pd_0 = (_co.completeRecording($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_7__shared_view_recorder_tpo_speaking_recorder_tpo_speaking_recorder_component_ngfactory__["b" /* View_TpoSpeakingRecorderComponent_0 */], __WEBPACK_IMPORTED_MODULE_7__shared_view_recorder_tpo_speaking_recorder_tpo_speaking_recorder_component_ngfactory__["a" /* RenderType_TpoSpeakingRecorderComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_8__shared_view_recorder_tpo_speaking_recorder_tpo_speaking_recorder_component__["a" /* TpoSpeakingRecorderComponent */], [__WEBPACK_IMPORTED_MODULE_9__core_services_assignment_service__["a" /* AssignmentService */]], { start: [0, "start"], prepareTime: [1, "prepareTime"], responseTime: [2, "responseTime"] }, { uploaded: "uploaded" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "column"; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.getPagerContent(); _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.tpoSpeakingQuestion.getQuestionRecordUrl(); _ck(_v, 14, 0, currVal_5); var currVal_6 = _co.questionComplete; var currVal_7 = _co.getPrepareTime(); var currVal_8 = _co.getResponseTime(); _ck(_v, 17, 0, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.tpoSpeakingQuestion.question; _ck(_v, 11, 0, currVal_4); }); }
function View_TpoSpeakingQuestionDetailComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 2, "app-count-down-timer", [["fxFlexAlign", "center"]], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.completePassage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__shared_view_count_down_timer_count_down_timer_component_ngfactory__["b" /* View_CountDownTimerComponent_0 */], __WEBPACK_IMPORTED_MODULE_10__shared_view_count_down_timer_count_down_timer_component_ngfactory__["a" /* RenderType_CountDownTimerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["d" /* FlexAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__shared_view_count_down_timer_count_down_timer_component__["a" /* CountDownTimerComponent */], [], { time: [0, "time"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "div", [["class", "passage"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "center center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "center"; _ck(_v, 5, 0, currVal_2); var currVal_3 = 45; _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.tpoSpeakingQuestion.passage; _ck(_v, 9, 0, currVal_4); }, null); }
function View_TpoSpeakingQuestionDetailComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 6, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "app-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.completeDialog() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_13__shared_view_audio_audio_player_audio_player_component_ngfactory__["b" /* View_AudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_13__shared_view_audio_audio_player_audio_player_component_ngfactory__["a" /* RenderType_AudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_14__shared_view_audio_audio_player_audio_player_component__["a" /* AudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "center center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.tpoSpeakingQuestion.getDialogRecordUrl(); _ck(_v, 5, 0, currVal_2); }, null); }
function View_TpoSpeakingQuestionDetailComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 6, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "app-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.completeDialog() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_13__shared_view_audio_audio_player_audio_player_component_ngfactory__["b" /* View_AudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_13__shared_view_audio_audio_player_audio_player_component_ngfactory__["a" /* RenderType_AudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_14__shared_view_audio_audio_player_audio_player_component__["a" /* AudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "center center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.tpoSpeakingQuestion.getDialogRecordUrl(); _ck(_v, 5, 0, currVal_2); }, null); }
function View_TpoSpeakingQuestionDetailComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 16, "div", [["class", "homework-mode"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.directionComplete; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.shouldShowQuestion(); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((((_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q3q4_type") && _co.directionComplete) && !_co.passageComplete) && !_co.dialogComplete); _ck(_v, 9, 0, currVal_2); var currVal_3 = ((((_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q3q4_type") && _co.directionComplete) && _co.passageComplete) && !_co.dialogComplete); _ck(_v, 12, 0, currVal_3); var currVal_4 = (((_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q5q6_type") && _co.directionComplete) && !_co.dialogComplete); _ck(_v, 15, 0, currVal_4); }, null); }
function View_TpoSpeakingQuestionDetailComponent_9(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "passage"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tpoSpeakingQuestion.passage; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TpoSpeakingQuestionDetailComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 28, "mat-expansion-panel", [["class", "mat-elevation-z0 question-detail mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_17__angular_material_core__["E" /* mixinDisabled */], null, [__WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["c" /* MatExpansionPanel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["c" /* MatExpansionPanel */], [[8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */]], { expanded: [0, "expanded"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, 0, 5, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keyup"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._keyup($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["e" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](6, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](7, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, 2, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u9898\u76EE\u8BE6\u60C5"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, 1, 16, "div", [["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_9)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](17, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](19, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](21, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u5BF9\u8BDD\u5F55\u97F3\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](24, 0, null, null, 1, "app-tpo-review-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__["b" /* View_TpoReviewPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__["a" /* RenderType_TpoReviewPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_22__shared_view_audio_tpo_review_player_tpo_review_player_component__["a" /* TpoReviewPlayerComponent */], [], { src: [0, "src"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = false; _ck(_v, 2, 0, currVal_2); var currVal_9 = "column"; _ck(_v, 12, 0, currVal_9); var currVal_10 = (_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q3q4_type"); _ck(_v, 15, 0, currVal_10); var currVal_11 = "row"; _ck(_v, 18, 0, currVal_11); var currVal_12 = "start center"; _ck(_v, 19, 0, currVal_12); var currVal_13 = _co.tpoSpeakingQuestion.getDialogRecordUrl(); _ck(_v, 25, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).expanded; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2)._hasSpacing(); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).panel.disabled ? (0 - 1) : 0); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._getPanelId(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._isExpanded(); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).panel.disabled; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._isExpanded(); var currVal_8 = _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._getExpandedState(), _ck(_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).expandedHeight)); _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_TpoSpeakingQuestionDetailComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 62, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 59, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 2, "app-question-index", [["fxFlexAlign", "start"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["b" /* View_QuestionIndexComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["a" /* RenderType_QuestionIndexComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["d" /* FlexAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__common_question_index_question_index_component__["a" /* QuestionIndexComponent */], [], { content: [0, "content"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_8)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](14, 0, null, null, 46, "div", [["class", "question-container"], ["fxLayout", "column"], ["fxLayoutAlign.sm", "start start"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { alignSm: [0, "alignSm"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](19, 0, null, null, 1, "p", [["class", "question"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](20, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](22, 0, null, null, 27, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](24, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](27, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u5B66\u751F\u7684\u56DE\u7B54\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](30, 0, null, null, 1, "app-simple-audio-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_23__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["b" /* View_SimpleAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_23__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["a" /* RenderType_SimpleAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_24__shared_view_audio_simple_audio_player_simple_audio_player_component__["a" /* SimpleAudioPlayerComponent */], [], { src: [0, "src"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](33, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](34, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](36, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_25__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_25__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](37, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_26__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_26__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](42, 0, null, null, 1, "label", [["class", "grade"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](43, null, ["\u5206\u6570:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](47, 0, null, null, 1, "app-score-marker", [], null, [[null, "marking"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("marking" === en)) {
        var pd_0 = (_co.markScore($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_27__common_question_marker_score_marker_score_marker_component_ngfactory__["b" /* View_ScoreMarkerComponent_0 */], __WEBPACK_IMPORTED_MODULE_27__common_question_marker_score_marker_score_marker_component_ngfactory__["a" /* RenderType_ScoreMarkerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](48, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_28__common_question_marker_score_marker_score_marker_component__["a" /* ScoreMarkerComponent */], [], { score: [0, "score"] }, { marking: "marking" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](51, 0, null, null, 8, "textarea", [["class", "froala-editor"], ["required", ""], ["rows", "10"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "froalaModelChange"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 52)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("froalaModelChange" === en)) {
        var pd_4 = ((_co.comment = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.comment = $event) !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = (_co.makeComment() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](52, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](53, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["n" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["g" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_29__angular_forms__["n" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](55, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_30_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaEditor: [0, "froalaEditor"], froalaModel: [1, "froalaModel"] }, { froalaModelChange: "froalaModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [__WEBPACK_IMPORTED_MODULE_29__angular_forms__["d" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_30_angular2_froala_wysiwyg_editor_editor_directive__["a" /* FroalaEditorDirective */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](57, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["m" /* NgModel */], [[8, null], [2, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["g" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_29__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](59, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_29__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_29__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "10px"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "start center"; _ck(_v, 5, 0, currVal_2); var currVal_3 = "start"; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.getPagerContent(); _ck(_v, 9, 0, currVal_4); var currVal_5 = ((_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q3q4_type") || (_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q5q6_type")); _ck(_v, 12, 0, currVal_5); var currVal_6 = "column"; _ck(_v, 15, 0, currVal_6); var currVal_7 = "5px"; _ck(_v, 16, 0, currVal_7); var currVal_8 = "start start"; _ck(_v, 17, 0, currVal_8); var currVal_10 = "row"; _ck(_v, 23, 0, currVal_10); var currVal_11 = "5px"; _ck(_v, 24, 0, currVal_11); var currVal_12 = "start center"; _ck(_v, 25, 0, currVal_12); var currVal_13 = _co.getStudentRecordUrl(); _ck(_v, 31, 0, currVal_13); var currVal_14 = ""; _ck(_v, 34, 0, currVal_14); var currVal_16 = _co.tpoSpeakingQuestion.score; _ck(_v, 48, 0, currVal_16); var currVal_25 = ""; _ck(_v, 53, 0, currVal_25); var currVal_26 = _co.editorOption; var currVal_27 = _co.comment; _ck(_v, 55, 0, currVal_26, currVal_27); var currVal_28 = _co.comment; _ck(_v, 57, 0, currVal_28); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.tpoSpeakingQuestion.question; _ck(_v, 20, 0, currVal_9); var currVal_15 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 43, 0, currVal_15); var currVal_17 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 53).required ? "" : null); var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassUntouched; var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassTouched; var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassPristine; var currVal_21 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassDirty; var currVal_22 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassValid; var currVal_23 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassInvalid; var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 59).ngClassPending; _ck(_v, 51, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); }); }
function View_TpoSpeakingQuestionDetailComponent_12(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "passage"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tpoSpeakingQuestion.passage; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TpoSpeakingQuestionDetailComponent_11(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 28, "mat-expansion-panel", [["class", "mat-elevation-z0 question-detail mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "mat-expansion-panel-spacing", null]], null, null, __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["d" /* View_MatExpansionPanel_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["a" /* RenderType_MatExpansionPanel */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_17__angular_material_core__["E" /* mixinDisabled */], null, [__WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["c" /* MatExpansionPanel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["c" /* MatExpansionPanel */], [[8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_19__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */]], { expanded: [0, "expanded"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, 0, 5, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header"], ["role", "button"]], [[1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keyup"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keyup" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._keyup($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["c" /* View_MatExpansionPanelHeader_0 */], __WEBPACK_IMPORTED_MODULE_16__node_modules_angular_material_expansion_typings_index_ngfactory__["b" /* RenderType_MatExpansionPanelHeader */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["e" /* MatExpansionPanelHeader */], [__WEBPACK_IMPORTED_MODULE_18__angular_material_expansion__["c" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_20__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](6, { collapsedHeight: 0, expandedHeight: 1 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](7, { value: 0, params: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, 2, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u9898\u76EE\u8BE6\u60C5"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, 1, 16, "div", [["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_12)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](17, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](18, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](19, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](21, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u5BF9\u8BDD\u5F55\u97F3\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](24, 0, null, null, 1, "app-tpo-review-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__["b" /* View_TpoReviewPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_21__shared_view_audio_tpo_review_player_tpo_review_player_component_ngfactory__["a" /* RenderType_TpoReviewPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_22__shared_view_audio_tpo_review_player_tpo_review_player_component__["a" /* TpoReviewPlayerComponent */], [], { src: [0, "src"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 1, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = false; _ck(_v, 2, 0, currVal_2); var currVal_9 = "column"; _ck(_v, 12, 0, currVal_9); var currVal_10 = (_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q3q4_type"); _ck(_v, 15, 0, currVal_10); var currVal_11 = "row"; _ck(_v, 18, 0, currVal_11); var currVal_12 = "start center"; _ck(_v, 19, 0, currVal_12); var currVal_13 = _co.tpoSpeakingQuestion.getDialogRecordUrl(); _ck(_v, 25, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).expanded; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2)._hasSpacing(); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).panel.disabled ? (0 - 1) : 0); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._getPanelId(); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._isExpanded(); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).panel.disabled; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._isExpanded(); var currVal_8 = _ck(_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5)._getExpandedState(), _ck(_v, 6, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).collapsedHeight, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).expandedHeight)); _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_TpoSpeakingQuestionDetailComponent_10(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 52, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 49, "div", [["class", "question-content"], ["fxLayout", "column"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 2, "app-question-index", [["fxFlexAlign", "start"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["b" /* View_QuestionIndexComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__common_question_index_question_index_component_ngfactory__["a" /* RenderType_QuestionIndexComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["d" /* FlexAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__common_question_index_question_index_component__["a" /* QuestionIndexComponent */], [], { content: [0, "content"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_11)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](14, 0, null, null, 36, "div", [["class", "question-container"], ["fxLayout", "column"], ["fxLayoutAlign.sm", "start start"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](15, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](16, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { alignSm: [0, "alignSm"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](19, 0, null, null, 1, "p", [["class", "question"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](20, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](22, 0, null, null, 21, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](24, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](27, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u5B66\u751F\u7684\u56DE\u7B54\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](30, 0, null, null, 1, "app-simple-audio-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_23__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["b" /* View_SimpleAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_23__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["a" /* RenderType_SimpleAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](31, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_24__shared_view_audio_simple_audio_player_simple_audio_player_component__["a" /* SimpleAudioPlayerComponent */], [], { src: [0, "src"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](33, 0, null, null, 9, "mat-card", [["class", "mat-card"]], null, null, null, __WEBPACK_IMPORTED_MODULE_25__node_modules_angular_material_card_typings_index_ngfactory__["b" /* View_MatCard_0 */], __WEBPACK_IMPORTED_MODULE_25__node_modules_angular_material_card_typings_index_ngfactory__["a" /* RenderType_MatCard */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](34, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_26__angular_material_card__["a" /* MatCard */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](36, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](37, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_26__angular_material_card__["c" /* MatCardContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](39, 0, null, null, 1, "label", [["class", "grade"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](40, null, ["\u5206\u6570:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](45, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u8001\u5E08\u8BC4\u4EF7\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](48, 0, null, null, 1, "div", [["class", "comment"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](49, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_12_angular2_froala_wysiwyg_view_view_directive__["a" /* FroalaViewDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */]], { froalaView: [0, "froalaView"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "10px"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "start center"; _ck(_v, 5, 0, currVal_2); var currVal_3 = "start"; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.getPagerContent(); _ck(_v, 9, 0, currVal_4); var currVal_5 = ((_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q3q4_type") || (_co.tpoSpeakingQuestion.questionType == "tpo_speaking_q5q6_type")); _ck(_v, 12, 0, currVal_5); var currVal_6 = "column"; _ck(_v, 15, 0, currVal_6); var currVal_7 = "5px"; _ck(_v, 16, 0, currVal_7); var currVal_8 = "start start"; _ck(_v, 17, 0, currVal_8); var currVal_10 = "row"; _ck(_v, 23, 0, currVal_10); var currVal_11 = "5px"; _ck(_v, 24, 0, currVal_11); var currVal_12 = "start center"; _ck(_v, 25, 0, currVal_12); var currVal_13 = _co.getStudentRecordUrl(); _ck(_v, 31, 0, currVal_13); var currVal_15 = _co.comment; _ck(_v, 49, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.tpoSpeakingQuestion.question; _ck(_v, 20, 0, currVal_9); var currVal_14 = ((_co.markingScore >= 0) ? _co.markingScore : 0); _ck(_v, 40, 0, currVal_14); }); }
function View_TpoSpeakingQuestionDetailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-header", [], null, [[null, "next"], [null, "pre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("next" === en)) {
        var pd_0 = (_co.next() !== false);
        ad = (pd_0 && ad);
    } if (("pre" === en)) {
        var pd_1 = (_co.pre() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_31__question_header_question_header_component_ngfactory__["b" /* View_QuestionHeaderComponent_0 */], __WEBPACK_IMPORTED_MODULE_31__question_header_question_header_component_ngfactory__["a" /* RenderType_QuestionHeaderComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_32__question_header_question_header_component__["a" /* QuestionHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_33__angular_router__["k" /* Router */]], { assignmentName: [0, "assignmentName"], mode: [1, "mode"], classId: [2, "classId"], showPre: [3, "showPre"], showNext: [4, "showNext"], disableNext: [5, "disableNext"] }, { next: "next", pre: "pre" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingQuestionDetailComponent_10)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.assignmentName; var currVal_1 = _co.mode; var currVal_2 = _co.classId; var currVal_3 = _co.showPreButton; var currVal_4 = _co.showNextButton; var currVal_5 = _co.disableNextButton; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.homeworkMode(); _ck(_v, 6, 0, currVal_6); var currVal_7 = _co.markingMode(); _ck(_v, 9, 0, currVal_7); var currVal_8 = _co.reviewMode(); _ck(_v, 12, 0, currVal_8); }, null); }
function View_TpoSpeakingQuestionDetailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-tpo-speaking-question-detail", [], null, null, null, View_TpoSpeakingQuestionDetailComponent_0, RenderType_TpoSpeakingQuestionDetailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_34__tpo_speaking_question_detail_component__["a" /* TpoSpeakingQuestionDetailComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TpoSpeakingQuestionDetailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-tpo-speaking-question-detail", __WEBPACK_IMPORTED_MODULE_34__tpo_speaking_question_detail_component__["a" /* TpoSpeakingQuestionDetailComponent */], View_TpoSpeakingQuestionDetailComponent_Host_0, { assignmentName: "assignmentName", classId: "classId", mode: "mode", groupContent: "groupContent", question: "question", lastAnswer: "lastAnswer", markingScore: "markingScore", shouldShowContent: "shouldShowContent", questionIndex: "questionIndex", questionListLength: "questionListLength" }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpoSpeakingQuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__ = __webpack_require__("../../../../../src/app/models/assignments/Assignment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TpoSpeakingQuestionDetailComponent = /** @class */ (function (_super) {
    __extends(TpoSpeakingQuestionDetailComponent, _super);
    function TpoSpeakingQuestionDetailComponent() {
        return _super.call(this) || this;
    }
    TpoSpeakingQuestionDetailComponent.prototype.ngOnInit = function () {
        this.editorOption = Object.create(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].teacherEditorOptions);
        this.editorOption.placeholderText = '请写出评价';
        this.editorOption.height = 200;
    };
    TpoSpeakingQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        if (JSON.stringify(this.tpoSpeakingQuestion) == JSON.stringify(this.question)) {
            //不应该refresh
            return;
        }
        this.tpoSpeakingQuestion = this.question;
        this.directionComplete = false;
        this.passageComplete = false;
        this.dialogComplete = false;
        this.questionComplete = false;
        this.comment = this.getComment();
        this.setupHeader();
    };
    TpoSpeakingQuestionDetailComponent.prototype.setupHeader = function () {
        if (this.mode == __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__["b" /* Mode */].HomeWork) {
            this.showPreButton = false;
            if (!this.directionComplete) {
                this.showNextButton = true;
            }
            else {
                this.showNextButton = false;
            }
        }
    };
    TpoSpeakingQuestionDetailComponent.prototype.next = function () {
        if (this.mode == __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__["b" /* Mode */].HomeWork && !this.directionComplete) {
            this.completeDirection();
        }
        else {
            _super.prototype.next.call(this);
        }
    };
    TpoSpeakingQuestionDetailComponent.prototype.completeDirection = function () {
        this.directionComplete = true;
        this.setupHeader();
    };
    TpoSpeakingQuestionDetailComponent.prototype.completeQuestion = function () {
        this.questionComplete = true;
        this.setupHeader();
    };
    TpoSpeakingQuestionDetailComponent.prototype.completePassage = function () {
        this.passageComplete = true;
        this.setupHeader();
    };
    TpoSpeakingQuestionDetailComponent.prototype.completeDialog = function () {
        this.dialogComplete = true;
        this.setupHeader();
    };
    TpoSpeakingQuestionDetailComponent.prototype.completeRecording = function (filename) {
        this.answer = JSON.stringify({
            'filename': filename
        });
        this.changeAnswer();
        _super.prototype.next.call(this);
    };
    //老师的评价
    TpoSpeakingQuestionDetailComponent.prototype.makeComment = function () {
        this.answer = JSON.stringify({
            'filename': (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).filename) || "",
            'comment': this.comment
        });
        this.changeAnswer();
    };
    TpoSpeakingQuestionDetailComponent.prototype.shouldShowQuestion = function () {
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q1q2_type') {
            return this.directionComplete;
        }
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q3q4_type') {
            return this.directionComplete && this.passageComplete && this.dialogComplete;
        }
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q5q6_type') {
            return this.directionComplete && this.dialogComplete;
        }
    };
    TpoSpeakingQuestionDetailComponent.prototype.getPrepareTime = function () {
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q1q2_type') {
            return 15;
        }
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q3q4_type') {
            return 30;
        }
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q5q6_type') {
            return 20;
        }
    };
    TpoSpeakingQuestionDetailComponent.prototype.getResponseTime = function () {
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q1q2_type') {
            return 45;
        }
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q3q4_type') {
            return 60;
        }
        if (this.tpoSpeakingQuestion.questionType == 'tpo_speaking_q5q6_type') {
            return 60;
        }
    };
    TpoSpeakingQuestionDetailComponent.prototype.getStudentRecordUrl = function () {
        if (!this.lastAnswer || this.lastAnswer.length == 0) {
            return '';
        }
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].studentRecordUrl +
            (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).filename || '');
    };
    TpoSpeakingQuestionDetailComponent.prototype.getComment = function () {
        if (!this.lastAnswer || this.lastAnswer.length == 0) {
            return '';
        }
        return (JSON.parse(this.lastAnswer) && JSON.parse(this.lastAnswer).comment || '');
    };
    return TpoSpeakingQuestionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__["a" /* QuestionGroupDetailComponent */]));



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".question-content[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    min-height: 350px;\r\n    padding:10px 20px 10px 20px;\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);;\r\n}\r\n\r\n.correct-answer[_ngcontent-%COMP%]{\r\n    color: #4caf50;\r\n}\r\n\r\n.wrong-answer[_ngcontent-%COMP%]{\r\n    color: #f44336;\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_VocabularyQuestionDetailComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_VocabularyQuestionDetailComponent_0;
/* unused harmony export View_VocabularyQuestionDetailComponent_Host_0 */
/* unused harmony export VocabularyQuestionDetailComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vocabulary_question_detail_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_view_vocabulary_vocabulary_list_vocabulary_list_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/vocabulary/vocabulary-list/vocabulary-list.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_view_vocabulary_vocabulary_list_vocabulary_list_component__ = __webpack_require__("../../../../../src/app/shared/view/vocabulary/vocabulary-list/vocabulary-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/simple-audio-player/simple-audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_view_audio_simple_audio_player_simple_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/simple-audio-player/simple-audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_pipes_pronunciation_of_word_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/pronunciation-of-word.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vocabulary_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 











var styles_VocabularyQuestionDetailComponent = [__WEBPACK_IMPORTED_MODULE_0__vocabulary_question_detail_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_VocabularyQuestionDetailComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_VocabularyQuestionDetailComponent, data: {} });

function View_VocabularyQuestionDetailComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](2, 0, null, null, 7, "fieldset", [["class", "word-list"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 1, "legend", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u80CC\u8BF5\u4E0B\u5217\u5355\u8BCD\uFF1A"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 1, "app-vocabulary-list", [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__shared_view_vocabulary_vocabulary_list_vocabulary_list_component_ngfactory__["b" /* View_VocabularyListComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__shared_view_vocabulary_vocabulary_list_vocabulary_list_component_ngfactory__["a" /* RenderType_VocabularyListComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__shared_view_vocabulary_vocabulary_list_vocabulary_list_component__["a" /* VocabularyListComponent */], [], { wordList: [0, "wordList"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.wordList; _ck(_v, 8, 0, currVal_0); }, null); }
function View_VocabularyQuestionDetailComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["class", "answer"], ["fxFlex", "60%"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](3, 0, null, null, 3, "p", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵpod */](5, { "correct-answer": 0, "wrong-answer": 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](6, null, ["\u5B66\u751F\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "p", [["class", "correct-answer"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["\u6B63\u786E\u7B54\u6848\uFF1A", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "60%"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _ck(_v, 5, 0, _co.correct(), !_co.correct()); _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.answer; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.question.answer; _ck(_v, 9, 0, currVal_3); }); }
function View_VocabularyQuestionDetailComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 26, "div", [["class", "question-content"], ["fxLayout", "row"], ["fxLayout.sm", "column"], ["fxLayoutAlign", "center"], ["fxLayoutGap", "10px"], ["fxLayoutWrap", "wrap"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"], layoutSm: [1, "layoutSm"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["k" /* LayoutWrapDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */]]], { wrap: [0, "wrap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](3, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](6, 0, null, null, 16, "div", [["class", "question"], ["fxFlex", "60%"], ["fxLayout", "column"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](7, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](10, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u8BF7\u5199\u51FA\u8BE5\u5355\u8BCD\u7684\u4E2D\u82F1\u6587\uFF1A "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](12, 0, null, null, 2, "app-simple-audio-player", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["b" /* View_SimpleAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_view_audio_simple_audio_player_simple_audio_player_component_ngfactory__["a" /* RenderType_SimpleAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](13, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_view_audio_simple_audio_player_simple_audio_player_component__["a" /* SimpleAudioPlayerComponent */], [], { src: [0, "src"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_41" /* ɵppd */](14, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, null, 5, "textarea", [["cols", "50"], ["rows", "4"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 17)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 17).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 17)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 17)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.answer = $event) !== false);
        ad = (pd_4 && ad);
    } if (("change" === en)) {
        var pd_5 = (_co.changeAnswer() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](19, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["m" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* NG_VALUE_ACCESSOR */]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_42" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["m" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](21, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_VocabularyQuestionDetailComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "wrap"; _ck(_v, 2, 0, currVal_2); var currVal_3 = "10px"; _ck(_v, 3, 0, currVal_3); var currVal_4 = "center"; _ck(_v, 4, 0, currVal_4); var currVal_5 = "column"; _ck(_v, 7, 0, currVal_5); var currVal_6 = "60%"; _ck(_v, 8, 0, currVal_6); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 13, 0, _ck(_v, 14, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v.parent, 0), _co.question.question)); _ck(_v, 13, 0, currVal_7); var currVal_15 = (_co.reviewMode() || _co.markingMode()); var currVal_16 = _co.answer; _ck(_v, 19, 0, currVal_15, currVal_16); var currVal_17 = !_co.homeworkMode(); _ck(_v, 25, 0, currVal_17); }, function (_ck, _v) { var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassUntouched; var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassTouched; var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassPristine; var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassDirty; var currVal_12 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassValid; var currVal_13 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassInvalid; var currVal_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 21).ngClassPending; _ck(_v, 16, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }); }
function View_VocabularyQuestionDetailComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_9__shared_pipes_pronunciation_of_word_pipe__["a" /* PronunciationOfWordPipe */], []), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_VocabularyQuestionDetailComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_VocabularyQuestionDetailComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.contentIndex == 0) && _co.wordList); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.contentIndex > 0); _ck(_v, 5, 0, currVal_1); }, null); }
function View_VocabularyQuestionDetailComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-vocabulary-question-detail", [], null, null, null, View_VocabularyQuestionDetailComponent_0, RenderType_VocabularyQuestionDetailComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_10__vocabulary_question_detail_component__["a" /* VocabularyQuestionDetailComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var VocabularyQuestionDetailComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-vocabulary-question-detail", __WEBPACK_IMPORTED_MODULE_10__vocabulary_question_detail_component__["a" /* VocabularyQuestionDetailComponent */], View_VocabularyQuestionDetailComponent_Host_0, { assignmentName: "assignmentName", classId: "classId", mode: "mode", groupContent: "groupContent", question: "question", lastAnswer: "lastAnswer", markingScore: "markingScore", shouldShowContent: "shouldShowContent", questionIndex: "questionIndex", questionListLength: "questionListLength", contentIndex: "contentIndex" }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabularyQuestionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/question-group-detail.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VocabularyQuestionDetailComponent = /** @class */ (function (_super) {
    __extends(VocabularyQuestionDetailComponent, _super);
    function VocabularyQuestionDetailComponent() {
        return _super.call(this) || this;
    }
    VocabularyQuestionDetailComponent.prototype.ngOnInit = function () {
    };
    VocabularyQuestionDetailComponent.prototype.ngOnChanges = function (changes) {
        this.answer = this.lastAnswer;
        if (this.groupContent.length > 0) {
            this.wordList = JSON.parse(this.groupContent);
        }
        this.question = this.question;
    };
    return VocabularyQuestionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__question_group_detail_component__["a" /* QuestionGroupDetailComponent */]));



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-list.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-list.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_QuestionGroupListComponent */
/* unused harmony export View_QuestionGroupListComponent_0 */
/* unused harmony export View_QuestionGroupListComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionGroupListComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_group_list_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-list.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_group_detail_tpo_reading_question_detail_tpo_reading_question_detail_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_group_detail_tpo_reading_question_detail_tpo_reading_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-reading-question-detail/tpo-reading-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pipes_convert09_to_az_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/convert09-to-az.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_group_detail_vocabulary_question_detail_vocabulary_question_detail_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_group_detail_vocabulary_question_detail_vocabulary_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/vocabulary-question-detail/vocabulary-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_group_detail_independent_writing_question_detail_independent_writing_question_detail_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_group_detail_independent_writing_question_detail_independent_writing_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/independent-writing-question-detail/independent-writing-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_group_detail_integrated_writing_question_detail_integrated_writing_question_detail_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_group_detail_integrated_writing_question_detail_integrated_writing_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/integrated-writing-question-detail/integrated-writing-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_group_detail_tpo_listening_question_detail_tpo_listening_question_detail_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_group_detail_tpo_listening_question_detail_tpo_listening_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-listening-question-detail/tpo-listening-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_group_detail_tpo_speaking_question_detail_tpo_speaking_question_detail_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__question_group_detail_tpo_speaking_question_detail_tpo_speaking_question_detail_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-detail/tpo-speaking-question-detail/tpo-speaking-question-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__question_group_list_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-group-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 





















var styles_QuestionGroupListComponent = [__WEBPACK_IMPORTED_MODULE_0__question_group_list_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_QuestionGroupListComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_QuestionGroupListComponent, data: {} });

function View_QuestionGroupListComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 9, "app-tpo-reading-question-detail", [], null, [[null, "OnChangeAnswer"], [null, "OnNext"], [null, "OnPre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("OnChangeAnswer" === en)) {
        var pd_0 = (_co.changeAnswer($event) !== false);
        ad = (pd_0 && ad);
    } if (("OnNext" === en)) {
        var pd_1 = (_co.next() !== false);
        ad = (pd_1 && ad);
    } if (("OnPre" === en)) {
        var pd_2 = (_co.pre() !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__question_group_detail_tpo_reading_question_detail_tpo_reading_question_detail_component_ngfactory__["b" /* View_TpoReadingQuestionDetailComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__question_group_detail_tpo_reading_question_detail_tpo_reading_question_detail_component_ngfactory__["a" /* RenderType_TpoReadingQuestionDetailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 9027584, null, 0, __WEBPACK_IMPORTED_MODULE_3__question_group_detail_tpo_reading_question_detail_tpo_reading_question_detail_component__["a" /* TpoReadingQuestionDetailComponent */], [__WEBPACK_IMPORTED_MODULE_4__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */]], { assignmentName: [0, "assignmentName"], classId: [1, "classId"], mode: [2, "mode"], groupContent: [3, "groupContent"], question: [4, "question"], lastAnswer: [5, "lastAnswer"], markingScore: [6, "markingScore"], shouldShowContent: [7, "shouldShowContent"], questionIndex: [8, "questionIndex"], questionListLength: [9, "questionListLength"], viewMode: [10, "viewMode"] }, { OnChangeAnswer: "OnChangeAnswer", OnNext: "OnNext", OnPre: "OnPre" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_co.assignmentName$)); var currVal_1 = _co.classId; var currVal_2 = _co.mode; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 3, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 3).transform(_co.groupContent$)); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 4, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).transform(_co.currentQuestion$)); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 5, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_co.lastAnswer$)); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 6, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_co.markingScore$)); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 7, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_co.shouldShowContent$)); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 8, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).transform(_co.questionIndex$)); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 9, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).transform(_co.questionListLength$)); var currVal_10 = _co.viewMode; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }, null); }
function View_QuestionGroupListComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 9, "app-vocabulary-question-detail", [], null, [[null, "OnChangeAnswer"], [null, "OnNext"], [null, "OnPre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("OnChangeAnswer" === en)) {
        var pd_0 = (_co.changeAnswer($event) !== false);
        ad = (pd_0 && ad);
    } if (("OnNext" === en)) {
        var pd_1 = (_co.next() !== false);
        ad = (pd_1 && ad);
    } if (("OnPre" === en)) {
        var pd_2 = (_co.pre() !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_6__question_group_detail_vocabulary_question_detail_vocabulary_question_detail_component_ngfactory__["b" /* View_VocabularyQuestionDetailComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__question_group_detail_vocabulary_question_detail_vocabulary_question_detail_component_ngfactory__["a" /* RenderType_VocabularyQuestionDetailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__question_group_detail_vocabulary_question_detail_vocabulary_question_detail_component__["a" /* VocabularyQuestionDetailComponent */], [], { classId: [0, "classId"], mode: [1, "mode"], groupContent: [2, "groupContent"], question: [3, "question"], lastAnswer: [4, "lastAnswer"], markingScore: [5, "markingScore"], shouldShowContent: [6, "shouldShowContent"], questionIndex: [7, "questionIndex"], questionListLength: [8, "questionListLength"], contentIndex: [9, "contentIndex"] }, { OnChangeAnswer: "OnChangeAnswer", OnNext: "OnNext", OnPre: "OnPre" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.classId; var currVal_1 = _co.mode; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 2, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_co.groupContent$)); var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 3, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 3).transform(_co.currentQuestion$)); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 4, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).transform(_co.lastAnswer$)); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 5, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_co.markingScore$)); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 6, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_co.shouldShowContent$)); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 7, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_co.questionIndex$)); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 8, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).transform(_co.questionListLength$)); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 9, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).transform(_co.contentIndex$)); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, null); }
function View_QuestionGroupListComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 9, "app-independent-writing-question-detail", [], null, [[null, "OnChangeAnswer"], [null, "OnMarkScore"], [null, "OnNext"], [null, "OnPre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("OnChangeAnswer" === en)) {
        var pd_0 = (_co.changeAnswer($event) !== false);
        ad = (pd_0 && ad);
    } if (("OnMarkScore" === en)) {
        var pd_1 = (_co.changeScore($event) !== false);
        ad = (pd_1 && ad);
    } if (("OnNext" === en)) {
        var pd_2 = (_co.next() !== false);
        ad = (pd_2 && ad);
    } if (("OnPre" === en)) {
        var pd_3 = (_co.pre() !== false);
        ad = (pd_3 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_8__question_group_detail_independent_writing_question_detail_independent_writing_question_detail_component_ngfactory__["b" /* View_IndependentWritingQuestionDetailComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__question_group_detail_independent_writing_question_detail_independent_writing_question_detail_component_ngfactory__["a" /* RenderType_IndependentWritingQuestionDetailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_9__question_group_detail_independent_writing_question_detail_independent_writing_question_detail_component__["a" /* IndependentWritingQuestionDetailComponent */], [], { assignmentName: [0, "assignmentName"], classId: [1, "classId"], mode: [2, "mode"], groupContent: [3, "groupContent"], question: [4, "question"], lastAnswer: [5, "lastAnswer"], markingScore: [6, "markingScore"], shouldShowContent: [7, "shouldShowContent"], questionIndex: [8, "questionIndex"], questionListLength: [9, "questionListLength"] }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_co.assignmentName$)); var currVal_1 = _co.classId; var currVal_2 = _co.mode; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 3, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 3).transform(_co.groupContent$)); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 4, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).transform(_co.currentQuestion$)); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 5, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_co.lastAnswer$)); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 6, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_co.markingScore$)); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 7, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_co.shouldShowContent$)); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 8, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).transform(_co.questionIndex$)); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 9, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).transform(_co.questionListLength$)); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, null); }
function View_QuestionGroupListComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "app-integrated-writing-question-detail", [], null, [[null, "OnChangeAnswer"], [null, "OnMarkScore"], [null, "OnNext"], [null, "OnPre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("OnChangeAnswer" === en)) {
        var pd_0 = (_co.changeAnswer($event) !== false);
        ad = (pd_0 && ad);
    } if (("OnMarkScore" === en)) {
        var pd_1 = (_co.changeScore($event) !== false);
        ad = (pd_1 && ad);
    } if (("OnNext" === en)) {
        var pd_2 = (_co.next() !== false);
        ad = (pd_2 && ad);
    } if (("OnPre" === en)) {
        var pd_3 = (_co.pre() !== false);
        ad = (pd_3 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_10__question_group_detail_integrated_writing_question_detail_integrated_writing_question_detail_component_ngfactory__["b" /* View_IntegratedWritingQuestionDetailComponent_0 */], __WEBPACK_IMPORTED_MODULE_10__question_group_detail_integrated_writing_question_detail_integrated_writing_question_detail_component_ngfactory__["a" /* RenderType_IntegratedWritingQuestionDetailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_11__question_group_detail_integrated_writing_question_detail_integrated_writing_question_detail_component__["a" /* IntegratedWritingQuestionDetailComponent */], [], { assignmentName: [0, "assignmentName"], classId: [1, "classId"], mode: [2, "mode"], groupContent: [3, "groupContent"], question: [4, "question"], lastAnswer: [5, "lastAnswer"], markingScore: [6, "markingScore"], shouldShowContent: [7, "shouldShowContent"], questionIndex: [8, "questionIndex"], questionListLength: [9, "questionListLength"], contentIndex: [10, "contentIndex"] }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_co.assignmentName$)); var currVal_1 = _co.classId; var currVal_2 = _co.mode; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 3, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 3).transform(_co.groupContent$)); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 4, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).transform(_co.currentQuestion$)); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 5, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_co.lastAnswer$)); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 6, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_co.markingScore$)); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 7, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_co.shouldShowContent$)); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 8, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).transform(_co.questionIndex$)); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 9, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).transform(_co.questionListLength$)); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 10, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 10).transform(_co.contentIndex$)); _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }, null); }
function View_QuestionGroupListComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "app-tpo-listening-question-detail", [], null, [[null, "OnChangeAnswer"], [null, "OnNext"], [null, "OnPre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("OnChangeAnswer" === en)) {
        var pd_0 = (_co.changeAnswer($event) !== false);
        ad = (pd_0 && ad);
    } if (("OnNext" === en)) {
        var pd_1 = (_co.next() !== false);
        ad = (pd_1 && ad);
    } if (("OnPre" === en)) {
        var pd_2 = (_co.pre() !== false);
        ad = (pd_2 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_12__question_group_detail_tpo_listening_question_detail_tpo_listening_question_detail_component_ngfactory__["b" /* View_TpoListeningQuestionDetailComponent_0 */], __WEBPACK_IMPORTED_MODULE_12__question_group_detail_tpo_listening_question_detail_tpo_listening_question_detail_component_ngfactory__["a" /* RenderType_TpoListeningQuestionDetailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_13__question_group_detail_tpo_listening_question_detail_tpo_listening_question_detail_component__["a" /* TpoListeningQuestionDetailComponent */], [__WEBPACK_IMPORTED_MODULE_14__core_services_assignment_service__["a" /* AssignmentService */], __WEBPACK_IMPORTED_MODULE_4__shared_pipes_convert09_to_az_pipe__["a" /* Convert09ToAZPipe */]], { assignmentName: [0, "assignmentName"], classId: [1, "classId"], mode: [2, "mode"], groupContent: [3, "groupContent"], question: [4, "question"], lastAnswer: [5, "lastAnswer"], markingScore: [6, "markingScore"], shouldShowContent: [7, "shouldShowContent"], questionIndex: [8, "questionIndex"], questionListLength: [9, "questionListLength"], contentIndex: [10, "contentIndex"] }, { OnChangeAnswer: "OnChangeAnswer", OnNext: "OnNext", OnPre: "OnPre" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_co.assignmentName$)); var currVal_1 = _co.classId; var currVal_2 = _co.mode; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 3, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 3).transform(_co.groupContent$)); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 4, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).transform(_co.currentQuestion$)); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 5, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_co.lastAnswer$)); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 6, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_co.markingScore$)); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 7, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_co.shouldShowContent$)); var currVal_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 8, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).transform(_co.questionIndex$)); var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 9, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).transform(_co.questionListLength$)); var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 10, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 10).transform(_co.contentIndex$)); _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }, null); }
function View_QuestionGroupListComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 7, "app-tpo-speaking-question-detail", [], null, [[null, "OnChangeAnswer"], [null, "OnMarkScore"], [null, "OnNext"], [null, "OnPre"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("OnChangeAnswer" === en)) {
        var pd_0 = (_co.changeAnswer($event) !== false);
        ad = (pd_0 && ad);
    } if (("OnMarkScore" === en)) {
        var pd_1 = (_co.changeScore($event) !== false);
        ad = (pd_1 && ad);
    } if (("OnNext" === en)) {
        var pd_2 = (_co.next() !== false);
        ad = (pd_2 && ad);
    } if (("OnPre" === en)) {
        var pd_3 = (_co.pre() !== false);
        ad = (pd_3 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_15__question_group_detail_tpo_speaking_question_detail_tpo_speaking_question_detail_component_ngfactory__["b" /* View_TpoSpeakingQuestionDetailComponent_0 */], __WEBPACK_IMPORTED_MODULE_15__question_group_detail_tpo_speaking_question_detail_tpo_speaking_question_detail_component_ngfactory__["a" /* RenderType_TpoSpeakingQuestionDetailComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_16__question_group_detail_tpo_speaking_question_detail_tpo_speaking_question_detail_component__["a" /* TpoSpeakingQuestionDetailComponent */], [], { assignmentName: [0, "assignmentName"], classId: [1, "classId"], mode: [2, "mode"], question: [3, "question"], lastAnswer: [4, "lastAnswer"], markingScore: [5, "markingScore"], questionIndex: [6, "questionIndex"], questionListLength: [7, "questionListLength"] }, { OnChangeAnswer: "OnChangeAnswer", OnMarkScore: "OnMarkScore", OnNext: "OnNext", OnPre: "OnPre" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 2).transform(_co.assignmentName$)); var currVal_1 = _co.classId; var currVal_2 = _co.mode; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 3, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 3).transform(_co.currentQuestion$)); var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 4, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 4).transform(_co.lastAnswer$)); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 5, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).transform(_co.markingScore$)); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 6, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 6).transform(_co.questionIndex$)); var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 1, 7, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 7).transform(_co.questionListLength$)); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null); }
function View_QuestionGroupListComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.group; _ck(_v, 1, 0, currVal_0); }); }
function View_QuestionGroupListComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](9, 0, null, null, 24, "div", [["class", "container"], ["id", "question-group-list"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectorRef */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](14, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["p" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["p" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](20, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["p" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["p" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](26, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["p" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_6)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["p" /* NgSwitchCase */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionGroupListComponent_7)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["q" /* NgSwitchDefault */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgSwitch */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_46" /* ɵunv */](_v, 10, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 11).transform(_co.groupType$)); _ck(_v, 10, 0, currVal_0); var currVal_1 = _co.assignmentService.getTPOReadingQuestionType(); _ck(_v, 14, 0, currVal_1); var currVal_2 = _co.assignmentService.getVocabularyQuestionType(); _ck(_v, 17, 0, currVal_2); var currVal_3 = _co.assignmentService.getIndependentWritingType(); _ck(_v, 20, 0, currVal_3); var currVal_4 = _co.assignmentService.getIntegratedWritingType(); _ck(_v, 23, 0, currVal_4); var currVal_5 = "tpo_listening"; _ck(_v, 26, 0, currVal_5); var currVal_6 = "tpo_speaking"; _ck(_v, 29, 0, currVal_6); }, null); }
function View_QuestionGroupListComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-group-list", [], null, [["window", "beforeunload"]], function (_v, en, $event) { var ad = true; if (("window:beforeunload" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).canDeactivate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_QuestionGroupListComponent_0, RenderType_QuestionGroupListComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_17__question_group_list_component__["a" /* QuestionGroupListComponent */], [__WEBPACK_IMPORTED_MODULE_18__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_14__core_services_assignment_service__["a" /* AssignmentService */], __WEBPACK_IMPORTED_MODULE_18__angular_router__["k" /* Router */], __WEBPACK_IMPORTED_MODULE_19__ngrx_store__["l" /* Store */], __WEBPACK_IMPORTED_MODULE_20__angular_material_dialog__["d" /* MatDialog */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuestionGroupListComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-question-group-list", __WEBPACK_IMPORTED_MODULE_17__question_group_list_component__["a" /* QuestionGroupListComponent */], View_QuestionGroupListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-group-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionGroupListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__ = __webpack_require__("../../../../../src/app/models/assignments/Assignment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__ = __webpack_require__("../../../../../src/app/redux/index.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__ = __webpack_require__("../../../../../src/app/redux/assignment/assignment.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_view_dialogs_submit_confirm_dialog_submit_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/shared/view/dialogs/submit-confirm-dialog/submit-confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");











var QuestionGroupListComponent = /** @class */ (function () {
    function QuestionGroupListComponent(route, assignmentService, router, store, dialog) {
        var _this = this;
        this.route = route;
        this.assignmentService = assignmentService;
        this.router = router;
        this.store = store;
        this.dialog = dialog;
        this.viewMode = 'question';
        this.alive = true;
        this.complete = false;
        this.route.params.forEach(function (param) {
            _this.classId = param['classId'];
            _this.assignmentId = param['assignmentId'];
            _this.studentId = param['studentId'];
            _this.mode = param['mode'];
        });
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["n" /* getLoading */]);
        this.errMessage$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["j" /* getErrMessage */]);
        this.complete$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["d" /* getComplete */]);
        this.assignmentName$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["a" /* getAssignmentName */]);
        this.assignmentScoreList$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["b" /* getAssignmentScoreList */]);
        this.group$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["f" /* getCurrentGroup */]);
        this.groupType$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["l" /* getGroupType */]);
        this.groupContent$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["k" /* getGroupContent */]);
        this.contentIndex$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["e" /* getContentIndex */]);
        this.shouldShowContent$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["r" /* shouldShowContent */]);
        this.currentQuestion$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["h" /* getCurrentQuestion */]);
        this.currentQuestionType$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["i" /* getCurrentQuestionType */]);
        this.questionIndex$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["p" /* getQuestionIndex */]);
        this.questionListLength$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["q" /* getQuestionListLength */]);
        this.lastAnswer$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["m" /* getLastAnswer */]);
        this.markingScore$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__redux_index_reducer__["o" /* getMarkingScore */]);
    }
    QuestionGroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mode != __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__["b" /* Mode */].HomeWork) {
            this.group$.pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["takeWhile"])(function () { return _this.alive; })).subscribe(function () {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["F" /* SkipContentAction */]());
            });
        }
        this.complete$.pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["takeWhile"])(function () { return _this.alive; })).subscribe(function (complete) {
            _this.complete = complete;
            if (complete && _this.mode != __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__["b" /* Mode */].HomeWork) {
                _this.router.navigate(['/class/' + _this.classId]);
                return;
            }
            else if (complete) {
                _this.openSubmitConfirmDialog();
            }
        });
        this.errMessage$.subscribe(function (errMessage) {
            console.log(errMessage);
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["g" /* FetchAssignmentAction */]({
            assignmentId: this.assignmentId,
            studentId: this.studentId
        }));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["j" /* FetchInfoAction */]({
            classId: this.classId,
            assignmentId: this.assignmentId,
            studentId: this.studentId
        }));
        this.autoSave();
    };
    QuestionGroupListComponent.prototype.skipContent = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["F" /* SkipContentAction */]());
    };
    QuestionGroupListComponent.prototype.changeAnswer = function (answer) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["D" /* SetStudentAnswerAction */](answer));
    };
    QuestionGroupListComponent.prototype.changeScore = function (score) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["B" /* SetMarkingScoreAction */](score));
        this.save();
    };
    QuestionGroupListComponent.prototype.next = function () {
        var _this = this;
        this.save();
        this.loading$.pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["filter"])(function (loading) { return !loading; }), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["first"])()).subscribe(function (loading) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["n" /* NextAction */]());
        });
    };
    QuestionGroupListComponent.prototype.pre = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["p" /* PreAction */]());
    };
    QuestionGroupListComponent.prototype.autoSave = function () {
        var _this = this;
        //每分钟自动保存一次
        Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_interval__["a" /* interval */])(60 * 1000).pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["takeWhile"])(function () { return _this.alive; })).subscribe(function (data) {
            _this.save();
        });
    };
    QuestionGroupListComponent.prototype.save = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["H" /* SubmitAction */]({
            classId: this.classId,
            assignmentId: this.assignmentId,
            studentId: this.studentId
        }));
    };
    QuestionGroupListComponent.prototype.openSubmitConfirmDialog = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatDialogConfig */]();
        config.width = '400px';
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__shared_view_dialogs_submit_confirm_dialog_submit_confirm_dialog_component__["a" /* SubmitConfirmDialogComponent */], config).afterClosed()
            .subscribe(function (result) {
            if (!result || result == 'cancel') {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["E" /* SetUnCompleteAction */]());
                return;
            }
            if (result == 'save') {
                _this.router.navigate(['/class/' + _this.classId]);
                return;
            }
            if (result == 'confirm') {
                _this.assignmentService.submitAssignmentDone(_this.classId, _this.studentId, _this.assignmentId)
                    .subscribe(function (data) {
                    console.log('确认提交' + data);
                    _this.router.navigate(['/class/' + _this.classId]);
                });
            }
        });
    };
    QuestionGroupListComponent.prototype.canDeactivate = function () {
        if (+this.mode !== __WEBPACK_IMPORTED_MODULE_3__models_assignments_Assignment__["b" /* Mode */].HomeWork || this.complete) {
            return true;
        }
        return window.confirm('确定要离开作业吗?');
    };
    QuestionGroupListComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__redux_assignment_assignment_actions__["r" /* ResetAction */]());
        this.alive = false;
    };
    return QuestionGroupListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-header/question-header.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [".brand[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: white;\r\n}\r\n\r\n#assignment-name[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    right: 0;\r\n    height: 90px !important;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: #000;\r\n    border-radius: 13px;\r\n    height: 26px;\r\n    line-height: 26px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]{\r\n    height: 26px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    top: -5px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_QuestionHeaderComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_QuestionHeaderComponent_0;
/* unused harmony export View_QuestionHeaderComponent_Host_0 */
/* unused harmony export QuestionHeaderComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_header_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_timer_question_timer_component_ngfactory__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_timer_question_timer_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_toolbar_typings_index_ngfactory__ = __webpack_require__("../../../material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_cdk_scrolling__ = __webpack_require__("../../../cdk/esm5/scrolling.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__question_header_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 





















var styles_QuestionHeaderComponent = [__WEBPACK_IMPORTED_MODULE_0__question_header_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_QuestionHeaderComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_QuestionHeaderComponent, data: {} });

function View_QuestionHeaderComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 3, "button", [["class", "mat-button"], ["mat-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeView() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](3, 0, ["\n                ", "\n            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); var currVal_1 = (_co.viewText ? "View Question" : "View Text"); _ck(_v, 3, 0, currVal_1); }); }
function View_QuestionHeaderComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 3, "button", [["class", "mat-button"], ["mat-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.preQuestion() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                Back\n            "]))], null, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_QuestionHeaderComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 3, "button", [["class", "mat-button"], ["mat-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.nextQuestion() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */]], { disabled: [0, "disabled"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                    Next\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.disableNext; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0); }); }
function View_QuestionHeaderComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-timer", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__question_timer_question_timer_component_ngfactory__["b" /* View_QuestionTimerComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__question_timer_question_timer_component_ngfactory__["a" /* RenderType_QuestionTimerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_7__question_timer_question_timer_component__["a" /* QuestionTimerComponent */], [__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["l" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_QuestionHeaderComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 59, "mat-toolbar", [["class", "question-header mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_toolbar_typings_index_ngfactory__["b" /* View_MatToolbar_0 */], __WEBPACK_IMPORTED_MODULE_9__node_modules_angular_material_toolbar_typings_index_ngfactory__["a" /* RenderType_MatToolbar */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 4243456, null, 1, __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbar */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */]], { color: [0, "color"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵqud */](603979776, 1, { _toolbarRows: 1 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, 0, 15, "div", [["class", "brand"], ["fxFlex", "20"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [8, null]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](6, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 10, "button", [["class", "brand mat-button"], ["mat-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.gotoHome() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](12, 0, null, 0, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](13, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_13__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["edit"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](16, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u7422\u7389\u8BFE\u5802"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](21, 0, null, 0, 3, "span", [["fxFlex", "60"], ["fxLayoutAlign", "center"], ["id", "assignment-name"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](22, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [8, null]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](23, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](24, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](26, 0, null, 0, 32, "span", [["class", "header-button"], ["fxFlex", "20"], ["fxLayout", "column"], ["fxLayoutAlign", "center end"], ["fxLayoutGap", "8px"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](27, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](28, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](29, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](30, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["e" /* FlexDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [3, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]], [3, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["k" /* LayoutWrapDirective */]]], { flex: [0, "flex"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](32, 0, null, null, 22, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end"], ["fxLayoutGap", "5px"], ["id", "first-line"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](33, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](34, 1785856, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["j" /* LayoutGapDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */]], { gap: [0, "gap"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](35, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](37, 0, null, null, 3, "button", [["class", "mat-button"], ["mat-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.quit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](38, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](39, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n                Quit\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionHeaderComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](43, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionHeaderComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](46, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](48, 16777216, null, null, 5, "div", [["class", "tooltip"], ["matTooltip", "Click Disable!"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; if (("longpress" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 49).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 49)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 49).hide(1500) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](49, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__["c" /* MatTooltip */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_16__angular_cdk_overlay__["c" /* Overlay */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_17__angular_cdk_scrolling__["d" /* ScrollDispatcher */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["e" /* AriaDescriber */], __WEBPACK_IMPORTED_MODULE_5__angular_cdk_a11y__["h" /* FocusMonitor */], __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__["a" /* MAT_TOOLTIP_SCROLL_STRATEGY */], [2, __WEBPACK_IMPORTED_MODULE_18__angular_cdk_bidi__["c" /* Directionality */]]], { position: [0, "position"], disabled: [1, "disabled"], message: [2, "message"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionHeaderComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](52, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionHeaderComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](57, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_14__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); var currVal_3 = "start"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "20"; _ck(_v, 6, 0, currVal_4); _ck(_v, 13, 0); var currVal_6 = "center"; _ck(_v, 22, 0, currVal_6); var currVal_7 = "60"; _ck(_v, 23, 0, currVal_7); var currVal_9 = "column"; _ck(_v, 27, 0, currVal_9); var currVal_10 = "8px"; _ck(_v, 28, 0, currVal_10); var currVal_11 = "center end"; _ck(_v, 29, 0, currVal_11); var currVal_12 = "20"; _ck(_v, 30, 0, currVal_12); var currVal_13 = "row"; _ck(_v, 33, 0, currVal_13); var currVal_14 = "5px"; _ck(_v, 34, 0, currVal_14); var currVal_15 = "end"; _ck(_v, 35, 0, currVal_15); var currVal_17 = (_co.questionType == "tpo_reading_topic"); _ck(_v, 43, 0, currVal_17); var currVal_18 = _co.showPre; _ck(_v, 46, 0, currVal_18); var currVal_19 = "below"; var currVal_20 = !_co.disableNext; var currVal_21 = "Click Disable!"; _ck(_v, 49, 0, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.showNext; _ck(_v, 52, 0, currVal_22); var currVal_23 = _co.homeworkMode(); _ck(_v, 57, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._toolbarRows.length; var currVal_1 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 1)._toolbarRows.length; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 9).disabled || null); _ck(_v, 8, 0, currVal_5); var currVal_8 = _co.assignmentName; _ck(_v, 24, 0, currVal_8); var currVal_16 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 38).disabled || null); _ck(_v, 37, 0, currVal_16); }); }
function View_QuestionHeaderComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-header", [], null, null, null, View_QuestionHeaderComponent_0, RenderType_QuestionHeaderComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_19__question_header_component__["a" /* QuestionHeaderComponent */], [__WEBPACK_IMPORTED_MODULE_20__angular_router__["k" /* Router */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuestionHeaderComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-question-header", __WEBPACK_IMPORTED_MODULE_19__question_header_component__["a" /* QuestionHeaderComponent */], View_QuestionHeaderComponent_Host_0, { assignmentName: "assignmentName", mode: "mode", questionType: "questionType", classId: "classId", showPre: "showPre", showNext: "showNext", disableNext: "disableNext" }, { viewChanged: "viewChanged", next: "next", pre: "pre" }, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-header/question-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_assignments_Assignment__ = __webpack_require__("../../../../../src/app/models/assignments/Assignment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");



var QuestionHeaderComponent = /** @class */ (function () {
    function QuestionHeaderComponent(router) {
        this.router = router;
        this.viewChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.pre = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.ModeType = __WEBPACK_IMPORTED_MODULE_1__models_assignments_Assignment__["b" /* Mode */];
        this.viewText = false;
    }
    QuestionHeaderComponent.prototype.ngOnInit = function () {
    };
    QuestionHeaderComponent.prototype.homeworkMode = function () {
        return this.mode == this.ModeType.HomeWork;
    };
    QuestionHeaderComponent.prototype.reviewMode = function () {
        return this.mode == this.ModeType.Review;
    };
    QuestionHeaderComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    QuestionHeaderComponent.prototype.quit = function () {
        this.router.navigate(['/class/' + this.classId]);
    };
    QuestionHeaderComponent.prototype.nextQuestion = function () {
        this.next.emit('next');
    };
    QuestionHeaderComponent.prototype.preQuestion = function () {
        this.pre.emit('pre');
    };
    QuestionHeaderComponent.prototype.changeView = function () {
        this.viewText = !this.viewText;
        this.viewChanged.emit('change');
    };
    return QuestionHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["a[_ngcontent-%COMP%] {\r\n    color: white;\r\n    padding-right: 20px;\r\n    font-size: 14px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    cursor: default;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: rgba(255,255,255,0);\r\n    border: 2px solid white;\r\n    color: white;\r\n    border-radius: 13px;\r\n    height: 26px;\r\n    line-height: 22px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_QuestionTimerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_QuestionTimerComponent_0;
/* unused harmony export View_QuestionTimerComponent_Host_0 */
/* unused harmony export QuestionTimerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_timer_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__ = __webpack_require__("../../../material/button/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_timer_component__ = __webpack_require__("../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 










var styles_QuestionTimerComponent = [__WEBPACK_IMPORTED_MODULE_0__question_timer_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_QuestionTimerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_QuestionTimerComponent, data: {} });

function View_QuestionTimerComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.content; _ck(_v, 1, 0, currVal_0); }); }
function View_QuestionTimerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 11, "div", [["class", "header-button"], ["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_QuestionTimerComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](7, 0, null, null, 3, "button", [["class", "mat-button"], ["mat-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleShowTime() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__["b" /* View_MatButton_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_material_button_typings_index_ngfactory__["a" /* RenderType_MatButton */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](8, 180224, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["b" /* MatButton */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__angular_cdk_a11y__["h" /* FocusMonitor */]], null, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["c" /* MatButtonCssMatStyler */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](10, 0, ["\n        ", "\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "end center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.showTime; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 8).disabled || null); _ck(_v, 7, 0, currVal_3); var currVal_4 = (_co.showTime ? "Hide Time" : "Show Time"); _ck(_v, 10, 0, currVal_4); }); }
function View_QuestionTimerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-question-timer", [], null, null, null, View_QuestionTimerComponent_0, RenderType_QuestionTimerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_8__question_timer_component__["a" /* QuestionTimerComponent */], [__WEBPACK_IMPORTED_MODULE_9__ngrx_store__["l" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuestionTimerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-question-timer", __WEBPACK_IMPORTED_MODULE_8__question_timer_component__["a" /* QuestionTimerComponent */], View_QuestionTimerComponent_Host_0, { assignmentId: "assignmentId", studentId: "studentId" }, {}, []);



/***/ }),

/***/ "../../../../../src/app/assignment/question-group-list/question-header/question-timer/question-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_index_reducer__ = __webpack_require__("../../../../../src/app/redux/index.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_assignment_assignment_actions__ = __webpack_require__("../../../../../src/app/redux/assignment/assignment.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");









var QuestionTimerComponent = /** @class */ (function () {
    function QuestionTimerComponent(store) {
        this.store = store;
        this.lastTime = new Date();
        this.content = '';
        this.showTime = true;
        this.alive = true;
        this.spendTime$ = store.select(__WEBPACK_IMPORTED_MODULE_1__redux_index_reducer__["c" /* getAssignmentSpendTime */]);
    }
    QuestionTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spendTime$.takeWhile(function () { return _this.alive; }).filter(function (spendTime) { return spendTime >= 0; })
            .first().subscribe(function (spendTime) {
            _this.lastTime = new Date(Date.now() - spendTime * 1000);
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].interval(1000).takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            var time = (Date.now() - _this.lastTime.getTime()) / 1000;
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__redux_assignment_assignment_actions__["C" /* SetSpendTimeAction */](time));
            _this.content = _this.getHHMMSS();
        });
    };
    QuestionTimerComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    QuestionTimerComponent.prototype.getHHMMSS = function () {
        var diffSeconds = (Date.now() - this.lastTime.getTime()) / 1000;
        var HH = Math.floor((diffSeconds / 3600));
        var MM = Math.floor((diffSeconds % 3600) / 60);
        var SS = Math.floor(diffSeconds % 60);
        var formatted = ((HH < 10) ? ("0" + HH) : HH) + ":"
            + ((MM < 10) ? ("0" + MM) : MM) + ':'
            + ((SS < 10) ? ("0" + SS) : SS);
        return formatted;
    };
    QuestionTimerComponent.prototype.toggleShowTime = function () {
        this.showTime = !this.showTime;
    };
    return QuestionTimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/redux/index.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducers */
/* unused harmony export getAssignmentState */
/* unused harmony export getAssignment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAssignmentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAssignmentSpendTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAssignmentScoreList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCurrentGroupIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCurrentGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getGroupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getGroupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getContentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return shouldShowContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getQuestionIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCurrentQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getCurrentQuestionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getQuestionListLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getLastAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMarkingScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getErrMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__ = __webpack_require__("../../../../../src/app/redux/assignment/assignment.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");


var reducers = {
    assignment: __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["k" /* reducer */]
};
var getAssignmentState = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["w" /* createFeatureSelector */])('assignment');
var getAssignment = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["a" /* getAssignment */]);
var getAssignmentName = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["b" /* getAssignmentName */]);
var getAssignmentSpendTime = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["i" /* getSpendTime */]);
var getAssignmentScoreList = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["c" /* getAssignmentScoreList */]);
var getCurrentGroupIndex = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, function (state) { return state.currentGroupIndex; });
var getCurrentGroup = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["g" /* getCurrentQuestionGroup */]);
var getGroupType = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getCurrentGroup, function (group) { return group ? group.type : ''; });
var getGroupContent = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["e" /* getCurrentGroupContent */]);
var getContentIndex = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["d" /* getCurrentContentIndex */]);
var shouldShowContent = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["l" /* shouldShowContent */]);
var getQuestionIndex = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, function (state) { return state.currentQuestionIndex; });
var getCurrentQuestion = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["f" /* getCurrentQuestion */]);
var getCurrentQuestionType = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getCurrentQuestion, function (question) { return question ? question.questionType : ''; });
var getQuestionListLength = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getCurrentGroup, function (group) {
    return group ? group.questionList.length : 0;
});
var getLastAnswer = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["j" /* getStudentAnswer */]);
var getMarkingScore = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, __WEBPACK_IMPORTED_MODULE_0__assignment_assignment_reducers__["h" /* getMarkScore */]);
var getLoading = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, function (state) { return state.loading; });
var getComplete = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, function (state) { return state.complete; });
var getErrMessage = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["y" /* createSelector */])(getAssignmentState, function (state) { return state.errMessage; });


/***/ }),

/***/ "../../../../../src/app/shared/view/audio/audio-player/audio-player.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["mat-progress-bar[_ngcontent-%COMP%]{\r\n    height: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    color: dimgray;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_AudioPlayerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_AudioPlayerComponent_0;
/* unused harmony export View_AudioPlayerComponent_Host_0 */
/* unused harmony export AudioPlayerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_player_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_progress_bar_typings_index_ngfactory__ = __webpack_require__("../../../material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 






var styles_AudioPlayerComponent = [__WEBPACK_IMPORTED_MODULE_0__audio_player_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_AudioPlayerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_AudioPlayerComponent, data: {} });

function View_AudioPlayerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 10, "div", [["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 2, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null]], null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_progress_bar_typings_index_ngfactory__["b" /* View_MatProgressBar_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_progress_bar_typings_index_ngfactory__["a" /* RenderType_MatProgressBar */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_bar__["a" /* MatProgressBar */], [], { color: [0, "color"], value: [1, "value"], mode: [2, "mode"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["\n        ", "\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); var currVal_7 = "primary"; var currVal_8 = _co.progress; var currVal_9 = "determinate"; _ck(_v, 5, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).value; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).mode; var currVal_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).color == "primary"); var currVal_5 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).color == "accent"); var currVal_6 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵnov */](_v, 5).color == "warn"); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = _co.progressString; _ck(_v, 9, 0, currVal_10); }); }
function View_AudioPlayerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-audio-player", [], null, null, null, View_AudioPlayerComponent_0, RenderType_AudioPlayerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_5__audio_player_component__["a" /* AudioPlayerComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AudioPlayerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-audio-player", __WEBPACK_IMPORTED_MODULE_5__audio_player_component__["a" /* AudioPlayerComponent */], View_AudioPlayerComponent_Host_0, { src: "src" }, { completed: "completed" }, []);



/***/ }),

/***/ "../../../../../src/app/shared/view/audio/audio-player/audio-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");


var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent() {
        this.completed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.progress = 100;
        this.progressString = '';
    }
    AudioPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(100).subscribe(function (data) {
            _this.progress = _this.myAudio.currentTime / _this.myAudio.duration * 100;
            var currentTime = _this.convertNumberToTime(_this.myAudio.currentTime);
            var totalTime = _this.convertNumberToTime(_this.myAudio.duration);
            _this.progressString = currentTime + '/' + totalTime;
        });
    };
    AudioPlayerComponent.prototype.convertNumberToTime = function (time) {
        var minute = Math.floor(time / 60);
        var second = Math.floor(time % 60);
        var minuteString = (minute < 10) ? ('0' + minute) : (minute + '');
        var secondString = (second < 10) ? ('0' + second) : (second + '');
        var result = minuteString + ':' + secondString;
        return result;
    };
    AudioPlayerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.myAudio = new Audio(this.src);
        this.myAudio.play();
        this.myAudio.addEventListener('ended', function () {
            _this.completed.emit(true);
        });
    };
    AudioPlayerComponent.prototype.ngOnDestroy = function () {
        this.myAudio.pause();
    };
    return AudioPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = [""];



/***/ }),

/***/ "../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_BackgroundAudioPlayerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_BackgroundAudioPlayerComponent_0;
/* unused harmony export View_BackgroundAudioPlayerComponent_Host_0 */
/* unused harmony export BackgroundAudioPlayerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background_audio_player_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__background_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



var styles_BackgroundAudioPlayerComponent = [__WEBPACK_IMPORTED_MODULE_0__background_audio_player_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_BackgroundAudioPlayerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_BackgroundAudioPlayerComponent, data: {} });

function View_BackgroundAudioPlayerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [], null, null); }
function View_BackgroundAudioPlayerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-background-audio-player", [], null, null, null, View_BackgroundAudioPlayerComponent_0, RenderType_BackgroundAudioPlayerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_2__background_audio_player_component__["a" /* BackgroundAudioPlayerComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BackgroundAudioPlayerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-background-audio-player", __WEBPACK_IMPORTED_MODULE_2__background_audio_player_component__["a" /* BackgroundAudioPlayerComponent */], View_BackgroundAudioPlayerComponent_Host_0, { src: "src" }, { completed: "completed" }, []);



/***/ }),

/***/ "../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundAudioPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BackgroundAudioPlayerComponent = /** @class */ (function () {
    function BackgroundAudioPlayerComponent() {
        this.completed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    BackgroundAudioPlayerComponent.prototype.ngOnInit = function () {
    };
    BackgroundAudioPlayerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.pause();
        this.myAudio = new Audio(this.src);
        this.myAudio.addEventListener('ended', function () {
            _this.completed.emit(true);
        }, false);
        this.myAudio.load();
        this.myAudio.play();
    };
    BackgroundAudioPlayerComponent.prototype.ngOnDestroy = function () {
        this.pause();
        this.myAudio = null;
    };
    BackgroundAudioPlayerComponent.prototype.pause = function () {
        if (this.myAudio) {
            this.myAudio.pause();
        }
    };
    return BackgroundAudioPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["p[_ngcontent-%COMP%]{\r\n    margin: 4px;\r\n    width: 740px;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CountDownTimerComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CountDownTimerComponent_0;
/* unused harmony export View_CountDownTimerComponent_Host_0 */
/* unused harmony export CountDownTimerComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_down_timer_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__count_down_timer_component__ = __webpack_require__("../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 



var styles_CountDownTimerComponent = [__WEBPACK_IMPORTED_MODULE_0__count_down_timer_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_CountDownTimerComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_CountDownTimerComponent, data: {} });

function View_CountDownTimerComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](1, null, ["Reading Time : ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getCountDownTime(); _ck(_v, 1, 0, currVal_0); }); }
function View_CountDownTimerComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-count-down-timer", [], null, null, null, View_CountDownTimerComponent_0, RenderType_CountDownTimerComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__count_down_timer_component__["a" /* CountDownTimerComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CountDownTimerComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-count-down-timer", __WEBPACK_IMPORTED_MODULE_2__count_down_timer_component__["a" /* CountDownTimerComponent */], View_CountDownTimerComponent_Host_0, { time: "time" }, { completed: "completed" }, []);



/***/ }),

/***/ "../../../../../src/app/shared/view/count-down-timer/count-down-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountDownTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");


var CountDownTimerComponent = /** @class */ (function () {
    function CountDownTimerComponent() {
        this.completed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](false);
    }
    CountDownTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countDownTime = this.time;
        var subscription = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(1000).subscribe(function () {
            _this.countDownTime--;
            if (_this.countDownTime == 0) {
                subscription.unsubscribe();
                _this.completed.emit(true);
            }
        });
    };
    CountDownTimerComponent.prototype.getCountDownTime = function () {
        return '00:' + (this.countDownTime < 10 ? '0' + this.countDownTime : '' + this.countDownTime);
    };
    return CountDownTimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.css.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
var styles = ["mat-icon[_ngcontent-%COMP%]{\r\n    font-size:45px;\r\n    height:45px;\r\n    width: 45px;\r\n    color: #929292;\r\n}\r\n\r\n.time[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    line-height: 42px;\r\n    background-color: #929292;\r\n    font-size: 18px;\r\n    color: white;\r\n    height: 42px;\r\n    margin-top: 10px;\r\n    width: 450px;\r\n}\r\n\r\n.prepare-label[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    line-height: 60px;\r\n    background-color: #929292;\r\n    font-size: 18px;\r\n    color: black;\r\n    height: 60px;\r\n    margin-top: 30px;\r\n    width: 450px;\r\n}\r\n\r\n.count-down[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    line-height: 60px;\r\n    background-color: white;\r\n    font-size: 18px;\r\n    color: black;\r\n    height: 60px;\r\n    margin: 0px;\r\n    width: 450px;\r\n}\r\n\r\nprogress[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n    height: 45px;\r\n    width: 450px;\r\n}\r\n\r\nprogress[_ngcontent-%COMP%]::-webkit-progress-bar {\r\n    background-color: #eee;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]::-webkit-progress-value {\r\n    background-color: #4caf50;\r\n}"];



/***/ }),

/***/ "../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_TpoSpeakingRecorderComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_TpoSpeakingRecorderComponent_0;
/* unused harmony export View_TpoSpeakingRecorderComponent_Host_0 */
/* unused harmony export TpoSpeakingRecorderComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tpo_speaking_recorder_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.css.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__ = __webpack_require__("../../../material/icon/typings/index.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audio_background_audio_player_background_audio_player_component_ngfactory__ = __webpack_require__("../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audio_background_audio_player_background_audio_player_component__ = __webpack_require__("../../../../../src/app/shared/view/audio/background-audio-player/background-audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tpo_speaking_recorder_component__ = __webpack_require__("../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 










var styles_TpoSpeakingRecorderComponent = [__WEBPACK_IMPORTED_MODULE_0__tpo_speaking_recorder_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_TpoSpeakingRecorderComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵcrt */]({ encapsulation: 0, styles: styles_TpoSpeakingRecorderComponent, data: {} });

function View_TpoSpeakingRecorderComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 13, "div", [["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 2, "mat-icon", [["class", "mat-icon"], ["role", "img"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__["b" /* View_MatIcon_0 */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_material_icon_typings_index_ngfactory__["a" /* RenderType_MatIcon */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["b" /* MatIcon */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["d" /* MatIconRegistry */], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, 0, ["headset"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["Preparation Time: ", " Seconds"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](12, null, ["Response Time: ", " Seconds"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); _ck(_v, 5, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.prepareTime; _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.responseTime; _ck(_v, 12, 0, currVal_3); }); }
function View_TpoSpeakingRecorderComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\u6B63\u5728\u4E0A\u4F20\u5F55\u97F3"]))], null, null); }
function View_TpoSpeakingRecorderComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 18, "div", [["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */]], { layout: [0, "layout"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](2, 737280, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["h" /* LayoutAlignDirective */], [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["n" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["i" /* LayoutDirective */]]], { align: [0, "align"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](4, 0, null, null, 2, "app-background-audio-player", [], null, [[null, "completed"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("completed" === en)) {
        var pd_0 = (_co.completePlayRecord() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_5__audio_background_audio_player_background_audio_player_component_ngfactory__["b" /* View_BackgroundAudioPlayerComponent_0 */], __WEBPACK_IMPORTED_MODULE_5__audio_background_audio_player_background_audio_player_component_ngfactory__["a" /* RenderType_BackgroundAudioPlayerComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](5, 770048, null, 0, __WEBPACK_IMPORTED_MODULE_6__audio_background_audio_player_background_audio_player_component__["a" /* BackgroundAudioPlayerComponent */], [], { src: [0, "src"] }, { completed: "completed" }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](8, 0, null, null, 1, "div", [["class", "prepare-label"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](9, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](11, 0, null, null, 1, "div", [["class", "count-down"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](12, null, ["00:", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](14, 0, null, null, 0, "progress", [], [[8, "value", 0], [8, "max", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingRecorderComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = (!_co.startSpeak ? _co.prepareRecordUrl : _co.speakRecordUrl); _ck(_v, 5, 0, currVal_2); var currVal_7 = _co.isUploading; _ck(_v, 17, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (!_co.startSpeak ? "Prepare your response" : "Recording"); _ck(_v, 9, 0, currVal_3); var currVal_4 = ((_co.countDownTime < 10) ? ("0" + _co.countDownTime) : _co.countDownTime); _ck(_v, 12, 0, currVal_4); var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* ɵinlineInterpolate */](1, "", (!_co.startSpeak ? (_co.prepareTime - _co.countDownTime) : (_co.responseTime - _co.countDownTime)), ""); var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* ɵinlineInterpolate */](1, "", (!_co.startSpeak ? _co.prepareTime : _co.responseTime), ""); _ck(_v, 14, 0, currVal_5, currVal_6); }); }
function View_TpoSpeakingRecorderComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingRecorderComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵand */](16777216, null, null, 1, null, View_TpoSpeakingRecorderComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.start; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.start; _ck(_v, 4, 0, currVal_1); }, null); }
function View_TpoSpeakingRecorderComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "app-tpo-speaking-recorder", [], null, null, null, View_TpoSpeakingRecorderComponent_0, RenderType_TpoSpeakingRecorderComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_22" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_8__tpo_speaking_recorder_component__["a" /* TpoSpeakingRecorderComponent */], [__WEBPACK_IMPORTED_MODULE_9__core_services_assignment_service__["a" /* AssignmentService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TpoSpeakingRecorderComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵccf */]("app-tpo-speaking-recorder", __WEBPACK_IMPORTED_MODULE_8__tpo_speaking_recorder_component__["a" /* TpoSpeakingRecorderComponent */], View_TpoSpeakingRecorderComponent_Host_0, { start: "start", prepareTime: "prepareTime", responseTime: "responseTime" }, { uploaded: "uploaded" }, []);



/***/ }),

/***/ "../../../../../src/app/shared/view/recorder/tpo-speaking-recorder/tpo-speaking-recorder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpoSpeakingRecorderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recordrtc__ = __webpack_require__("../../../../recordrtc/RecordRTC.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recordrtc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recordrtc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_assignment_service__ = __webpack_require__("../../../../../src/app/core/services/assignment.service.ts");




var TpoSpeakingRecorderComponent = /** @class */ (function () {
    function TpoSpeakingRecorderComponent(assignmentService) {
        this.assignmentService = assignmentService;
        this.start = false;
        this.uploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.countDownTime = 0;
        this.prepareRecordUrl = '/assets/tpo/speaking/TPO-speaking-prepare.mp3';
        this.speakRecordUrl = '/assets/tpo/speaking/TPO-speaking-speak.mp3';
        this.options = {
            mimeType: 'audio/x-wav',
            bitsPerSecond: 128000
        };
    }
    TpoSpeakingRecorderComponent.prototype.ngOnInit = function () {
    };
    TpoSpeakingRecorderComponent.prototype.ngOnChanges = function (changes) {
        this.startSpeak = false;
        this.responding = false;
        this.countDownTime = this.prepareTime;
    };
    TpoSpeakingRecorderComponent.prototype.completePlayRecord = function () {
        var _this = this;
        //这是第一次
        if (!this.startSpeak) {
            this.countDownTime = this.prepareTime;
            var subscription_1 = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(1000)
                .takeWhile(function () { return _this.countDownTime > 0; })
                .subscribe(function () {
                _this.countDownTime--;
                if (_this.countDownTime == 0) {
                    _this.countDownTime = _this.responseTime;
                    _this.startSpeak = true;
                    subscription_1.unsubscribe();
                }
            });
        }
        else {
            this.startRecord();
            //开始准备时间的倒计时
            this.countDownTime = this.responseTime;
            var subscription_2 = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(1000)
                .takeWhile(function () { return _this.countDownTime > 0; })
                .subscribe(function () {
                _this.countDownTime--;
                if (_this.countDownTime == 0) {
                    _this.stopRecord();
                    subscription_2.unsubscribe();
                }
            });
        }
    };
    TpoSpeakingRecorderComponent.prototype.startRecord = function () {
        var mediaConstraints = {
            audio: true
        };
        navigator.mediaDevices.getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    };
    TpoSpeakingRecorderComponent.prototype.stopRecord = function () {
        this.recordRTC.stopRecording(this.uploadRecordToServer.bind(this));
        this.stream.getAudioTracks().forEach(function (track) { return track.stop(); });
    };
    TpoSpeakingRecorderComponent.prototype.successCallback = function (stream) {
        this.stream = stream;
        this.recordRTC = __WEBPACK_IMPORTED_MODULE_2_recordrtc__(stream, this.options);
        this.recordRTC.startRecording();
    };
    TpoSpeakingRecorderComponent.prototype.uploadRecordToServer = function () {
        var _this = this;
        var fileName = this.getRandomFileName();
        var blob = this.recordRTC.getBlob();
        var formData = new FormData();
        var file = new File([blob], fileName, {
            type: 'audio/x-wav'
        });
        formData.append('record', file, fileName);
        this.isUploading = true;
        this.assignmentService.uploadSpeakingRecord(formData)
            .subscribe(function (resp) {
            _this.isUploading = false;
            _this.uploaded.emit(resp.filename);
            console.log(resp);
        });
    };
    TpoSpeakingRecorderComponent.prototype.errorCallback = function () { };
    TpoSpeakingRecorderComponent.prototype.getRandomFileName = function () {
        var fileName = '';
        for (var i = 0; i < 15; i++) {
            var number = Math.floor(Math.random() * 1000);
            var code = void 0;
            if (number <= 500)
                code = number % 10; //生成0-9的数字
            else
                code = String.fromCharCode(65 + number % 26); //生成A-Z的字母
            fileName += code.toString();
        }
        return fileName + '.ogg';
    };
    return TpoSpeakingRecorderComponent;
}());



/***/ }),

/***/ "../../../../ng2-dnd/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__ = __webpack_require__("../../../../ng2-dnd/src/draggable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__ = __webpack_require__("../../../../ng2-dnd/src/droppable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__ = __webpack_require__("../../../../ng2-dnd/src/sortable.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__ = __webpack_require__("../../../../ng2-dnd/src/abstract.component.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd












var providers = [
    __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["a" /* DragDropConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["a" /* DragDropService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["c" /* dragDropServiceFactory */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["b" /* DragDropSortableService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["d" /* dragDropSortableServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["a" /* DragDropConfig */]] }
];
var DndModule = (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule,
            providers: providers
        };
    };
    return DndModule;
}());

DndModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["b" /* DraggableHandleComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["c" /* SortableHandleComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["b" /* DraggableHandleComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["c" /* SortableHandleComponent */]],
            },] },
];
/** @nocollapse */
DndModule.ctorParameters = function () { return []; };


/***/ }),

/***/ "../../../../ng2-dnd/src/abstract.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AbstractHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_utils__ = __webpack_require__("../../../../ng2-dnd/src/dnd.utils.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd





var AbstractComponent = (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(_this._target)) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isPresent */])(_this.dragImage)) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["e" /* isString */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["b" /* createImage */])(_this.dragImage));
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["c" /* isFunction */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* callFun */])(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isPresent */])(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponent.prototype.setDragHandle = function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            _this._cdr.detectChanges();
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // Necessary. Allows us to drop.
        this._preventAndStop(event);
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    AbstractComponent.prototype._isDropAllowed = function (event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    AbstractComponent.prototype._preventAndStop = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    return AbstractComponent;
}());

AbstractComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */] },
];
/** @nocollapse */
AbstractComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
]; };
var AbstractHandleComponent = (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());



/***/ }),

/***/ "../../../../ng2-dnd/src/dnd.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataTransferEffect */
/* unused harmony export DragImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__("../../../../ng2-dnd/src/dnd.utils.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

var DataTransferEffect = (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    return DataTransferEffect;
}());

DataTransferEffect.COPY = new DataTransferEffect('copy');
DataTransferEffect.LINK = new DataTransferEffect('link');
DataTransferEffect.MOVE = new DataTransferEffect('move');
DataTransferEffect.NONE = new DataTransferEffect('none');
var DragImage = (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["e" /* isString */])(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());

var DragDropConfig = (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());



/***/ }),

/***/ "../../../../ng2-dnd/src/dnd.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DragDropData */
/* harmony export (immutable) */ __webpack_exports__["c"] = dragDropServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropService; });
/* harmony export (immutable) */ __webpack_exports__["d"] = dragDropSortableServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DragDropSortableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_utils__ = __webpack_require__("../../../../ng2-dnd/src/dnd.utils.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd



var DragDropData = (function () {
    function DragDropData() {
    }
    return DragDropData;
}());

function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    return DragDropService;
}());

DragDropService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */] },
];
/** @nocollapse */
DragDropService.ctorParameters = function () { return []; };
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["d" /* isPresent */])(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["d" /* isPresent */])(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    return DragDropSortableService;
}());

DragDropSortableService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */] },
];
/** @nocollapse */
DragDropSortableService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */], },
]; };


/***/ }),

/***/ "../../../../ng2-dnd/src/dnd.utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["c"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["b"] = createImage;
/* harmony export (immutable) */ __webpack_exports__["a"] = callFun;
/**
 * Check and return true if an object is type of string
 */
/**
 * Check and return true if an object is type of string
 */ function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}


/***/ }),

/***/ "../../../../ng2-dnd/src/draggable.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DraggableHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__("../../../../ng2-dnd/src/abstract.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DraggableComponent = (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    return DraggableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

DraggableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */], args: [{ selector: '[dnd-draggable]' },] },
];
/** @nocollapse */
DraggableComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
]; };
DraggableComponent.propDecorators = {
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dragEnabled",] },],
    'onDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */] },],
    'onDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */] },],
    'dragData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */] },],
    'onDragSuccessCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */], args: ["onDragSuccess",] },],
    'dropzones': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dropZones",] },],
    'effectallowed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["effectAllowed",] },],
    'effectcursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["effectCursor",] },],
    'dragImage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */] },],
    'cloneItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */] },],
};
var DraggableHandleComponent = (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    return DraggableHandleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["b" /* AbstractHandleComponent */]));

DraggableHandleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */], args: [{ selector: '[dnd-draggable-handle]' },] },
];
/** @nocollapse */
DraggableHandleComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
    { type: DraggableComponent, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
]; };


/***/ }),

/***/ "../../../../ng2-dnd/src/droppable.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__("../../../../ng2-dnd/src/abstract.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DroppableComponent = (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        var dataTransfer = event.dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    return DroppableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

DroppableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */], args: [{ selector: '[dnd-droppable]' },] },
];
/** @nocollapse */
DroppableComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
]; };
DroppableComponent.propDecorators = {
    'droppable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dropEnabled",] },],
    'onDropSuccess': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */] },],
    'onDragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */] },],
    'onDragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */] },],
    'onDragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */] },],
    'allowdrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["allowDrop",] },],
    'dropzones': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dropZones",] },],
    'effectallowed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["effectAllowed",] },],
    'effectcursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["effectCursor",] },],
};


/***/ }),

/***/ "../../../../ng2-dnd/src/sortable.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SortableHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__("../../../../ng2-dnd/src/abstract.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__("../../../../ng2-dnd/src/dnd.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__("../../../../ng2-dnd/src/dnd.service.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SortableContainer = (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableDataService = _sortableDataService;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer._sortableData[this._sortableDataService.index];
            // Check does element exist in sortableData of this Container
            if (this._sortableData.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer._sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableData.unshift(item);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    return SortableContainer;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

SortableContainer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */], args: [{ selector: '[dnd-sortable-container]' },] },
];
/** @nocollapse */
SortableContainer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["b" /* DragDropSortableService */], },
]; };
SortableContainer.propDecorators = {
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dragEnabled",] },],
    'sortableData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */] },],
    'dropzones': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dropZones",] },],
};
var SortableComponent = (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragStartCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDragEndCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.onDropSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.sortableData[this._sortableDataService.index];
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.sortableData.splice(this.index, 0, item);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    return SortableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

SortableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */], args: [{ selector: '[dnd-sortable]' },] },
];
/** @nocollapse */
SortableComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
    { type: SortableContainer, },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["b" /* DragDropSortableService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
]; };
SortableComponent.propDecorators = {
    'index': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ['sortableIndex',] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dragEnabled",] },],
    'droppable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["dropEnabled",] },],
    'dragData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */] },],
    'effectallowed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["effectAllowed",] },],
    'effectcursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */], args: ["effectCursor",] },],
    'onDragSuccessCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */], args: ["onDragSuccess",] },],
    'onDragStartCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */], args: ["onDragStart",] },],
    'onDragOverCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */], args: ["onDragOver",] },],
    'onDragEndCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */], args: ["onDragEnd",] },],
    'onDropSuccessCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */], args: ["onDropSuccess",] },],
};
var SortableHandleComponent = (function (_super) {
    __extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    return SortableHandleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["b" /* AbstractHandleComponent */]));

SortableHandleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */], args: [{ selector: '[dnd-sortable-handle]' },] },
];
/** @nocollapse */
SortableHandleComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
    { type: SortableComponent, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], },
]; };


/***/ }),

/***/ "../../../../process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../recordrtc/RecordRTC.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2017-10-01 2:53:36 PM UTC

// ________________
// RecordRTC v5.4.5

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function RecordRTC(mediaStream, config) {
    if (!mediaStream) {
        throw 'First parameter is required.';
    }

    config = config || {
        type: 'video'
    };

    config = new RecordRTCConfiguration(mediaStream, config);

    // a reference to user's recordRTC object
    var self = this;

    function startRecording() {
        if (!config.disableLogs) {
            console.log('started recording ' + config.type + ' stream.');
        }

        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder.record();

            setState('recording');

            if (self.recordingDuration) {
                handleRecordingDuration();
            }
            return self;
        }

        initRecorder(function() {
            if (self.recordingDuration) {
                handleRecordingDuration();
            }
        });

        return self;
    }

    function initRecorder(initCallback) {
        if (initCallback) {
            config.initCallback = function() {
                initCallback();
                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
            };
        }

        var Recorder = new GetRecorderType(mediaStream, config);

        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();

        setState('recording');

        if (!config.disableLogs) {
            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
        }
    }

    function stopRecording(callback) {
        callback = callback || function() {};

        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state === 'paused') {
            self.resumeRecording();

            setTimeout(function() {
                stopRecording(callback);
            }, 1);
            return;
        }

        if (self.state !== 'recording' && !config.disableLogs) {
            console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }

        if (!config.disableLogs) {
            console.log('Stopped recording ' + config.type + ' stream.');
        }

        if (config.type !== 'gif') {
            mediaRecorder.stop(_callback);
        } else {
            mediaRecorder.stop();
            _callback();
        }

        setState('stopped');

        function _callback(__blob) {
            if (!mediaRecorder) {
                if (typeof callback.call === 'function') {
                    callback.call(self, '');
                } else {
                    callback('');
                }
                return;
            }

            Object.keys(mediaRecorder).forEach(function(key) {
                if (typeof mediaRecorder[key] === 'function') {
                    return;
                }

                self[key] = mediaRecorder[key];
            });

            var blob = mediaRecorder.blob;

            if (!blob) {
                if (__blob) {
                    mediaRecorder.blob = blob = __blob;
                } else {
                    throw 'Recording failed.';
                }
            }

            if (blob && !config.disableLogs) {
                console.log(blob.type, '->', bytesToSize(blob.size));
            }

            if (callback) {
                var url = URL.createObjectURL(blob);

                if (typeof callback.call === 'function') {
                    callback.call(self, url);
                } else {
                    callback(url);
                }
            }

            if (!config.autoWriteToDisk) {
                return;
            }

            getDataURL(function(dataURL) {
                var parameter = {};
                parameter[config.type + 'Blob'] = dataURL;
                DiskStorage.Store(parameter);
            });
        }
    }

    function pauseRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'recording') {
            if (!config.disableLogs) {
                console.warn('Unable to pause the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('paused');

        mediaRecorder.pause();

        if (!config.disableLogs) {
            console.log('Paused recording.');
        }
    }

    function resumeRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'paused') {
            if (!config.disableLogs) {
                console.warn('Unable to resume the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('recording');

        // not all libs have this method yet
        mediaRecorder.resume();

        if (!config.disableLogs) {
            console.log('Resumed recording.');
        }
    }

    function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
    }

    function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
            throw 'Pass a callback function over getDataURL.';
        }

        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

        if (!blob) {
            if (!config.disableLogs) {
                console.warn('Blob encoder did not finish its job yet.');
            }

            setTimeout(function() {
                getDataURL(callback, _mediaRecorder);
            }, 1000);
            return;
        }

        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
            var webWorker = processInWebWorker(readFile);

            webWorker.onmessage = function(event) {
                callback(event.data);
            };

            webWorker.postMessage(blob);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
                callback(event.target.result);
            };
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            URL.revokeObjectURL(blob);
            return worker;
        }
    }

    function handleRecordingDuration(counter) {
        counter = counter || 0;

        if (self.state === 'paused') {
            setTimeout(function() {
                handleRecordingDuration(counter);
            }, 1000);
            return;
        }

        if (self.state === 'stopped') {
            return;
        }

        if (counter >= self.recordingDuration) {
            stopRecording(self.onRecordingStopped);
            return;
        }

        counter += 1000; // 1-second

        setTimeout(function() {
            handleRecordingDuration(counter);
        }, 1000);
    }

    function setState(state) {
        if (!self) {
            return;
        }

        self.state = state;

        if (typeof self.onStateChanged.call === 'function') {
            self.onStateChanged.call(self, state);
        } else {
            self.onStateChanged(state);
        }
    }

    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

    function warningLog() {
        if (config.disableLogs === true) {
            return;
        }

        console.warn(WARNING);
    }

    var mediaRecorder;

    var returnObject = {
        /**
         * This method starts the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var recorder = RecordRTC(mediaStream, {
         *     type: 'video'
         * });
         * recorder.startRecording();
         */
        startRecording: startRecording,

        /**
         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     // use either "this" or "recorder" object; both are identical
         *     video.src = this.toURL();
         *     var blob = this.getBlob();
         * });
         */
        stopRecording: stopRecording,

        /**
         * This method pauses the recording. You can resume recording using "resumeRecording" method.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Firefox is unable to pause the recording. Fix it.
         * @example
         * recorder.pauseRecording();  // pause the recording
         * recorder.resumeRecording(); // resume again
         */
        pauseRecording: pauseRecording,

        /**
         * This method resumes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.pauseRecording();  // first of all, pause the recording
         * recorder.resumeRecording(); // now resume it
         */
        resumeRecording: resumeRecording,

        /**
         * This method initializes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * recorder.initRecorder();
         */
        initRecorder: initRecorder,

        /**
         * Ask RecordRTC to auto-stop the recording after 5 minutes.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var fiveMinutes = 5 * 1000 * 60;
         * recorder.setRecordingDuration(fiveMinutes, function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         * 
         * // or otherwise
         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         */
        setRecordingDuration: function(recordingDuration, callback) {
            if (typeof recordingDuration === 'undefined') {
                throw 'recordingDuration is required.';
            }

            if (typeof recordingDuration !== 'number') {
                throw 'recordingDuration must be a number.';
            }

            self.recordingDuration = recordingDuration;
            self.onRecordingStopped = callback || function() {};

            return {
                onRecordingStopped: function(callback) {
                    self.onRecordingStopped = callback;
                }
            };
        },

        /**
         * This method can be used to clear/reset all the recorded data.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            mediaRecorder.clearRecordedData();

            if (!config.disableLogs) {
                console.log('Cleared old recorded data.');
            }
        },

        /**
         * Get the recorded blob. Use this method inside the "stopRecording" callback.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.getBlob();
         *
         *     var file = new File([blob], 'filename.webm', {
         *         type: 'video/webm'
         *     });
         *
         *     var formData = new FormData();
         *     formData.append('file', file); // upload "File" object rather than a "Blob"
         *     uploadToServer(formData);
         * });
         * @returns {Blob} Returns recorded data as "Blob" object.
         */
        getBlob: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return mediaRecorder.blob;
        },

        /**
         * Get data-URI instead of Blob.
         * @param {function} callback - Callback to get the Data-URI.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     recorder.getDataURL(function(dataURI) {
         *         video.src = dataURI;
         *     });
         * });
         */
        getDataURL: getDataURL,

        /**
         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     video.src = this.toURL();
         * });
         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
         */
        toURL: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return URL.createObjectURL(mediaRecorder.blob);
        },

        /**
         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var internal = recorder.getInternalRecorder();
         * if(internal instanceof MultiStreamRecorder) {
         *     internal.addStreams([newAudioStream]);
         *     internal.resetVideoStreams([screenStream]);
         * }
         * @returns {Object} Returns internal recording object.
         */
        getInternalRecorder: function() {
            return mediaRecorder;
        },

        /**
         * Invoke save-as dialog to save the recorded blob into your disk.
         * @param {string} fileName - Set your own file name.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     this.save('file-name');
         *
         *     // or manually:
         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
         * });
         */
        save: function(fileName) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },

        /**
         * This method gets a blob from indexed-DB storage.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.getFromDisk(function(dataURL) {
         *     video.src = dataURL;
         * });
         */
        getFromDisk: function(callback) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            RecordRTC.getFromDisk(config.type, callback);
        },

        /**
         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
         * @type {Array.<Array>}
         * @param {Array} arrayOfWebPImages - Array of webp images.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * var arrayOfWebPImages = [];
         * arrayOfWebPImages.push({
         *     duration: index,
         *     image: 'data:image/webp;base64,...'
         * });
         * recorder.setAdvertisementArray(arrayOfWebPImages);
         */
        setAdvertisementArray: function(arrayOfWebPImages) {
            config.advertisement = [];

            var length = arrayOfWebPImages.length;
            for (var i = 0; i < length; i++) {
                config.advertisement.push({
                    duration: i,
                    image: arrayOfWebPImages[i]
                });
            }
        },

        /**
         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
         * @property {Blob} blob - Recorded Blob can be accessed using this property.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.blob;
         *
         *     // below one is recommended
         *     var blob = this.getBlob();
         * });
         */
        blob: null,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} bufferSize - Buffer-size used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
         * });
         */
        bufferSize: 0,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} sampleRate - Sample-rates used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
         * });
         */
        sampleRate: 0,

        /**
         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var arrayBuffer = this.buffer;
         *     alert(arrayBuffer.byteLength);
         * });
         */
        buffer: null,

        /**
         * This method resets the recorder. So that you can reuse single recorder instance many times.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.reset();
         * recorder.startRecording();
         */
        reset: function() {
            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
                mediaRecorder.clearRecordedData();
            }
            mediaRecorder = null;
            setState('inactive');
            self.blob = null;
        },

        /**
         * This method is called whenever recorder's state changes. Use this as an "event".
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.onStateChanged = function(state) {
         *     console.log('Recorder state: ', state);
         * };
         */
        onStateChanged: function(state) {
            if (!config.disableLogs) {
                console.log('Recorder state changed:', state);
            }
        },

        /**
         * A recorder can have inactive, recording, paused or stopped states.
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * // this looper function will keep you updated about the recorder's states.
         * (function looper() {
         *     document.querySelector('h1').innerHTML = 'Recorder's state is: ' + recorder.state;
         *     if(recorder.state === 'stopped') return; // ignore+stop
         *     setTimeout(looper, 1000); // update after every 3-seconds
         * })();
         * recorder.startRecording();
         */
        state: 'inactive',

        /**
         * Get recorder's readonly state.
         * @method
         * @memberof RecordRTC
         * @example
         * var state = recorder.getState();
         * @returns {String} Returns recording state.
         */
        getState: function() {
            return self.state;
        },

        /**
         * Destroy RecordRTC instance. Clear all recorders and objects.
         * @method
         * @memberof RecordRTC
         * @example
         * recorder.destroy();
         */
        destroy: function() {
            var disableLogs = config.disableLogs;

            config.disableLogs = true;
            self.reset();
            config = {};
            setState('destroyed');
            returnObject = self = null;

            if (!disableLogs) {
                console.warn('RecordRTC is destroyed.');
            }
        }
    };

    if (!this) {
        self = returnObject;
        return returnObject;
    }

    // if someone wants to use RecordRTC with the "new" keyword.
    for (var prop in returnObject) {
        this[prop] = returnObject[prop];
    }

    self = this;

    return returnObject;
}

if (true /* && !!module.exports*/ ) {
    module.exports = RecordRTC;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return RecordRTC;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

RecordRTC.getFromDisk = function(type, callback) {
    if (!callback) {
        throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== 'all' && _type === type + 'Blob' && callback) {
            callback(dataURL);
        }

        if (type === 'all' && callback) {
            callback(dataURL, _type.replace('Blob', ''));
        }
    });
};

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
RecordRTC.writeToDisk = function(options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};
    if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                options.gif.getDataURL(function(gifDataURL) {
                    DiskStorage.Store({
                        audioBlob: audioDataURL,
                        videoBlob: videoDataURL,
                        gifBlob: gifDataURL
                    });
                });
            });
        });
    } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    videoBlob: videoDataURL
                });
            });
        });
    } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    videoBlob: videoDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
            DiskStorage.Store({
                audioBlob: audioDataURL
            });
        });
    } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
                videoBlob: videoDataURL
            });
        });
    } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
                gifBlob: gifDataURL
            });
        });
    }
};

// __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */

function RecordRTCConfiguration(mediaStream, config) {
    if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
            config.type = 'video';
        } else if (!!config.audio && !config.video) {
            config.type = 'audio';
        }
    }

    if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
                config.type = 'video';
            } else if (mediaStream.getAudioTracks().length && !mediaStream.getVideoTracks().length) {
                config.type = 'audio';
            } else if (!mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
                config.type = 'audio';
            } else {
                // config.type = 'UnKnown';
            }
        }
    }

    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (!config.mimeType) {
            config.mimeType = 'video/webm';
        }

        if (!config.type) {
            config.type = config.mimeType.split('/')[0];
        }

        if (!config.bitsPerSecond) {
            // config.bitsPerSecond = 128000;
        }
    }

    // consider default type=audio
    if (!config.type) {
        if (config.mimeType) {
            config.type = config.mimeType.split('/')[0];
        }
        if (!config.type) {
            config.type = 'audio';
        }
    }

    return config;
}

// __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */

function GetRecorderType(mediaStream, config) {
    var recorder;

    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
    if (isChrome || isEdge || isOpera) {
        // Media Stream Recording API has not been implemented in chrome yet;
        // That's why using WebAudio API to record stereo audio in WAV format
        recorder = StereoAudioRecorder;
    }

    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
    }

    // video recorder (in WebM format)
    if (config.type === 'video' && (isChrome || isOpera)) {
        recorder = WhammyRecorder;
    }

    // video recorder (in Gif format)
    if (config.type === 'gif') {
        recorder = GifRecorder;
    }

    // html2canvas recording!
    if (config.type === 'canvas') {
        recorder = CanvasRecorder;
    }

    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if ((mediaStream.getVideoTracks && mediaStream.getVideoTracks().length) || (mediaStream.getAudioTracks && mediaStream.getAudioTracks().length)) {
            // audio-only recording
            if (config.type === 'audio') {
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
                    recorder = MediaStreamRecorder;
                }
                // else recorder = StereoAudioRecorder;
            } else {
                // video or screen tracks
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
                    recorder = MediaStreamRecorder;
                }
            }
        }
    }

    if (config.recorderType) {
        recorder = config.recorderType;
    }

    if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
    }

    if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
    }

    return recorder;
}

// _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */

function MRecordRTC(mediaStream) {

    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function(_mediaStream) {
        if (_mediaStream) {
            mediaStream = _mediaStream;
        }
    };

    /**
     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder
     *     gif  : true  // TRUE or GifRecorder
     * };
     */
    this.mediaType = {
        audio: true,
        video: true
    };

    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */
    this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
            audio: null,
            video: null,
            gif: null
        };

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && mediaStream.getAudioTracks && !mediaStream.getAudioTracks().length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && mediaStream.getVideoTracks && !mediaStream.getVideoTracks().length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && mediaStream.getVideoTracks && !mediaStream.getVideoTracks().length) {
            mediaType.gif = false;
        }

        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
            throw 'MediaStream must have either audio or video tracks.';
        }

        if (!!mediaType.audio) {
            recorderType = null;
            if (typeof mediaType.audio === 'function') {
                recorderType = mediaType.audio;
            }

            this.audioRecorder = new RecordRTC(mediaStream, {
                type: 'audio',
                bufferSize: this.bufferSize,
                sampleRate: this.sampleRate,
                numberOfAudioChannels: this.numberOfAudioChannels || 2,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.audio,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.video) {
                this.audioRecorder.startRecording();
            }
        }

        if (!!mediaType.video) {
            recorderType = null;
            if (typeof mediaType.video === 'function') {
                recorderType = mediaType.video;
            }

            var newStream = mediaStream;

            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
                var videoTrack = mediaStream.getVideoTracks()[0];

                if (!!navigator.mozGetUserMedia) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT support webp-encoding yet
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream([videoTrack]);
                }
            }

            this.videoRecorder = new RecordRTC(newStream, {
                type: 'video',
                video: this.video,
                canvas: this.canvas,
                frameInterval: this.frameInterval || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.video,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            // this line prevents StereoAudioRecorder
            // todo: fix it
            if (isMediaRecorderCompatible() /* && !this.audioRecorder */ ) {
                self.audioRecorder = null;
                self.videoRecorder.startRecording();
            } else {
                self.videoRecorder.initRecorder(function() {
                    self.audioRecorder.initRecorder(function() {
                        // Both recorders are ready to record things accurately
                        self.videoRecorder.startRecording();
                        self.audioRecorder.startRecording();
                    });
                });
            }
        }

        if (!!mediaType.gif) {
            recorderType = null;
            if (typeof mediaType.gif === 'function') {
                recorderType = mediaType.gif;
            }
            this.gifRecorder = new RecordRTC(mediaStream, {
                type: 'gif',
                frameRate: this.frameRate || 200,
                quality: this.quality || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.gif
            });
            this.gifRecorder.startRecording();
        }
    };

    /**
     * This method stops recording.
     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */
    this.stopRecording = function(callback) {
        callback = callback || function() {};

        if (this.audioRecorder) {
            this.audioRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'audio');
            });
        }

        if (this.videoRecorder) {
            this.videoRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'video');
            });
        }

        if (this.gifRecorder) {
            this.gifRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'gif');
            });
        }
    };

    /**
     * This method pauses recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.pauseRecording();
     */
    this.pauseRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.pauseRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.pauseRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.pauseRecording();
        }
    };

    /**
     * This method resumes recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.resumeRecording();
     */
    this.resumeRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.resumeRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.resumeRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.resumeRecording();
        }
    };

    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     * // or
     * var audioBlob = recorder.getBlob().audio;
     * var videoBlob = recorder.getBlob().video;
     */
    this.getBlob = function(callback) {
        var output = {};

        if (this.audioRecorder) {
            output.audio = this.audioRecorder.getBlob();
        }

        if (this.videoRecorder) {
            output.video = this.videoRecorder.getBlob();
        }

        if (this.gifRecorder) {
            output.gif = this.gifRecorder.getBlob();
        }

        if (callback) {
            callback(output);
        }

        return output;
    };

    /**
     * Destroy all recorder instances.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.destroy();
     */
    this.destroy = function() {
        if (this.audioRecorder) {
            this.audioRecorder.destroy();
            this.audioRecorder = null;
        }

        if (this.videoRecorder) {
            this.videoRecorder.destroy();
            this.videoRecorder = null;
        }

        if (this.gifRecorder) {
            this.gifRecorder.destroy();
            this.gifRecorder = null;
        }
    };

    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */
    this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
            if (blob.audio && blob.video) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    getDataURL(blob.video, function(_videoDataURL) {
                        callback({
                            audio: _audioDataURL,
                            video: _videoDataURL
                        });
                    });
                });
            } else if (blob.audio) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    callback({
                        audio: _audioDataURL
                    });
                });
            } else if (blob.video) {
                getDataURL(blob.video, function(_videoDataURL) {
                    callback({
                        video: _videoDataURL
                    });
                });
            }
        });

        function getDataURL(blob, callback00) {
            if (typeof Worker !== 'undefined') {
                var webWorker = processInWebWorker(function readFile(_blob) {
                    postMessage(new FileReaderSync().readAsDataURL(_blob));
                });

                webWorker.onmessage = function(event) {
                    callback00(event.data);
                };

                webWorker.postMessage(blob);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(event) {
                    callback00(event.target.result);
                };
            }
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            var url;
            if (typeof URL !== 'undefined') {
                url = URL;
            } else if (typeof webkitURL !== 'undefined') {
                url = webkitURL;
            } else {
                throw 'Neither URL nor webkitURL detected.';
            }
            url.revokeObjectURL(blob);
            return worker;
        }
    };

    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */
    this.writeToDisk = function() {
        RecordRTC.writeToDisk({
            audio: this.audioRecorder,
            video: this.videoRecorder,
            gif: this.gifRecorder
        });
    };

    /**
     * This method can be used to invoke a save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */
    this.save = function(args) {
        args = args || {
            audio: true,
            video: true,
            gif: true
        };

        if (!!args.audio && this.audioRecorder) {
            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
        }

        if (!!args.video && this.videoRecorder) {
            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
        }
        if (!!args.gif && this.gifRecorder) {
            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
        }
    };
}

/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function(that) {
    if (!that) {
        return;
    }

    if (typeof window !== 'undefined') {
        return;
    }

    if (typeof global === 'undefined') {
        return;
    }

    global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {}
    };

    if (!global.console) {
        global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
        global.console.error = global.console.log = global.console.log || function() {
            console.log(arguments);
        };
    }

    if (typeof document === 'undefined') {
        /*global document:true */
        that.document = {};

        document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
                getContext: function() {
                    return obj;
                },
                play: function() {},
                pause: function() {},
                drawImage: function() {},
                toDataURL: function() {
                    return '';
                }
            };
            return obj;
        };

        that.HTMLVideoElement = function() {};
    }

    if (typeof location === 'undefined') {
        /*global location:true */
        that.location = {
            protocol: 'file:',
            href: '',
            hash: ''
        };
    }

    if (typeof screen === 'undefined') {
        /*global screen:true */
        that.screen = {
            width: 0,
            height: 0
        };
    }

    if (typeof URL === 'undefined') {
        /*global screen:true */
        that.URL = {
            createObjectURL: function() {
                return '';
            },
            revokeObjectURL: function() {
                return '';
            }
        };
    }

    /*global window:true */
    that.window = global;
})(typeof global !== 'undefined' ? global : null);

// _____________________________
// Cross-Browser-Declarations.js

// animation-frame used in WebM recording

/*jshint -W079 */
var requestAnimationFrame = window.requestAnimationFrame;
if (typeof requestAnimationFrame === 'undefined') {
    if (typeof webkitRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = webkitRequestAnimationFrame;
    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = mozRequestAnimationFrame;
    } else if (typeof msRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = msRequestAnimationFrame;
    } else if (typeof requestAnimationFrame === 'undefined') {
        // via: https://gist.github.com/paulirish/1579671
        var lastTime = 0;

        /*global requestAnimationFrame:true */
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
}

/*jshint -W079 */
var cancelAnimationFrame = window.cancelAnimationFrame;
if (typeof cancelAnimationFrame === 'undefined') {
    if (typeof webkitCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = webkitCancelAnimationFrame;
    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = mozCancelAnimationFrame;
    } else if (typeof msCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = msCancelAnimationFrame;
    } else if (typeof cancelAnimationFrame === 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}

// WebAudio API representer
var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = mozAudioContext;
    }
}

/*jshint -W079 */
var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.mozGetUserMedia;
    }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron();

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
    if (!('getVideoTracks' in MediaStream.prototype)) {
        MediaStream.prototype.getVideoTracks = function() {
            if (!this.getTracks) {
                return [];
            }

            var tracks = [];
            this.getTracks().forEach(function(track) {
                if (track.kind.toString().indexOf('video') !== -1) {
                    tracks.push(track);
                }
            });
            return tracks;
        };

        MediaStream.prototype.getAudioTracks = function() {
            if (!this.getTracks) {
                return [];
            }

            var tracks = [];
            this.getTracks().forEach(function(track) {
                if (track.kind.toString().indexOf('audio') !== -1) {
                    tracks.push(track);
                }
            });
            return tracks;
        };
    }

    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
        MediaStream.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
                track.stop();
            });
        };
    }
}

// below function via: http://goo.gl/B3ae8c
/**
 * @param {number} bytes - Pass bytes and get formafted string.
 * @returns {string} - formafted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        try {
            file.type = 'video/webm';
        } catch (e) {}
    }

    var fileExtension = (file.type || 'video/webm').split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.download = fileFullName;

    hyperlink.style = 'display:none;opacity:0;color:transparent;';
    (document.body || document.documentElement).appendChild(hyperlink);

    if (typeof hyperlink.click === 'function') {
        hyperlink.click();
    } else {
        hyperlink.target = '_blank';
        hyperlink.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    URL.revokeObjectURL(hyperlink.href);
}

/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function setSrcObject(stream, element, ignoreCreateObjectURL) {
    if ('createObjectURL' in URL && !ignoreCreateObjectURL) {
        try {
            element.src = URL.createObjectURL(stream);
        } catch (e) {
            setSrcObject(stream, element, true);
            return;
        }
    } else if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        alert('createObjectURL/srcObject both are not supported.');
    }
}

// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Storage = {};

if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = (!!window.chrome && !isOpera) || isElectron();
    var isFirefox = typeof window.InstallTrigger !== 'undefined';

    if (isFirefox) {
        return true;
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    if (isChrome || isOpera) {
        verOffset = nAgt.indexOf('Chrome');
        fullVersion = nAgt.substring(verOffset + 7);
    }

    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    majorVersion = parseInt('' + fullVersion, 10);

    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return majorVersion >= 49;
}

// ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {}, // get intervals based blobs
 *     ignoreMutedMedia: true
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */

function MediaStreamRecorder(mediaStream, config) {
    var self = this;

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    if (typeof MediaRecorder === 'undefined') {
        throw 'Your browser does not supports Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
    }

    config = config || {
        // bitsPerSecond: 256 * 8 * 1024,
        mimeType: 'video/webm'
    };

    if (config.type === 'audio') {
        if (mediaStream.getVideoTracks().length && mediaStream.getAudioTracks().length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(mediaStream.getAudioTracks()[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(mediaStream.getAudioTracks());
            }
            mediaStream = stream;
        }

        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
        }

        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
            // forcing better codecs on Firefox (via #166)
            config.mimeType = 'audio/ogg';
        }
    }

    var arrayOfBlobs = [];

    /**
     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var arrayOfBlobs = recorder.getArrayOfBlobs();
     * @returns {Array} Returns array of recorded blobs.
     */
    this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
    };

    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // set defaults
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];

        var recorderHints = config;

        if (!config.disableLogs) {
            console.log('Passing following config over MediaRecorder API.', recorderHints);
        }

        if (mediaRecorder) {
            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
            mediaRecorder = null;
        }

        if (isChrome && !isMediaRecorderCompatible()) {
            // to support video-only recording on stable
            recorderHints = 'video/vp8';
        }

        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
                if (!config.disableLogs) {
                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
                }

                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
            }
        }

        // using MediaRecorder API here
        try {
            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

            // reset
            config.mimeType = recorderHints.mimeType;
        } catch (e) {
            // chrome-based fallback
            mediaRecorder = new MediaRecorder(mediaStream);
        }

        // old hack?
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
            if (!config.disableLogs) {
                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
            }
        }

        // ignore muted/disabled/inactive tracks
        mediaRecorder.ignoreMutedMedia = config.ignoreMutedMedia === true;

        // Dispatching OnDataAvailable Handler
        mediaRecorder.ondataavailable = function(e) {
            if (e.data) {
                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
            }

            if (typeof config.timeSlice === 'number') {
                if (e.data && e.data.size && e.data.size > 100) {
                    arrayOfBlobs.push(e.data);
                    updateTimeStamp();

                    if (typeof config.ondataavailable === 'function') {
                        // intervals based blobs
                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                            type: getMimeType(recorderHints)
                        });
                        config.ondataavailable(blob);
                    }
                }
                return;
            }

            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
                // make sure that stopRecording always getting fired
                // even if there is invalid data
                if (self.recordingCallback) {
                    self.recordingCallback(new Blob([], {
                        type: getMimeType(recorderHints)
                    }));
                    self.recordingCallback = null;
                }
                return;
            }

            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                type: getMimeType(recorderHints)
            });

            if (self.recordingCallback) {
                self.recordingCallback(self.blob);
                self.recordingCallback = null;
            }
        };

        mediaRecorder.onstart = function() {
            allStates.push('started');
        };

        mediaRecorder.onpause = function() {
            allStates.push('paused');
        };

        mediaRecorder.onresume = function() {
            allStates.push('resumed');
        };

        mediaRecorder.onstop = function() {
            allStates.push('stopped');
        };

        mediaRecorder.onerror = function(error) {
            allStates.push('error: ' + error);

            if (!config.disableLogs) {
                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
                    console.error('MediaRecorder security error', error);
                }

                // older code below
                else if (error.name === 'OutOfMemory') {
                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'IllegalStreamModification') {
                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'OtherRecordingError') {
                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'GenericError') {
                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
                } else {
                    console.error('MediaRecorder Error', error);
                }
            }

            (function(looper) {
                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
                    delete config.timeslice;

                    // 10 minutes, enough?
                    mediaRecorder.start(10 * 60 * 1000);
                    return;
                }

                setTimeout(looper, 1000);
            })();

            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
                mediaRecorder.stop();
            }
        };

        if (typeof config.timeSlice === 'number') {
            updateTimeStamp();
            mediaRecorder.start(config.timeSlice);
        } else {
            // default is 60 minutes; enough?
            // use config => {timeSlice: 1000} otherwise

            mediaRecorder.start(3.6e+6);
        }

        if (config.initCallback) {
            config.initCallback(); // old code
        }
    };

    /**
     * @property {Array} timestamps - Array of time stamps
     * @memberof MediaStreamRecorder
     * @example
     * console.log(recorder.timestamps);
     */
    this.timestamps = [];

    function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());

        if (typeof config.onTimeStamp === 'function') {
            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
    }

    function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
            return mediaRecorder.mimeType;
        }

        return secondObject.mimeType || 'video/webm';
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

        if (!mediaRecorder) {
            return;
        }

        this.recordingCallback = callback;

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        if (typeof config.timeSlice === 'number') {
            setTimeout(function() {
                self.blob = new Blob(arrayOfBlobs, {
                    type: getMimeType(config)
                });

                self.recordingCallback(self.blob);
            }, 100);
        }
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            self.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
    }

    // Reference to "MediaRecorder" object
    var mediaRecorder;

    /**
     * Access to native MediaRecorder API
     * @method
     * @memberof MediaStreamRecorder
     * @instance
     * @example
     * var internal = recorder.getInternalRecorder();
     * internal.ondataavailable = function() {}; // override
     * internal.stream, internal.onpause, internal.onstop, etc.
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return mediaRecorder;
    };

    function isMediaStreamActive() {
        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function() {
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;


    /**
     * Get MediaRecorder readonly state.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        if (!mediaRecorder) {
            return 'inactive';
        }

        return mediaRecorder.state || 'inactive';
    };

    // list of all recording states
    var allStates = [];

    /**
     * Get MediaRecorder all recording states.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getAllStates();
     * @returns {Array} Returns all recording states
     */
    this.getAllStates = function() {
        return allStates;
    };

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = false; // disable to minimize CPU usage
    }

    var self = this;

    // this method checks if media stream is stopped
    // or if any track is ended.
    (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            self.stop();
            return;
        }

        setTimeout(looper, 1000); // check every second
    })();

    // for debugging
    this.name = 'MediaStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
}

// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */

function StereoAudioRecorder(mediaStream, config) {
    if (!mediaStream.getAudioTracks().length) {
        throw 'Your stream has no audio tracks.';
    }

    config = config || {};

    var self = this;

    // variables
    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    var jsAudioNode;

    var numberOfAudioChannels = 2;

    /**
     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
     * @property {number} desiredSampRate - Desired Bits per sample * 1000
     * @memberof StereoAudioRecorder
     * @instance
     * @example
     * var recorder = StereoAudioRecorder(mediaStream, {
     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
     * });
     */
    var desiredSampRate = config.desiredSampRate;

    // backward compatibility
    if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
    }

    if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
    }

    if (!config.disableLogs) {
        console.log('StereoAudioRecorder is set to record number of channels: ', numberOfAudioChannels);
    }

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = true;
    }

    function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
            // always return "true"
            return true;
        }

        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        // reset the buffers for the new recording
        leftchannel.length = rightchannel.length = 0;
        recordingLength = 0;

        if (audioInput) {
            audioInput.connect(jsAudioNode);
        }

        // to prevent self audio to be connected with speakers
        // jsAudioNode.connect(context.destination);

        isAudioProcessStarted = isPaused = false;
        recording = true;
    };

    function mergeLeftRightBuffers(config, callback) {
        function mergeAudioBuffers(config, cb) {
            var numberOfAudioChannels = config.numberOfAudioChannels;

            // todo: "slice(0)" --- is it causes loop? Should be removed?
            var leftBuffers = config.leftBuffers.slice(0);
            var rightBuffers = config.rightBuffers.slice(0);
            var sampleRate = config.sampleRate;
            var internalInterleavedLength = config.internalInterleavedLength;
            var desiredSampRate = config.desiredSampRate;

            if (numberOfAudioChannels === 2) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);
                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
                }
            }

            if (numberOfAudioChannels === 1) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                }
            }

            // set sample rate as desired sample rate
            if (desiredSampRate) {
                sampleRate = desiredSampRate;
            }

            // for changing the sampling rate, reference:
            // http://stackoverflow.com/a/28977136/552182
            function interpolateArray(data, newSampleRate, oldSampleRate) {
                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
                //var newData = new Array();
                var newData = [];
                //var springFactor = new Number((data.length - 1) / (fitCount - 1));
                var springFactor = Number((data.length - 1) / (fitCount - 1));
                newData[0] = data[0]; // for new allocation
                for (var i = 1; i < fitCount - 1; i++) {
                    var tmp = i * springFactor;
                    //var before = new Number(Math.floor(tmp)).toFixed();
                    //var after = new Number(Math.ceil(tmp)).toFixed();
                    var before = Number(Math.floor(tmp)).toFixed();
                    var after = Number(Math.ceil(tmp)).toFixed();
                    var atPoint = tmp - before;
                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
                }
                newData[fitCount - 1] = data[data.length - 1]; // for new allocation
                return newData;
            }

            function linearInterpolate(before, after, atPoint) {
                return before + (after - before) * atPoint;
            }

            function mergeBuffers(channelBuffer, rLength) {
                var result = new Float64Array(rLength);
                var offset = 0;
                var lng = channelBuffer.length;

                for (var i = 0; i < lng; i++) {
                    var buffer = channelBuffer[i];
                    result.set(buffer, offset);
                    offset += buffer.length;
                }

                return result;
            }

            function interleave(leftChannel, rightChannel) {
                var length = leftChannel.length + rightChannel.length;

                var result = new Float64Array(length);

                var inputIndex = 0;

                for (var index = 0; index < length;) {
                    result[index++] = leftChannel[inputIndex];
                    result[index++] = rightChannel[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function writeUTFBytes(view, offset, string) {
                var lng = string.length;
                for (var i = 0; i < lng; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // interleave both channels together
            var interleaved;

            if (numberOfAudioChannels === 2) {
                interleaved = interleave(leftBuffers, rightBuffers);
            }

            if (numberOfAudioChannels === 1) {
                interleaved = leftBuffers;
            }

            var interleavedLength = interleaved.length;

            // create wav file
            var resultingBufferLength = 44 + interleavedLength * 2;

            var buffer = new ArrayBuffer(resultingBufferLength);

            var view = new DataView(buffer);

            // RIFF chunk descriptor/identifier 
            writeUTFBytes(view, 0, 'RIFF');

            // RIFF chunk length
            view.setUint32(4, 44 + interleavedLength * 2, true);

            // RIFF type 
            writeUTFBytes(view, 8, 'WAVE');

            // format chunk identifier 
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');

            // format chunk length 
            view.setUint32(16, 16, true);

            // sample format (raw)
            view.setUint16(20, 1, true);

            // stereo (2 channels)
            view.setUint16(22, numberOfAudioChannels, true);

            // sample rate 
            view.setUint32(24, sampleRate, true);

            // byte rate (sample rate * block align)
            view.setUint32(28, sampleRate * 2, true);

            // block align (channel count * bytes per sample) 
            view.setUint16(32, numberOfAudioChannels * 2, true);

            // bits per sample 
            view.setUint16(34, 16, true);

            // data sub-chunk
            // data chunk identifier 
            writeUTFBytes(view, 36, 'data');

            // data chunk length 
            view.setUint32(40, interleavedLength * 2, true);

            // write the PCM samples
            var lng = interleavedLength;
            var index = 44;
            var volume = 1;
            for (var i = 0; i < lng; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }

            if (cb) {
                return cb({
                    buffer: buffer,
                    view: view
                });
            }

            postMessage({
                buffer: buffer,
                view: view
            });
        }

        if (!isChrome) {
            // its Microsoft Edge
            mergeAudioBuffers(config, function(data) {
                callback(data.buffer, data.view);
            });
            return;
        }


        var webWorker = processInWebWorker(mergeAudioBuffers);

        webWorker.onmessage = function(event) {
            callback(event.data.buffer, event.data.view);

            // release memory
            URL.revokeObjectURL(webWorker.workerURL);
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (e) {' + _function.name + '(e.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        // stop recording
        recording = false;

        // to make sure onaudioprocess stops firing
        // audioInput.disconnect();

        mergeLeftRightBuffers({
            desiredSampRate: desiredSampRate,
            sampleRate: sampleRate,
            numberOfAudioChannels: numberOfAudioChannels,
            internalInterleavedLength: recordingLength,
            leftBuffers: leftchannel,
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel
        }, function(buffer, view) {
            /**
             * @property {Blob} blob - The recorded blob object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var blob = recorder.blob;
             * });
             */
            self.blob = new Blob([view], {
                type: 'audio/wav'
            });

            /**
             * @property {ArrayBuffer} buffer - The recorded buffer object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var buffer = recorder.buffer;
             * });
             */
            self.buffer = new ArrayBuffer(view.buffer.byteLength);

            /**
             * @property {DataView} view - The recorded data-view object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var view = recorder.view;
             * });
             */
            self.view = view;

            self.sampleRate = desiredSampRate || sampleRate;
            self.bufferSize = bufferSize;

            // recorded audio length
            self.length = recordingLength;

            if (callback) {
                callback(self.blob);
            }

            isAudioProcessStarted = false;
        });
    };

    if (!Storage.AudioContextConstructor) {
        Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    var context = Storage.AudioContextConstructor;

    // creates an audio node from the microphone incoming stream
    var audioInput = context.createMediaStreamSource(mediaStream);

    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */

    // "0" means, let chrome decide the most accurate buffer-size for current platform.
    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
            console.warn('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
        }
    }

    if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else {
        throw 'WebAudio API has no support on this browser.';
    }

    // connect the stream to the gain node
    audioInput.connect(jsAudioNode);

    if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize; // device buffer-size
    }

    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */
    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
        // Ref: http://stackoverflow.com/a/26303918/552182
        if (!config.disableLogs) {
            console.warn('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        console.log('sample-rate', sampleRate);
        console.log('buffer-size', bufferSize);

        if (config.desiredSampRate) {
            console.log('Desired sample-rate', config.desiredSampRate);
        }
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        if (!recording) {
            if (!config.disableLogs) {
                console.log('Seems recording has been restarted.');
            }
            this.record();
            return;
        }

        isPaused = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;

        if (recording) {
            this.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        leftchannel.length = rightchannel.length = 0;
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;

        if (jsAudioNode) {
            jsAudioNode.onaudioprocess = null;
            jsAudioNode.disconnect();
            jsAudioNode = null;
        }

        if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
        }
    }

    // for debugging
    this.name = 'StereoAudioRecorder';
    this.toString = function() {
        return this.name;
    };

    var isAudioProcessStarted = false;

    function onAudioProcessDataAvailable(e) {
        if (isPaused) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            jsAudioNode.disconnect();
            recording = false;
        }

        if (!recording) {
            audioInput.disconnect();
            return;
        }

        /**
         * This method is called on "onaudioprocess" event's first invocation.
         * @method {function} onAudioProcessStarted
         * @memberof StereoAudioRecorder
         * @example
         * recorder.onAudioProcessStarted: function() { };
         */
        if (!isAudioProcessStarted) {
            isAudioProcessStarted = true;
            if (config.onAudioProcessStarted) {
                config.onAudioProcessStarted();
            }

            if (config.initCallback) {
                config.initCallback();
            }
        }

        var left = e.inputBuffer.getChannelData(0);

        // we clone the samples
        leftchannel.push(new Float32Array(left));

        if (numberOfAudioChannels === 2) {
            var right = e.inputBuffer.getChannelData(1);
            rightchannel.push(new Float32Array(right));
        }

        recordingLength += bufferSize;

        // export raw PCM
        self.recordingLength = recordingLength;
    }

    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

    // to prevent self audio to be connected with speakers
    jsAudioNode.connect(context.destination);

    // export raw PCM
    this.leftchannel = leftchannel;
    this.rightchannel = rightchannel;
    this.numberOfAudioChannels = numberOfAudioChannels;
    this.desiredSampRate = desiredSampRate;
    this.sampleRate = sampleRate;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
}

// _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */

function CanvasRecorder(htmlElement, config) {
    if (typeof html2canvas === 'undefined' && htmlElement.nodeName.toLowerCase() !== 'canvas') {
        throw 'Please link: https://cdn.webrtc-experiment.com/screenshot.js';
    }

    config = config || {};
    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    // via DetectRTC.js
    var isCanvasSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }
    });

    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

    var chromeVersion = 50;
    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
    }

    if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
    }

    var globalCanvas, mediaStreamRecorder;

    if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
        }

        if (htmlElement instanceof HTMLCanvasElement) {
            globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
            globalCanvas = htmlElement.canvas;
        } else {
            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
        }
    } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
            console.error('Canvas recording is NOT supported in Firefox.');
        }
    }

    var isRecording;

    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        isRecording = true;

        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
            // CanvasCaptureMediaStream
            var canvasMediaStream;
            if ('captureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
            } else if ('mozCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.mozCaptureStream(25);
            } else if ('webkitCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
            }

            try {
                var mdStream = new MediaStream();
                mdStream.addTrack(canvasMediaStream.getVideoTracks()[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: 'video/webm'
            });
            mediaStreamRecorder.record();
        } else {
            whammy.frames = [];
            lastTime = new Date().getTime();
            drawCanvasFrame();
        }

        if (config.initCallback) {
            config.initCallback();
        }
    };

    this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
            callback();
            return;
        }

        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
            var framesRemaining = framesLength - idx;
            if (!config.disableLogs) {
                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
            }

            if (config.onEncodingCallback) {
                config.onEncodingCallback(framesRemaining, framesLength);
            }

            var webp = frame.image.toDataURL('image/webp', 1);
            whammy.frames[idx].image = webp;
        });

        if (!config.disableLogs) {
            console.log('Generating WebM');
        }

        callback();
    };

    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        isRecording = false;

        var that = this;

        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
            mediaStreamRecorder.stop(callback);
            return;
        }

        this.getWebPImages(function() {
            /**
             * @property {Blob} blob - Recorded frames in video/webm blob.
             * @memberof CanvasRecorder
             * @example
             * recorder.stop(function() {
             *     var blob = recorder.blob;
             * });
             */
            whammy.compile(function(blob) {
                if (!config.disableLogs) {
                    console.log('Recording finished!');
                }

                that.blob = blob;

                if (that.blob.forEach) {
                    that.blob = new Blob([], {
                        type: 'video/webm'
                    });
                }

                if (callback) {
                    callback(that.blob);
                }

                whammy.frames = [];
            });
        });
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.pause();
            return;
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.resume();
            return;
        }

        if (!isRecording) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (isRecording) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'CanvasRecorder';
    this.toString = function() {
        return this.name;
    };

    function cloneCanvas() {
        //create a new canvas
        var newCanvas = document.createElement('canvas');
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;

        //apply the old canvas to the new one
        context.drawImage(htmlElement, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function drawCanvasFrame() {
        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawCanvasFrame, 500);
        }

        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
            var duration = new Date().getTime() - lastTime;
            // via #206, by Jack i.e. @Seymourr
            lastTime = new Date().getTime();

            whammy.frames.push({
                image: cloneCanvas(),
                duration: duration
            });

            if (isRecording) {
                setTimeout(drawCanvasFrame, config.frameInterval);
            }
            return;
        }

        html2canvas(htmlElement, {
            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
            onrendered: function(canvas) {
                var duration = new Date().getTime() - lastTime;
                if (!duration) {
                    return setTimeout(drawCanvasFrame, config.frameInterval);
                }

                // via #206, by Jack i.e. @Seymourr
                lastTime = new Date().getTime();

                whammy.frames.push({
                    image: canvas.toDataURL('image/webp', 1),
                    duration: duration
                });

                if (isRecording) {
                    setTimeout(drawCanvasFrame, config.frameInterval);
                }
            }
        });
    }

    var lastTime = new Date().getTime();

    var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.CanvasRecorder = CanvasRecorder;
}

// _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */

function WhammyRecorder(mediaStream, config) {

    config = config || {};

    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    if (!config.disableLogs) {
        console.log('Using frames-interval:', config.frameInterval);
    }

    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (!config.width) {
            config.width = 320;
        }

        if (!config.height) {
            config.height = 240;
        }

        if (!config.video) {
            config.video = {
                width: config.width,
                height: config.height
            };
        }

        if (!config.canvas) {
            config.canvas = {
                width: config.width,
                height: config.height
            };
        }

        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;

        context = canvas.getContext('2d');

        // setting defaults
        if (config.video && config.video instanceof HTMLVideoElement) {
            video = config.video.cloneNode();

            if (config.initCallback) {
                config.initCallback();
            }
        } else {
            video = document.createElement('video');

            setSrcObject(mediaStream, video);

            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
                if (config.initCallback) {
                    config.initCallback();
                }
            };

            video.width = config.video.width;
            video.height = config.video.height;
        }

        video.muted = true;
        video.play();

        lastTime = new Date().getTime();
        whammy = new Whammy.Video();

        if (!config.disableLogs) {
            console.log('canvas resolutions', canvas.width, '*', canvas.height);
            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
        }

        drawFrames(config.frameInterval);
    };

    /**
     * Draw and push frames to Whammy
     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
     */
    function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

        var duration = new Date().getTime() - lastTime;
        if (!duration) {
            return setTimeout(drawFrames, frameInterval, frameInterval);
        }

        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawFrames, 100);
        }

        // via #206, by Jack i.e. @Seymourr
        lastTime = new Date().getTime();

        if (video.paused) {
            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
            // Tweak for Android Chrome
            video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
        });

        if (!isStopDrawing) {
            setTimeout(drawFrames, frameInterval, frameInterval);
        }
    }

    function asyncLoop(o) {
        var i = -1,
            length = o.length;

        (function loop() {
            i++;
            if (i === length) {
                o.callback();
                return;
            }

            // "setTimeout" added by Jim McLeod
            setTimeout(function() {
                o.functionToLoop(loop, i);
            }, 1);
        })();
    }


    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey
    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement('canvas');
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext('2d');
        var resultFrames = [];

        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
            _framesToCheck : _frames.length;
        var sampleColor = {
            r: 0,
            g: 0,
            b: 0
        };
        var maxColorDifference = Math.sqrt(
            Math.pow(255, 2) +
            Math.pow(255, 2) +
            Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;

        asyncLoop({
            length: endCheckFrame,
            functionToLoop: function(loop, f) {
                var matchPixCount, endPixCheck, maxPixCount;

                var finishImage = function() {
                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
                        // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
                    } else {
                        // console.log('frame is passed : ' + f);
                        if (checkUntilNotBlack) {
                            doNotCheckNext = true;
                        }
                        resultFrames.push(_frames[f]);
                    }
                    loop();
                };

                if (!doNotCheckNext) {
                    var image = new Image();
                    image.onload = function() {
                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                        matchPixCount = 0;
                        endPixCheck = imageData.data.length;
                        maxPixCount = imageData.data.length / 4;

                        for (var pix = 0; pix < endPixCheck; pix += 4) {
                            var currentColor = {
                                r: imageData.data[pix],
                                g: imageData.data[pix + 1],
                                b: imageData.data[pix + 2]
                            };
                            var colorDifference = Math.sqrt(
                                Math.pow(currentColor.r - sampleColor.r, 2) +
                                Math.pow(currentColor.g - sampleColor.g, 2) +
                                Math.pow(currentColor.b - sampleColor.b, 2)
                            );
                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
                            if (colorDifference <= maxColorDifference * pixTolerance) {
                                matchPixCount++;
                            }
                        }
                        finishImage();
                    };
                    image.src = _frames[f].image;
                } else {
                    finishImage();
                }
            },
            callback: function() {
                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

                if (resultFrames.length <= 0) {
                    // at least one last frame should be available for next manipulation
                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
                    resultFrames.push(_frames[_frames.length - 1]);
                }
                callback(resultFrames);
            }
        });
    }

    var isStopDrawing = false;

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        isStopDrawing = true;

        var _this = this;
        // analyse of all frames takes some time!
        setTimeout(function() {
            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
                whammy.frames = frames;

                // to display advertisement images!
                if (config.advertisement && config.advertisement.length) {
                    whammy.frames = config.advertisement.concat(whammy.frames);
                }

                /**
                 * @property {Blob} blob - Recorded frames in video/webm blob.
                 * @memberof WhammyRecorder
                 * @example
                 * recorder.stop(function() {
                 *     var blob = recorder.blob;
                 * });
                 */
                whammy.compile(function(blob) {
                    _this.blob = blob;

                    if (_this.blob.forEach) {
                        _this.blob = new Blob([], {
                            type: 'video/webm'
                        });
                    }

                    if (callback) {
                        callback(_this.blob);
                    }
                });
            });
        }, 10);
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (isStopDrawing) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (!isStopDrawing) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'WhammyRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var video;
    var lastTime;
    var whammy;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WhammyRecorder = WhammyRecorder;
}

// https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js

// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Whammy = (function() {
    // a more abstract-ish API

    function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
    }

    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */
    WhammyVideo.prototype.add = function(frame, duration) {
        if ('canvas' in frame) { //CanvasRenderingContext2D
            frame = frame.canvas;
        }

        if ('toDataURL' in frame) {
            frame = frame.toDataURL('image/webp', this.quality);
        }

        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
        }
        this.frames.push({
            image: frame,
            duration: duration || this.duration
        });
    };

    function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(),
            'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
    }

    function whammyInWebWorker(frames) {
        function ArrayToWebM(frames) {
            var info = checkFrames(frames);
            if (!info) {
                return [];
            }

            var clusterMaxDuration = 30000;

            var EBML = [{
                'id': 0x1a45dfa3, // EBML
                'data': [{
                    'data': 1,
                    'id': 0x4286 // EBMLVersion
                }, {
                    'data': 1,
                    'id': 0x42f7 // EBMLReadVersion
                }, {
                    'data': 4,
                    'id': 0x42f2 // EBMLMaxIDLength
                }, {
                    'data': 8,
                    'id': 0x42f3 // EBMLMaxSizeLength
                }, {
                    'data': 'webm',
                    'id': 0x4282 // DocType
                }, {
                    'data': 2,
                    'id': 0x4287 // DocTypeVersion
                }, {
                    'data': 2,
                    'id': 0x4285 // DocTypeReadVersion
                }]
            }, {
                'id': 0x18538067, // Segment
                'data': [{
                    'id': 0x1549a966, // Info
                    'data': [{
                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
                        'id': 0x2ad7b1 // TimecodeScale
                    }, {
                        'data': 'whammy',
                        'id': 0x4d80 // MuxingApp
                    }, {
                        'data': 'whammy',
                        'id': 0x5741 // WritingApp
                    }, {
                        'data': doubleToString(info.duration),
                        'id': 0x4489 // Duration
                    }]
                }, {
                    'id': 0x1654ae6b, // Tracks
                    'data': [{
                        'id': 0xae, // TrackEntry
                        'data': [{
                            'data': 1,
                            'id': 0xd7 // TrackNumber
                        }, {
                            'data': 1,
                            'id': 0x73c5 // TrackUID
                        }, {
                            'data': 0,
                            'id': 0x9c // FlagLacing
                        }, {
                            'data': 'und',
                            'id': 0x22b59c // Language
                        }, {
                            'data': 'V_VP8',
                            'id': 0x86 // CodecID
                        }, {
                            'data': 'VP8',
                            'id': 0x258688 // CodecName
                        }, {
                            'data': 1,
                            'id': 0x83 // TrackType
                        }, {
                            'id': 0xe0, // Video
                            'data': [{
                                'data': info.width,
                                'id': 0xb0 // PixelWidth
                            }, {
                                'data': info.height,
                                'id': 0xba // PixelHeight
                            }]
                        }]
                    }]
                }]
            }];

            //Generate clusters (max duration)
            var frameNumber = 0;
            var clusterTimecode = 0;
            while (frameNumber < frames.length) {

                var clusterFrames = [];
                var clusterDuration = 0;
                do {
                    clusterFrames.push(frames[frameNumber]);
                    clusterDuration += frames[frameNumber].duration;
                    frameNumber++;
                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

                var clusterCounter = 0;
                var cluster = {
                    'id': 0x1f43b675, // Cluster
                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
                }; //Add cluster to segment
                EBML[1].data.push(cluster);
                clusterTimecode += clusterDuration;
            }

            return generateEBML(EBML);
        }

        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
            return [{
                'data': clusterTimecode,
                'id': 0xe7 // Timecode
            }].concat(clusterFrames.map(function(webp) {
                var block = makeSimpleBlock({
                    discardable: 0,
                    frame: webp.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(clusterCounter)
                });
                clusterCounter += webp.duration;
                return {
                    data: block,
                    id: 0xa3
                };
            }));
        }

        // sums the lengths of all the frames and gets the duration

        function checkFrames(frames) {
            if (!frames[0]) {
                postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                });
                return;
            }

            var width = frames[0].width,
                height = frames[0].height,
                duration = frames[0].duration;

            for (var i = 1; i < frames.length; i++) {
                duration += frames[i].duration;
            }
            return {
                duration: duration,
                width: width,
                height: height
            };
        }

        function numToBuffer(num) {
            var parts = [];
            while (num > 0) {
                parts.push(num & 0xff);
                num = num >> 8;
            }
            return new Uint8Array(parts.reverse());
        }

        function strToBuffer(str) {
            return new Uint8Array(str.split('').map(function(e) {
                return e.charCodeAt(0);
            }));
        }

        function bitsToBuffer(bits) {
            var data = [];
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data.push(parseInt(bits.substr(i, 8), 2));
            }
            return new Uint8Array(data);
        }

        function generateEBML(json) {
            var ebml = [];
            for (var i = 0; i < json.length; i++) {
                var data = json[i].data;

                if (typeof data === 'object') {
                    data = generateEBML(data);
                }

                if (typeof data === 'number') {
                    data = bitsToBuffer(data.toString(2));
                }

                if (typeof data === 'string') {
                    data = strToBuffer(data);
                }

                var len = data.size || data.byteLength || data.length;
                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
                var sizeToString = len.toString(2);
                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
                var size = (new Array(zeroes)).join('0') + '1' + padded;

                ebml.push(numToBuffer(json[i].id));
                ebml.push(bitsToBuffer(size));
                ebml.push(data);
            }

            return new Blob(ebml, {
                type: 'video/webm'
            });
        }

        function toBinStrOld(bits) {
            var data = '';
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
            }
            return data;
        }

        function makeSimpleBlock(data) {
            var flags = 0;

            if (data.keyframe) {
                flags |= 128;
            }

            if (data.invisible) {
                flags |= 8;
            }

            if (data.lacing) {
                flags |= (data.lacing << 1);
            }

            if (data.discardable) {
                flags |= 1;
            }

            if (data.trackNum > 127) {
                throw 'TrackNumber > 127 not supported';
            }

            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
                return String.fromCharCode(e);
            }).join('') + data.frame;

            return out;
        }

        function parseWebP(riff) {
            var VP8 = riff.RIFF[0].WEBP[0];

            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
            for (var i = 0, c = []; i < 4; i++) {
                c[i] = VP8.charCodeAt(frameStart + 3 + i);
            }

            var width, height, tmp;

            //the code below is literally copied verbatim from the bitstream spec
            tmp = (c[1] << 8) | c[0];
            width = tmp & 0x3FFF;
            tmp = (c[3] << 8) | c[2];
            height = tmp & 0x3FFF;
            return {
                width: width,
                height: height,
                data: VP8,
                riff: riff
            };
        }

        function getStrLength(string, offset) {
            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
                var unpadded = i.charCodeAt(0).toString(2);
                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
            }).join(''), 2);
        }

        function parseRIFF(string) {
            var offset = 0;
            var chunks = {};

            while (offset < string.length) {
                var id = string.substr(offset, 4);
                var len = getStrLength(string, offset);
                var data = string.substr(offset + 4 + 4, len);
                offset += 4 + 4 + len;
                chunks[id] = chunks[id] || [];

                if (id === 'RIFF' || id === 'LIST') {
                    chunks[id].push(parseRIFF(data));
                } else {
                    chunks[id].push(data);
                }
            }
            return chunks;
        }

        function doubleToString(num) {
            return [].slice.call(
                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
                return String.fromCharCode(e);
            }).reverse().join('');
        }

        var webm = new ArrayToWebM(frames.map(function(frame) {
            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
            webp.duration = frame.duration;
            return webp;
        }));

        postMessage(webm);
    }

    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */
    WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);

        webWorker.onmessage = function(event) {
            if (event.data.error) {
                console.error(event.data.error);
                return;
            }
            callback(event.data);
        };

        webWorker.postMessage(this.frames);
    };

    return {
        /**
         * A more abstract-ish API.
         * @method
         * @memberof Whammy
         * @example
         * recorder = new Whammy().Video(0.8, 100);
         * @param {?number} speed - 0.8
         * @param {?number} quality - 100
         */
        Video: WhammyVideo
    };
})();

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Whammy = Whammy;
}

// ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function() {
        var self = this;

        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
            console.error('IndexedDB API are not available in this browser.');
            return;
        }

        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
            db;
        var request = indexedDB.open(dbName, dbVersion);

        function createObjectStore(dataBase) {
            dataBase.createObjectStore(self.dataStoreName);
        }

        function putInDB() {
            var transaction = db.transaction([self.dataStoreName], 'readwrite');

            if (self.videoBlob) {
                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
            }

            if (self.gifBlob) {
                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
            }

            if (self.audioBlob) {
                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
            }

            function getFromStore(portionName) {
                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
                    if (self.callback) {
                        self.callback(event.target.result, portionName);
                    }
                };
            }

            getFromStore('audioBlob');
            getFromStore('videoBlob');
            getFromStore('gifBlob');
        }

        request.onerror = self.onError;

        request.onsuccess = function() {
            db = request.result;
            db.onerror = self.onError;

            if (db.setVersion) {
                if (db.version !== dbVersion) {
                    var setVersion = db.setVersion(dbVersion);
                    setVersion.onsuccess = function() {
                        createObjectStore(db);
                        putInDB();
                    };
                } else {
                    putInDB();
                }
            } else {
                putInDB();
            }
        };
        request.onupgradeneeded = function(event) {
            createObjectStore(event.target.result);
        };
    },
    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function(callback) {
        this.callback = callback;
        this.init();

        return this;
    },
    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;

        this.init();

        return this;
    },
    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function(error) {
        console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
};

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.DiskStorage = DiskStorage;
}

// ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */

function GifRecorder(mediaStream, config) {
    if (typeof GIFEncoder === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://cdn.webrtc-experiment.com/gif-recorder.js';
        (document.body || document.documentElement).appendChild(script);
    }

    config = config || {};

    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (typeof GIFEncoder === 'undefined') {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isLoadedMetaData) {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isHTMLObject) {
            if (!config.width) {
                config.width = video.offsetWidth || 320;
            }

            if (!config.height) {
                config.height = video.offsetHeight || 240;
            }

            if (!config.video) {
                config.video = {
                    width: config.width,
                    height: config.height
                };
            }

            if (!config.canvas) {
                config.canvas = {
                    width: config.width,
                    height: config.height
                };
            }

            canvas.width = config.canvas.width || 320;
            canvas.height = config.canvas.height || 240;

            video.width = config.video.width || 320;
            video.height = config.video.height || 240;
        }

        // external library to record as GIF images
        gifEncoder = new GIFEncoder();

        // void setRepeat(int iter) 
        // Sets the number of times the set of GIF frames should be played. 
        // Default is 1; 0 means play indefinitely.
        gifEncoder.setRepeat(0);

        // void setFrameRate(Number fps) 
        // Sets frame rate in frames per second. 
        // Equivalent to setDelay(1000/fps).
        // Using "setDelay" instead of "setFrameRate"
        gifEncoder.setDelay(config.frameRate || 200);

        // void setQuality(int quality) 
        // Sets quality of color quantization (conversion of images to the 
        // maximum 256 colors allowed by the GIF specification). 
        // Lower values (minimum = 1) produce better colors, 
        // but slow processing significantly. 10 is the default, 
        // and produces good color mapping at reasonable speeds. 
        // Values greater than 20 do not yield significant improvements in speed.
        gifEncoder.setQuality(config.quality || 10);

        // Boolean start() 
        // This writes the GIF Header and returns false if it fails.
        gifEncoder.start();

        if (typeof config.onGifRecordingStarted === 'function') {
            config.onGifRecordingStarted();
        }

        startTime = Date.now();

        function drawVideoFrame(time) {
            if (self.clearedRecordedData === true) {
                return;
            }

            if (isPausedRecording) {
                return setTimeout(function() {
                    drawVideoFrame(time);
                }, 100);
            }

            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

            if (typeof lastFrameTime === undefined) {
                lastFrameTime = time;
            }

            // ~10 fps
            if (time - lastFrameTime < 90) {
                return;
            }

            if (!isHTMLObject && video.paused) {
                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
                // Tweak for Android Chrome
                video.play();
            }

            if (!isHTMLObject) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            if (config.onGifPreview) {
                config.onGifPreview(canvas.toDataURL('image/png'));
            }

            gifEncoder.addFrame(context);
            lastFrameTime = time;
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (config.initCallback) {
            config.initCallback();
        }
    };

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }

        endTime = Date.now();

        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof GifRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
            type: 'image/gif'
        });

        callback(this.blob);

        // bug: find a way to clear old recorded blobs
        gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        if (gifEncoder) {
            gifEncoder.stream().bin = [];
        }
    }

    // for debugging
    this.name = 'GifRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
            context = mediaStream;
            canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
            context = mediaStream.getContext('2d');
            canvas = mediaStream;
        }
    }

    var isLoadedMetaData = true;

    if (!isHTMLObject) {
        var video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;

        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
            isLoadedMetaData = true;
        };

        setSrcObject(mediaStream, video);

        video.play();
    }

    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;

    var gifEncoder;

    var self = this;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.GifRecorder = GifRecorder;
}

// Last time updated: 2017-09-26 7:19:00 AM UTC

// ________________________
// MultiStreamsMixer v1.0.3

// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

function MultiStreamsMixer(arrayOfMediaStreams) {

    // requires: chrome://flags/#enable-experimental-web-platform-features

    var videos = [];
    var isStopDrawingFrames = false;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style = 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000; margin-top:-1000000000;margin-left:-1000000000;';
    (document.body || document.documentElement).appendChild(canvas);

    this.disableLogs = false;
    this.frameInterval = 10;

    this.width = 360;
    this.height = 240;

    // use gain node to prevent echo
    this.useGainNode = true;

    var self = this;

    // _____________________________
    // Cross-Browser-Declarations.js

    // WebAudio API representer
    var AudioContext = window.AudioContext;

    if (typeof AudioContext === 'undefined') {
        if (typeof webkitAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = webkitAudioContext;
        }

        if (typeof mozAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = mozAudioContext;
        }
    }

    /*jshint -W079 */
    var URL = window.URL;

    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
        /*global URL:true */
        URL = webkitURL;
    }

    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        if (!('getVideoTracks' in MediaStream.prototype)) {
            MediaStream.prototype.getVideoTracks = function() {
                if (!this.getTracks) {
                    return [];
                }

                var tracks = [];
                this.getTracks.forEach(function(track) {
                    if (track.kind.toString().indexOf('video') !== -1) {
                        tracks.push(track);
                    }
                });
                return tracks;
            };

            MediaStream.prototype.getAudioTracks = function() {
                if (!this.getTracks) {
                    return [];
                }

                var tracks = [];
                this.getTracks.forEach(function(track) {
                    if (track.kind.toString().indexOf('audio') !== -1) {
                        tracks.push(track);
                    }
                });
                return tracks;
            };
        }

        // override "stop" method for all browsers
        if (typeof MediaStream.prototype.stop === 'undefined') {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    var Storage = {};

    if (typeof AudioContext !== 'undefined') {
        Storage.AudioContext = AudioContext;
    } else if (typeof webkitAudioContext !== 'undefined') {
        Storage.AudioContext = webkitAudioContext;
    }

    function setSrcObject(stream, element, ignoreCreateObjectURL) {
        if ('createObjectURL' in URL && !ignoreCreateObjectURL) {
            try {
                element.src = URL.createObjectURL(stream);
            } catch (e) {
                setSrcObject(stream, element, true);
                return;
            }
        } else if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            alert('createObjectURL/srcObject both are not supported.');
        }
    }

    this.startDrawingFrames = function() {
        drawVideosToCanvas();
    };

    function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
            return;
        }

        var videosLength = videos.length;

        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
            if (!video.stream) {
                video.stream = {};
            }

            if (video.stream.fullcanvas) {
                fullcanvas = video;
            } else {
                remaining.push(video);
            }
        });

        if (fullcanvas) {
            canvas.width = fullcanvas.stream.width;
            canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

            var height = 1;
            if (videosLength === 3 || videosLength === 4) {
                height = 2;
            }
            if (videosLength === 5 || videosLength === 6) {
                height = 3;
            }
            if (videosLength === 7 || videosLength === 8) {
                height = 4;
            }
            if (videosLength === 9 || videosLength === 10) {
                height = 5;
            }
            canvas.height = remaining[0].height * height;
        } else {
            canvas.width = self.width || 360;
            canvas.height = self.height || 240;
        }

        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
            drawImage(fullcanvas);
        }

        remaining.forEach(function(video, idx) {
            drawImage(video, idx);
        });

        setTimeout(drawVideosToCanvas, self.frameInterval);
    }

    function drawImage(video, idx) {
        if (isStopDrawingFrames) {
            return;
        }

        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;

        if (idx === 1) {
            x = video.width;
        }

        if (idx === 2) {
            y = video.height;
        }

        if (idx === 3) {
            x = video.width;
            y = video.height;
        }

        if (idx === 4) {
            y = video.height * 2;
        }

        if (idx === 5) {
            x = video.width;
            y = video.height * 2;
        }

        if (idx === 6) {
            y = video.height * 3;
        }

        if (idx === 7) {
            x = video.width;
            y = video.height * 3;
        }

        if (typeof video.stream.left !== 'undefined') {
            x = video.stream.left;
        }

        if (typeof video.stream.top !== 'undefined') {
            y = video.stream.top;
        }

        if (typeof video.stream.width !== 'undefined') {
            width = video.stream.width;
        }

        if (typeof video.stream.height !== 'undefined') {
            height = video.stream.height;
        }

        context.drawImage(video, x, y, width, height);

        if (typeof video.stream.onRender === 'function') {
            video.stream.onRender(context, x, y, width, height, idx);
        }
    }

    function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();

        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
            mixedAudioStream.getAudioTracks().forEach(function(track) {
                mixedVideoStream.addTrack(track);
            });
        }

        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
            if (stream.fullcanvas) {
                fullcanvas = true;
            }
        });

        return mixedVideoStream;
    }

    function getMixedVideoStream() {
        resetVideoStreams();

        var capturedStream;

        if ('captureStream' in canvas) {
            capturedStream = canvas.captureStream();
        } else if ('mozCaptureStream' in canvas) {
            capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
        }

        var videoStream = new MediaStream();

        capturedStream.getVideoTracks().forEach(function(track) {
            videoStream.addTrack(track);
        });

        canvas.stream = videoStream;

        return videoStream;
    }

    function getMixedAudioStream() {
        // via: @pehrsons
        if (!Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor = new Storage.AudioContext();
        }

        self.audioContext = Storage.AudioContextConstructor;

        self.audioSources = [];

        if (self.useGainNode === true) {
            self.gainNode = self.audioContext.createGain();
            self.gainNode.connect(self.audioContext.destination);
            self.gainNode.gain.value = 0; // don't hear self
        }

        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
            if (!stream.getAudioTracks().length) {
                return;
            }

            audioTracksLength++;

            var audioSource = self.audioContext.createMediaStreamSource(stream);

            if (self.useGainNode === true) {
                audioSource.connect(self.gainNode);
            }

            self.audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            return;
        }

        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
            audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
    }

    function getVideo(stream) {
        var video = document.createElement('video');

        setSrcObject(stream, video);

        video.muted = true;
        video.volume = 0;

        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;

        video.play();

        return video;
    }

    this.appendStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        streams.forEach(function(stream) {
            if (stream.getVideoTracks().length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);
            }

            if (stream.getAudioTracks().length && self.audioContext) {
                var audioSource = self.audioContext.createMediaStreamSource(stream);
                audioSource.connect(self.audioDestination);
                self.audioSources.push(audioSource);
            }
        });
    };

    this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;

        if (self.gainNode) {
            self.gainNode.disconnect();
            self.gainNode = null;
        }

        if (self.audioSources.length) {
            self.audioSources.forEach(function(source) {
                source.disconnect();
            });
            self.audioSources = [];
        }

        if (self.audioDestination) {
            self.audioDestination.disconnect();
            self.audioDestination = null;
        }

        self.audioContext = null;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (canvas.stream) {
            canvas.stream.stop();
            canvas.stream = null;
        }
    };

    this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        resetVideoStreams(streams);
    };

    function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;

        // via: @adrian-ber
        streams.forEach(function(stream) {
            if (!stream.getVideoTracks().length) {
                return;
            }

            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
        });
    }

    // for debugging
    this.name = 'MultiStreamsMixer';
    this.toString = function() {
        return this.name;
    };

    this.getMixedStream = getMixedStream;

}

// ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */

function MultiStreamRecorder(arrayOfMediaStreams, options) {
    arrayOfMediaStreams = arrayOfMediaStreams || [];
    var self = this;

    var mixer;
    var mediaRecorder;

    options = options || {
        mimeType: 'video/webm',
        video: {
            width: 360,
            height: 240
        }
    };

    if (!options.frameInterval) {
        options.frameInterval = 10;
    }

    if (!options.video) {
        options.video = {};
    }

    if (!options.video.width) {
        options.video.width = 360;
    }

    if (!options.video.height) {
        options.video.height = 240;
    }

    /**
     * This method records all MediaStreams.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // github/muaz-khan/MultiStreamsMixer
        mixer = new MultiStreamsMixer(arrayOfMediaStreams);

        if (getVideoTracks().length) {
            mixer.frameInterval = options.frameInterval || 10;
            mixer.width = options.video.width || 360;
            mixer.height = options.video.height || 240;
            mixer.startDrawingFrames();
        }

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }

        // record using MediaRecorder API
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
    };

    function getVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            stream.getVideoTracks().forEach(function(track) {
                tracks.push(track);
            });
        });
        return tracks;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        if (!mediaRecorder) {
            return;
        }

        mediaRecorder.stop(function(blob) {
            self.blob = blob;

            callback(blob);

            self.clearRecordedData();
        });
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (mediaRecorder) {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (mediaRecorder) {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder = null;
        }

        if (mixer) {
            mixer.releaseStreams();
            mixer = null;
        }
    };

    /**
     * Add extra media-streams to existing recordings.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.addStreams([newAudioStream, newVideoStream]);
     */
    this.addStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        if (!mediaRecorder || !mixer) {
            return;
        }

        mixer.appendStreams(streams);
    };

    /**
     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.resetVideoStreams([newVideo1, newVideo2]);
     */
    this.resetVideoStreams = function(streams) {
        if (!mixer) {
            return;
        }

        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        mixer.resetVideoStreams(streams);
    };

    // for debugging
    this.name = 'MultiStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
}

// _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */

function RecordRTCPromisesHandler(mediaStream, options) {
    if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
    }

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    var self = this;

    /**
     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * var internal = recorder.recordRTC.getInternalRecorder();
     * alert(internal instanceof MediaStreamRecorder);
     */
    self.recordRTC = new RecordRTC(mediaStream, options);

    /**
     * This method records MediaStream.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.startRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.startRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.startRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method stops the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.stopRecording(function(url) {
                    self.blob = self.recordRTC.getBlob();
                    resolve(url);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns data-url for the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getDataURL().then(function(dataURL) {
     *         window.open(dataURL);
     *     }).catch(errorCB);;
     * }).catch(errorCB);
     */
    this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.getDataURL(function(dataURL) {
                    resolve(dataURL);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return self.recordRTC.getBlob();
    };

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js"), __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../material/chips/typings/index.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatChipsModuleNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_MatChipList; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_MatChipList_0;
/* unused harmony export View_MatChipList_Host_0 */
/* unused harmony export MatChipListNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 





var MatChipsModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__angular_material_chips__["c" /* MatChipsModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵCodegenComponentFactoryResolver */], [[8, []], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModuleRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__angular_material_chips__["c" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material_chips__["c" /* MatChipsModule */], [])]); });

var styles_MatChipList = [".mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline}.mat-chip:not(.mat-basic-chip){transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:24px;align-items:center;cursor:default}.mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:0 0 0 8px}[dir=rtl] .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:0 8px 0 0}.mat-form-field-prefix .mat-chip:not(.mat-basic-chip):last-child{margin-right:8px}[dir=rtl] .mat-form-field-prefix .mat-chip:not(.mat-basic-chip):last-child{margin-left:8px}.mat-chip:not(.mat-basic-chip) .mat-chip-remove.mat-icon{width:1em;height:1em}.mat-chip:not(.mat-basic-chip):focus{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);outline:0}@media screen and (-ms-high-contrast:active){.mat-chip:not(.mat-basic-chip){outline:solid 1px}}.mat-chip-list-stacked .mat-chip-list-wrapper{display:block}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip){display:block;margin:0;margin-bottom:8px}[dir=rtl] .mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip){margin:0;margin-bottom:8px}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):last-child,[dir=rtl] .mat-chip-list-stacked .mat-chip-list-wrapper .mat-chip:not(.mat-basic-chip):last-child{margin-bottom:0}.mat-form-field-prefix .mat-chip-list-wrapper{margin-bottom:8px}.mat-chip-remove{margin-right:-4px;margin-left:6px;cursor:pointer}[dir=rtl] .mat-chip-remove{margin-right:6px;margin-left:-4px}input.mat-chip-input{width:150px;margin:3px;flex:1 0 150px}"];
var RenderType_MatChipList = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵcrt */]({ encapsulation: 2, styles: styles_MatChipList, data: {} });

function View_MatChipList_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_47" /* ɵvid */](2, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "mat-chip-list-wrapper"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵncd */](null, 0)], null, null); }
function View_MatChipList_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_47" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵeld */](0, 0, null, null, 3, "mat-chip-list", [["class", "mat-chip-list"]], [[1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-multiselectable", 0], [1, "role", 0], [2, "mat-chip-list-disabled", null], [2, "mat-chip-list-invalid", null], [2, "mat-chip-list-required", null], [1, "aria-orientation", 0]], [[null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).focus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2)._blur() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2)._keydown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_MatChipList_0, RenderType_MatChipList)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵprd */](6144, null, __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["b" /* MatFormFieldControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_material_chips__["b" /* MatChipList */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵdid */](2, 1294336, null, 1, __WEBPACK_IMPORTED_MODULE_1__angular_material_chips__["b" /* MatChipList */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__["c" /* Directionality */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NgForm */]], [2, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormGroupDirective */]], [8, null]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵqud */](603979776, 1, { chips: 1 })], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2)._tabIndex; var currVal_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2)._ariaDescribedby || null); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).required.toString(); var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).disabled.toString(); var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).errorState; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).multiple; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).role; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).disabled; var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).errorState; var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).required; var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵnov */](_v, 2).ariaOrientation; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }); }
var MatChipListNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵccf */]("mat-chip-list", __WEBPACK_IMPORTED_MODULE_1__angular_material_chips__["b" /* MatChipList */], View_MatChipList_Host_0, { multiple: "multiple", compareWith: "compareWith", value: "value", id: "id", required: "required", placeholder: "placeholder", disabled: "disabled", ariaOrientation: "aria-orientation", selectable: "selectable", tabIndex: "tabIndex" }, { change: "change", valueChange: "valueChange" }, ["*"]);



/***/ })

});
//# sourceMappingURL=assignment.module.chunk.js.map