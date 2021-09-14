import { Subject } from "rxjs/Subject";

export class AppareilService {

  appareilSubject = new Subject<any[]>();
    private appareils = [
        {
          id:1,
          name:"machine a laver",
          status: "allume"
        },
        {
          id:2,
          name:"television",
          status: "allume"
        },
        {
          id:3,
          name:"ordinateur",
          status: "eteint"
        }
      ];

    emitAppareilSubject(){
      this.appareilSubject.next(this.appareils.slice());
    }
    
    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allume';
        }
        this.emitAppareilSubject();
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = 'eteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index:number){
        this.appareils[index].status = 'allume';
        this.emitAppareilSubject();
    }
    
    switchOffOne(index:number){
        this.appareils[index].status = 'eteint';
        this.emitAppareilSubject;
    }

    getAppareilById(id:number){
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }
}