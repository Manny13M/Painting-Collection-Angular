import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpressMongoService {

  constructor(private http: HttpClient) { }

  getPaintingById(id: string) {
    return this.http.get(`http://127.0.0.1:8887/paintings/get/${id}`);
  }
  
  getAllPaintings() {
    return this.http.get('http://127.0.0.1:8887/paintings/getAll/');
  }

  savePainting(params: any) {
    return this.http.post('http://127.0.0.1:8887/paintings/save/', { params });
  }

  saveAllPaintings(params: any) {
    return this.http.post('http://127.0.0.1:8887/paintings/saveAll/', { params });
  }

  updatePainting(id: string, updateParams: any) {
    return this.http.put(`http://127.0.0.1:8887/paintings/update/${id}`, updateParams);
  }

  deletePaintingById(id: string) {
    return this.http.delete(`http://127.0.0.1:8887/paintings/delete/${id}`);
  }

}
