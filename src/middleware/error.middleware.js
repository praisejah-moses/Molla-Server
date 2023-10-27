export default async function HandleErrors(error,req,res,next) {
  return res.status(error.statusCode || 500 ).json({
    status:error.statusCode || 500,
    message:error.message
  })
}