from http.client import HTTPException
from typing import List
from fastapi import Query
from sqlalchemy.orm import Session

from . import models, schemas

LIVRAISON = models.Livraison
LIVRAISON_BASE = schemas.LivraisonBase

# get list livraison
def get_list_livraison (session : Session, skip : int = 0, limit: int = 100) ->List[models.Livraison]:
    return session.query(models.Livraison).offset(skip).limit(limit).all()

# create new livraison
def create_livraison(session : Session, livraison: LIVRAISON_BASE) -> models.Livraison:
    livraison_search = session.query(LIVRAISON).filter(LIVRAISON.numCollier == livraison.numCollier).first()
    
    if livraison_search is not None:
        raise HTTPException('Collier exists')
    
    new_livraison = models.Livraison(**livraison.dict())
    session.add(new_livraison)
    session.commit()
    session.refresh(new_livraison)
    return new_livraison

# update livraison
def update_livraison(session: Session, _id: int, livraison: LIVRAISON_BASE) -> LIVRAISON:
    req_livraison = session.query(LIVRAISON).get(_id)
    
    if req_livraison is None:
        raise HTTPException(404, f"Delivery request not found")
    
    req_livraison.nomBoutique = livraison.nomBoutique
    req_livraison.numCollier = livraison.numCollier
    req_livraison.pointDepart = livraison.pointDepart
    req_livraison.pointArriver = livraison.pointArriver
    req_livraison.dimension = livraison.dimension
    req_livraison.conservation = livraison.conservation
    req_livraison.poids = livraison.poids
    
    session.commit()
    session.refresh(req_livraison)
    
    return req_livraison

# delete livraison
def delete_livraison(session: Session, _id: int):
    req_livraison = session.query(LIVRAISON).get(_id)
    if req_livraison is None:
        raise HTTPException(404, f"Delivery request not found")
    session.delete(req_livraison)
    session.commit()
    return 