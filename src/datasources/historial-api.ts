import { RESTDataSource } from "@apollo/datasource-rest";
import { CreateHistorialInput, Search, CreateSearchInput, UserDays, UserRecord, HistorialResponse, DeleteHistorialResponse } from "../types";

export class HistorialAPI extends RESTDataSource {
  
  baseURL = "http://historial-ms:3006/";

    async getAllHistorialConsumption(userId :String): Promise<HistorialResponse> {
      return await this.get<HistorialResponse>("api/consumption-history/"+userId+"/all");
    }
    getHistorialConsumptionByDay(uid: string, days: number): Promise<HistorialResponse> {
      return this.get<HistorialResponse>(`api/consumption-history/${uid}/${days ?? 1}`);
    }
    addHistorialConsumption(historial: CreateHistorialInput): Promise<any> {
      return this.post<any>("/api/consumption-history/"+historial.uid, {
        body: historial
      });
    }
    getHistorialSearchWithLimit(uid:string,limit:number): Promise<HistorialResponse> {
      return this.get<HistorialResponse>(`api/search-history/${uid}/limit`, {
        params: { limit: String(limit) }
      });
    }
    getHistorialSearchByDay(uid:string, days:number): Promise<Search[]> {
      console.log("🚀 ~ HistorialAPI ~ getHistorialSearchByDay ~ api/search-history", "api/search-history/"+uid+"/"+days)
      return this.get<Search[]>(`api/search-history/${uid}/${days}`);
    }
    getAllHistorialSearch(userId :String): Promise<Search[]> {
      console.log("🚀 ~ HistorialAPI ~ getAllHistorialSearch ~ api/search-history/", "api/search-history/"+userId)
      return this.get<Search[]>(`api/search-history/${userId}`);
    }
    addHistorialSearch(search: CreateSearchInput): Promise<any> {
      return this.post<any>("/api/search-history/"+search.uid, {
        body: search
      });
    }
    deleteHistorialConsumption(uid:string,recordId:string): Promise<DeleteHistorialResponse> {
      return this.delete<DeleteHistorialResponse>(`/api/consumption-history/${uid}/${recordId}`);
    }
    deleteHistorialSearch(uid:string,recordId:string): Promise<DeleteHistorialResponse> {
      return this.delete<DeleteHistorialResponse>(`/api/search-history/${uid}/${recordId}`);
    }
}