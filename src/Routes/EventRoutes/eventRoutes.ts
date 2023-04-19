const eventRouter = require('express')()
import * as EventController from '../../Controllers/EventController/eventController'
import { upload } from '../../Sevices/imageServices'



eventRouter.post('/', upload.array('images', 5), EventController.createEvent)
eventRouter.get('/', EventController.getUsersEvents)


module.exports = eventRouter
