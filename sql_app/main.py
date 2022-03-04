from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

# Dependency
def get_db():
    livraison = SessionLocal()
    try:
        yield livraison
    finally: 
        livraison.close()


@app.get("/")
async def livraison():
    return {"message": "Hello World"}

# Livraison List
@app.get("/livraisons")
def get_livraison(skip: int = 0, limit: int = 100, session: Session = Depends(get_db)):
    livraison_list = crud.get_list_livraison(session, skip=skip, limit=limit)
    if livraison_list:
        return livraison_list
    raise HTTPException(404, f"There is no delivery request")

# add livraison
@app.post("/livraison")
def create_livraison(livraison: schemas.LivraisonBase,session: Session = Depends(get_db)):
    try:
        return crud.create_livraison(session, livraison)
    except:
        raise HTTPException(400, "Something wrong!")

# update livraison
@app.put("/update_livraison/{livraison_id}")
def update_livraison(livraison_id:int, update: schemas.LivraisonBase, session: Session = Depends(get_db)):
    try:
        crud.update_livraison(session, livraison_id, update)
    except:
        raise HTTPException(404, f"There is no delivery request")

# delete livraison
@app.delete("/delete_livraion/{livraison_id}")
def delete_livraison(livraison_id:int, session: Session = Depends(get_db)):
    try:
        return crud.delete_livraison(session, livraison_id)
    except:
        raise HTTPException(404, f"There is no delivery request")