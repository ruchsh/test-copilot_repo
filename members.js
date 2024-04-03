function skillsMember() {
  return {
    name: 'skillsMember',
    path: '/members/:id/skills',
    component: () => import('@/views/members/SkillsMember.vue'),
    meta: {
      title: 'Skills Member',
      requiresAuth: true
    }
  }
}