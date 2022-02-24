from fastapi import FastAPI

app = FastAPI()


@app.get("/livraison")
async def livraison():
    return {"message": "Hello World"}