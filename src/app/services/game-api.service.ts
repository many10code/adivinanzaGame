import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
const _BASE_URL = environment.base_url;
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameApiService {
  constructor(private http: HttpClient) {}

  async login(usuario: string, password: string): Promise<any> {
    const response = await lastValueFrom(
      this.http.post<{ message: string; token: string }>(`${_BASE_URL}/login`, {
        usuario,
        password,
      })
    );
    localStorage.setItem('token', response.token);

    return response;
  }

  async register(
    correo: string,
    usuario: string,
    password: string
  ): Promise<any> {
    return await lastValueFrom(
      this.http.post(`${_BASE_URL}/register`, { correo, usuario, password })
    );
  }

  async start(): Promise<any> {
    return await this.http.post(`${_BASE_URL}/start`, {}).toPromise();
  }

  async guess(numero: number): Promise<any> {
    return await this.http.post(`${_BASE_URL}/guess`, { numero }).toPromise();
  }

  async restart(): Promise<any> {
    return await this.http.post(`${_BASE_URL}/restart`, {}).toPromise();
  }

  async status(): Promise<any> {
    return await this.http.get(`${_BASE_URL}/status`, {}).toPromise();
  }

  async leaderboard(): Promise<any> {
    return await this.http.get(`${_BASE_URL}/leaderboard`).toPromise();
  }

  async statistics(): Promise<any> {
    return await this.http.get(`${_BASE_URL}/statistics`, {}).toPromise();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
