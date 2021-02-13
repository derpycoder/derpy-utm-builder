/* src/components/TopSection.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	bubble,
	component_subscribe,
	destroy_each,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	prevent_default,
	run_all,
	safe_not_equal,
	select_option,
	select_value,
	set_input_value,
	set_store_value,
	space,
	text
} from "../../snowpack/pkg/svelte/internal.js";

import { formatters, blogURL, formatOptions } from "../common/index.js";
import { config } from "../stores/store.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (43:16) {#each formatOptions as option}
function create_each_block(ctx) {
	let option;
	let t_value = /*option*/ ctx[6] + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*option*/ ctx[6];
			option.value = option.__value;
		},
		m(target, anchor) {
			insert(target, option, anchor);
			append(option, t);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(option);
		}
	};
}

function create_fragment(ctx) {
	let form;
	let div1;
	let label0;
	let t0;
	let div0;
	let input0;
	let t1;
	let div5;
	let div2;
	let label1;
	let t4;
	let select;
	let t5;
	let div3;
	let label2;
	let t8;
	let input1;
	let t9;
	let div4;
	let label3;
	let t11;
	let input2;
	let mounted;
	let dispose;
	let each_value = formatOptions;
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			form = element("form");
			div1 = element("div");
			label0 = element("label");

			label0.innerHTML = `<svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0
      00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1
      1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0
      101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1
      1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>`;

			t0 = space();
			div0 = element("div");
			input0 = element("input");
			t1 = space();
			div5 = element("div");
			div2 = element("div");
			label1 = element("label");
			label1.innerHTML = `Format<span class="text-sm text-red-500">*</span>`;
			t4 = space();
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			div3 = element("div");
			label2 = element("label");
			label2.innerHTML = `Campaign<span class="text-sm text-red-500">*</span>`;
			t8 = space();
			input1 = element("input");
			t9 = space();
			div4 = element("div");
			label3 = element("label");
			label3.textContent = "Terms";
			t11 = space();
			input2 = element("input");
			attr(label0, "for", "company_website");
			attr(label0, "class", "inline-flex items-center px-3 px-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50");
			attr(input0, "autocomplete", "on");
			attr(input0, "name", "url");
			attr(input0, "class", "flex-1 block w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-none outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm");
			attr(input0, "placeholder", blogURL);
			attr(div0, "class", "flex w-full rounded-md shadow-sm");
			attr(div1, "class", "flex mb-5");
			attr(label1, "class", "ml-1 font-semibold text-gray-500");
			attr(label1, "title", "Format of Params");
			attr(label1, "for", "format");
			attr(select, "id", "format");
			attr(select, "name", "format");
			attr(select, "autocomplete", "country");
			attr(select, "class", "block w-full px-3 py-2 text-right text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm outline-none appearance-none focus:ring-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm");
			if (/*$config*/ ctx[0].format === void 0) add_render_callback(() => /*select_change_handler*/ ctx[3].call(select));
			attr(label2, "class", "ml-1 font-semibold text-gray-500");
			attr(label2, "title", "Required: Black Friday, Cyber Monday, ...");
			attr(label2, "for", "campaign");
			attr(input1, "autocomplete", "on");
			attr(input1, "name", "campaign");
			attr(input1, "id", "campaign");
			attr(input1, "class", "w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm");
			attr(input1, "placeholder", "Campaign");
			attr(label3, "class", "ml-1 font-semibold text-gray-500");
			attr(label3, "title", "Keywords Associated");
			attr(label3, "for", "terms");
			attr(input2, "autocomplete", "on");
			attr(input2, "name", "terms");
			attr(input2, "id", "terms");
			attr(input2, "class", "w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm");
			attr(input2, "placeholder", "Terms");
			attr(div5, "class", "grid grid-cols-3 gap-4");
			attr(form, "class", "relative flex flex-col justify-between inline-block text-left");
		},
		m(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label0);
			append(div1, t0);
			append(div1, div0);
			append(div0, input0);
			set_input_value(input0, /*$config*/ ctx[0].url);
			append(form, t1);
			append(form, div5);
			append(div5, div2);
			append(div2, label1);
			append(div2, t4);
			append(div2, select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*$config*/ ctx[0].format);
			append(div5, t5);
			append(div5, div3);
			append(div3, label2);
			append(div3, t8);
			append(div3, input1);
			set_input_value(input1, /*$config*/ ctx[0].campaign);
			append(div5, t9);
			append(div5, div4);
			append(div4, label3);
			append(div4, t11);
			append(div4, input2);
			set_input_value(input2, /*$config*/ ctx[0].terms);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[2]),
					listen(select, "change", /*select_change_handler*/ ctx[3]),
					listen(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen(input2, "input", /*input2_input_handler*/ ctx[5]),
					listen(form, "submit", prevent_default(/*submit_handler*/ ctx[1]))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$config, formatOptions*/ 1 && input0.value !== /*$config*/ ctx[0].url) {
				set_input_value(input0, /*$config*/ ctx[0].url);
			}

			if (dirty & /*formatOptions*/ 0) {
				each_value = formatOptions;
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*$config, formatOptions*/ 1) {
				select_option(select, /*$config*/ ctx[0].format);
			}

			if (dirty & /*$config, formatOptions*/ 1 && input1.value !== /*$config*/ ctx[0].campaign) {
				set_input_value(input1, /*$config*/ ctx[0].campaign);
			}

			if (dirty & /*$config, formatOptions*/ 1 && input2.value !== /*$config*/ ctx[0].terms) {
				set_input_value(input2, /*$config*/ ctx[0].terms);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(form);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $config;
	component_subscribe($$self, config, $$value => $$invalidate(0, $config = $$value));

	function submit_handler(event) {
		bubble($$self, event);
	}

	function input0_input_handler() {
		$config.url = this.value;
		config.set($config);
	}

	function select_change_handler() {
		$config.format = select_value(this);
		config.set($config);
	}

	function input1_input_handler() {
		$config.campaign = this.value;
		config.set($config);
	}

	function input2_input_handler() {
		$config.terms = this.value;
		config.set($config);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$config*/ 1) {
			$: {
				const format = formatters[$config.format];
				const { campaign, terms } = $config;

				set_store_value(
					config,
					$config = {
						...$config,
						campaign: format(campaign),
						terms: format(terms)
					},
					$config
				);
			}
		}
	};

	return [
		$config,
		submit_handler,
		input0_input_handler,
		select_change_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class TopSection extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default TopSection;