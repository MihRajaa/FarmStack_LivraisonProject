from sqlalchemy import  Column,  Integer, String

from .database import Base

class Livraison(Base):
    __tablename__ = "Livraison"

    id = Column(Integer, primary_key=True, index=True)
    nomBoutique = Column(String)
    numCollier = Column(Integer)
    pointDepart = Column(String)
    pointArriver = Column(String)
    dimension = Column(String)
    conservation = Column(String)
    poids = Column(Integer)