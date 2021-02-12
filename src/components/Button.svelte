<script>
    export let disable = false;
</script>

<button type="button w-full" on:click class={`inline-flex items-center p-1 text-sm font-medium text-gray-700
    bg-transparent rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500
    ${disable ? "cursor-default pointer-events-none" : "focus:ring-2" } `}>
    <slot></slot>
</button>