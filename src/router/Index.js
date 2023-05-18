import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/posts",
		name: "posts.index",
		component: () => import("../views/posts/index.vue"),
	},
	{
		path: "/create",
		name: "posts.create",
		component: () => import("../views/posts/create.vue"),
	},
	{
		path: "/edit/:id",
		name: "posts.edit",
		component: () => import("../views/posts/edit.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
