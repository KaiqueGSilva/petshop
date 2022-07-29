import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

//CRIANDO AS ROTAS

router.get('/',PageController.home)

router.get('/dogs',PageController.dogs)

router.get('/cats',PageController.cats)

router.get('/fishes',PageController.fishes)

//ROTA DE BUSCA
router.get('/search',SearchController.search)

export default router