import { ApiError } from "./ApiError.js"
// // const asyncHandler = (fn) => {() => {}}  
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//            await fn(req, res, next)
//     } catch(error){
//         res.status(err.code || 500).json({
//             successs: false,
//             message: err.message
//         })
//     }
// }


const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}  

export {asyncHandler}