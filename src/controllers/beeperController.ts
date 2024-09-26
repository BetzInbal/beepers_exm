import exp, { Router,Request,Response } from 'express'
import BeeperService from '../services/beeperService'
import { BeeperModel } from '../models/BeeperModel'


const router :Router = exp.Router()


//יצירת ביפר
router.post(`/`, async (req:Request, res:Response):Promise<void> => {
    try {
        const result = await BeeperService.createBeeper(req.body )
        res.status(200).json({
            message: (`I was way lazy to change the default `),
            data:result
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

//קבלת כל הביפרים
router.get(`/`, async (req:Request, res:Response):Promise<void> => {
    try {
        const result = await BeeperService.getAllBeeper()
        res.status(200).json({
            message: (`I was way lazy to change the default `),
            data:result
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

//קבלת ביפר על פי id
router.get(`/:id`, async (req:Request, res:Response):Promise<void> => {
    try {
        const id:number = +req.params.id
        const result = await BeeperService.getBeeperbyId(id)
        res.status(200).json({
            message: (`I was way lazy to change the default `),
            data:result
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

//קבלת רשימת הביפרים שבסטטוס מסוים
router.get(`/status/:status`, async (req:Request, res:Response):Promise<void> => {
    try {
        const status:string = req.params.status
        const result = await BeeperService.getBeeperbyStatus(status)
        res.status(200).json({

            message: (`I was way lazy to change the default `),
            data:result
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

// עדכון סטוס של ביפר ספציפי 
router.put(`/:id/status`, async (req:Request, res:Response):Promise<void> => {
    try { 
        const id:number = + req.params.id
        const result = await BeeperService.apdateStatusById(req.body, id)
        res.status(202).json({
            data:result
        })
    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
        })       
    }
})

// מחיקת ביפר ספציפי by id
router.delete(`/:id`, async (req:Request, res:Response):Promise<void> => {
    try {
        const id:number = + req.params.id
        const result = await BeeperService.deleteBeeperById(id)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:result
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

export default router