import { RESTDataSource } from "@apollo/datasource-rest";
import { CreateHistorialInput, Historial,Search,CreateSearchInput,UserDays, UserRecord } from "../types";

export class HistorialAPI extends RESTDataSource {
  
  baseURL = "http://historial-ms:3006/";

    getHistorial(userId :String): Promise<Historial[]> {
      return this.get<Historial[]>("api/consumption-history/"+userId+"/all");
    }
    getHistorialByDay(data: UserDays): Promise<Historial[]> {
      return this.get<Historial[]>("api/consumption-history/"+data.uid+"/"+data.days);
    }
    createHistorial(historial: CreateHistorialInput): Promise<any> {
            return this.post<any>("/api/consumption-history/"+historial.uid, {
              body: historial
            });
        }
    getSearch(userId :String): Promise<Search[]> {
      return this.get<Search[]>("api/search-history/"+userId);
    }
    getSearchByDay(data: UserDays): Promise<Search[]> {
      return this.get<Search[]>("api/search-history/"+data.uid+"/"+data.days);
    }
    getSearchlimit(userId :String): Promise<Search[]> {
      return this.get<Search[]>("api/search-history/"+userId+"/limit");
    }
    AddSearch(search: CreateSearchInput): Promise<any> {
      return this.post<any>("/api/search-history/"+search.uid, {
        body: search
      });
    }
    deleteHistorial(data:UserRecord): Promise<any> {
      return this.delete<any>(`/api/consumption-history/${data.uid}/${data.recordId}`);
    }
    deleteSearch(data:UserRecord): Promise<any> {
      return this.delete<any>(`/api/search-history/${data.uid}/${data.recordId}`);
    }
}