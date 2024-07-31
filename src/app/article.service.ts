
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { ApiResponsive, Article } from './Article';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class DataService {
// //   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// //   constructor(private http: HttpClient) {}
// //   ListeAllArticle():Observable<ApiResponsive <Article[]>>{
// //     return this.http.get<ApiResponsive <Article[]>>(`${this.apiUrl}`)
// //   }

// //   getArticle(id:number):Observable<ApiResponsive <Article>>{
// //     return this.http.get<ApiResponsive <Article>>(`${this.apiUrl}/${id}`)


// //   }

// //   createArticle(article:Article):Observable<ApiResponsive <Article>>{
// //     return this.http.post<ApiResponsive <Article>>(`${this.apiUrl}`,article)


// //   }

// //   updateArticle(id:number,article:Article){
// //     return this.http.put<ApiResponsive <Article>>(`${this.apiUrl}/${id}`,article)

// //   }

// //   detailArticle(id:number):Observable<any>{
// //     return this.http.delete(`${this.apiUrl}/${id}`)
// //   }

  

 

// // }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ApiResponse, Article } from './Article';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//   constructor(private http: HttpClient) {}

//   listAllArticles(): Observable<ApiResponse<Article[]>> {
//     return this.http.get<ApiResponse<Article[]>>(`${this.apiUrl}`);
//   }

//   getArticle(id: number): Observable<ApiResponse<Article>> {
//     return this.http.get<ApiResponse<Article>>(`${this.apiUrl}/${id}`);
//   }

//   createArticle(article: Article): Observable<ApiResponse<Article>> {
//     return this.http.post<ApiResponse<Article>>(`${this.apiUrl}`, article);
//   }

//   updateArticle(id: number, article: Article): Observable<ApiResponse<Article>> {
//     return this.http.put<ApiResponse<Article>>(`${this.apiUrl}/${id}`, article);
//   }

//   deleteArticle(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }

  updateArticle(id: number, article: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, article);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
