import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import AwardsView from '@/views/AwardsView.vue'
import CaptainsPageView from '@/views/CaptainsPageView.vue'
import ChampionsView from '@/views/ChampionsView.vue'
import ClinicsView from '@/views/ClinicsView.vue'
import ContactView from '@/views/ContactView.vue'
import DropInView from '@/views/DropInView.vue'
import FaqView from '@/views/FaqView.vue'
import FreeAgentsView from '@/views/FreeAgentsView.vue'
import GymsView from '@/views/GymsView.vue'
import HistoryView from '@/views/HistoryView.vue'
import LeagueFormatView from '@/views/LeagueFormatView.vue'
import PhotoAlbumView from '@/views/PhotoAlbumView.vue'
import RefereesPageView from '@/views/RefereesPageView.vue'
import RulesView from '@/views/RulesView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
    },
    {
      path: '/awards',
      name: 'awards',
      component: AwardsView,
    },
    {
      path: '/captains-page',
      name: 'captains-page',
      component: CaptainsPageView,
    },
    {
      path: '/champions',
      name: 'champions',
      component: ChampionsView,
    },
    {
      path: '/clinics',
      name: 'clinics',
      component: ClinicsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/drop-in',
      name: 'drop-in',
      component: DropInView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/free-agents',
      name: 'free-agents',
      component: FreeAgentsView,
    },
    {
      path: '/gyms',
      name: 'gyms',
      component: GymsView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/league-format',
      name: 'league-format',
      component: LeagueFormatView,
    },
    {
      path: '/photo-album',
      name: 'photo-album',
      component: PhotoAlbumView,
    },
    {
      path: '/referees',
      name: 'referees',
      component: RefereesPageView,
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView,
    },
  ],
})

export default router
