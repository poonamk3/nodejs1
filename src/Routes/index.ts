import { Request, Response } from "express"
import { getHolidays } from "../Controllers/EventController/holidayController"
import { auth } from "../Utils/auth.utils"

const router = require('express')()
const authRoutes = require('./UserRoutes/authRoutes')
const eventRoutes = require('./EventRoutes/eventRoutes')

// Frontend Routes
router.get('/', (req: Request, res: Response) => {
    res.render('pages/index')
})

router.get('/signup', (req: any, res: any) => {
    res.render('pages/Signup/index')
})

router.get('/signin', (req: any, res: any) => {
    res.render('pages/Signin/index')
})

router.get('/dashboard', (req: Request, res: Response) => {
    res.render("pages/Dashboard/index", { holidays:getHolidays() })
})

// API Routes
router.use("/api/auth", authRoutes)

router.use('/api/events', auth, eventRoutes)

module.exports = router
