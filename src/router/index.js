import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import AddNote from '../view/AddNote.vue'
import EditNote from '../view/EditNote.vue'
import NotFound from '../view/NotFound.vue'
import About from '../view/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/', name:'Home', component: Home
        },
        {
            path: '/add', name:'AddNote', component: AddNote
        },
        {
            path: '/edit/:id', name:'editNote', component: EditNote
        },
        {
            path: '/delete/:id', name:'deleteNote', component: EditNote
        },
        {
            path: '/about', name:'about', component: About
        },
        {
            path: '/:pathMatch(.*)*', name:'notFound' , component: NotFound
        }
        

    ],
})


export default router;