import jQuery from "jquery";
import ujs from "@rails/ujs";

window.jQuery = window.$ = jQuery;
ujs.start();

import "bootstrap/js/src/tab";
import "bootstrap/js/src/collapse";

import "../../../../../../vendor/comfy/javascript/diff/diff_match_patch.min";
import "../../../../../../vendor/comfy/javascript/diff/pretty_text_diff";
import "../../../../../../vendor/comfy/javascript/fontawesome";

import "./base";
import "./categories";
import "./codemirror";
import "./diff";
import "./draft_forms";
import "./file_link";
import "./file_upload";
import "./files_modal";
import "./page_fragments";
import "./sortable_list";
import "./slugify";
import "./timepicker";
import "./wysiwyg";

import "./custom";
