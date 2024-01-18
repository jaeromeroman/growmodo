import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import RoleBasedComponent from "@/Components/RoleBasedComponent.vue";

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');

const __VLS_componentsOption = {
RoleBasedComponent,
};

let __VLS_name!: 'Dashboard';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'AuthenticatedLayout', typeof __VLS_localComponents, "AuthenticatedLayout", "AuthenticatedLayout", "AuthenticatedLayout"> &
__VLS_WithComponent<'RoleBasedComponent', typeof __VLS_localComponents, "RoleBasedComponent", "roleBasedComponent", "role-based-component">;
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_components.AuthenticatedLayout; __VLS_components.AuthenticatedLayout;
// @ts-ignore
[AuthenticatedLayout, AuthenticatedLayout,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.RoleBasedComponent; __VLS_components.RoleBasedComponent; __VLS_components.roleBasedComponent; __VLS_components.roleBasedComponent; __VLS_components["role-based-component"]; __VLS_components["role-based-component"];
// @ts-ignore
[RoleBasedComponent, RoleBasedComponent,];
{
const __VLS_0 = ({} as 'Head' extends keyof typeof __VLS_ctx ? { 'Head': typeof __VLS_ctx.Head; } : typeof __VLS_resolvedLocalAndGlobalComponents).Head;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, title: ("Dashboard"), }));
({} as { Head: typeof __VLS_0; }).Head;
const __VLS_2 = __VLS_1({ ...{}, title: ("Dashboard"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, title: ("Dashboard"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as 'AuthenticatedLayout' extends keyof typeof __VLS_ctx ? { 'AuthenticatedLayout': typeof __VLS_ctx.AuthenticatedLayout; } : typeof __VLS_resolvedLocalAndGlobalComponents).AuthenticatedLayout;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { AuthenticatedLayout: typeof __VLS_5; }).AuthenticatedLayout;
({} as { AuthenticatedLayout: typeof __VLS_5; }).AuthenticatedLayout;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["template"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).header;
{
const __VLS_13 = __VLS_intrinsicElements["h2"];
const __VLS_14 = __VLS_elementAsFunctionalComponent(__VLS_13);
const __VLS_15 = __VLS_14({ ...{}, class: ("font-semibold text-xl text-gray-800 leading-tight"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, class: ("font-semibold text-xl text-gray-800 leading-tight"), });
const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
let __VLS_17!: __VLS_NormalizeEmits<typeof __VLS_16.emit>;
(__VLS_16.slots!).default;
}
}
}
{
const __VLS_18 = __VLS_intrinsicElements["div"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
const __VLS_20 = __VLS_19({ ...{}, class: ("py-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, class: ("py-12"), });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
let __VLS_22!: __VLS_NormalizeEmits<typeof __VLS_21.emit>;
{
const __VLS_23 = __VLS_intrinsicElements["div"];
const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
const __VLS_25 = __VLS_24({ ...{}, class: ("max-w-7xl mx-auto sm:px-6 lg:px-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({ ...{}, class: ("max-w-7xl mx-auto sm:px-6 lg:px-8"), });
const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25)!;
let __VLS_27!: __VLS_NormalizeEmits<typeof __VLS_26.emit>;
{
const __VLS_28 = __VLS_intrinsicElements["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
const __VLS_30 = __VLS_29({ ...{}, class: ("bg-white overflow-hidden shadow-sm sm:rounded-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white overflow-hidden shadow-sm sm:rounded-lg"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
{
const __VLS_33 = __VLS_intrinsicElements["div"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
const __VLS_35 = __VLS_34({ ...{}, class: ("p-6 text-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, class: ("p-6 text-gray-900"), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
(__VLS_ctx.$page.props.auth.user.username);
(__VLS_36.slots!).default;
}
(__VLS_31.slots!).default;
}
{
const __VLS_38 = ({} as 'RoleBasedComponent' extends keyof typeof __VLS_ctx ? { 'RoleBasedComponent': typeof __VLS_ctx.RoleBasedComponent; } : 'roleBasedComponent' extends keyof typeof __VLS_ctx ? { 'RoleBasedComponent': typeof __VLS_ctx.roleBasedComponent; } : 'role-based-component' extends keyof typeof __VLS_ctx ? { 'RoleBasedComponent': (typeof __VLS_ctx)["role-based-component"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RoleBasedComponent;
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{}, userRole: ((__VLS_ctx.user.role)), }));
({} as { RoleBasedComponent: typeof __VLS_38; }).RoleBasedComponent;
({} as { RoleBasedComponent: typeof __VLS_38; }).RoleBasedComponent;
const __VLS_40 = __VLS_39({ ...{}, userRole: ((__VLS_ctx.user.role)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, userRole: ((__VLS_ctx.user.role)), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
}
(__VLS_26.slots!).default;
}
(__VLS_21.slots!).default;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[$page, user, user, user,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
AuthenticatedLayout: AuthenticatedLayout as typeof AuthenticatedLayout,
Head: Head as typeof Head,
RoleBasedComponent: RoleBasedComponent as typeof RoleBasedComponent,
};
},

components: {
RoleBasedComponent,
},
props: {
user: Object, // Assuming user data is passed as a prop
},
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

components: {
RoleBasedComponent,
},
props: {
user: Object, // Assuming user data is passed as a prop
},
});
})();
