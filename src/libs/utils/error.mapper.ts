export async function CatchErrorMapper(error: Error | any){
    return Promise.reject(error)
}