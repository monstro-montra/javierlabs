import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TradingBotProjectView from '../views/projects/TradingBotProjectView.vue'
import InteractiveViewerView from '@/views/projects/InteractiveViewerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/photography',
    name: 'photography',
    component: PhotographyView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/projects/stock-predictor',
    name: 'stock-predictor',
    component: TradingBotProjectView
  },
  {
    path: '/projects/interactive-viewer',
    name: 'interactive viewer',
    component: InteractiveViewerView
  }
    


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
