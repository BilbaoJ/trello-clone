import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { Board } from '@shared/models/board.model';
import { Card } from '@shared/models/card.model';
import { Colors } from '@shared/models/colors.model';
import { List } from '@shared/models/list.model';
import { backGroundColor, logoColor } from '@shared/state/navbar';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private http: HttpClient = inject(HttpClient);
  apiUrl: string = environment.API_URL;
  bufferSpace: number = 65535;

  getBoard(id: Board['id']){
    return this.http.get<Board>(`${this.apiUrl}/api/v1/boards/${id}`, {
      context : checkToken()
    });
  }

  createBoard(title: string, backgroundColor: Colors){
    return this.http.post<Board>(`${this.apiUrl}/api/v1/boards`, {
      title,
      backgroundColor
    }, {
      context: checkToken()
    });
  }

  getPosition(cards: Card[], currentIndex: number){
    if (cards.length === 1) {
      return this.bufferSpace;
    }
    if (cards.length > 1 && currentIndex === 0) {
      const onTopPosition =  cards[1].position;
      return onTopPosition / 2;
    }
    const lastIndex = cards.length - 1;
    if (cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex) {
      const prevPosition = cards[currentIndex-1].position;
      const nextPosition = cards[currentIndex+1].position;
      return (prevPosition + nextPosition) / 2;
    }
    if (cards.length > 1 && currentIndex === lastIndex) {
      const onBottomPosition = cards[lastIndex - 1].position;
      return onBottomPosition + this.bufferSpace;
    }
    return 0;

  }

  getPositionNewItem(items: Card[] | List[]){
    if (items.length === 0) {
      return this.bufferSpace;
    }
    const lastIndex = items.length - 1;
    const onBottomPosition = items[lastIndex].position;
    return onBottomPosition + this.bufferSpace;
  }

  setBackGroundColor(color: Colors){
    backGroundColor.set(color);
  }

  setLogoColor(color: 'neutral' | 'white'){
    logoColor.set(color);
  }
}
