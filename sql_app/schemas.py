from typing import List
from pydantic import BaseModel

class LivraisonBase(BaseModel):
    nomBoutique: str
    numCollier: int
    pointDepart: str
    pointArriver: str
    dimension: str
    conservation: str
    poids: int

class Livraison(LivraisonBase):
    id: int
    
    class config :
        orm_mode = True
        
class PaginatedLivraison(BaseModel):
    limit: int
    offset: int
    data: List[Livraison]