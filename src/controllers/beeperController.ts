import exp, { Router,Request,Response } from 'express'


const router :Router = exp.Router()


//יצירת ביפר
router.post(`/status/:status`, async (req:Request, res:Response):Promise<void> => {
    try {
        //const result = await beeperService.GetPostByContext(context)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:undefined
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
        //const result = await beeperService.GetPostByContext(context)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:undefined
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
        //const result = await beeperService.GetPostByContext(context)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:undefined
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
        //const result = await beeperService.GetPostByContext(context)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:undefined
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

// עדכון סטוס של ביפר ספציפי לנקסט
router.put(`/:id/status`, async (req:Request, res:Response):Promise<void> => {
    try {
        //const result = await beeperService.GetPostByContext(context)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:undefined
        })

    } catch (error) {
        res.status(400).json({
            err: true,
            message: (error),
            data:null
        })       
    }
})

// מחיקת ביפר ספציפי by id
router.delete(`/:id`, async (req:Request, res:Response):Promise<void> => {
    try {
        //const result = await beeperService.GetPostByContext(context)
        res.status(200).json({
            err: false,
            message: (`I was way lazy to change the default `),
            data:undefined
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